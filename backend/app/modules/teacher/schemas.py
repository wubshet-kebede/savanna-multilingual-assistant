from pydantic import BaseModel
from typing import List, Dict, Optional

class QuestionDetail(BaseModel):
    id: str
    question: str
    question_am: Optional[str] = None
    question_om: Optional[str] = None
    topic: str
    topic_am: Optional[str] = None
    topic_om: Optional[str] = None
    ask_count: int
    top_language: str
    human_escalations: int
    sample_ai_answer: str
    sample_ai_answer_am: Optional[str] = None
    sample_ai_answer_om: Optional[str] = None

class CurriculumInsight(BaseModel):
    topic: str
    topic_am: Optional[str] = None
    topic_om: Optional[str] = None
    lesson_ref: str
    finding: str
    finding_am: Optional[str] = None
    finding_om: Optional[str] = None
    recommendation: str
    recommendation_am: Optional[str] = None
    recommendation_om: Optional[str] = None
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
