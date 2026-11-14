from fastapi import APIRouter
from app.modules.teacher.schemas import TeacherInsightsResponse
from app.modules.teacher.service import TeacherService

router = APIRouter(prefix="/teacher", tags=["Module 5: Anonymized Teacher Intelligence"])

@router.get("/insights", response_model=TeacherInsightsResponse)
async def insights(partner_id: str = "savanna", course_id: str = "VA-1"):
    return TeacherService.get_insights(partner_id, course_id)
