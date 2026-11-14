from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.api import chat, escalate, jobs, teacher

app = FastAPI(
    title="Universal Multilingual Assistant & Live Help API",
    description="""
    ## The Multi-Partner Inclusive Education Engine
    Provides three levels of integration:
    - **Level 1**: Drop-in Web Component (<script> tag with Shadow DOM)
    - **Level 2**: This REST API with OpenAPI Specification
    - **Level 3**: Standardized schemas (schema.org/JobPosting & LTI 1.3)
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

app.include_router(chat.router, prefix=settings.API_PREFIX, tags=["Level 2: AI Tutor Chat"])
app.include_router(escalate.router, prefix=settings.API_PREFIX, tags=["Level 2: Human Escalation & Co-Browsing"])
app.include_router(jobs.router, prefix=settings.API_PREFIX, tags=["Level 2 & 3: Career Gateway"])
app.include_router(teacher.router, prefix=settings.API_PREFIX, tags=["Bonus: Teacher Intelligence"])

@app.get("/")
def root():
    return {
        "platform": settings.APP_NAME,
        "version": settings.VERSION,
        "docs": "/docs",
        "status": "healthy"
    }
