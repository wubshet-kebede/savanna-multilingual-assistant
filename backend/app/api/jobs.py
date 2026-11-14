from fastapi import APIRouter
import json
import os
from pydantic import BaseModel

router = APIRouter()

@router.get("/jobs")
async def get_jobs(partner_id: str = "savanna", course_alignment: str = ""):
    jobs_file = os.path.join(os.path.dirname(__file__), '..', 'data', 'jobs.json')
    with open(jobs_file, 'r', encoding='utf-8') as f:
        jobs = json.load(f)
    
    if partner_id:
        jobs = [j for j in jobs if j.get("partner_id") == partner_id]
    return jobs

class AccommodationRequest(BaseModel):
    job_id: str
    applicant_name: str
    accommodations: list[str]

@router.post("/jobs/accommodations")
async def request_accommodations(req: AccommodationRequest):
    return {
        "status": "submitted",
        "confirmation_code": "ACC-2026-9821",
        "official_note": f"Dear Hiring Team, applicant {req.applicant_name} has requested the following verified accommodations: {', '.join(req.accommodations)}."
    }
