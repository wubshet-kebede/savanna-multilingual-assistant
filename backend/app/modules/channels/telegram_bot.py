import os
import sys
import re
import html
import asyncio
from typing import Optional
from app.core.config import settings
from app.core.database import SessionLocal
from app.modules.tutor.service import TutorService
from app.modules.tutor.schemas import TutorChatRequest
from app.modules.career.service import CareerService
from app.modules.escalate.service import EscalateService

# In-memory user preferences (in production, stored in PostgreSQL/Redis)
USER_PREFERENCES: dict[int, dict] = {}

def get_user_pref(user_id: int) -> dict:
    if user_id not in USER_PREFERENCES:
        USER_PREFERENCES[user_id] = {
            "lang": "en",
            "simple_mode": False
        }
    return USER_PREFERENCES[user_id]

def render_telegram_html(text: str) -> str:
    """
    Sanitizes markdown and converts it to Telegram-compliant HTML tags.
    Escapes HTML entities so the parser never throws BadRequest errors.
    """
    if not text:
        return ""
    # 1. Escape HTML special characters first to avoid entity parse errors
    escaped = html.escape(text)

    # 2. Convert markdown bold/italic combinations: ***text*** -> <b><i>text</i></b>
    escaped = re.sub(r'\*\*\*(.+?)\*\*\*', r'<b><i>\1</i></b>', escaped)

    # 3. Convert markdown bold: **text** -> <b>text</b>
    escaped = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', escaped)

    # 4. Convert markdown italic: *text* or _text_ -> <i>text</i>
    escaped = re.sub(r'(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)', r'<i>\1</i>', escaped)
    escaped = re.sub(r'(?<!_)\_(?!_)(.+?)(?<!_)\_(?!_)', r'<i>\1</i>', escaped)

    # 5. Convert inline code: `code` -> <code>code</code>
    escaped = re.sub(r'`(.+?)`', r'<code>\1</code>', escaped)

    # 6. Convert bullet lists at line starts: * or - -> •
    escaped = re.sub(r'(?m)^[\s]*[\*\-]\s+', '• ', escaped)

    # 7. Convert markdown headings: ### Header -> <b>Header</b>
    escaped = re.sub(r'(?m)^#{1,6}\s*(.+?)$', r'<b>\1</b>', escaped)

    return escaped

def process_student_query(text: str, lang: str = "en", simple_mode: bool = False) -> dict:
    """
    Direct bridge to the exact same RAG pipeline used by the web assistant.
    Enforces the 0.78 threshold, hybrid title-relevance re-ranking, and Gemini 3.8.
    """
    db = SessionLocal()
    try:
        req = TutorChatRequest(
            message=text,
            language=lang,
            partner_id="savanna",
            course_id="VA-1",
            simple_mode=simple_mode
        )
        return TutorService.chat(db, req)
    finally:
        db.close()

def format_telegram_response(rag_result: dict, lang: str = "en") -> tuple[str, list[list[dict]]]:
    """
    Formats the RAG answer with clean Telegram typography, verifiable course citations,
    and interactive quick-action buttons.
    """
    raw_reply = rag_result.get("reply", "")
    safe_reply_content = render_telegram_html(raw_reply)
    citation = rag_result.get("citation")
    engine = rag_result.get("engine", "offline-rag")
    engine_label = "Gemini 3.8 AI" if "gemini" in engine else "Savanna Vector Store"

    text_parts = [
        "🎓 <b>Savanna AI Tutor</b>\n",
        safe_reply_content,
        ""
    ]

    if citation:
        title = html.escape(str(citation.get("title", "Course Material")))
        target_id = html.escape(str(citation.get("targetId", "")))
        text_parts.append("━━━━━━━━━━━━━━━━━━━━━━")
        text_parts.append(f"📌 <b>Course Source:</b> {title}")
        if target_id:
            text_parts.append(f"🔗 <b>Lesson Anchor:</b> <code>{target_id}</code>")
        text_parts.append(f"⚡ <b>Engine:</b> {engine_label}")

    formatted_text = "\n".join(text_parts)

    # Interactive keyboard buttons for Telegram
    buttons = [
        [
            {"text": "🆘 Talk to Mentor", "callback_data": "action_mentor"},
            {"text": "💼 View Inclusive Jobs", "callback_data": "action_jobs"}
        ],
        [
            {"text": "🌐 Language", "callback_data": "action_lang"},
            {"text": "♿ Accommodations", "callback_data": "action_acc"}
        ]
    ]

    return formatted_text, buttons


# ====================================================================
# Telegram Handlers (python-telegram-bot v20+)
# ====================================================================
try:
    from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, BotCommand
    from telegram.constants import ParseMode, ChatAction
    from telegram.ext import (
        Application,
        CommandHandler,
        MessageHandler,
        CallbackQueryHandler,
        ContextTypes,
        filters
    )
    TELEGRAM_LIB_AVAILABLE = True
except ImportError:
    TELEGRAM_LIB_AVAILABLE = False

if TELEGRAM_LIB_AVAILABLE:
    BOT_COMMANDS = [
        BotCommand("start", "👋 Start tutoring & curriculum overview"),
        BotCommand("lang", "🌐 Switch language (Amharic, Oromo, Tigrinya, Arabic...)"),
        BotCommand("jobs", "💼 Browse verified inclusive jobs & accommodations"),
        BotCommand("mentor", "🆘 Escalate to a live human mentor"),
        BotCommand("simple", "♿ Toggle cognitive plain-language mode"),
        BotCommand("help", "ℹ️ How vector grounding & citations work")
    ]
else:
    BOT_COMMANDS = []


def create_inline_keyboard(buttons_spec: list[list[dict]]) -> Optional["InlineKeyboardMarkup"]:
    if not TELEGRAM_LIB_AVAILABLE:
        return None
    keyboard = []
    for row in buttons_spec:
        keyboard.append([
            InlineKeyboardButton(text=btn["text"], callback_data=btn["callback_data"])
            for btn in row
        ])
    return InlineKeyboardMarkup(keyboard)


async def safe_reply(message_or_query, text: str, reply_markup=None):
    """
    Safely delivers the response using HTML mode, falling back to plain text
    if any entity parser issue occurs.
    """
    try:
        if hasattr(message_or_query, "reply_text"):
            return await message_or_query.reply_text(
                text,
                parse_mode=ParseMode.HTML,
                reply_markup=reply_markup,
                disable_web_page_preview=True
            )
        elif hasattr(message_or_query, "message") and hasattr(message_or_query.message, "reply_text"):
            return await message_or_query.message.reply_text(
                text,
                parse_mode=ParseMode.HTML,
                reply_markup=reply_markup,
                disable_web_page_preview=True
            )
    except Exception as e:
        plain_text = re.sub(r'<[^>]+>', '', text)
        if hasattr(message_or_query, "reply_text"):
            return await message_or_query.reply_text(
                plain_text,
                reply_markup=reply_markup,
                disable_web_page_preview=True
            )
        elif hasattr(message_or_query, "message") and hasattr(message_or_query.message, "reply_text"):
            return await message_or_query.message.reply_text(
                plain_text,
                reply_markup=reply_markup,
                disable_web_page_preview=True
            )


async def start_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    first_name = html.escape(user.first_name) if user and user.first_name else "Student"

    welcome_text = (
        f"👋 <b>Welcome, {first_name}!</b>\n\n"
        "I am your <b>Savanna AI Tutor</b>. I am connected directly to your official "
        "course materials and provide strictly grounded answers with verified citations.\n\n"
        "💬 <b>You can ask me questions like:</b>\n"
        "• <i>What is the role of Artificial Intelligence in virtual assistance?</i>\n"
        "• <i>What is shaping the future of VA work?</i>\n"
        "• <i>What skills do clients value most?</i>\n\n"
        "🌍 <b>Multilingual Support:</b> Type in English, አማርኛ, Afaan Oromoo, ትግርኛ, Soomaali, or العربية.\n\n"
        "<b>Available Commands:</b>\n"
        "/jobs - Browse verified inclusive jobs with certified accommodations\n"
        "/mentor - Escalate to a human coach with one tap\n"
        "/lang - Switch your preferred language\n"
        "/simple - Toggle plain-language Simple Mode (WCAG 3.1.5)\n"
        "/help - How the grounding and citations work"
    )

    quick_prompts = [
        [
            {"text": "🤖 AI in VA Work", "callback_data": "prompt_ai"},
            {"text": "📈 Future of VA Work", "callback_data": "prompt_future"}
        ],
        [
            {"text": "💼 Inclusive Jobs", "callback_data": "action_jobs"},
            {"text": "🌐 Change Language", "callback_data": "action_lang"}
        ]
    ]

    await safe_reply(
        update.message,
        welcome_text,
        reply_markup=create_inline_keyboard(quick_prompts)
    )


async def help_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    help_text = (
        "ℹ️ <b>How the Savanna RAG Tutor Works</b>\n\n"
        "1. <b>Zero Hallucinations:</b> Every response is grounded in the Savanna "
        "curriculum using high-dimensional vector embeddings (pgvector) and hybrid title re-ranking.\n\n"
        "2. <b>Verifiable Citations:</b> Each answer includes the exact module heading "
        "and section anchor so you can verify the content in your learning dashboard.\n\n"
        "3. <b>Commands:</b>\n"
        "• /jobs - View remote roles matching your training\n"
        "• /mentor - Request human mentor assistance\n"
        "• /lang - Change preferred response language\n"
        "• /simple - Toggle cognitive plain-language mode\n\n"
        "Simply type your question to begin!"
    )
    await safe_reply(update.message, help_text)


async def jobs_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    jobs = CareerService.get_jobs("savanna")
    if not jobs:
        await safe_reply(update.message, "No jobs currently available for this cohort.")
        return

    job_lines = ["💼 <b>Verified Inclusive Job Opportunities:</b>\n"]
    for j in jobs[:3]:
        acc = j.get("accommodations", {})
        acc_tags = []
        if acc.get("screen_reader_certified"):
            acc_tags.append("🖥️ Screen Reader Certified")
        if acc.get("extended_test_time"):
            acc_tags.append("⏱️ Extended Test Time")
        if acc.get("camera_optional_interview"):
            acc_tags.append("📹 Camera Optional")

        acc_str = " | ".join(acc_tags) if acc_tags else "Accommodations upon request"

        job_lines.append(
            f"<b>{html.escape(j['title'])}</b> at <i>{html.escape(j['company'])}</i>\n"
            f"📍 {html.escape(j['location'])} · 💵 {html.escape(j.get('salary', 'Competitive'))}\n"
            f"♿ <b>Certified Accommodations:</b> {acc_str}\n"
            f"🎯 <b>Curriculum Alignment:</b> {html.escape(j.get('course_alignment', 'VA Foundations'))}\n"
        )

    await safe_reply(update.message, "\n".join(job_lines))


async def mentor_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    learner_id = f"tg_{user.id}" if user else "tg_unknown"
    res = EscalateService.dispatch_human_mentor(learner_id, "savanna", "VA-1", "en")

    msg = (
        f"🆘 <b>Human Mentor Alerted!</b>\n\n"
        f"<b>Assigned Mentor:</b> {html.escape(res['mentor_assigned'])}\n"
        f"<b>Session ID:</b> <code>{html.escape(res['session_id'])}</code>\n"
        f"<b>Status:</b> {html.escape(res['status'].title())}\n\n"
        "Your mentor has received your recent question context and will contact you directly."
    )
    await safe_reply(update.message, msg)


async def lang_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [
            {"text": "🇬🇧 English", "callback_data": "setlang_en"},
            {"text": "🇪🇹 አማርኛ (Amharic)", "callback_data": "setlang_am"}
        ],
        [
            {"text": "🟢 Afaan Oromoo", "callback_data": "setlang_om"},
            {"text": "🔵 ትግርኛ (Tigrinya)", "callback_data": "setlang_ti"}
        ],
        [
            {"text": "🇸🇴 Soomaali", "callback_data": "setlang_so"},
            {"text": "🇸🇦 العربية (Arabic)", "callback_data": "setlang_ar"}
        ]
    ]
    await safe_reply(
        update.message,
        "🌐 <b>Select your preferred learning language:</b>",
        reply_markup=create_inline_keyboard(keyboard)
    )


async def simple_mode_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    pref = get_user_pref(update.effective_user.id)
    pref["simple_mode"] = not pref["simple_mode"]
    status = "ON (Plain language explanations enabled)" if pref["simple_mode"] else "OFF (Standard technical detail)"
    await safe_reply(
        update.message,
        f"♿ <b>Cognitive Simple Mode (WCAG 3.1.5):</b> {status}"
    )


async def message_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not update.message or not update.message.text:
        return

    user_text = update.message.text.strip()
    user_id = update.effective_user.id
    pref = get_user_pref(user_id)

    # Indicate typing state while RAG generates answer
    try:
        await context.bot.send_chat_action(chat_id=update.effective_chat.id, action=ChatAction.TYPING)
    except Exception:
        pass

    # Query the RAG system asynchronously in worker thread
    rag_result = await asyncio.to_thread(
        process_student_query,
        user_text,
        pref["lang"],
        pref["simple_mode"]
    )

    formatted_text, buttons = format_telegram_response(rag_result, pref["lang"])

    await safe_reply(
        update.message,
        formatted_text,
        reply_markup=create_inline_keyboard(buttons)
    )


async def callback_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    data = query.data
    user_id = update.effective_user.id
    pref = get_user_pref(user_id)

    if data == "prompt_ai":
        try:
            await context.bot.send_chat_action(chat_id=update.effective_chat.id, action=ChatAction.TYPING)
        except Exception:
            pass
        res = await asyncio.to_thread(process_student_query, "What is the use of Artificial Intelligence in virtual assistance?", pref["lang"])
        text, btns = format_telegram_response(res, pref["lang"])
        await safe_reply(query, text, reply_markup=create_inline_keyboard(btns))

    elif data == "prompt_future":
        try:
            await context.bot.send_chat_action(chat_id=update.effective_chat.id, action=ChatAction.TYPING)
        except Exception:
            pass
        res = await asyncio.to_thread(process_student_query, "What is shaping the future of VA work?", pref["lang"])
        text, btns = format_telegram_response(res, pref["lang"])
        await safe_reply(query, text, reply_markup=create_inline_keyboard(btns))

    elif data == "action_jobs":
        jobs = CareerService.get_jobs("savanna")
        job_lines = ["💼 <b>Verified Inclusive Job Opportunities:</b>\n"]
        for j in jobs[:3]:
            acc = j.get("accommodations", {})
            acc_tags = []
            if acc.get("screen_reader_certified"):
                acc_tags.append("🖥️ Screen Reader Certified")
            if acc.get("extended_test_time"):
                acc_tags.append("⏱️ Extended Test Time")
            if acc.get("camera_optional_interview"):
                acc_tags.append("📹 Camera Optional")
            acc_str = " | ".join(acc_tags) if acc_tags else "Accommodations upon request"

            job_lines.append(
                f"<b>{html.escape(j['title'])}</b> at <i>{html.escape(j['company'])}</i>\n"
                f"📍 {html.escape(j['location'])} · 💵 {html.escape(j.get('salary', 'Competitive'))}\n"
                f"♿ <b>Certified Accommodations:</b> {acc_str}\n"
                f"🎯 <b>Curriculum Alignment:</b> {html.escape(j.get('course_alignment', 'VA Foundations'))}\n"
            )
        await safe_reply(query, "\n".join(job_lines))

    elif data == "action_mentor":
        learner_id = f"tg_{user_id}"
        res = EscalateService.dispatch_human_mentor(learner_id, "savanna", "VA-1", "en")
        msg = (
            f"🆘 <b>Human Mentor Alerted!</b>\n\n"
            f"<b>Assigned Mentor:</b> {html.escape(res['mentor_assigned'])}\n"
            f"<b>Session ID:</b> <code>{html.escape(res['session_id'])}</code>\n"
            f"<b>Status:</b> {html.escape(res['status'].title())}\n\n"
            "Your mentor has received your recent question context and will contact you directly."
        )
        await safe_reply(query, msg)

    elif data == "action_lang":
        keyboard = [
            [
                {"text": "🇬🇧 English", "callback_data": "setlang_en"},
                {"text": "🇪🇹 አማርኛ (Amharic)", "callback_data": "setlang_am"}
            ],
            [
                {"text": "🟢 Afaan Oromoo", "callback_data": "setlang_om"},
                {"text": "🔵 ትግርኛ (Tigrinya)", "callback_data": "setlang_ti"}
            ],
            [
                {"text": "🇸🇴 Soomaali", "callback_data": "setlang_so"},
                {"text": "🇸🇦 العربية (Arabic)", "callback_data": "setlang_ar"}
            ]
        ]
        await safe_reply(
            query,
            "🌐 <b>Select your preferred learning language:</b>",
            reply_markup=create_inline_keyboard(keyboard)
        )

    elif data.startswith("setlang_"):
        new_lang = data.replace("setlang_", "")
        pref["lang"] = new_lang
        lang_names = {
            "en": "English", "am": "አማርኛ", "om": "Afaan Oromoo",
            "ti": "ትግርኛ", "so": "Soomaali", "ar": "العربية"
        }
        await safe_reply(
            query,
            f"✅ Language updated to <b>{lang_names.get(new_lang, new_lang)}</b>. Future answers will be provided in this language."
        )

    elif data == "action_acc":
        await safe_reply(
            query,
            "♿ <b>Standardized Interview Accommodations:</b>\n\n"
            "Savanna partners guarantee non-discriminatory interviews. Available certified accommodations include:\n"
            "• Screen Reader Compatible Testing (NVDA / TalkBack)\n"
            "• 25% - 50% Extended Evaluation Time\n"
            "• Camera-Optional or Written Q&A Format\n\n"
            "You can request these with one click in the web Career tab or through /jobs."
        )


async def unknown_command_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not update.message or not update.message.text:
        return
    cmd = update.message.text.strip()
    msg = (
        f"❓ Unrecognized command: <code>{html.escape(cmd)}</code>\n\n"
        "<b>Available Commands:</b>\n"
        "• /start - Start tutoring & overview\n"
        "• /lang - Switch language (Amharic, Oromo, Tigrinya, Arabic, English)\n"
        "• /jobs - View inclusive jobs & accommodations\n"
        "• /mentor - Alert a human coach\n"
        "• /simple - Plain language mode (WCAG 3.1.5)\n"
        "• /help - Grounding & citations guide\n\n"
        "💡 <i>Tip: Tap the <b>Menu (☰)</b> button next to the input box!</i>"
    )
    buttons = [
        [
            {"text": "🌐 Choose Language", "callback_data": "action_lang"},
            {"text": "💼 Inclusive Jobs", "callback_data": "action_jobs"}
        ],
        [
            {"text": "🆘 Human Mentor", "callback_data": "action_mentor"}
        ]
    ]
    await safe_reply(update.message, msg, reply_markup=create_inline_keyboard(buttons))


def build_telegram_application(token: str) -> Optional["Application"]:
    if not TELEGRAM_LIB_AVAILABLE:
        print("[Telegram Bot] python-telegram-bot is not installed.", flush=True)
        return None

    app = Application.builder().token(token).build()

    app.add_handler(CommandHandler(["start", "restart"], start_handler))
    app.add_handler(CommandHandler(["help", "info", "faq"], help_handler))
    app.add_handler(CommandHandler(["jobs", "job", "career", "careers"], jobs_handler))
    app.add_handler(CommandHandler(["mentor", "coach", "human", "escalate"], mentor_handler))
    app.add_handler(CommandHandler(["lang", "language", "languages", "lnag"], lang_handler))
    app.add_handler(CommandHandler(["simple", "easy", "plain"], simple_mode_handler))
    app.add_handler(CallbackQueryHandler(callback_handler))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, message_handler))
    app.add_handler(MessageHandler(filters.COMMAND, unknown_command_handler))

    return app


# ====================================================================
# Standalone CLI Demo & Interactive Test Harness
# ====================================================================
def run_cli_simulation():
    print("=" * 65)
    print("🤖 SAVANNA AI TUTOR - TELEGRAM BOT INTERACTIVE SIMULATOR")
    print("=" * 65)
    print("Connected to RAG system: pgvector + Gemini 3.8 / LLMRouter")
    print("Type a student question or command (/start, /jobs, /mentor, /quit):\n")

    current_lang = "en"
    simple_mode = False

    while True:
        try:
            user_input = input("Student > ").strip()
            if not user_input:
                continue
            if user_input.lower() in ["/quit", "exit", "quit"]:
                print("Exiting simulator.")
                break
            if user_input == "/start":
                print("\n[Telegram Bot Reply (HTML)]")
                print("👋 Welcome! Ask me any question from your course curriculum.")
                print("[Buttons]: [🤖 AI in VA Work] [📈 Future of VA Work] [💼 Inclusive Jobs]\n")
                continue
            if user_input == "/jobs":
                jobs = CareerService.get_jobs("savanna")
                print("\n[Telegram Bot Reply (HTML)]")
                print(f"💼 Found {len(jobs)} verified inclusive jobs:")
                for j in jobs:
                    print(f"  • {j['title']} at {j['company']} ({j.get('salary', '')})")
                print()
                continue
            if user_input == "/mentor":
                res = EscalateService.dispatch_human_mentor("cli_demo", "savanna", "VA-1", current_lang)
                print(f"\n[Telegram Bot Reply]: 🆘 Human Mentor Alerted: {res['mentor_assigned']} (Session: {res['session_id']})\n")
                continue

            print("\n... Generating grounded RAG answer ...")
            res = process_student_query(user_input, current_lang, simple_mode)
            formatted, buttons = format_telegram_response(res, current_lang)
            print("\n[Telegram Bot Reply (HTML)]")
            print(formatted)
            print("\n[Inline Keyboard Buttons]:")
            for row in buttons:
                print("  " + " | ".join(f"[{b['text']}]" for b in row))
            print("\n" + "-" * 65 + "\n")
        except (KeyboardInterrupt, EOFError):
            print("\nExiting simulator.")
            break


async def run_telegram_bot_service():
    token = settings.TELEGRAM_BOT_TOKEN or os.getenv("TELEGRAM_BOT_TOKEN", "")
    if not token or token.strip() in ["", "YOUR_TELEGRAM_BOT_TOKEN_HERE"]:
        print("[Telegram Bot] No TELEGRAM_BOT_TOKEN set in .env. Bot polling idle.", flush=True)
        return

    print(f"[Telegram Bot] Starting live Telegram polling on token {token[:6]}...", flush=True)
    app = build_telegram_application(token)
    if app:
        await app.initialize()
        await app.start()
        try:
            await app.bot.set_my_commands(BOT_COMMANDS)
            print("[Telegram Bot] Registered interactive commands menu with Telegram.", flush=True)
        except Exception as e:
            print(f"[Telegram Bot] Notice: set_my_commands error: {e}", flush=True)
        await app.updater.start_polling(drop_pending_updates=True)
        print(f"[Telegram Bot] Polling started successfully for @Savanna_AI_Tutor_Bot!", flush=True)
        try:
            while True:
                await asyncio.sleep(3600)
        except asyncio.CancelledError:
            print("[Telegram Bot] Polling task cancelled, shutting down...", flush=True)
            await app.updater.stop()
            await app.stop()
            await app.shutdown()


if __name__ == "__main__":
    if "--test" in sys.argv or "--demo" in sys.argv:
        run_cli_simulation()
    else:
        token = settings.TELEGRAM_BOT_TOKEN or os.getenv("TELEGRAM_BOT_TOKEN", "")
        if token and token.strip() not in ["", "YOUR_TELEGRAM_BOT_TOKEN_HERE"]:
            app = build_telegram_application(token)
            if app:
                print(f"[Telegram Bot] Launching standalone polling on token {token[:6]}...", flush=True)
                app.run_polling(drop_pending_updates=True)
        else:
            run_cli_simulation()
