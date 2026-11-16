FROM python:3.11-slim

WORKDIR /app

# Install dependencies first (caches this layer to speed up future builds)
COPY requirements.txt .
RUN pip install torch --index-url https://download.pytorch.org/whl/cpu
RUN pip install --default-timeout=1000 -r requirements.txt

# Copy the rest of the application code
COPY . .
