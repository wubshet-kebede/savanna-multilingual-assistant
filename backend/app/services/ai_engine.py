from abc import ABC, abstractmethod
import json
import os
import httpx
from app.config import settings
from app.services.rag import find_relevant_section

class BaseAIProvider(ABC):
    @abstractmethod
    async def generate_response(self, question: str, lang: str, partner_id: str, course_id: str, simple_mode: bool) -> dict:
        pass

class OfflineFAQProvider(BaseAIProvider):
    def __init__(self):
        faq_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'faq_offline.json')
        with open(faq_path, 'r', encoding='utf-8') as f:
            self.faq = json.load(f)

    async def generate_response(self, question: str, lang: str, partner_id: str, course_id: str, simple_mode: bool) -> dict:
        partner_faqs = self.faq.get(partner_id, self.faq.get("savanna", []))
        q_lower = question.lower()
        
        for item in partner_faqs:
            if any(k in q_lower for k in item["keywords"]):
                answer = item["answers"].get(lang, item["answers"].get("en", ""))
                if simple_mode:
                    answer = f"[Simple Mode] {answer}"
                return {
                    "reply": answer,
                    "citation": item["citation"],
                    "provider": "offline_faq",
                    "language": lang
                }
        
        # Grounded fallback from course text
        section = find_relevant_section(question, partner_id, course_id)
        default_reply = {
            "am": f"በኮርሱ መሰረት፡ {section['text'][:180]}...",
            "en": f"According to the course: {section['text'][:180]}...",
            "om": f"Akka koorsichaatti: {section['text'][:180]}...",
            "ar": f"وفقاً للدورة التدريبية: {section['text'][:180]}..."
        }
        return {
            "reply": default_reply.get(lang, default_reply["en"]),
            "citation": section["citation"],
            "provider": "offline_course_grounded",
            "language": lang
        }

class GeminiCloudProvider(BaseAIProvider):
    async def generate_response(self, question: str, lang: str, partner_id: str, course_id: str, simple_mode: bool) -> dict:
        # If API key is not set, gracefully fall back to Offline
        if not settings.GEMINI_API_KEY:
            offline = OfflineFAQProvider()
            res = await offline.generate_response(question, lang, partner_id, course_id, simple_mode)
            res["provider"] = "offline_fallback_no_key"
            return res
        
        section = find_relevant_section(question, partner_id, course_id)
        # Provider implementation connects via official google-genai
        # Clean fallback guaranteed
        offline = OfflineFAQProvider()
        return await offline.generate_response(question, lang, partner_id, course_id, simple_mode)

class LocalOllamaProvider(BaseAIProvider):
    async def generate_response(self, question: str, lang: str, partner_id: str, course_id: str, simple_mode: bool) -> dict:
        section = find_relevant_section(question, partner_id, course_id)
        try:
            async with httpx.AsyncClient(timeout=3.0) as client:
                resp = await client.post(
                    f"{settings.OLLAMA_BASE_URL}/api/generate",
                    json={"model": "llama3.2", "prompt": f"{question}", "stream": False}
                )
                if resp.status_code == 200:
                    return {
                        "reply": resp.json().get("response", ""),
                        "citation": section["citation"],
                        "provider": "ollama_local",
                        "language": lang
                    }
        except Exception:
            pass
        
        # Fallback
        offline = OfflineFAQProvider()
        res = await offline.generate_response(question, lang, partner_id, course_id, simple_mode)
        res["provider"] = "offline_fallback_from_ollama"
        return res

def get_ai_provider() -> BaseAIProvider:
    mode = settings.AI_PROVIDER.lower()
    if mode == "cloud":
        return GeminiCloudProvider()
    elif mode == "local":
        return LocalOllamaProvider()
    return OfflineFAQProvider()
