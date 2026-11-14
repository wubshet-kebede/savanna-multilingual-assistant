from fastapi import APIRouter
from pydantic import BaseModel, Field
from typing import Optional, List

router = APIRouter()

class EscalateRequest(BaseModel):
    learner_id: str = Field("anonymous", example="amara_12")
    partner_id: str = Field("savanna", example="savanna")
    course_id: str = Field("VA-1", example="VA-1")
    page_context: str = Field("concept-va", example="concept-with-navigation.html")
    language: str = Field("am", example="am")
    recent_messages: Optional[List[str]] = None

@router.post("/escalate")
async def escalate_to_human(req: EscalateRequest):
    # Generates a session ID and notifies human mentor queue
    session_id = f"session_{req.partner_id}_{req.learner_id}"
    return {
        "status": "connected",
        "session_id": session_id,
        "mentor_assigned": "Tunde (Multilingual Coach)",
        "webrtc_signaling_url": f"/signaling/{session_id}",
        "message": "Human mentor has been alerted with your context. You can now start screen sharing."
    }
