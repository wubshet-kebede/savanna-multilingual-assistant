import re
import os
from sqlalchemy.orm import Session
from sentence_transformers import SentenceTransformer
from app.core.config import settings
from app.modules.tutor import models, schemas, llm_router

# Initialize the embedding model
model = SentenceTransformer(settings.EMBEDDING_MODEL)

STOPWORDS = {
    "what", "is", "the", "of", "in", "and", "to", "for", "a", "an", "are", 
    "on", "how", "do", "does", "why", "can", "with", "about", "this", "that",
    "these", "those", "or", "by", "from", "at", "as", "be", "so", "it", "its"
}

def extract_keywords(text: str) -> set[str]:
    words = re.findall(r"\b[a-zA-Z]{2,}\b", (text or "").lower())
    keywords = set()
    for w in words:
        if w not in STOPWORDS:
            keywords.add(w)
            if w == "ai":
                keywords.add("artificial")
                keywords.add("intelligence")
    return keywords

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
    def ask_question(db: Session, payload: schemas.AskRequest) -> dict:
        query_vector = model.encode(payload.query).tolist()
        dist_expr = models.LessonChunk.embedding.cosine_distance(query_vector)

        # Retrieve top candidates below the 0.78 threshold
        results_with_dist = db.query(
            models.LessonChunk,
            dist_expr.label("distance")
        ).filter(dist_expr < 0.78).order_by("distance").limit(5).all()

        if not results_with_dist:
            return {
                "answer": "I couldn't find any relevant information about that in the course material.",
                "sources": [],
                "engine": "none"
            }

        # Hybrid re-ranking: prioritize sections whose titles match query keywords
        query_kw = extract_keywords(payload.query)

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

        final_answer, engine_used = llm_router.get_answer_with_engine(payload.query, context_texts)

        return {
            "answer": final_answer,
            "sources": sources,
            "engine": engine_used
        }

    @staticmethod
    def chat(db: Session, payload: schemas.TutorChatRequest) -> dict:
        query = payload.message or payload.query or ""
        ask_req = schemas.AskRequest(query=query)
        resp = TutorService.ask_question(db, ask_req)
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
            "language": payload.language or "en",
            "engine": engine
        }
