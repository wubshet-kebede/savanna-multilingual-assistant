import json
import os

DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'jobs.json')

class CareerService:
    @staticmethod
    def get_jobs(partner_id: str = "savanna") -> list:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            jobs = json.load(f)
        if partner_id:
            jobs = [j for j in jobs if j.get("partner_id") == partner_id]
        return jobs

    @staticmethod
    def create_accommodation_request(job_id: str, applicant_name: str, accommodations: list) -> dict:
        import uuid
        code = f"ACC-{str(uuid.uuid4())[:8].upper()}"
        formatted = ", ".join(accommodations)
        return {
            "status": "submitted",
            "confirmation_code": code,
            "official_note": f"Dear Hiring Team, applicant {applicant_name} has requested the following verified accommodations: {formatted}."
        }
