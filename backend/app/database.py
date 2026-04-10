from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from app.config import settings

engine = create_engine(
    settings.DATABASE_URL,
    connect_args={"check_same_thread": False},
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def ensure_sqlite_compatibility_migrations() -> None:
    # Keep startup resilient for existing local SQLite databases without Alembic.
    if not settings.DATABASE_URL.startswith("sqlite"):
        return

    with engine.begin() as conn:
        columns = conn.exec_driver_sql("PRAGMA table_info(users)").fetchall()
        column_names = {row[1] for row in columns}
        if "kubeconfig" not in column_names:
            conn.exec_driver_sql("ALTER TABLE users ADD COLUMN kubeconfig TEXT")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


ensure_sqlite_compatibility_migrations()
