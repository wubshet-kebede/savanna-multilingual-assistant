import os
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from models import Base

# Pulls the exact URL from your docker-compose.yml (falls back to localhost if run outside Docker)
SQLALCHEMY_DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql+psycopg2://admin:password@localhost:5432/savanna_db"
)

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_db():
    with engine.connect() as conn:
        conn.execute(text("CREATE EXTENSION IF NOT EXISTS vector"))
        conn.commit()
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    init_db()
    print("Database tables and pgvector extension initialized.")