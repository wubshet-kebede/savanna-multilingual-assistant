from pydantic import BaseModel
from typing import List, Dict, Optional

class QuestionDetail(BaseModel):
    id: str
    question: str
    topic: str
    ask_count: int
    top_language: str
    human_escalations: int
    sample_ai_answer: str

class CurriculumInsight(BaseModel):
    topic: str
    lesson_ref: str
    finding: str
    recommendation: str
    priority: str  # "high", "medium", "low"

class TeacherInsightsResponse(BaseModel):
    partner_id: str
    course_id: str
    total_questions: int
    escalated_to_human_count: int
    anonymity_status: str
    top_confusing_topics: List[dict]
    language_distribution: Dict[str, str]
    channel_distribution: Dict[str, str]
    most_asked_questions: List[QuestionDetail]
    curriculum_insights: List[CurriculumInsight]

class AnonymousQuestionLogRequest(BaseModel):
    course_id: str = "VA-1"
    question: str
    topic: Optional[str] = "General"
    language: Optional[str] = "en"
    channel: Optional[str] = "web"
