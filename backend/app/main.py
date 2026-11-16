import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.database import init_db, get_db

# Import individual self-contained feature modules
from app.modules.tutor.router import router as tutor_router
from app.modules.tutor.service import TutorService
from app.modules.tutor import schemas as tutor_schemas
from app.modules.career.router import router as career_router
from app.modules.career.service import CareerService
from app.modules.career import schemas as career_schemas
from app.modules.escalate.router import router as escalate_router
from app.modules.escalate.service import EscalateService
from app.modules.escalate import schemas as escalate_schemas
from app.modules.channels.sms_handler import router as sms_router, process_inbound_sms
from app.modules.channels.telegram_router import router as telegram_router
from app.modules.teacher.router import router as teacher_router
from app.modules.teacher.service import TeacherService
from app.modules.lti.router import router as lti_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Ensure tables and the pgvector extension are created on boot
    init_db()

    # Start Telegram bot polling if token is configured in .env
    from app.modules.channels.telegram_bot import run_telegram_bot_service
    bot_task = None
    token = settings.TELEGRAM_BOT_TOKEN or ""
    if token and token.strip() not in ["", "YOUR_TELEGRAM_BOT_TOKEN_HERE"]:
        bot_task = asyncio.create_task(run_telegram_bot_service())

    yield

    if bot_task:
        bot_task.cancel()
        try:
            await bot_task
        except (asyncio.CancelledError, Exception):
            pass

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
app.include_router(telegram_router, prefix=settings.API_PREFIX)
app.include_router(teacher_router, prefix=settings.API_PREFIX)
app.include_router(lti_router, prefix=settings.API_PREFIX)

# 2. Root-Level Direct Bridges for Widget, SMS, & Legacy Client Compatibility
@app.post("/tutor/chat", tags=["Widget Compatibility"])
def root_tutor_chat(payload: tutor_schemas.TutorChatRequest, db: Session = Depends(get_db)):
    return TutorService.chat(db, payload)

@app.get("/career/jobs", tags=["Module 2: Career Gateway (Level 3)"])
async def root_career_jobs(partner_id: str = "savanna"):
    return CareerService.get_jobs(partner_id)

@app.post("/career/accommodations", tags=["Module 2: Career Gateway (Level 3)"])
async def root_career_accommodations(req: career_schemas.AccommodationRequest):
    return CareerService.create_accommodation_request(req.job_id, req.applicant_name, req.accommodations)

@app.post("/career/alerts/broadcast", tags=["Module 2: Career Gateway (Level 3)"])
async def root_career_alerts_broadcast(job_id: str = "job_01"):
    return CareerService.broadcast_job_alert(job_id)

@app.post("/sms/inbound", tags=["Module 4: Low-Bandwidth SMS Route"])
async def root_sms_inbound_post(request: Request, db: Session = Depends(get_db)):
    """
    Direct root bridge satisfying hackathon specification:
    POST /sms/inbound receives a phone number and text message,
    sends the question to the RAG system, limits the response to 160 characters,
    and returns plain text.
    """
    return await process_inbound_sms(request, db)

@app.get("/sms/inbound", tags=["Module 4: Low-Bandwidth SMS Route"])
async def root_sms_inbound_get(request: Request, db: Session = Depends(get_db)):
    """Diagnostic and telecom webhook verification for GET /sms/inbound."""
    return await process_inbound_sms(request, db)

@app.get("/teacher/insights", tags=["Module 5: Anonymized Teacher Intelligence"])
async def root_teacher_insights(partner_id: str = "savanna", course_id: str = "VA-1"):
    return TeacherService.get_insights(partner_id, course_id)

@app.get("/teacher/questions", tags=["Module 5: Anonymized Teacher Intelligence"])
async def root_teacher_questions(topic: str = None, language: str = None, search: str = None):
    return TeacherService.get_questions(topic, language, search)

@app.post("/escalate", tags=["Module 3: Human Help & Co-Browsing"])
async def root_escalate(req: escalate_schemas.EscalateRequest):
    return EscalateService.dispatch_human_mentor(req.learner_id, req.partner_id, req.course_id, req.language)

@app.get("/lti/jwks", tags=["Module 6: LTI 1.3 LMS Integration"])
async def root_lti_jwks():
    from app.modules.lti.router import PUBLIC_JWKS
    return PUBLIC_JWKS

@app.get("/lti/login", tags=["Module 6: LTI 1.3 LMS Integration"])
@app.post("/lti/login", tags=["Module 6: LTI 1.3 LMS Integration"])
async def root_lti_login(request: Request):
    from app.modules.lti.router import oidc_login_initiation
    return await oidc_login_initiation(request)

@app.post("/lti/launch", tags=["Module 6: LTI 1.3 LMS Integration"])
@app.get("/lti/launch", tags=["Module 6: LTI 1.3 LMS Integration"])
async def root_lti_launch(request: Request):
    from app.modules.lti.router import lti_launch
    return await lti_launch(request)

@app.get("/")
def root():
    return {
        "platform": settings.APP_NAME,
        "version": settings.VERSION,
        "architecture": "Modular Monolith",
        "docs": "/docs",
        "modules": ["tutor", "career", "escalate", "channels", "teacher", "lti"],
        "status": "healthy"
    }
