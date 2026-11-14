from fastapi import APIRouter
from app.modules.tutor.schemas import TutorChatRequest, TutorChatResponse
from app.modules.tutor.service import TutorService
from app.core.languages import get_language_metadata

router = APIRouter(prefix="/tutor", tags=["Module 1: Multilingual AI Tutor"])

@router.post("/chat", response_model=TutorChatResponse)
async def chat(req: TutorChatRequest):
    result = await TutorService.get_answer(
        question=req.message,
        lang=req.language,
        partner_id=req.partner_id,
        course_id=req.course_id,
        simple_mode=req.simple_mode
    )
    meta = get_language_metadata(req.language)
    return TutorChatResponse(
        reply=result["reply"],
        citation=result["citation"],
        provider=result["provider"],
        language=req.language,
        direction=meta["direction"]
    )
