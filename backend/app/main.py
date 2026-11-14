from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

# Import individual self-contained feature modules
from app.modules.tutor.router import router as tutor_router
from app.modules.career.router import router as career_router
from app.modules.escalate.router import router as escalate_router
from app.modules.channels.sms_handler import router as sms_router
from app.modules.teacher.router import router as teacher_router

app = FastAPI(
    title="Universal Multilingual Assistant & Live Help API",
    description="""
    ## Feature-Based / Module-Based Inclusive Education Engine
    Built for learners thinking in Amharic, Oromo, Tigrinya, Somali, or Arabic.
    Supports Three Levels of Integration across ANY partner platform.
    """,
    version=settings.VERSION,
    docs_url="/docs",
    redoc_url="/redoc"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Feature Modules
app.include_router(tutor_router, prefix=settings.API_PREFIX)
app.include_router(career_router, prefix=settings.API_PREFIX)
app.include_router(escalate_router, prefix=settings.API_PREFIX)
app.include_router(sms_router, prefix=settings.API_PREFIX)
app.include_router(teacher_router, prefix=settings.API_PREFIX)

@app.get("/")
def root():
    return {
        "platform": settings.APP_NAME,
        "version": settings.VERSION,
        "docs": "/docs",
        "modules": ["tutor", "career", "escalate", "channels", "teacher"],
        "status": "healthy"
    }
