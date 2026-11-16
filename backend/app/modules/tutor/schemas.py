from pydantic import BaseModel, Field
from typing import List, Optional, Any

class ChunkBase(BaseModel):
    url_id: Optional[str] = "lesson"
    title: Optional[str] = "Savanna Course Material"
    content: str

class ContentIngestRequest(BaseModel):
    chunks: Optional[List[ChunkBase]] = None
    text: Optional[str] = None
    url_id: Optional[str] = "lesson"
    title: Optional[str] = "Savanna Course Material"

class AskRequest(BaseModel):
    query: str

class SourceDetail(BaseModel):
    title: str
    url: str

class AskResponse(BaseModel):
    answer: str
    sources: List[SourceDetail]
    engine: Optional[str] = "offline-rag"

class CitationInfo(BaseModel):
    title: str
    targetId: Optional[str] = None
    module: str
    excerpt: str

class TutorChatRequest(BaseModel):
    message: Optional[str] = None
    query: Optional[str] = None
    language: Optional[str] = "en"
    partner_id: Optional[str] = "savanna"
    course_id: Optional[str] = "VA-1"
    simple_mode: Optional[bool] = False

class TutorChatResponse(BaseModel):
    reply: str
    citation: Optional[CitationInfo] = None
    language: str = "en"
    engine: Optional[str] = "offline-rag"
