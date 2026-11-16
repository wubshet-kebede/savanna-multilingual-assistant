from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.modules.tutor import schemas
from app.modules.tutor.service import TutorService

router = APIRouter(tags=["Module 1: Multilingual AI Tutor"])

@router.post("/content", tags=["Ingestion"])
def ingest_content(payload: schemas.ContentIngestRequest, db: Session = Depends(get_db)):
    """
    Receives JSON lesson chunks, generates embeddings, and saves to PostgreSQL.
    Supports both batch chunks and single text payloads from seed.py crawler.
    """
    try:
        return TutorService.ingest_content(db, payload)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/ask", response_model=schemas.AskResponse, tags=["RAG"])
def ask_question(payload: schemas.AskRequest, db: Session = Depends(get_db)):
    """
    Embeds the user query, performs vector similarity search in pgvector,
    and returns the LLM response with sources. Enforces a 0.78 distance threshold
    to prevent false positives for out-of-domain queries.
    """
    return TutorService.ask_question(db, payload)

@router.post("/tutor/chat", response_model=schemas.TutorChatResponse, tags=["Widget Compatibility"])
def tutor_chat(payload: schemas.TutorChatRequest, db: Session = Depends(get_db)):
    """
    Direct bridge for multilingual-assistant web component.
    """
    return TutorService.chat(db, payload)
