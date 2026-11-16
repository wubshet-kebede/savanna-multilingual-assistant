"""
Persistent user preference and session profile management.
Uses in-memory cache for O(1) synchronous lookups with write-through persistence
to PostgreSQL so language preferences survive container restarts and scale-outs.
"""

from sqlalchemy import Column, BigInteger, String, Boolean, DateTime, func
from app.core.database import Base, SessionLocal

class UserProfile(Base):
    __tablename__ = "user_profiles"

    telegram_id = Column(BigInteger, primary_key=True, index=True)
    language = Column(String(10), default="en", nullable=False)
    simple_mode = Column(Boolean, default=False, nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

# Fast in-memory cache for instant synchronous access
_CACHE: dict[int, dict] = {}

def get_user_settings(user_id: int) -> dict:
    if not user_id:
        return {"lang": "en", "simple_mode": False}

    if user_id in _CACHE:
        return _CACHE[user_id]

    db = SessionLocal()
    try:
        profile = db.query(UserProfile).filter(UserProfile.telegram_id == user_id).first()
        if profile:
            pref = {
                "lang": profile.language or "en",
                "simple_mode": bool(profile.simple_mode)
            }
        else:
            pref = {"lang": "en", "simple_mode": False}
        _CACHE[user_id] = pref
        return pref
    except Exception as e:
        print(f"[UserSettings] DB read fallback: {e}", flush=True)
        return _CACHE.get(user_id, {"lang": "en", "simple_mode": False})
    finally:
        db.close()

def update_user_settings(user_id: int, lang: str = None, simple_mode: bool = None) -> dict:
    if not user_id:
        return {"lang": lang or "en", "simple_mode": bool(simple_mode)}

    current = get_user_settings(user_id)
    new_lang = lang if lang is not None else current["lang"]
    new_simple = simple_mode if simple_mode is not None else current["simple_mode"]

    updated = {"lang": new_lang, "simple_mode": new_simple}
    _CACHE[user_id] = updated

    db = SessionLocal()
    try:
        profile = db.query(UserProfile).filter(UserProfile.telegram_id == user_id).first()
        if not profile:
            profile = UserProfile(telegram_id=user_id, language=new_lang, simple_mode=new_simple)
            db.add(profile)
        else:
            profile.language = new_lang
            profile.simple_mode = new_simple
        db.commit()
    except Exception as e:
        print(f"[UserSettings] DB write error: {e}", flush=True)
        db.rollback()
    finally:
        db.close()

    return updated
