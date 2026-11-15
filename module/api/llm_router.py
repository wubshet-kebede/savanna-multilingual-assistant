import os
import json
import urllib.request
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

        context_str = "\n".join(context)
        prompt = f"""You are a helpful Savanna teaching assistant.
Answer the user's question using ONLY the following course material.

Course Material:
{context_str}

Question: {query}"""

        payload = {
            "contents": [{
                "parts": [{"text": prompt}]
            }]
        }

        data = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})

        try:
            with urllib.request.urlopen(req) as response:
                result = json.loads(response.read().decode('utf-8'))
                # Parse Gemini's specific JSON response structure
                return result['candidates'][0]['content']['parts'][0]['text']
        except Exception as e:
            return f"Cloud API Error: {str(e)}"

# ==========================================
# 3. The Local Engine (Ollama / Qwen)
# ==========================================
class LocalLLM(LLMEngine):
    def generate(self, query: str, context: list[str]) -> str:
        # 1. Format the strict RAG prompt
        context_str = "\n".join(context)
        prompt = f"""You are a helpful Savanna teaching assistant.
Answer the user's question using ONLY the following course material.
If the answer is not in the material, say you don't know.

Course Material:
{context_str}

Question: {query}
Answer:"""

        # 2. Prepare the payload for Ollama
        payload = {
            "model": "qwen2.5:0.5b",
            "prompt": prompt,
            "stream": False
        }
        data = json.dumps(payload).encode('utf-8')

        # 3. Hit the local Ollama API
        req = urllib.request.Request(
            'http://ollama:11434/api/generate',
            data=data,
            headers={'Content-Type': 'application/json'}
        )

        try:
            with urllib.request.urlopen(req) as response:
                result = json.loads(response.read().decode('utf-8'))
                return result.get("response", "I could not generate an answer.")
        except Exception as e:
            return f"Error communicating with local AI host: {str(e)}"

# ==========================================
# 4. The Router (The "Socket")
# ==========================================
class LLMRouter:
    def __init__(self):
        self.cloud_engine = CloudLLM()
        self.local_engine = LocalLLM()

    def check_connection(self) -> bool:
        """Ping a highly available endpoint to check for internet."""
        try:
            # We ping Google's generative AI endpoint as a direct test
            urllib.request.urlopen('https://generativelanguage.googleapis.com', timeout=2)
            return True
        except Exception:
            return False

    def route_query(self, query: str, context: list[str]) -> str:
        """Determines which AI engine to use based on connectivity."""
        is_online = self.check_connection()

        if is_online:
            print("[Router] Network detected. Routing to Cloud (Gemini)...")
            return self.cloud_engine.generate(query, context)
        else:
            print("[Router] No network detected. Routing to Local (Ollama)...")
            return self.local_engine.generate(query, context)
# Global router instance for endpoint execution
_router = LLMRouter()

def get_answer(query: str, context: list[str]) -> str:
    """Convenience functional interface for FastAPI endpoint."""
    return _router.route_query(query, context)
