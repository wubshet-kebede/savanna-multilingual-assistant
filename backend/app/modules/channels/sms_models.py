from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, func
from app.core.database import Base

class SMSProfile(Base):
    """
    Persistent learner profile associated with a mobile phone number.
    Maintains preferred learning language and cognitive simple-mode settings
    across low-bandwidth 2G SMS sessions.
    """
    __tablename__ = "sms_profiles"

    phone_number = Column(String(32), primary_key=True, index=True)
    language = Column(String(10), default="en", nullable=False)
    simple_mode = Column(Boolean, default=False, nullable=False)
    total_queries = Column(Integer, default=0, nullable=False)
    last_seen = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

class SMSLog(Base):
    """
    Audit log for inbound and outbound SMS messages.
    Records character counts to ensure compliance with the GSM-7 160-character
    single-segment limit and tracks RAG engine performance.
    """
    __tablename__ = "sms_logs"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    phone_number = Column(String(32), index=True, nullable=False)
    inbound_body = Column(Text, nullable=False)
    reply_text = Column(String(160), nullable=False)
    char_count = Column(Integer, nullable=False)
    engine = Column(String(64), nullable=True)
    citation = Column(String(128), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
