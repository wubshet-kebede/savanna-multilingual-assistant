import os
import requests
from bs4 import BeautifulSoup

COURSE_DIRECTORY = "./html_course_files"
API_URL = "http://localhost:8000/api/v1/content"

def extract_sections_from_html(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    for selector in ['script', 'style', 'nav', '#sidebar', 'footer', '#layout-bars']:
        for el in soup.select(selector):
            el.decompose()

    container = soup.find('article') or soup.find('main') or soup.body
    if not container:
        return []

    sections = []
    headings = container.find_all(['h1', 'h2', 'h3', 'h4'])
    for h in headings:
        title = h.get_text(strip=True)
        if not title or len(title) < 3 or 'Menu' in title or 'Dashboard' in title:
            continue
        
        anchor = h.find('a', id=True)
        anchor_id = anchor['id'] if anchor and 'id' in anchor.attrs else ''
        url_id = f"{filename}#{anchor_id}" if anchor_id else filename

        content_parts = [title]
        curr = h.find_next_sibling()
        while curr and curr.name not in ['h1', 'h2', 'h3', 'h4']:
            text = curr.get_text(separator=' ', strip=True)
            if text:
                content_parts.append(text)
            curr = curr.find_next_sibling()

        full_content = ' '.join(content_parts).strip()
        if len(full_content) > 40:
            sections.append({
                'title': title,
                'content': full_content,
                'url_id': url_id
            })

    if not sections:
        text = container.get_text(separator=' ', strip=True)
        sections.append({
            'title': filename.replace('.html', '').replace('-', ' ').title(),
            'content': text[:2000],
            'url_id': filename
        })

    return sections

def seed_database():
    print("Starting semantic curriculum ingestion...")
    total_ingested = 0
    for filename in sorted(os.listdir(COURSE_DIRECTORY)):
        if filename.endswith(".html"):
            filepath = os.path.join(COURSE_DIRECTORY, filename)
            sections = extract_sections_from_html(filepath)
            print(f"Ingesting {len(sections)} sections from {filename}...")

            for sec in sections:
                response = requests.post(API_URL, json={
                    "text": sec["content"],
                    "title": sec["title"],
                    "url_id": sec["url_id"]
                })
                if response.status_code == 200:
                    total_ingested += 1
                    print(f"  ✓ [{sec['title']}] -> {sec['url_id']}")
                else:
                    print(f"  ✗ Failed [{sec['title']}]: {response.text}")

    print(f"Ingestion complete. Vectorized {total_ingested} distinct semantic sections into Savanna brain.")

if __name__ == "__main__":
    os.makedirs(COURSE_DIRECTORY, exist_ok=True)
    seed_database()
