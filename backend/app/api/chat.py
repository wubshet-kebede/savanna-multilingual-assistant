from fastapi import APIRouter
from pydantic import BaseModel, Field
from typing import Optional
from app.services.ai_engine import get_ai_provider
from app.services.languages import get_language_metadata

router = APIRouter()

class ChatRequest(BaseModel):
    message: str = Field(..., example="የሰው ረዳት እና የ AI ረዳት ልዩነቱ ምንድነው?")
    language: str = Field("am", example="am")
    partner_id: str = Field("savanna", example="savanna")
    course_id: str = Field("VA-1", example="VA-1")
    simple_mode: bool = Field(False, example=False)

class ChatResponse(BaseModel):
    reply: str
    citation: str
    provider: str
    language: str
    direction: str

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    provider = get_ai_provider()
    result = await provider.generate_response(
        question=req.message,
        lang=req.language,
        partner_id=req.partner_id,
        course_id=req.course_id,
        simple_mode=req.simple_mode
    )
    lang_meta = get_language_metadata(req.language)
    return ChatResponse(
        reply=result["reply"],
        citation=result["citation"],
        provider=result["provider"],
        language=req.language,
        direction=lang_meta["direction"]
    )
