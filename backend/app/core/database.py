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
    try:
        with engine.connect() as conn:
            conn.execute(text("CREATE EXTENSION IF NOT EXISTS vector"))
            conn.execute(text("ALTER TABLE IF EXISTS user_profiles ADD COLUMN IF NOT EXISTS auto_voice BOOLEAN DEFAULT FALSE"))
            conn.commit()

        # Import models so Base.metadata knows about all tables
        import app.modules.tutor.models  # noqa
        import app.core.user_settings   # noqa
        import app.modules.channels.sms_models  # noqa

        Base.metadata.create_all(bind=engine)

        # Seed career knowledge for RAG answers about jobs & accommodations
        try:
            from app.modules.career.service import CareerService
            db = SessionLocal()
            CareerService.seed_career_knowledge(db)
            db.close()
        except Exception as e:
            print(f"[InitDB] Career seed warning: {e}", flush=True)

        print("[InitDB] Database tables and pgvector extension initialized successfully.", flush=True)
    except Exception as err:
        print(f"[InitDB] Database connection notice: {err}. Operating with pluggable/fallback capabilities.", flush=True)
