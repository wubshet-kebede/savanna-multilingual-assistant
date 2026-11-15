import os
import json
import urllib.request
import urllib.error
from abc import ABC, abstractmethod

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
        api_key = os.getenv("GEMINI_API_KEY", "YOUR_GEMINI_API_KEY_HERE")
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"

        nl = chr(10)
        context_str = nl.join(context)
        prompt = f"You are a helpful Savanna teaching assistant.{nl}Answer the user's question using ONLY the following course material.{nl}{nl}Course Material:{nl}{context_str}{nl}{nl}Question: {query}"

        payload = {
            "contents": [{
                "parts": [{"text": prompt}]
            }]
        }

        data = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})

        try:
            with urllib.request.urlopen(req, timeout=5) as response:
                result = json.loads(response.read().decode('utf-8'))
                return result['candidates'][0]['content']['parts'][0]['text']
        except Exception as e:
            return f"Cloud API Error: {str(e)}"

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
            'http://ollama:11434/api/generate',
            data=data,
            headers={'Content-Type': 'application/json'}
        )

        try:
            with urllib.request.urlopen(req, timeout=4) as response:
                result = json.loads(response.read().decode('utf-8'))
                return result.get("response", "I could not generate an answer.")
        except Exception as e:
            if context:
                first_ctx = context[0]
                if ":" in first_ctx:
                    first_ctx = first_ctx.split(":", 1)[1].strip()
                if len(first_ctx) > 380:
                    first_ctx = first_ctx[:380] + "..."
                return f"Based on the course materials: {first_ctx}"
            return "I could not find a clear answer in the offline curriculum."

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

    def route_query(self, query: str, context: list[str]) -> str:
        is_online = self.check_connection()
        gemini_key = os.getenv("GEMINI_API_KEY")

        if is_online and gemini_key and gemini_key != "YOUR_GEMINI_API_KEY_HERE":
            ans = self.cloud_engine.generate(query, context)
            if not ans.startswith("Cloud API Error:"):
                return ans

        return self.local_engine.generate(query, context)

_router = LLMRouter()

def get_answer(query: str, context: list[str]) -> str:
    return _router.route_query(query, context)
