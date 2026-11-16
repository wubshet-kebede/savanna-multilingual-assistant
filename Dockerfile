FROM python:3.11-slim

WORKDIR /app

# Install system dependencies (curl for healthchecks)
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies first (caches this layer to speed up builds)
COPY backend/requirements.txt .
RUN pip install --no-cache-dir torch --index-url https://download.pytorch.org/whl/cpu
RUN pip install --no-cache-dir --default-timeout=1000 -r requirements.txt

# Copy both backend and client frontend files
COPY backend/ ./backend/
COPY html_course_files/ ./html_course_files/
COPY widget/ ./widget/
COPY assets/ ./assets/
COPY standards/ ./standards/

WORKDIR /app/backend

# Render / Cloud hosts pass the port via $PORT (defaults to 8000)
ENV PORT=8000
EXPOSE 8000

CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
