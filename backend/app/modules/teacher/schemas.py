from pydantic import BaseModel
from typing import List, Dict

class TeacherInsightsResponse(BaseModel):
    partner_id: str
    course_id: str
    total_questions: int
    escalated_to_human_count: int
    top_confusing_topics: List[dict]
    language_distribution: Dict[str, str]
