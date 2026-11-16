from app.modules.teacher.service import TeacherService

class EscalateService:
    @staticmethod
    def dispatch_human_mentor(learner_id: str, partner_id: str, course_id: str, language: str) -> dict:
        session_id = f"session_{partner_id}_{learner_id}"
        # Notify Teacher Intelligence anonymously that a student requested live help
        TeacherService.record_escalation(course_id=course_id, topic="Course Clarification", language=language)
        return {
            "status": "connected",
            "session_id": session_id,
            "mentor_assigned": "Tunde (Multilingual Coach)",
            "message": "Human mentor alerted. Learner-controlled screen sharing is ready to activate."
        }
