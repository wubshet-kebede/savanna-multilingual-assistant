from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text
from sentence_transformers import SentenceTransformer
import database
import models
import schemas
import llm_router

# 1. Initialize the embedding model (this will load into memory when FastAPI boots)
# all-MiniLM-L6-v2 is a fantastic, lightweight 384-dimension model perfect for local execution
model = SentenceTransformer('all-MiniLM-L6-v2')

# Ensure tables and the pgvector extension are created
database.init_db()

app = FastAPI(title="Savanna RAG Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/v1/content", tags=["Ingestion"])
def ingest_content(payload: schemas.ContentIngestRequest, db: Session = Depends(get_db)):
    """
    Receives JSON lesson chunks, generates embeddings, and saves to PostgreSQL.
    Supports both batch chunks and single text payloads from seed.py crawler.
    """
    try:
        inserted = 0
        if payload.chunks:
            for chunk in payload.chunks:
                embedding = model.encode(chunk.content).tolist()
                db_chunk = models.LessonChunk(
                    url_id=chunk.url_id,
                    title=chunk.title,
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
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/v1/ask", response_model=schemas.AskResponse, tags=["RAG"])
def ask_question(payload: schemas.AskRequest, db: Session = Depends(get_db)):
    """
    Embeds the user query, performs vector similarity search in pgvector,
    and returns the LLM response with sources.
    """
    query_vector = model.encode(payload.query).tolist()

    results = db.query(models.LessonChunk).order_by(
        models.LessonChunk.embedding.cosine_distance(query_vector)
    ).limit(3).all()

    if not results:
        return {"answer": "I couldn't find any relevant information in the lesson.", "sources": []}

    context_texts = [f"{r.title}: {r.content}" for r in results]
    sources = [{"title": r.title, "url": r.url_id} for r in results]

    final_answer = llm_router.get_answer(payload.query, context_texts)

    return {
        "answer": final_answer,
        "sources": sources
    }

@app.post("/api/v1/tutor/chat", tags=["Widget Compatibility"])
@app.post("/tutor/chat", tags=["Widget Compatibility"])
def tutor_chat(payload: dict, db: Session = Depends(get_db)):
    """
    Direct bridge for multilingual-assistant web component.
    """
    query = payload.get("message") or payload.get("query") or ""
    ask_req = schemas.AskRequest(query=query)
    resp = ask_question(ask_req, db)
    sources = resp.get("sources", [])
    citation = None
    if sources:
        citation = {
            "title": sources[0]["title"],
            "targetId": sources[0]["url"],
            "module": "Curriculum Vector Store",
            "excerpt": resp.get("answer", "")[:160]
        }
    return {
        "reply": resp.get("answer", ""),
        "citation": citation,
        "language": payload.get("language", "en")
    }
