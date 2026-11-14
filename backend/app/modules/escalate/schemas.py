from pydantic import BaseModel, Field
from typing import Optional, List

class EscalateRequest(BaseModel):
    learner_id: str = Field("anonymous", example="amara_12")
    partner_id: str = Field("savanna", example="savanna")
    course_id: str = Field("VA-1", example="VA-1")
    page_context: str = Field("concept-va", example="concept-with-navigation.html")
    language: str = Field("am", example="am")
    recent_messages: Optional[List[str]] = None

class EscalateResponse(BaseModel):
    status: str
    session_id: str
    mentor_assigned: str
    message: str
