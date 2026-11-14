from fastapi import APIRouter
from app.modules.escalate.schemas import EscalateRequest, EscalateResponse
from app.modules.escalate.service import EscalateService

router = APIRouter(prefix="/escalate", tags=["Module 3: Human Help & Co-Browsing"])

@router.post("", response_model=EscalateResponse)
async def request_human_help(req: EscalateRequest):
    return EscalateService.dispatch_human_mentor(req.learner_id, req.partner_id, req.course_id, req.language)
