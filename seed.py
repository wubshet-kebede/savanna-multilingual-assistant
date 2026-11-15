import os
import requests
from bs4 import BeautifulSoup

# The folder where your offline LMS HTML files are stored
COURSE_DIRECTORY = "./html_course_files"
API_URL = "http://localhost:8000/api/v1/content"

def extract_text_from_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')
        # Remove script and style elements
        for script in soup(["script", "style"]):
            script.extract()
        return soup.get_text(separator=' ', strip=True)

def chunk_text(text, chunk_size=1000):
    """Splits long text into smaller paragraphs for the vector database."""
    words = text.split()
    for i in range(0, len(words), chunk_size):
        yield " ".join(words[i:i + chunk_size])

def seed_database():
    print("Starting curriculum ingestion...")
    for filename in os.listdir(COURSE_DIRECTORY):
        if filename.endswith(".html"):
            filepath = os.path.join(COURSE_DIRECTORY, filename)
            text = extract_text_from_html(filepath)
            title = filename.replace(".html", "").replace("-", " ").title()

            for chunk in chunk_text(text):
                # Send each chunk to FastAPI to be vectorized and saved in pgvector
                response = requests.post(API_URL, json={
                    "text": chunk,
                    "title": title,
                    "url_id": filename
                })
                if response.status_code == 200:
                    print(f"Ingested chunk from {filename}")
                else:
                    print(f"Failed to ingest chunk from {filename}: {response.text}")

    print("Ingestion complete. The Savanna brain is fully loaded.")

if __name__ == "__main__":
    # Ensure the directory exists before running
    os.makedirs(COURSE_DIRECTORY, exist_ok=True)
    seed_database()
