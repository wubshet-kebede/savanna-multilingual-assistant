from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from app.modules.channels.telegram_bot import process_student_query, format_telegram_response

router = APIRouter(prefix="/channels/telegram", tags=["Module 4: Telegram Channel"])

class TelegramSimulateRequest(BaseModel):
    text: str
    user_name: Optional[str] = "Student"
    language: Optional[str] = "en"
    simple_mode: Optional[bool] = False

class TelegramSimulateResponse(BaseModel):
    telegram_html: str
    inline_buttons: List[List[Dict[str, str]]]
    citation: Optional[Dict[str, Any]] = None
    engine: str

@router.post("/simulate", response_model=TelegramSimulateResponse)
def simulate_telegram_interaction(payload: TelegramSimulateRequest):
    """
    Interactive simulation endpoint for Telegram Bot without requiring a bot token.
    Allows judges and developers to test the exact Telegram formatting, RAG answers,
    and inline keyboard buttons via Swagger UI (/docs) or cURL.
    """
    try:
        rag_res = process_student_query(
            text=payload.text,
            lang=payload.language,
            simple_mode=payload.simple_mode
        )
        formatted_html, buttons = format_telegram_response(rag_res, payload.language)
        return {
            "telegram_html": formatted_html,
            "inline_buttons": buttons,
            "citation": rag_res.get("citation"),
            "engine": rag_res.get("engine", "offline-rag")
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
