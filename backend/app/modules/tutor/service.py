import json
import os
import httpx
from app.core.config import settings
from app.core.languages import get_language_metadata

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')

class TutorService:
    @staticmethod
    def get_course_data(partner_id: str = "savanna", course_id: str = "VA-1") -> dict:
        filename = f"{partner_id}_{course_id.lower().replace('-', '')}.json"
        path = os.path.join(DATA_DIR, filename)
        if not os.path.exists(path):
            path = os.path.join(DATA_DIR, "savanna_va1.json")
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)

    @staticmethod
    def find_relevant_section(query: str, partner_id: str = "savanna", course_id: str = "VA-1") -> dict:
        data = TutorService.get_course_data(partner_id, course_id)
        q_lower = query.lower()
        for module in data.get("modules", []):
            for sec in module.get("sections", []):
                words = sec["heading"].lower().split()
                if any(w in q_lower for w in words if len(w) > 3):
                    return sec
        return data["modules"][0]["sections"][0]

    @classmethod
    async def get_answer(cls, question: str, lang: str, partner_id: str, course_id: str, simple_mode: bool) -> dict:
        # 1. Offline FAQ Check (Instant fallback)
        faq_path = os.path.join(DATA_DIR, "faq_offline.json")
        if os.path.exists(faq_path):
            with open(faq_path, "r", encoding="utf-8") as f:
                faqs = json.load(f).get(partner_id, [])
            q_lower = question.lower()
            for item in faqs:
                if any(k in q_lower for k in item["keywords"]):
                    ans = item["answers"].get(lang, item["answers"].get("en", ""))
                    if simple_mode:
                        ans = f"[Simple Mode] {ans}"
                    return {
                        "reply": ans,
                        "citation": item["citation"],
                        "provider": "offline_faq",
                        "language": lang
                    }

        # 2. Local Ollama Check (if active)
        if settings.AI_PROVIDER == "local":
            try:
                async with httpx.AsyncClient(timeout=3.0) as client:
                    resp = await client.post(
                        f"{settings.OLLAMA_BASE_URL}/api/generate",
                        json={"model": "llama3.2", "prompt": question, "stream": False}
                    )
                    if resp.status_code == 200:
                        sec = cls.find_relevant_section(question, partner_id, course_id)
                        return {
                            "reply": resp.json().get("response", ""),
                            "citation": sec["citation"],
                            "provider": "ollama_local",
                            "language": lang
                        }
            except Exception:
                pass

        # 3. Grounded fallback directly from course text
        sec = cls.find_relevant_section(question, partner_id, course_id)
        replies = {
            "am": f"በኮርሱ መሰረት፡ {sec['text'][:200]}...",
            "en": f"According to the course: {sec['text'][:200]}...",
            "om": f"Akka koorsichaatti: {sec['text'][:200]}...",
            "ar": f"وفقاً للدورة التدريبية: {sec['text'][:200]}..."
        }
        ans = replies.get(lang, replies["en"])
        if simple_mode:
            ans = f"[Simple Mode] {ans}"
        return {
            "reply": ans,
            "citation": sec["citation"],
            "provider": "course_grounded_fallback",
            "language": lang
        }
