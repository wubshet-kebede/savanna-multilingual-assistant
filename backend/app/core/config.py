import os
from pydantic import BaseModel

class Settings(BaseModel):
    APP_NAME: str = "Universal Multilingual Assistant & Live Help"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api/v1"

    # Database
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "postgresql+psycopg2://admin:password@localhost:5432/savanna_db"
    )

    # Embedding model for vector semantic search
    EMBEDDING_MODEL: str = os.getenv("EMBEDDING_MODEL", "all-MiniLM-L6-v2")

    # Pluggable AI layer: cloud, local, or offline
    AI_PROVIDER: str = os.getenv("AI_PROVIDER", "cloud")
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    OLLAMA_BASE_URL: str = os.getenv("OLLAMA_BASE_URL", "http://ollama:11434")

    # Telegram Bot
    TELEGRAM_BOT_TOKEN: str = os.getenv("TELEGRAM_BOT_TOKEN", "")
    TELEGRAM_MENTOR_CHAT_ID: str = os.getenv("TELEGRAM_MENTOR_CHAT_ID", "")

settings = Settings()
