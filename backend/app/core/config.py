import os
from pydantic import BaseModel

class Settings(BaseModel):
    APP_NAME: str = "Universal Multilingual Assistant & Live Help"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api/v1"
    
    # Pluggable AI layer: cloud, local, or offline
    AI_PROVIDER: str = os.getenv("AI_PROVIDER", "offline")  # 'cloud' | 'local' | 'offline'
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    OLLAMA_BASE_URL: str = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
    
    # Telegram Bot
    TELEGRAM_BOT_TOKEN: str = os.getenv("TELEGRAM_BOT_TOKEN", "")
    TELEGRAM_MENTOR_CHAT_ID: str = os.getenv("TELEGRAM_MENTOR_CHAT_ID", "")

settings = Settings()
