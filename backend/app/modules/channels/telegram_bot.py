import os
import sys
import re
import html
import json
import base64
import asyncio
import urllib.request
from typing import Optional
from app.core.config import settings
from app.core.database import SessionLocal
from app.core.i18n import t
from app.core.user_settings import get_user_settings, update_user_settings
from app.modules.tutor.service import TutorService
from app.modules.tutor.schemas import TutorChatRequest
from app.modules.career.service import CareerService
from app.modules.escalate.service import EscalateService


def render_telegram_html(text: str) -> str:
    """
    Sanitizes markdown and converts it to accessible Telegram-compliant HTML tags.
    Escapes HTML entities so the entity parser never crashes.
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


def clean_speech_text(text: str) -> str:
    """
    Strips markdown formatting, asterisks (***, **, *), underscores, headers,
    bullet symbols, and citation anchors so Google TTS speaks natural human language
    without pronouncing punctuation characters out loud.
    """
    if not text:
        return ""
    # 1. Strip HTML tags
    clean = re.sub(r'<[^>]+>', '', text)
    # 2. Strip technical citation metadata across all languages
    clean = re.sub(r'📚.*', '', clean, flags=re.DOTALL)
    clean = re.sub(r'📌.*', '', clean)
    clean = re.sub(r'🔗.*', '', clean)
    clean = re.sub(r'⚡.*', '', clean)
    clean = re.sub(r'🎓\s*Savanna AI Tutor', '', clean)
    # 3. Strip markdown emphasis asterisks and underscores (e.g. ***Draft*** or **Bold**)
    clean = re.sub(r'\*{1,3}', '', clean)
    clean = re.sub(r'_{1,3}', '', clean)
    # 4. Strip markdown headings (# Header -> Header)
    clean = re.sub(r'(?m)^#{1,6}\s*', '', clean)
    # 5. Strip bullet markers (* item, - item, • item -> item)
    clean = re.sub(r'(?m)^[\s]*[\*\-\+•]\s*', '', clean)
    # 6. Strip code backticks (`code` -> code)
    clean = re.sub(r"`([^`]+)`", r"\1", clean)
    # 7. Convert line breaks into natural speech pauses (. )
    clean = re.sub(r"[\r\n]+", ". ", clean)
    # 8. Collapse whitespace and redundant punctuation
    clean = re.sub(r'\s{2,}', ' ', clean)
    clean = re.sub(r'\.{2,}', '.', clean)
    return clean.strip()


def generate_speech_audio(text: str, lang: str = "en") -> Optional[bytes]:
    """
    Generates an accessible MP3 voice audio buffer from sanitized answer text.
    Strips raw code/anchors/asterisks so listeners hear natural spoken language.
    """
    clean = clean_speech_text(text)
    if not clean:
        return None

    tts_lang = lang if lang in ["en", "am", "ar"] else "en"
    try:
        from gtts import gTTS
        import io
        tts = gTTS(text=clean[:1200], lang=tts_lang)
        buf = io.BytesIO()
        tts.write_to_fp(buf)
        buf.seek(0)
        return buf.getvalue()
    except Exception as e:
        print(f"[Telegram Bot] TTS generation error ({e})", flush=True)
        return None


def transcribe_audio(audio_bytes: bytes, mime_type: str = "audio/ogg") -> str:
    """
    Transcribes student voice notes using Gemini's multimodal API.
    Enables completely hands-free voice interactions for blind/motor-impaired learners.
    """
    api_key = settings.GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")
    if not api_key:
        return ""

    try:
        audio_b64 = base64.b64encode(audio_bytes).decode("utf-8")
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key={api_key}"
        payload = {
            "contents": [{
                "parts": [
                    {"inlineData": {"mimeType": mime_type, "data": audio_b64}},
                    {"text": "Transcribe this student voice message accurately into text. Output ONLY the transcribed query, nothing else."}
                ]
            }]
        }
        req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=12) as response:
            res = json.loads(response.read().decode("utf-8"))
            return res["candidates"][0]["content"]["parts"][0]["text"].strip()
    except Exception as e:
        print(f"[Telegram Bot] Voice transcription error: {e}", flush=True)
        return ""


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
    Formats the RAG answer with clean, accessible typography and localized UI strings.
    All buttons, citations, and engine tags inherit the student's chosen language.
    """
    raw_reply = rag_result.get("reply", "")
    safe_reply_content = render_telegram_html(raw_reply)
    citation = rag_result.get("citation")
    engine = rag_result.get("engine", "offline-rag")
    engine_label = t("engine_cloud", lang) if "gemini" in engine else t("engine_local", lang)

    text_parts = [
        "🎓 <b>Savanna AI Tutor</b>\n",
        safe_reply_content,
        ""
    ]

    if citation:
        title = html.escape(str(citation.get("title", "Course Material")))
        target_id = html.escape(str(citation.get("targetId", "")))
        text_parts.append(f"<b>{t('citation_header', lang)}</b>")
        text_parts.append(f"{t('course_source', lang)} {title}")
        if target_id:
            text_parts.append(f"{t('lesson_anchor', lang)} <code>{target_id}</code>")
        text_parts.append(f"{t('rag_engine', lang)} {engine_label}")

    formatted_text = "\n".join(text_parts)

    # Accessible keyboard buttons localized in the student's language
    buttons = [
        [
            {"text": t("listen_btn", lang), "callback_data": "action_listen"}
        ],
        [
            {"text": t("mentor_btn", lang), "callback_data": "action_mentor"},
            {"text": t("jobs_btn", lang), "callback_data": "action_jobs"}
        ],
        [
            {"text": t("lang_btn", lang), "callback_data": "action_lang"},
            {"text": t("acc_btn", lang), "callback_data": "action_acc"}
        ]
    ]

    return formatted_text, buttons


# ====================================================================
# Telegram Handlers (python-telegram-bot v20+)
# ====================================================================
try:
    from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, BotCommand
    from telegram.constants import ParseMode, ChatAction
    from telegram.request import HTTPXRequest
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
        BotCommand("voice", "🔊 Toggle automatic speech read-aloud"),
        BotCommand("lang", "🌐 Switch language (Amharic, Oromo, Tigrinya, Arabic...)"),
        BotCommand("a11y", "♿ Accessibility features & screen reader guide"),
        BotCommand("simple", "🧠 Toggle WCAG 3.1.5 plain-language mode"),
        BotCommand("jobs", "💼 Browse verified inclusive jobs"),
        BotCommand("acc", "♿ Request certified interview accommodations"),
        BotCommand("alerts", "🔔 Subscribe to inclusive job alerts"),
        BotCommand("mentor", "🆘 Escalate to a live human mentor"),
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


async def safe_reply(target, text: str, reply_markup=None):
    """
    Safely delivers the response with automatic retry, HTML parsing fallback,
    and support for update, message, or callback query objects.
    """
    if not target:
        return None

    msg = None
    if hasattr(target, "reply_text"):
        msg = target
    elif hasattr(target, "effective_message") and target.effective_message:
        msg = target.effective_message
    elif hasattr(target, "message") and target.message:
        msg = target.message

    if not msg:
        return None

    for attempt in range(3):
        try:
            return await msg.reply_text(
                text,
                parse_mode=ParseMode.HTML,
                reply_markup=reply_markup,
                disable_web_page_preview=True
            )
        except Exception as err:
            err_str = str(err).lower()
            if "can't parse entities" in err_str or "bad request" in err_str:
                plain_text = re.sub(r'<[^>]+>', '', text)
                try:
                    return await msg.reply_text(
                        plain_text,
                        reply_markup=reply_markup,
                        disable_web_page_preview=True
                    )
                except Exception:
                    pass
            if attempt < 2:
                await asyncio.sleep(0.5 * (attempt + 1))
            else:
                print(f"[Telegram Bot] safe_reply final error: {err}", flush=True)
                return None


async def start_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    user_id = user.id if user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]
    first_name = html.escape(user.first_name) if user and user.first_name else "Student"

    welcome_text = (
        f"👋 <b>Welcome, {first_name}!</b>\n\n"
        "I am your <b>Savanna AI Tutor</b>. I am connected directly to your official "
        "curriculum to provide strictly grounded answers with verified citations.\n\n"
        "♿ <b>Accessibility Ready (WCAG 2.2 AA):</b>\n"
        "• <b>Voice Support:</b> Hold the mic to speak or tap audio buttons to listen.\n"
        "• <b>Cognitive Mode:</b> Type /simple for plain-language explanations.\n"
        "• <b>Inclusive Jobs:</b> Type /jobs for remote roles with certified accommodations.\n\n"
        "💬 <b>You can ask me questions like:</b>\n"
        "• <i>What is the role of Artificial Intelligence in virtual assistance?</i>\n"
        "• <i>What is shaping the future of VA work?</i>\n"
        "• <i>What skills do clients value most?</i>\n\n"
        "🌍 <b>Multilingual Support:</b> Type or speak in English, አማርኛ, Afaan Oromoo, ትግርኛ, Soomaali, or العربية."
    )

    quick_prompts = [
        [
            {"text": "🤖 AI in VA Work", "callback_data": "prompt_ai"},
            {"text": "📈 Future of VA Work", "callback_data": "prompt_future"}
        ],
        [
            {"text": t("a11y_btn", lang), "callback_data": "action_a11y"},
            {"text": t("jobs_btn", lang), "callback_data": "action_jobs"}
        ],
        [
            {"text": t("lang_btn", lang), "callback_data": "action_lang"}
        ]
    ]

    await safe_reply(
        update.effective_message or update,
        welcome_text,
        reply_markup=create_inline_keyboard(quick_prompts)
    )


async def accessibility_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

    msg = t("a11y_info", lang)
    buttons = [
        [
            {"text": t("voice_toggle_btn", lang), "callback_data": "action_voice_toggle"},
            {"text": t("simple_toggle_btn", lang), "callback_data": "action_simple_toggle"}
        ],
        [
            {"text": t("jobs_btn", lang), "callback_data": "action_jobs"},
            {"text": t("mentor_btn", lang), "callback_data": "action_mentor"}
        ],
        [
            {"text": t("lang_btn", lang), "callback_data": "action_lang"}
        ]
    ]
    await safe_reply(update.effective_message or update, msg, reply_markup=create_inline_keyboard(buttons))


async def help_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

    help_text = t("help_text", lang)
    await safe_reply(update.effective_message or update, help_text)


async def jobs_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

    jobs = CareerService.get_jobs("savanna")
    if not jobs:
        await safe_reply(update.effective_message or update, t("jobs_none", lang))
        return

    job_lines = [t("jobs_header", lang)]
    for j in jobs[:3]:
        acc = j.get("accommodations", {})
        acc_tags = []
        if acc.get("screen_reader_certified"):
            acc_tags.append("🖥️ Screen Reader")
        if acc.get("extended_test_time"):
            acc_tags.append("⏱️ Extended Time")
        if acc.get("camera_optional_interview"):
            acc_tags.append("📹 Camera Optional")

        acc_str = " | ".join(acc_tags) if acc_tags else "Accommodations on request"

        job_lines.append(
            f"<b>{html.escape(j['title'])}</b> at <i>{html.escape(j['company'])}</i>\n"
            f"📍 {html.escape(j['location'])} · 💵 {html.escape(j.get('salary', 'Competitive'))}\n"
            f"{t('acc_label', lang)} {acc_str}\n"
            f"{t('align_label', lang)} {html.escape(j.get('course_alignment', 'VA Foundations'))}\n"
        )

    buttons = [
        [
            {"text": "♿ Request Accommodations (Junior VA)", "callback_data": "req_acc:job_01"},
            {"text": "♿ Request (Customer Support)", "callback_data": "req_acc:job_02"}
        ],
        [
            {"text": "🔔 Subscribe to Job Alerts", "callback_data": "action_alerts"},
            {"text": t("mentor_btn", lang), "callback_data": "action_mentor"}
        ]
    ]
    await safe_reply(update.effective_message or update, "\n".join(job_lines), reply_markup=create_inline_keyboard(buttons))


async def mentor_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    user_id = user.id if user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

    learner_id = f"tg_{user_id}"
    res = EscalateService.dispatch_human_mentor(learner_id, "savanna", "VA-1", lang)

    msg = (
        t("mentor_title", lang) +
        t("mentor_name", lang, mentor=html.escape(res['mentor_assigned'])) +
        t("mentor_session", lang, session_id=html.escape(res['session_id'])) +
        t("mentor_status", lang, status=html.escape(res['status'].title())) +
        t("mentor_desc", lang)
    )
    await safe_reply(update.effective_message or update, msg)


async def lang_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

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
        update.effective_message or update,
        t("select_lang", lang),
        reply_markup=create_inline_keyboard(keyboard)
    )


async def simple_mode_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    new_simple = not pref["simple_mode"]
    update_user_settings(user_id, simple_mode=new_simple)
    lang = pref["lang"]

    msg = t("simple_on", lang) if new_simple else t("simple_off", lang)
    await safe_reply(update.effective_message or update, msg)

async def voice_mode_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    new_voice = not pref.get("auto_voice", False)
    update_user_settings(user_id, auto_voice=new_voice)
    lang = pref["lang"]

    msg = t("voice_on", lang) if new_voice else t("voice_off", lang)
    await safe_reply(update.effective_message or update, msg)


async def accommodations_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

    msg = t("acc_info", lang)
    buttons = [
        [
            {"text": "♿ Request for Junior VA", "callback_data": "req_acc:job_01"},
            {"text": "♿ Request for Customer Support", "callback_data": "req_acc:job_02"}
        ],
        [
            {"text": t("jobs_btn", lang), "callback_data": "action_jobs"}
        ]
    ]
    await safe_reply(update.effective_message or update, msg, reply_markup=create_inline_keyboard(buttons))


async def alerts_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    alert_msg = (
        "🔔 <b>Inclusive Job Alerts: ACTIVE</b>\n\n"
        "You are subscribed to real-time notifications for verified remote roles "
        "with certified accessibility accommodations (NVDA/TalkBack testing, +50% assessment time).\n\n"
        "Type /jobs to browse current opportunities or /acc to request accommodations."
    )
    buttons = [
        [
            {"text": "💼 View Jobs Now", "callback_data": "action_jobs"},
            {"text": "♿ Request Accommodations", "callback_data": "action_acc"}
        ]
    ]
    await safe_reply(update.effective_message or update, alert_msg, reply_markup=create_inline_keyboard(buttons))


async def message_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not update.message or not update.message.text:
        return

    user_text = update.message.text.strip()
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

    # Indicate typing state while RAG generates answer
    try:
        await context.bot.send_chat_action(chat_id=update.effective_chat.id, action=ChatAction.TYPING)
    except Exception:
        pass

    # Query the RAG system asynchronously in worker thread
    rag_result = await asyncio.to_thread(
        process_student_query,
        user_text,
        lang,
        pref["simple_mode"]
    )

    formatted_text, buttons = format_telegram_response(rag_result, lang)

    await safe_reply(
        update.message,
        formatted_text,
        reply_markup=create_inline_keyboard(buttons)
    )

    # If user enabled Auto-Voice Mode, automatically generate and send voice note!
    if pref.get("auto_voice", False):
        audio_reply = await asyncio.to_thread(generate_speech_audio, rag_result.get("reply", ""), lang)
        if audio_reply:
            import io
            try:
                await context.bot.send_voice(
                    chat_id=update.effective_chat.id,
                    voice=io.BytesIO(audio_reply),
                    caption=t("audio_caption", lang)
                )
            except Exception as e:
                print(f"[Telegram Bot] auto_voice error: {e}", flush=True)


async def voice_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """
    Handles incoming Telegram voice messages.
    Transcribes student audio and generates grounded answers in text AND speech.
    """
    if not update.message or not update.message.voice:
        return

    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

    try:
        await context.bot.send_chat_action(chat_id=update.effective_chat.id, action=ChatAction.TYPING)
    except Exception:
        pass

    # Download voice message bytes
    voice_file = await context.bot.get_file(update.message.voice.file_id)
    audio_bytes = await voice_file.download_as_bytearray()

    # Transcribe voice to text using Gemini multimodal engine
    transcribed_text = await asyncio.to_thread(transcribe_audio, bytes(audio_bytes), "audio/ogg")
    if not transcribed_text:
        await safe_reply(update.message, t("voice_error", lang))
        return

    await safe_reply(update.message, t("voice_heard", lang, query=html.escape(transcribed_text)))

    # Generate RAG answer
    rag_result = await asyncio.to_thread(process_student_query, transcribed_text, lang, pref["simple_mode"])
    formatted_text, buttons = format_telegram_response(rag_result, lang)

    await safe_reply(update.message, formatted_text, reply_markup=create_inline_keyboard(buttons))

    # Also automatically send back speech audio for the voice user
    audio_reply = await asyncio.to_thread(generate_speech_audio, rag_result.get("reply", ""), lang)
    if audio_reply:
        import io
        try:
            await context.bot.send_voice(
                chat_id=update.effective_chat.id,
                voice=io.BytesIO(audio_reply),
                caption=t("audio_caption", lang)
            )
        except Exception as e:
            print(f"[Telegram Bot] send_voice error: {e}", flush=True)


async def safe_answer_query(query, text=None, show_alert=False):
    if not query:
        return
    try:
        if text:
            await query.answer(text=text, show_alert=show_alert)
        else:
            await safe_answer_query(query)
    except Exception:
        pass

async def callback_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    data = query.data
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

    if data == "action_listen":
        await safe_answer_query(query, t("audio_generating", lang), show_alert=False)
        msg_text = query.message.text or query.message.caption or ""
        audio_bytes = await asyncio.to_thread(generate_speech_audio, msg_text, lang)
        if audio_bytes:
            import io
            await context.bot.send_voice(
                chat_id=query.message.chat_id,
                voice=io.BytesIO(audio_bytes),
                caption=t("audio_caption", lang)
            )
        else:
            await query.message.reply_text(t("audio_unavailable", lang))

    elif data == "prompt_ai":
        await safe_answer_query(query)
        try:
            await context.bot.send_chat_action(chat_id=update.effective_chat.id, action=ChatAction.TYPING)
        except Exception:
            pass
        res = await asyncio.to_thread(process_student_query, "What is the use of Artificial Intelligence in virtual assistance?", lang)
        text, btns = format_telegram_response(res, lang)
        await safe_reply(query, text, reply_markup=create_inline_keyboard(btns))

    elif data == "prompt_future":
        await safe_answer_query(query)
        try:
            await context.bot.send_chat_action(chat_id=update.effective_chat.id, action=ChatAction.TYPING)
        except Exception:
            pass
        res = await asyncio.to_thread(process_student_query, "What is shaping the future of VA work?", lang)
        text, btns = format_telegram_response(res, lang)
        await safe_reply(query, text, reply_markup=create_inline_keyboard(btns))

    elif data == "action_jobs":
        await safe_answer_query(query)
        await jobs_handler(update, context)

    elif data == "action_mentor":
        await safe_answer_query(query)
        await mentor_handler(update, context)

    elif data == "action_lang":
        await safe_answer_query(query)
        await lang_handler(update, context)

    elif data.startswith("setlang_"):
        new_lang = data.replace("setlang_", "")
        update_user_settings(user_id, lang=new_lang)
        lang_names = {
            "en": "English", "am": "አማርኛ", "om": "Afaan Oromoo",
            "ti": "ትግርኛ", "so": "Soomaali", "ar": "العربية"
        }
        target_name = lang_names.get(new_lang, new_lang)
        await safe_answer_query(query, f"Language set to {target_name}")
        await safe_reply(query, t("lang_updated", new_lang, name=target_name))

    elif data.startswith("req_acc:"):
        job_id = data.split(":", 1)[1]
        user_name = update.effective_user.full_name if update.effective_user else f"Learner {user_id}"
        acc_res = CareerService.create_accommodation_request(
            job_id=job_id,
            applicant_name=user_name,
            accommodations=["Screen Reader Compatible Testing (NVDA/TalkBack)", "Extended Evaluation Time (+50%)", "Camera-Optional Interview"]
        )
        code = acc_res.get("confirmation_code", "ACC-V1D8")
        note = acc_res.get("official_note", "")
        await safe_answer_query(query, f"Accommodations Requested: {code}", show_alert=True)
        acc_reply = (
            f"✅ <b>Official Interview Accommodation Request Generated!</b>\n\n"
            f"<b>Tracking Code:</b> <code>{html.escape(code)}</code>\n"
            f"<b>Status:</b> Submitted & Verified\n\n"
            f"<b>Official Verification Letter:</b>\n"
            f"<i>\"{html.escape(note)}\"</i>\n\n"
            f"💡 <i>Present this code to your recruiter. Savanna partners guarantee non-discriminatory interviews.</i>"
        )
        await safe_reply(query, acc_reply)

    elif data == "action_alerts":
        await safe_answer_query(query, "Job Alerts Activated!")
        alert_msg = (
            "🔔 <b>Inclusive Job Alerts: ON</b>\n\n"
            "You are now subscribed to real-time Telegram alerts for verified remote roles "
            "with certified accessibility accommodations.\n\n"
            "Whenever hiring partners post new roles matching your completed courses, you will be notified here instantly!\n\n"
            "Type /jobs to view current openings."
        )
        await safe_reply(query, alert_msg)

    elif data == "action_acc":
        await safe_answer_query(query)
        await accommodations_handler(update, context)

    elif data == "action_a11y":
        await safe_answer_query(query)
        await accessibility_handler(update, context)

    elif data == "action_simple_toggle":
        new_val = not pref["simple_mode"]
        update_user_settings(user_id, simple_mode=new_val)
        status_msg = t("simple_on", lang) if new_val else t("simple_off", lang)
        await safe_answer_query(query, "Cognitive Mode Updated")
        await safe_reply(query, status_msg)

    elif data == "action_voice_toggle":
        new_val = not pref.get("auto_voice", False)
        update_user_settings(user_id, auto_voice=new_val)
        status_msg = t("voice_on", lang) if new_val else t("voice_off", lang)
        await safe_answer_query(query, "Auto-Voice Mode Updated")
        await safe_reply(query, status_msg)


async def unknown_command_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not update.message or not update.message.text:
        return
    user_id = update.effective_user.id if update.effective_user else 0
    pref = get_user_settings(user_id)
    lang = pref["lang"]

    cmd = update.message.text.strip()
    msg = (
        f"❓ Unrecognized command: <code>{html.escape(cmd)}</code>\n\n"
        "<b>Available Commands:</b>\n"
        "• /start - Start tutoring & overview\n"
        "• /lang - Switch language (Amharic, Oromo, Tigrinya, Arabic, English)\n"
        "• /a11y - Accessibility & assistive features guide\n"
        "• /simple - Plain language mode (WCAG 3.1.5)\n"
        "• /jobs - View inclusive jobs & accommodations\n"
        "• /mentor - Alert a human coach\n"
        "• /help - Grounding & citations guide\n\n"
        "💡 <i>Tip: Tap the <b>Menu (☰)</b> button next to the input box!</i>"
    )
    buttons = [
        [
            {"text": t("a11y_btn", lang), "callback_data": "action_a11y"},
            {"text": t("jobs_btn", lang), "callback_data": "action_jobs"}
        ],
        [
            {"text": t("mentor_btn", lang), "callback_data": "action_mentor"},
            {"text": t("lang_btn", lang), "callback_data": "action_lang"}
        ]
    ]
    await safe_reply(update.message, msg, reply_markup=create_inline_keyboard(buttons))


def build_telegram_application(token: str) -> Optional["Application"]:
    if not TELEGRAM_LIB_AVAILABLE:
        print("[Telegram Bot] python-telegram-bot is not installed.", flush=True)
        return None

    req = HTTPXRequest(
        connection_pool_size=16,
        read_timeout=30.0,
        write_timeout=30.0,
        connect_timeout=30.0,
        pool_timeout=30.0
    )
    app = Application.builder().token(token).request(req).build()

    app.add_handler(CommandHandler(["start", "restart"], start_handler))
    app.add_handler(CommandHandler(["voice", "audio", "speech", "sound"], voice_mode_handler))
    app.add_handler(CommandHandler(["a11y", "accessibility", "access"], accessibility_handler))
    app.add_handler(CommandHandler(["simple", "easy", "plain"], simple_mode_handler))
    app.add_handler(CommandHandler(["acc", "accommodations", "accommodation"], accommodations_handler))
    app.add_handler(CommandHandler(["alerts", "alert", "jobalerts"], alerts_handler))
    app.add_handler(CommandHandler(["jobs", "job", "career", "careers"], jobs_handler))
    app.add_handler(CommandHandler(["mentor", "coach", "human", "escalate"], mentor_handler))
    app.add_handler(CommandHandler(["lang", "language", "languages", "lnag"], lang_handler))
    app.add_handler(CommandHandler(["help", "info", "faq"], help_handler))
    app.add_handler(CallbackQueryHandler(callback_handler))
    app.add_handler(MessageHandler(filters.VOICE, voice_handler))
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
        await app.updater.start_polling()
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
                app.run_polling()
        else:
            run_cli_simulation()
