from pydantic import BaseModel, Field
from typing import List, Optional, Dict

class JobItem(BaseModel):
    id: str
    partner_id: str
    title: str
    company: str
    location: str
    salary: str
    course_alignment: str
    description: str
    accommodations: dict
    schema_org: dict
    employment_type: Optional[str] = None
    workType: Optional[str] = None
    tags: Optional[List[str]] = None
    categories: Optional[List[str]] = None
    titles: Optional[Dict[str, str]] = None
    descriptions: Optional[Dict[str, str]] = None

class AccommodationRequest(BaseModel):
    job_id: str = Field(..., example="job_01")
    applicant_name: str = Field(..., example="Amara Nwosu")
    accommodations: List[str] = Field(..., example=["screen_reader", "extra_time"])

class AccommodationResponse(BaseModel):
    status: str
    confirmation_code: str
    official_note: str
