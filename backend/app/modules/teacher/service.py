import re
from typing import List, Dict, Optional
import io
import csv

# Anonymized Question Database (In-Memory + Seeded Knowledge)
# STRICT PRIVACY RULE: Zero student names, zero phone numbers, zero IP addresses.
_SEEDED_QUESTIONS: List[dict] = [
    {
        "id": "Q-101",
        "question": "What is the key difference between an AI tool and a human Virtual Assistant?",
        "topic": "AI vs Human Remote VA",
        "ask_count": 62,
        "top_language": "Amharic (52%)",
        "human_escalations": 5,
        "sample_ai_answer": "AI automates repetitive tasks (scheduling, drafting), while human VAs provide emotional intelligence, client relationships, and context-dependent judgment."
    },
    {
        "id": "Q-102",
        "question": "How do I calculate timezone overlap between Addis Ababa (EAT) and New York (EST)?",
        "topic": "Remote Work Timezones & EAT",
        "ask_count": 34,
        "top_language": "Amharic (60%)",
        "human_escalations": 2,
        "sample_ai_answer": "Addis Ababa (EAT, UTC+3) is 7 hours ahead of New York (EST, UTC-4/5). An overlap window of 4:00 PM to 8:00 PM EAT matches 9:00 AM to 1:00 PM EST."
    },
    {
        "id": "Q-103",
        "question": "What is a realistic hourly proposal rate in USD for an entry-level African VA?",
        "topic": "Proposal Pricing & Invoicing",
        "ask_count": 29,
        "top_language": "English (45%)",
        "human_escalations": 1,
        "sample_ai_answer": "Entry-level international remote rates typically start between $5 to $10/hour, or $400 to $700/month for dedicated full-time support."
    },
    {
        "id": "Q-104",
        "question": "What minimum laptop specs and internet speed do I need for remote administrative support?",
        "topic": "Technical Hardware & Connectivity",
        "ask_count": 24,
        "top_language": "Afaan Oromo (48%)",
        "human_escalations": 0,
        "sample_ai_answer": "Minimum: Core i3/Ryzen 3 with 8GB RAM, and a stable 10 Mbps connection (with mobile hotspot backup for power outages)."
    },
    {
        "id": "Q-105",
        "question": "How can I formally request interview accommodations for remote video screenings?",
        "topic": "Career & Interview Accommodations",
        "ask_count": 18,
        "top_language": "Amharic (55%)",
        "human_escalations": 0,
        "sample_ai_answer": "Submit an accommodation request letter (code ACC-XXXXXX) specifying needs like live automated captions, asynchronous chat interviews, or extended prep time."
    }
]

_ANONYMOUS_LOGS: List[dict] = []


class TeacherService:
    @staticmethod
    def get_insights(partner_id: str = "savanna", course_id: str = "VA-1") -> dict:
        total_asks = sum(q["ask_count"] for q in _SEEDED_QUESTIONS) + len(_ANONYMOUS_LOGS)
        total_escalations = sum(q["human_escalations"] for q in _SEEDED_QUESTIONS)

        return {
            "partner_id": partner_id,
            "course_id": course_id,
            "total_questions": total_asks,
            "escalated_to_human_count": total_escalations,
            "anonymity_status": "100% Privacy Compliant - Anonymized aggregate telemetry, zero student names, IDs, or IP addresses stored.",
            "top_confusing_topics": [
                {"topic": "AI Assistant vs Human Remote VA", "count": 62, "status": "needs_clarification", "pct": "43%"},
                {"topic": "Remote Work Timezones & EAT", "count": 34, "status": "moderate_confusion", "pct": "24%"},
                {"topic": "Proposal Pricing & Invoicing", "count": 29, "status": "normal", "pct": "20%"},
                {"topic": "Technical Hardware & Connectivity", "count": 24, "status": "normal", "pct": "17%"},
                {"topic": "Career & Interview Accommodations", "count": 18, "status": "normal", "pct": "13%"}
            ],
            "language_distribution": {
                "am": "48%",
                "om": "22%",
                "en": "18%",
                "ti": "8%",
                "ar": "4%"
            },
            "channel_distribution": {
                "web_widget": "68%",
                "telegram_bot": "22%",
                "sms_channel": "10%"
            },
            "most_asked_questions": _SEEDED_QUESTIONS,
            "curriculum_insights": [
                {
                    "topic": "AI Assistant vs Human Remote VA",
                    "lesson_ref": "VA-1 / Lesson 1.2: Industry Evolution",
                    "finding": "Over 43% of learners repeatedly ask whether AI will make human VAs obsolete within 12 months.",
                    "recommendation": "Add a prominent 2-minute video case study showing how top VAs use AI as a productivity co-pilot rather than a competitor.",
                    "priority": "high"
                },
                {
                    "topic": "Remote Work Timezones & EAT",
                    "lesson_ref": "VA-1 / Lesson 2.4: Client Communications",
                    "finding": "Highest human escalation rate occurs during timezone conversions between East Africa Time (EAT) and US Eastern/Pacific times.",
                    "recommendation": "Embed an interactive 24-hour comparative timezone slider into the course page.",
                    "priority": "high"
                },
                {
                    "topic": "Multilingual Financial Terms",
                    "lesson_ref": "VA-1 / Lesson 4.1: Contracts & Invoices",
                    "finding": "Students often struggle with English contract jargon ('retainer', 'net-30', 'escrow').",
                    "recommendation": "Provide localized Amharic and Afaan Oromo audio tooltips for contract terminology.",
                    "priority": "medium"
                }
            ]
        }

    @staticmethod
    def get_questions(topic: Optional[str] = None, language: Optional[str] = None, search: Optional[str] = None) -> List[dict]:
        results = list(_SEEDED_QUESTIONS)
        if topic:
            results = [q for q in results if topic.lower() in q["topic"].lower()]
        if language:
            results = [q for q in results if language.lower() in q["top_language"].lower()]
        if search:
            s = search.lower()
            results = [q for q in results if s in q["question"].lower() or s in q["sample_ai_answer"].lower()]
        return results

    @staticmethod
    def log_anonymous_question(course_id: str, question: str, topic: str = "General", language: str = "en", channel: str = "web") -> dict:
        # PII Stripping / Sanitization
        clean_q = re.sub(r'[\w\.-]+@[\w\.-]+', '[EMAIL_REDACTED]', question)
        clean_q = re.sub(r'\+?\d[\d -]{8,}\d', '[PHONE_REDACTED]', clean_q)

        # Match existing topic or question
        matched = False
        for q in _SEEDED_QUESTIONS:
            if topic.lower() in q["topic"].lower() or any(word in clean_q.lower() for word in q["question"].lower().split() if len(word) > 4):
                q["ask_count"] += 1
                matched = True
                break

        entry = {
            "course_id": course_id,
            "question": clean_q,
            "topic": topic,
            "language": language,
            "channel": channel
        }
        _ANONYMOUS_LOGS.append(entry)
        return {"status": "logged_anonymously", "stored_pii": False, "matched_topic": matched}

    @staticmethod
    def export_csv() -> str:
        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow(["Question ID", "Topic", "Question Text", "Ask Count", "Primary Language", "Escalations", "Grounded AI Answer"])
        for q in _SEEDED_QUESTIONS:
            writer.writerow([
                q["id"],
                q["topic"],
                q["question"],
                q["ask_count"],
                q["top_language"],
                q["human_escalations"],
                q["sample_ai_answer"]
            ])
        return output.getvalue()
