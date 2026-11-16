import re
import os
import json
import urllib.request
from sqlalchemy.orm import Session
from sentence_transformers import SentenceTransformer
from app.modules.tutor import models, schemas, llm_router
from app.core.config import settings

# Load local embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")

def extract_keywords(text: str) -> set[str]:
    """Extracts alphanumeric keywords (len >= 3) for lexical overlap re-ranking."""
    if not text:
        return set()
    return set(re.findall(r'[a-zA-Z0-9]{3,}', text.lower()))

def translate_query_for_search(query: str, language: str = "en") -> str:
    """
    If the query contains non-Latin scripts (e.g., Amharic, Tigrinya, Arabic),
    translates it quickly into concise English search keywords to query the English curriculum chunks.
    """
    if not query:
        return query

    # If English and mostly ASCII, keep original query
    ascii_chars = sum(1 for c in query if ord(c) < 128)
    if language == "en" and (ascii_chars / max(len(query), 1) > 0.8):
        return query

    api_key = settings.GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")
    if not api_key:
        return query

    try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key={api_key}"
        prompt = (
            "Translate the following student question into a concise English search phrase (3-6 words) "
            f"for a curriculum database. Output ONLY the English keywords, nothing else:\n{query}"
        )
        data = json.dumps({"contents": [{"parts": [{"text": prompt}]}]}).encode("utf-8")
        req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=8) as response:
            res = json.loads(response.read().decode("utf-8"))
            translated = res["candidates"][0]["content"]["parts"][0]["text"].strip()
            print(f"[TutorService] Translated non-English query '{query[:30]}' -> '{translated}'")
            return translated
    except Exception as e:
        print(f"[TutorService] Search query translation error ({e}), using raw query.")
        return query

class TutorService:
    @staticmethod
    def ingest_content(db: Session, payload: schemas.ContentIngestRequest) -> dict:
        inserted = 0
        if payload.chunks:
            for chunk in payload.chunks:
                embedding = model.encode(chunk.content).tolist()
                db_chunk = models.LessonChunk(
                    url_id=chunk.url_id or "lesson",
                    title=chunk.title or "Savanna Course Material",
                    content=chunk.content,
                    embedding=embedding
                )
                db.add(db_chunk)
                inserted += 1
        elif payload.text:
            embedding = model.encode(payload.text).tolist()
            db_chunk = models.LessonChunk(
                url_id=payload.url_id or "lesson",
                title=payload.title or "Savanna Course Material",
                content=payload.text,
                embedding=embedding
            )
            db.add(db_chunk)
            inserted += 1

        db.commit()
        return {"message": f"Successfully vectorized and ingested {inserted} chunks."}

    @staticmethod
    def ask_question(db: Session, payload: schemas.AskRequest, language: str = "en", simple_mode: bool = False) -> dict:
        raw_query = payload.query
        search_query = translate_query_for_search(raw_query, language)

        query_vector = model.encode(search_query).tolist()
        dist_expr = models.LessonChunk.embedding.cosine_distance(query_vector)

        # Retrieve top candidates below the 0.78 threshold
        results_with_dist = db.query(
            models.LessonChunk,
            dist_expr.label("distance")
        ).filter(dist_expr < 0.78).order_by("distance").limit(5).all()

        if not results_with_dist:
            out_of_scope_msgs = {
                "am": "በትምህርቱ ውስጥ ስለዚህ ጉዳይ ምንም ተዛማጅ መረጃ ማግኘት አልቻልኩም።",
                "om": "Qabiyyee barnootaa keessatti odeeffannoo waa'ee kanaa hin arganne.",
                "ti": "ኣብቲ ትምህርቲ ብዛዕባዚ ዝምልከት ሓበሬታ ክረክብ ኣይከኣልኩን።",
                "so": "Ma aanan helin wax macluumaad ah oo ku saabsan mawduucan manhajka.",
                "ar": "لم أتمكن من العثور على أي معلومات ذات صلة في المواد الدراسية.",
                "en": "I couldn't find any relevant information about that in the course material."
            }
            return {
                "answer": out_of_scope_msgs.get(language, out_of_scope_msgs["en"]),
                "sources": [],
                "engine": "none"
            }

        # Hybrid re-ranking: prioritize sections whose titles match query keywords
        query_kw = extract_keywords(search_query)

        def hybrid_rank_key(item):
            chunk, dist = item
            title_kw = extract_keywords(chunk.title)
            overlap = len(query_kw & title_kw)
            return float(dist) - (0.12 * overlap)

        reranked = sorted(results_with_dist, key=hybrid_rank_key)
        top_results = reranked[:3]

        results = [r[0] for r in top_results]
        context_texts = [f"{r.title}: {r.content}" for r in results]
        sources = [{"title": r.title, "url": r.url_id} for r in results]

        final_answer, engine_used = llm_router.get_answer_with_engine(
            raw_query,
            context_texts,
            language=language,
            simple_mode=simple_mode
        )

        return {
            "answer": final_answer,
            "sources": sources,
            "engine": engine_used
        }

    @staticmethod
    def chat(db: Session, payload: schemas.TutorChatRequest) -> dict:
        query = payload.message or payload.query or ""
        lang = payload.language or "en"
        simple_mode = getattr(payload, "simple_mode", False)

        ask_req = schemas.AskRequest(query=query)
        resp = TutorService.ask_question(db, ask_req, language=lang, simple_mode=simple_mode)
        sources = resp.get("sources", [])
        engine = resp.get("engine", "offline-rag")
        citation = None

        if sources:
            engine_label = "Gemini AI" if "gemini" in engine else "Curriculum Vector Store"
            citation = {
                "title": sources[0]["title"],
                "targetId": sources[0]["url"],
                "module": engine_label,
                "excerpt": resp.get("answer", "")[:160]
            }

        return {
            "reply": resp.get("answer", ""),
            "citation": citation,
            "language": lang,
            "engine": engine
        }
