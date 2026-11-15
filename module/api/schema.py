from pydantic import BaseModel
from typing import List

class ChunkBase(BaseModel):
    url_id: str
    title: str
    content: str

class ContentIngestRequest(BaseModel):
    chunks: List[ChunkBase]

class AskRequest(BaseModel):
    query: str

class SourceDetail(BaseModel):
    title: str
    url: str

class AskResponse(BaseModel):
    answer: str
    sources: List[SourceDetail]