from sqlalchemy import Column, Integer, String, Text
from pgvector.sqlalchemy import Vector
from app.core.database import Base

class LessonChunk(Base):
    __tablename__ = "lesson_chunks"

    id = Column(Integer, primary_key=True, index=True)
    url_id = Column(String, index=True)
    title = Column(String)
    content = Column(Text)
    embedding = Column(Vector(384))  # matches all-MiniLM-L6-v2 dimensions
