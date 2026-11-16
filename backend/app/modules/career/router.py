from fastapi import APIRouter
from typing import List
from app.modules.career.schemas import JobItem, AccommodationRequest, AccommodationResponse
from app.modules.career.service import CareerService

router = APIRouter(prefix="/career", tags=["Module 2: Career Gateway (Level 3)"])

@router.get("/jobs", response_model=List[JobItem])
async def list_jobs(partner_id: str = "savanna"):
    return CareerService.get_jobs(partner_id)

@router.post("/accommodations", response_model=AccommodationResponse)
async def submit_accommodations(req: AccommodationRequest):
    return CareerService.create_accommodation_request(req.job_id, req.applicant_name, req.accommodations)

@router.post("/alerts/broadcast")
async def broadcast_job_alert(job_id: str = "job_01"):
    """
    Broadcasts real-time job alerts across Telegram and SMS for newly
    published inclusive roles matching learner course completions.
    """
    return CareerService.broadcast_job_alert(job_id)
