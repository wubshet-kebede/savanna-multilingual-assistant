from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.config import settings

engine = create_engine(settings.DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    with engine.connect() as conn:
        conn.execute(text("CREATE EXTENSION IF NOT EXISTS vector"))
        conn.execute(text("ALTER TABLE IF EXISTS user_profiles ADD COLUMN IF NOT EXISTS auto_voice BOOLEAN DEFAULT FALSE"))
        conn.commit()

    # Import models so Base.metadata knows about all tables
    import app.modules.tutor.models  # noqa
    import app.core.user_settings   # noqa
    import app.modules.channels.sms_models  # noqa

    Base.metadata.create_all(bind=engine)
