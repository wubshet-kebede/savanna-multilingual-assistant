from fastapi import APIRouter

router = APIRouter()

@router.get("/teacher/insights")
async def get_teacher_insights(partner_id: str = "savanna", course_id: str = "VA-1"):
    # Anonymized data without learner identities (Privacy compliant)
    return {
        "partner_id": partner_id,
        "course_id": course_id,
        "total_questions": 142,
        "escalated_to_human_count": 8,
        "top_confusing_topics": [
            {"topic": "AI Assistant vs Human Remote VA", "count": 62, "status": "needs_clarification"},
            {"topic": "Remote Work Timezones & EAT", "count": 34, "status": "normal"},
            {"topic": "Proposal Pricing in USD", "count": 29, "status": "normal"}
        ],
        "language_distribution": {
            "am": "48%",
            "om": "22%",
            "en": "18%",
            "ti": "8%",
            "ar": "4%"
        }
    }
