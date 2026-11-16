from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.database import init_db, get_db

# Import individual self-contained feature modules
from app.modules.tutor.router import router as tutor_router
from app.modules.tutor.service import TutorService
from app.modules.tutor import schemas as tutor_schemas
from app.modules.career.router import router as career_router
from app.modules.escalate.router import router as escalate_router
from app.modules.channels.sms_handler import router as sms_router
from app.modules.teacher.router import router as teacher_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Ensure tables and the pgvector extension are created on boot
    init_db()
    yield

app = FastAPI(
    title="Universal Multilingual Assistant & Live Help API",
    description="""
    ## Modular Monolith Architecture
    Self-contained domain modules for:
    - Tutor & RAG Vector Search (pgvector + Gemini AI)
    - Inclusive Career Gateway & Accommodation Requests
    - Human Mentor Escalation & Co-browsing
    - Teacher Intelligence Analytics
    - Low-bandwidth SMS & Telegram Channels
    """,
    version=settings.VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_private_network=True,
)

# 1. Register Feature Modules with API Prefix (/api/v1)
app.include_router(tutor_router, prefix=settings.API_PREFIX)
app.include_router(career_router, prefix=settings.API_PREFIX)
app.include_router(escalate_router, prefix=settings.API_PREFIX)
app.include_router(sms_router, prefix=settings.API_PREFIX)
app.include_router(teacher_router, prefix=settings.API_PREFIX)

# 2. Root-Level Direct Bridges for Widget & Legacy Client Compatibility
@app.post("/tutor/chat", tags=["Widget Compatibility"])
def root_tutor_chat(payload: tutor_schemas.TutorChatRequest, db: Session = Depends(get_db)):
    return TutorService.chat(db, payload)

@app.get("/")
def root():
    return {
        "platform": settings.APP_NAME,
        "version": settings.VERSION,
        "architecture": "Modular Monolith",
        "docs": "/docs",
        "modules": ["tutor", "career", "escalate", "channels", "teacher"],
        "status": "healthy"
    }
