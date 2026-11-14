# Universal Multilingual Assistant & Live Help Platform

An inclusive, multi-channel educational assistant and career gateway built for learners who think in **Amharic, Afaan Oromo, Tigrinya, Somali, or Arabic**, or who are new to computers.

Designed for **any educational partner** (Savanna, Canvas, Moodle, or standalone websites) via **Three Levels of Integration**.

---

## The Three Levels of Integration

### Level 1: Drop-in Web Component (`widget/assistant.js`)
* **How to install:** Paste one `<script>` tag into any webpage.
* **Component tag:** `<multilingual-assistant partner="savanna" course="VA-1"></multilingual-assistant>`
* **Built-in WCAG 2.2 AA Accessibility:**
  * Screen reader live region (`role="log"` and `aria-live="polite"`)
  * Dynamic multilingual voice switching (`lang="am"`, `dir="rtl"` for Arabic)
  * Accessible learner-controlled screen sharing via `navigator.mediaDevices.getDisplayMedia`
  * Plain-language "Simple Mode" toggle (WCAG 3.1.5)

### Level 2: REST API with OpenAPI Specification (`backend/`)
* **Framework:** Python 3.12 + FastAPI
* **Auto-generated Documentation:** View interactive Swagger docs at `http://localhost:8000/docs`
* **Powers:**
  1. The Web Component
  2. The Telegram Bot (`@SavannaTutorBot`)
  3. Low-bandwidth SMS routes
* **Core Endpoints:**
  * `POST /api/v1/chat`: Grounded multilingual Q&A with course citations
  * `POST /api/v1/escalate`: One-click human mentor dispatch
  * `GET /api/v1/jobs`: Career Gateway listings and accommodation requests
  * `GET /api/v1/teacher/insights`: Anonymized cohort confusion heatmap

### Level 3: Industry & Semantic Standards (`standards/`)
* **`schema.org/JobPosting`:** JSON-LD structured data for accessible job listings
* **LTI 1.3:** Ready for Canvas, Moodle, and Blackboard launch
* **Open Badges 3.0:** Verifiable career readiness assertions

---

## Getting Started (No Heavy Setup)

### Dev 1 (Backend & Telegram):
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
Open `http://localhost:8000/docs` to inspect the Level 2 API.

### Dev 2 (Frontend & Savanna Embed):
Open `widget/test.html` directly in your browser.
To embed into Savanna, add to `Savanna-static-pages/pages/concept-with-navigation.html`:
```html
<script src="../../savanna-multilingual-assistant/widget/assistant.js" defer></script>
<multilingual-assistant partner="savanna" course="VA-1"></multilingual-assistant>
```
