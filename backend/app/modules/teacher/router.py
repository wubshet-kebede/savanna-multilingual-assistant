from fastapi import APIRouter, Query, Response
from typing import Optional, List
from app.modules.teacher.schemas import TeacherInsightsResponse, AnonymousQuestionLogRequest
from app.modules.teacher.service import TeacherService

router = APIRouter(prefix="/teacher", tags=["Module 5: Anonymized Teacher Intelligence"])

@router.get("/insights", response_model=TeacherInsightsResponse)
async def get_insights(partner_id: str = "savanna", course_id: str = "VA-1"):
    """
    Teacher View: Aggregated confusion analytics and top asked questions without student names.
    WCAG & Privacy-first compliant.
    """
    return TeacherService.get_insights(partner_id, course_id)

@router.get("/questions")
async def list_anonymized_questions(
    topic: Optional[str] = None,
    language: Optional[str] = None,
    search: Optional[str] = None
):
    """
    List anonymized learner questions ranked by inquiry frequency.
    """
    return TeacherService.get_questions(topic, language, search)

@router.get("/export-csv")
async def export_teacher_data_csv():
    """
    Download anonymized curriculum confusion report as standard CSV.
    """
    csv_data = TeacherService.export_csv()
    return Response(
        content=csv_data,
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=savanna_anonymized_teacher_insights.csv"}
    )

@router.post("/log-anonymous")
async def log_anonymous_question(payload: AnonymousQuestionLogRequest):
    """
    Record an incoming question into the anonymous intelligence aggregator without storing any PII.
    """
    return TeacherService.log_anonymous_question(
        course_id=payload.course_id,
        question=payload.question,
        topic=payload.topic or "General",
        language=payload.language or "en",
        channel=payload.channel or "web"
    )
