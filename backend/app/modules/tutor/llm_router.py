import os
import json
import urllib.request
import urllib.error
from abc import ABC, abstractmethod
from app.core.config import settings

# ==========================================
# 1. The Interface
# ==========================================
class LLMEngine(ABC):
    @abstractmethod
    def generate(self, query: str, context: list[str]) -> str:
        """Takes the user's query and the RAG context, returns the AI's answer."""
        pass

# ==========================================
# 2. The Cloud Engine (Gemini)
# ==========================================
class CloudLLM(LLMEngine):
    def generate(self, query: str, context: list[str]) -> str:
        api_key = settings.GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")
        nl = chr(10)
        context_str = nl.join(context)
        prompt = (
            f"You are a helpful Savanna teaching assistant.{nl}"
            f"Answer the user's question accurately using ONLY the following course material.{nl}"
            f"Format your response clearly with concise paragraphs and clean bullet points for lists.{nl}"
            f"Use **bold** for key terms and concepts.{nl}{nl}"
            f"Course Material:{nl}{context_str}{nl}{nl}"
            f"Question: {query}"
        )

        payload = {
            "contents": [{
                "parts": [{"text": prompt}]
            }]
        }
        data = json.dumps(payload).encode('utf-8')

        # Fast resilient fallback sequence across Gemini tiers
        candidate_models = ["gemini-3.1-flash-lite-preview", "gemini-3.8-flash", "gemini-flash-latest"]
        last_error = ""

        for model_name in candidate_models:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
            req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
            try:
                with urllib.request.urlopen(req, timeout=15) as response:
                    result = json.loads(response.read().decode('utf-8'))
                    return result['candidates'][0]['content']['parts'][0]['text']
            except Exception as e:
                last_error = str(e)
                print(f"[CloudLLM] {model_name} failed ({last_error}), trying next model...")
                continue

        return f"Cloud API Error: {last_error}"

# ==========================================
# 3. The Local Engine (Ollama / Qwen)
# ==========================================
class LocalLLM(LLMEngine):
    def generate(self, query: str, context: list[str]) -> str:
        nl = chr(10)
        context_str = nl.join(context)
        prompt = f"You are a helpful Savanna teaching assistant.{nl}Answer the user's question using ONLY the following course material.{nl}If the answer is not in the material, say you don't know.{nl}{nl}Course Material:{nl}{context_str}{nl}{nl}Question: {query}{nl}Answer:"

        payload = {
            "model": "qwen2.5:0.5b",
            "prompt": prompt,
            "stream": False
        }
        data = json.dumps(payload).encode('utf-8')

        req = urllib.request.Request(
            f"{settings.OLLAMA_BASE_URL}/api/generate",
            data=data,
            headers={'Content-Type': 'application/json'}
        )

        try:
            with urllib.request.urlopen(req, timeout=4) as response:
                result = json.loads(response.read().decode('utf-8'))
                return result.get("response", "I could not generate an answer.")
        except Exception:
            if context:
                first_ctx = context[0]
                if ":" in first_ctx:
                    first_ctx = first_ctx.split(":", 1)[1].strip()
                if len(first_ctx) > 380:
                    first_ctx = first_ctx[:380] + "..."
                return f"Based on the course materials: {first_ctx}"
            return "I couldn't find any relevant information about that in the course material."

# ==========================================
# 4. The Router (The Socket)
# ==========================================
class LLMRouter:
    def __init__(self):
        self.cloud_engine = CloudLLM()
        self.local_engine = LocalLLM()

    def check_connection(self) -> bool:
        try:
            urllib.request.urlopen('https://www.google.com', timeout=2)
            return True
        except urllib.error.HTTPError:
            return True
        except Exception:
            return False

    def route_query(self, query: str, context: list[str]) -> tuple[str, str]:
        is_online = self.check_connection()
        gemini_key = settings.GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")

        if is_online and gemini_key and gemini_key.strip() and gemini_key != "YOUR_GEMINI_API_KEY_HERE":
            print("[Router] Network detected and GEMINI_API_KEY set. Routing to Cloud (Gemini)...")
            ans = self.cloud_engine.generate(query, context)
            if not ans.startswith("Cloud API Error:"):
                return ans, "gemini-3.8-flash"
            print(f"[Router] Cloud engine error ({ans}). Falling back to local/offline engine...")

        print("[Router] Routing to Local / Offline engine...")
        ans = self.local_engine.generate(query, context)
        engine = "ollama" if not ans.startswith("Based on the course materials:") else "offline-rag"
        return ans, engine

_router = LLMRouter()

def get_answer_with_engine(query: str, context: list[str]) -> tuple[str, str]:
    return _router.route_query(query, context)

def get_answer(query: str, context: list[str]) -> str:
    ans, _ = _router.route_query(query, context)
    return ans
