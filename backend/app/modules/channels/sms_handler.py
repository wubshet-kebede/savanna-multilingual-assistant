"""
Low-Bandwidth 2G SMS Channel Module for Savanna Multilingual Assistant.
Provides high-reliability SMS ingestion over POST /sms/inbound and
POST /api/v1/channels/sms/inbound.

Key Features:
- Universal Payload Parsing: Handles application/json, application/x-www-form-urlencoded
  (Twilio, Africa's Talking, Infobip), and URL query parameters without external dependencies.
- Strict Single-Segment GSM-7 / UCS-2 Character Limit: Deterministic word-boundary
  trimmer ensures all outbound responses are strictly <= 160 characters.
- Grounded Multilingual Cross-Lingual RAG: Semantic vector search over pgvector
  with ultra-concise Gemini SMS summarization.
- Low-Bandwidth 2G Keyword Commands: HELP, JOBS, ACC, LANG, SIMPLE for instant offline navigation.
- Persistent Learner Profiles: Saves language preferences per mobile number in PostgreSQL.
- Telecom Audit Logging: Automatically logs character counts, engine type, and timestamps to sms_logs.
- Anti-DDoS Rate Limiting: Sliding-window protection per phone number against SMS loops.
"""

import os
import re
import time
import json
import urllib.request
import urllib.parse
from fastapi import APIRouter, Request, Response, Depends
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.database import get_db, SessionLocal
from app.core.languages import SUPPORTED_LANGUAGES
from app.modules.tutor.service import TutorService
from app.modules.tutor.schemas import AskRequest
from app.modules.career.service import CareerService
from app.modules.escalate.service import EscalateService
from app.modules.channels.sms_models import SMSProfile, SMSLog

router = APIRouter(prefix="/channels/sms", tags=["Module 4: Low-Bandwidth SMS Route"])

# ==========================================
# 1. In-Memory Caches & Rate Limiter
# ==========================================
_SMS_PROFILE_CACHE: dict[str, dict] = {}
_RATE_LIMITS: dict[str, list[float]] = {}
RATE_LIMIT_WINDOW = 60  # seconds
RATE_LIMIT_MAX = 15     # max requests per window

def check_rate_limit(phone: str) -> bool:
    """Sliding-window rate limiter per phone number to prevent SMS loop abuse."""
    if not phone or phone == "unknown":
        return True
    now = time.time()
    timestamps = _RATE_LIMITS.get(phone, [])
    # Filter timestamps within window
    timestamps = [t for t in timestamps if now - t < RATE_LIMIT_WINDOW]
    if len(timestamps) >= RATE_LIMIT_MAX:
        _RATE_LIMITS[phone] = timestamps
        return False
    timestamps.append(now)
    _RATE_LIMITS[phone] = timestamps
    return True


# ==========================================
# 2. Strict 160-Character Limit Enforcer
# ==========================================
def enforce_sms_limit(text: str, max_len: int = 160) -> str:
    """
    Cleans text and deterministically enforces a hard <= 160 character limit.
    Strips markdown asterisks, underscores, HTML tags, and backticks.
    Truncates at word boundaries and appends '...' if text exceeds budget.
    """
    if not text:
        return ""
    # Strip HTML tags
    cleaned = re.sub(r'<[^>]+>', '', text)
    # Strip markdown symbols
    cleaned = re.sub(r'[*_`#~]', '', cleaned)
    # Normalize whitespaces and newlines
    cleaned = re.sub(r'[\r\n\t]+', ' ', cleaned)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()

    if len(cleaned) <= max_len:
        return cleaned

    # Truncate at word boundary
    budget = max_len - 3  # reserve room for '...'
    truncated = cleaned[:budget]
    last_space = truncated.rfind(' ')
    if last_space > (budget - 25):
        truncated = truncated[:last_space]

    res = truncated.rstrip(',.;: ') + '...'
    if len(res) > max_len:
        res = res[:max_len]
    return res


def extract_compact_citation(source: dict) -> str:
    """Formats a compact verifiable citation for 2G SMS under 18 characters."""
    if not source:
        return ""
    title = source.get("title") or ""
    url = source.get("url") or ""

    # Check for short module or code names
    match = re.search(r'(VA-\d+|Mod(?:ule)?\s*\d+|Sec(?:tion)?\s*\d+|WR\s*\d+)', title, re.IGNORECASE)
    if match:
        code = match.group(1).replace(" ", "")
        return f"[Src:{code}]"

    # Check URL anchor
    if "#" in url:
        anchor = url.split("#")[-1][:8]
        return f"[Src:#{anchor}]"

    # Fallback to short title
    short_title = title.split(":")[0].strip()[:8]
    return f"[Src:{short_title}]" if short_title else "[Src:Savanna]"


# ==========================================
# 3. Persistent SMS Profile Manager
# ==========================================
def get_sms_profile(phone: str, db: Session) -> dict:
    """Retrieves learner preferences from cache or DB; writes default on first contact."""
    if not phone or phone == "unknown":
        return {"lang": "en", "simple_mode": False}

    if phone in _SMS_PROFILE_CACHE:
        return _SMS_PROFILE_CACHE[phone]

    try:
        profile = db.query(SMSProfile).filter(SMSProfile.phone_number == phone).first()
        if profile:
            pref = {
                "lang": profile.language or "en",
                "simple_mode": bool(profile.simple_mode)
            }
        else:
            profile = SMSProfile(phone_number=phone, language="en", simple_mode=False, total_queries=1)
            db.add(profile)
            db.commit()
            pref = {"lang": "en", "simple_mode": False}
        _SMS_PROFILE_CACHE[phone] = pref
        return pref
    except Exception as e:
        print(f"[SMSProfile] DB error ({e}), using default.", flush=True)
        return _SMS_PROFILE_CACHE.get(phone, {"lang": "en", "simple_mode": False})


def update_sms_profile(phone: str, lang: str = None, simple_mode: bool = None, db: Session = None) -> dict:
    """Updates learner language or simple-mode preference in cache and PostgreSQL."""
    if not phone or phone == "unknown":
        return {"lang": lang or "en", "simple_mode": bool(simple_mode)}

    current = _SMS_PROFILE_CACHE.get(phone, {"lang": "en", "simple_mode": False})
    new_lang = lang if lang is not None else current.get("lang", "en")
    new_simple = simple_mode if simple_mode is not None else current.get("simple_mode", False)

    updated = {"lang": new_lang, "simple_mode": new_simple}
    _SMS_PROFILE_CACHE[phone] = updated

    if db:
        try:
            profile = db.query(SMSProfile).filter(SMSProfile.phone_number == phone).first()
            if not profile:
                profile = SMSProfile(
                    phone_number=phone,
                    language=new_lang,
                    simple_mode=new_simple,
                    total_queries=1
                )
                db.add(profile)
            else:
                profile.language = new_lang
                profile.simple_mode = new_simple
                profile.total_queries = (profile.total_queries or 0) + 1
            db.commit()
        except Exception as e:
            print(f"[SMSProfile] DB update error: {e}", flush=True)
            db.rollback()

    return updated


# ==========================================
# 4. Inbound Request Body Parser
# ==========================================
async def parse_inbound_sms_payload(request: Request) -> tuple[str, str]:
    """
    Robust dual parser that reads JSON, Form URL-encoded, or Query parameters.
    Works universally across Twilio, Africa's Talking, Infobip, and raw JSON testers.
    """
    phone = ""
    body = ""

    # 1. Read raw body bytes
    try:
        body_bytes = await request.body()
    except Exception:
        body_bytes = b""

    # 2. Check JSON payload
    content_type = request.headers.get("content-type", "").lower()
    if "application/json" in content_type or (body_bytes and body_bytes.strip().startswith(b"{")):
        try:
            data = json.loads(body_bytes.decode("utf-8"))
            phone = str(
                data.get("from_number") or data.get("From") or data.get("from") or
                data.get("phone_number") or data.get("phone") or data.get("msisdn") or ""
            ).strip()
            body = str(
                data.get("body") or data.get("Body") or data.get("text") or
                data.get("message") or data.get("query") or data.get("msg") or ""
            ).strip()
        except Exception:
            pass

    # 3. Check application/x-www-form-urlencoded if not found in JSON
    if not body and body_bytes:
        try:
            form_dict = urllib.parse.parse_qs(body_bytes.decode("utf-8", errors="replace"))
            for k, vals in form_dict.items():
                k_lower = k.lower()
                val = vals[0].strip() if vals else ""
                if not phone and k_lower in ["from_number", "from", "phone", "phone_number", "msisdn"]:
                    phone = val
                if not body and k_lower in ["body", "text", "message", "query", "msg"]:
                    body = val
        except Exception:
            pass

    # 4. Check query parameters as fallback
    if not body:
        for k, v in request.query_params.items():
            k_lower = k.lower()
            val = v.strip()
            if not phone and k_lower in ["from_number", "from", "phone", "phone_number", "msisdn"]:
                phone = val
            if not body and k_lower in ["body", "text", "message", "query", "msg"]:
                body = val

    # Normalize phone
    phone = re.sub(r'[^\w+]', '', phone) or "unknown"
    return phone, body


# ==========================================
# 5. Gemini Ultra-Concise SMS Generator
# ==========================================
def generate_concise_sms_answer(query: str, context: list[str], language: str = "en", simple_mode: bool = False) -> tuple[str, str]:
    """
    Calls Gemini with a specialized 2G SMS prompt to produce an accurate,
    single-sentence answer under 110 characters.
    """
    api_key = settings.GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")
    if not api_key or api_key.strip() in ["", "YOUR_GEMINI_API_KEY_HERE"]:
        return "", ""

    lang_meta = SUPPORTED_LANGUAGES.get(language, SUPPORTED_LANGUAGES.get("en", {}))
    lang_name = lang_meta.get("name", "English")
    lang_native = lang_meta.get("native", "")

    lang_instruction = ""
    if language != "en":
        lang_instruction = f"IMPORTANT: Write your answer strictly in {lang_name} ({lang_native}).\n"

    simple_instruction = ""
    if simple_mode:
        simple_instruction = "Use simple, everyday words (WCAG 3.1.5 Plain Language).\n"

    context_snippet = " ".join(context)[:600]
    prompt = (
        "You are an SMS teaching assistant for Savanna Course Platform.\n"
        "Answer the student's question accurately using ONLY the provided course material.\n"
        "STRICT CONSTRAINTS:\n"
        "1. Write EXACTLY ONE clear, factual sentence.\n"
        "2. Keep the answer strictly UNDER 105 characters.\n"
        "3. Do NOT use markdown symbols (no asterisks, no bullets, no bold).\n"
        f"{lang_instruction}"
        f"{simple_instruction}"
        f"Material: {context_snippet}\n"
        f"Question: {query}\n"
        "Answer:"
    )

    payload = {"contents": [{"parts": [{"text": prompt}]}]}
    data = json.dumps(payload).encode("utf-8")

    candidate_models = ["gemini-3.1-flash-lite-preview", "gemini-3.8-flash", "gemini-flash-latest"]
    for model_name in candidate_models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
        req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=5) as response:
                result = json.loads(response.read().decode("utf-8"))
                text = result["candidates"][0]["content"]["parts"][0]["text"].strip()
                if text:
                    return text, f"gemini-sms ({model_name})"
        except Exception as e:
            print(f"[SMS Gemini] Model {model_name} error: {e}", flush=True)
            continue

    return "", ""


# ==========================================
# 6. Low-Bandwidth 2G Keyword Commands
# ==========================================
def handle_keyword_command(cmd: str, phone: str, db: Session, user_pref: dict) -> tuple[str | None, str, str]:
    """
    Handles standard offline keywords for 2G users.
    Returns (reply_text, engine, citation) or (None, "", "") if not a keyword.
    """
    clean_cmd = cmd.strip()
    upper_cmd = clean_cmd.upper()
    tokens = upper_cmd.split()
    first_token = tokens[0] if tokens else ""

    # 1. HELP / SOS / MENTOR
    if upper_cmd in ["HELP", "SOS", "MENTOR", "COACH", "ASSIST"]:
        mentor_res = EscalateService.dispatch_human_mentor(
            learner_id=phone,
            partner_id="savanna",
            course_id="SMS-2G",
            language=user_pref.get("lang", "en")
        )
        mentor_name = mentor_res.get("mentor_assigned", "Tunde (Coach)")
        sess = mentor_res.get("session_id", f"sms_{phone[-6:]}")
        reply = f"Savanna: Mentor {mentor_name} alerted (Ref: {sess}). A human coach will call or SMS this number shortly."
        return enforce_sms_limit(reply, 160), "keyword-mentor", "mentor-dispatch"

    # 2. JOBS / CAREER
    if upper_cmd in ["JOBS", "JOB", "CAREER", "CAREERS"]:
        jobs = CareerService.get_jobs(partner_id="savanna")
        if jobs:
            top = jobs[0]
            title = top.get("title", "Junior Virtual Assistant")
            company = top.get("company", "AfriRemote")
            reply = f"Savanna Jobs: {title} at {company}. Screen reader certified & flex hours. Apply: savanna.edu/careers"
        else:
            reply = "Savanna Jobs: Browse inclusive remote roles with certified interview accommodations at savanna.edu/careers"
        return enforce_sms_limit(reply, 160), "keyword-jobs", "careers-feed"

    # 3. ACC / ACCOMMODATIONS
    if upper_cmd in ["ACC", "ACCOMMODATION", "ACCOMMODATIONS", "A11Y"]:
        reply = "Savanna Accommodations: Certified screen-reader tests, +50% assessment time, & camera-optional interviews. Text JOBS for roles."
        return enforce_sms_limit(reply, 160), "keyword-acc", "acc-guide"

    # 4. LANG / LANGUAGE
    if first_token in ["LANG", "LANGUAGE"]:
        if len(tokens) == 1:
            reply = "Savanna: Set language by texting LANG <code>. Options: EN (English), AM (Amharic), OM (Oromoo), TI (Tigrinya), SO (Somali), AR (Arabic)."
            return enforce_sms_limit(reply, 160), "keyword-lang", "lang-menu"

        target = tokens[1].lower()
        # Aliases
        alias_map = {
            "english": "en", "en": "en",
            "amharic": "am", "am": "am", "አማርኛ": "am",
            "oromo": "om", "oromoo": "om", "om": "om",
            "tigrinya": "ti", "ti": "ti", "ትግርኛ": "ti",
            "somali": "so", "so": "so",
            "arabic": "ar", "ar": "ar", "العربية": "ar"
        }
        matched_lang = alias_map.get(target)
        if matched_lang and matched_lang in SUPPORTED_LANGUAGES:
            update_sms_profile(phone, lang=matched_lang, db=db)
            meta = SUPPORTED_LANGUAGES[matched_lang]
            name = meta.get("name", matched_lang)
            native = meta.get("native", "")
            reply = f"Savanna: Language updated to {name} ({native}). All future SMS answers will be in {name}."
        else:
            reply = "Savanna: Unknown code. Use: LANG EN, LANG AM, LANG OM, LANG TI, LANG SO, or LANG AR."
        return enforce_sms_limit(reply, 160), "keyword-lang", f"lang-set-{matched_lang or 'err'}"

    # 5. SIMPLE MODE (WCAG 3.1.5)
    if first_token == "SIMPLE":
        current_simple = user_pref.get("simple_mode", False)
        if len(tokens) > 1 and tokens[1] in ["ON", "TRUE", "1", "YES"]:
            new_simple = True
        elif len(tokens) > 1 and tokens[1] in ["OFF", "FALSE", "0", "NO"]:
            new_simple = False
        else:
            new_simple = not current_simple

        update_sms_profile(phone, simple_mode=new_simple, db=db)
        status = "ON (plain words enabled)" if new_simple else "OFF (standard detail)"
        reply = f"Savanna: Cognitive Simple Mode (WCAG 3.1.5) is now {status}."
        return enforce_sms_limit(reply, 160), "keyword-simple", "simple-mode"

    # 6. INFO / START / HELLO / EMPTY
    if upper_cmd in ["INFO", "START", "HELLO", "HI", ""] or not clean_cmd:
        reply = "Savanna SMS Tutor: Ask any course question (e.g. 'What is a VA?'). Text HELP for mentor, JOBS for careers, or LANG <code> for language."
        return enforce_sms_limit(reply, 160), "keyword-info", "sms-guide"

    return None, "", ""


# ==========================================
# 7. Unified Inbound SMS Processor
# ==========================================
async def process_inbound_sms(request: Request, db: Session) -> Response:
    """
    Unified entry point for SMS requests.
    Validates payload, enforces rate limits, routes keywords,
    executes grounded RAG, applies the 160-char limit, and logs to PostgreSQL.
    """
    phone, body = await parse_inbound_sms_payload(request)

    # 1. Anti-DDoS Rate Limiting
    if not check_rate_limit(phone):
        rate_msg = "Savanna: Rate limit reached. Please wait 1 minute before sending another query."
        return Response(
            content=rate_msg,
            media_type="text/plain; charset=utf-8",
            headers={"X-SMS-Character-Count": str(len(rate_msg)), "X-RAG-Engine": "rate-limit"}
        )

    # 2. Learner Profile & Language Preferences
    user_pref = get_sms_profile(phone, db)
    user_lang = user_pref.get("lang", "en")
    user_simple = user_pref.get("simple_mode", False)

    # 3. Check Offline Keyword Commands
    keyword_reply, kw_engine, kw_citation = handle_keyword_command(body, phone, db, user_pref)
    if keyword_reply is not None:
        final_reply = enforce_sms_limit(keyword_reply, 160)
        # Log to DB
        _record_sms_log(db, phone, body, final_reply, kw_engine, kw_citation)
        return Response(
            content=final_reply,
            media_type="text/plain; charset=utf-8",
            headers={
                "X-SMS-Character-Count": str(len(final_reply)),
                "X-RAG-Engine": kw_engine,
                "X-RAG-Citation": kw_citation
            }
        )

    # 4. Grounded RAG Semantic Query
    engine_used = "offline-rag"
    citation_code = "none"

    try:
        ask_req = AskRequest(query=body)
        rag_resp = TutorService.ask_question(db, ask_req, language=user_lang, simple_mode=user_simple)
        sources = rag_resp.get("sources", [])

        if not sources:
            # Out of scope query
            out_of_scope_replies = {
                "am": "ሳቫና፡ በትምህርቱ ውስጥ አልተገኘም። ለአማካሪ HELP፣ ለሥራ JOBS ብለው ይላኩ።",
                "om": "Savanna: Qabiyyee barnootaa keessatti hin argamne. Gargaarsaaf HELP, hojiif JOBS ergaa.",
                "ti": "ሳቫና፡ ኣብ ትምህርቲ ኣይተረኽበን። ንሓጋዚ HELP፣ ንስራሕ JOBS ኢልኩም ስደዱ።",
                "so": "Savanna: Lagama helin manhajka. La taliye qor HELP, shaqo qor JOBS.",
                "ar": "سافانا: لم يتم العثور عليه في المواد. للمرشد أرسل HELP، للوظائف JOBS.",
                "en": "Savanna: Not found in course material. Text HELP for a mentor, JOBS for careers, or rephrase your question."
            }
            reply_text = out_of_scope_replies.get(user_lang, out_of_scope_replies["en"])
            engine_used = "rag-out-of-scope"
            citation_code = "none"
        else:
            first_src = sources[0]
            citation_code = extract_compact_citation(first_src)
            context_texts = [f"{s.get('title', '')}: {s.get('url', '')}" for s in sources]

            # Try generating dedicated ultra-concise SMS via Gemini
            gemini_ans, gemini_eng = generate_concise_sms_answer(
                query=body,
                context=context_texts,
                language=user_lang,
                simple_mode=user_simple
            )

            if gemini_ans:
                reply_text = f"{gemini_ans} {citation_code}".strip()
                engine_used = gemini_eng
            else:
                # Fallback to cleaned answer from standard RAG engine
                raw_answer = rag_resp.get("answer", "")
                # Clean answer and split to 1st sentence if long
                clean_ans = enforce_sms_limit(raw_answer, 125)
                reply_text = f"{clean_ans} {citation_code}".strip()
                engine_used = rag_resp.get("engine", "offline-vector")

    except Exception as e:
        print(f"[SMS Processing] Error answering query: {e}", flush=True)
        reply_text = "Savanna: System busy. Please retry shortly or text HELP for human mentor assistance."
        engine_used = "error-fallback"
        citation_code = "err"

    # 5. Enforce GSM-7 160-Character Limit Under All Conditions
    final_reply = enforce_sms_limit(reply_text, 160)

    # 6. Record Audit Log in PostgreSQL
    _record_sms_log(db, phone, body, final_reply, engine_used, citation_code)

    return Response(
        content=final_reply,
        media_type="text/plain; charset=utf-8",
        headers={
            "X-SMS-Character-Count": str(len(final_reply)),
            "X-RAG-Engine": engine_used,
            "X-RAG-Citation": citation_code
        }
    )


def _record_sms_log(db: Session, phone: str, inbound: str, reply: str, engine: str, citation: str):
    """Safely writes an SMS transaction to the audit log."""
    try:
        log_entry = SMSLog(
            phone_number=phone or "unknown",
            inbound_body=inbound or "",
            reply_text=reply[:160],
            char_count=len(reply),
            engine=engine,
            citation=citation
        )
        db.add(log_entry)
        db.commit()
    except Exception as e:
        print(f"[SMSLog] Failed to record log: {e}", flush=True)
        db.rollback()


# ==========================================
# 8. Registered Router Handlers
# ==========================================
@router.post("/inbound")
async def modular_sms_inbound_post(request: Request, db: Session = Depends(get_db)):
    """Modular endpoint for POST /api/v1/channels/sms/inbound."""
    return await process_inbound_sms(request, db)

@router.get("/inbound")
async def modular_sms_inbound_get(request: Request, db: Session = Depends(get_db)):
    """Modular diagnostic and webhook verification for GET /api/v1/channels/sms/inbound."""
    return await process_inbound_sms(request, db)
