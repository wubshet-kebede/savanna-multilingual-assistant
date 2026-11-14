from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/channels/sms", tags=["Module 4: Low-Bandwidth SMS Route"])

class InboundSMS(BaseModel):
    from_number: str
    body: str

@router.post("/inbound")
async def handle_inbound_sms(sms: InboundSMS):
    return {
        "reply": "Savanna VA-1: A Virtual Assistant provides remote administrative support. See Mod 2 Sec 1."
    }
