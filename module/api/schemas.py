from pydantic import BaseModel
from typing import List, Optional

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
