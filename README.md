# 🌐 Universal Multilingual Assistant & Live Help Platform
> **An inclusive educational assistant, career gateway, and educator intelligence engine built for learners who think in Amharic, Afaan Oromo, Tigrinya, Somali, or Arabic, or who are new to computers.**

> ### Demo Links (
> The entire platform is deployed live in production on Render! Judges and reviewers can test all student, educator, and developer features immediately in your browser without installing Docker or local dependencies:
>
> * 🎓 **Student Interactive Course & Multilingual AI Tutor (Client-Side Experience):**  
>   [https://savanna-multilingual-assistant.onrender.com/html_course_files/concept-with-navigation.html](https://savanna-multilingual-assistant.onrender.com/html_course_files/concept-with-navigation.html)  
>   *(Test: Floating AI assistant, Amharic/English answers, voice input, click-to-highlight citations, Plain-Language Simple Mode, screen sharing escalation, and Interview Accommodation letter generator)*
>
> * 👩‍🏫 **Educator Intelligence & Curriculum Confusion Dashboard:**  
>   [https://savanna-multilingual-assistant.onrender.com/html_course_files/teacher-dashboard.html](https://savanna-multilingual-assistant.onrender.com/html_course_files/teacher-dashboard.html)  
>   *(Test: Real-time telemetry, topic confusion heatmaps, instant Amharic/Oromo UI translation, live human escalation counter, and 1-click RFC-4180 CSV report export)*
>
> * ⚡ **Interactive Swagger REST API Documentation (OpenAPI 3.1):**  
>   [https://savanna-multilingual-assistant.onrender.com/docs](https://savanna-multilingual-assistant.onrender.com/docs)  
>   *(Test: Interactive execution of all `/api/v1/tutor`, `/api/v1/career`, `/api/v1/teacher`, and `/sms` endpoints)*
>
> * 📖 **Alternative ReDoc API Specification:**  
>   [https://savanna-multilingual-assistant.onrender.com/redoc](https://savanna-multilingual-assistant.onrender.com/redoc)
>
> * 🧩 **Standalone Drop-In Web Component Sandbox (Level 1 Integration):**  
>   [https://savanna-multilingual-assistant.onrender.com/widget/test.html](https://savanna-multilingual-assistant.onrender.com/widget/test.html)  
>   *(Test: Verifying `<multilingual-assistant>` drop-in web component in an isolated host environment)*
>
> * 📱 **Live 2G SMS Inbound Webhook Endpoint:**  
>   `https://savanna-multilingual-assistant.onrender.com/sms/inbound`  
>   *(Test: Live webhook for Africa's Talking / Twilio, or direct test via cURL with $\le 160$ char guarantees)*

---

## 🎯 The Real-World Mission

In modern digital skills programs across Africa (such as ALX, Savanna, and regional training institutes), students face critical barriers leading to unnecessary dropouts:

1. **The Language & Cognitive Barrier:** Course content is authored 100% in English. When learners who think in regional languages (**Amharic, Afaan Oromo, Tigrinya, Somali, or Arabic**) encounter complex technical terms, translating back and forth into English causes severe cognitive fatigue.
2. **The "New to Computers" Isolation:** Beginners often lack the technical English vocabulary to explain what is broken (e.g. *"My container port mapping failed"*). They feel stuck, and there is no mentor physically present to look over their shoulder.
3. **The Low-Bandwidth Reality:** Students often study under erratic internet or running on 2G feature phones after mobile data packages expire.
4. **The Career & Accommodation Gap:** Completing a course is only half the battle. Disabled or neurodivergent learners frequently hesitate to ask international employers for interview accommodations (e.g., live captions, extra prep time) due to fear of stigma or bias.
5. **The Teacher's Blind Spot:** Instructors have zero visibility into what students are silently struggling with across multiple languages until students fail or abandon the course.

### Our Solution: "One Core, Three Doors"
A unified system delivering:
* **Grounded Multilingual Tutoring:** Strictly curriculum-based answers with clickable paragraph citations in Amharic and English.
* **Omnichannel Access:** Available on **Web**, **Telegram**, and **2G Low-Bandwidth SMS** (guaranteed $\le 160$ chars).
* **One-Click Human Escalation:** Learner-controlled screen sharing (`getDisplayMedia`) with complete context hand-off.
* **Inclusive Career Gateway (Level 3):** Job alerts, `schema.org/JobPosting` compliance, and standardized accommodation tracking letters (`ACC-XXXXXX`).
* **Educator Intelligence (Official Bonus):** Dynamic, multilingual Teacher Dashboard with curriculum confusion heatmaps and zero-PII privacy compliance.

---

## 🏛️ System Architecture: One Core, Three Doors

```
                                OUR CORE SYSTEM
             (pgvector RAG · AI LLM Router · Career Service · Telemetry)
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
     DOOR 1                         DOOR 2                         DOOR 3
  Web Component                    REST API                  Semantic Standards
  (Level 1: Minutes)          (Level 2: Developers)          (Level 3: Universal)
        │                              │                              │
 • <multilingual-assistant>     • FastAPI OpenAPI 3.1 (/docs)  • schema.org/JobPosting
 • Shadow DOM Encapsulated      • Powers Web, TG & 2G SMS      • LTI 1.3 LMS External Tool
 • WCAG 2.2 AA Accessible       • Pluggable AI Router          • Zero-PII Telemetry
```

---

## 🔑 Environment Keys & Setup Guide (Test With Your Own Keys)

The project includes a pre-configured [`.env.example`](file:///.env.example) template. Follow these simple steps to configure your environment:

### Step 1: Create your local `.env` file
```bash
cp .env.example .env
```

### Step 2: Add your credentials to `.env`
Open `.env` in any text editor and paste your keys:

```ini
# ==============================================================================
# 1. Google Gemini AI API Key (Recommended for Cloud RAG & Voice Transcription)
# Get a free key in 30 seconds at: https://aistudio.google.com/app/apikey
# ==============================================================================
GEMINI_API_KEY=put_your_gemini_api_key_here

# ==============================================================================
# 2. Telegram Bot Token (Optional - to test live chat on @Savanna_AI_Tutor_Bot)
# Create a bot via @BotFather on Telegram to get your token:
# ==============================================================================
TELEGRAM_BOT_TOKEN=put_your_telegram_bot_token_here

# ==============================================================================
# 3. Africa's Talking Telecom API (Optional - to test live outbound SMS broadcasts)
# Register a free sandbox account at: https://account.africastalking.com/
# ==============================================================================
AT_USERNAME=sandbox
AT_API_KEY=put_your_africastalking_api_key_here

# ==============================================================================
# 4. Database Configuration (Defaults already work out-of-the-box in Docker)
# ==============================================================================
POSTGRES_USER=admin
POSTGRES_PASSWORD=password
SAVANNA_DB_PORT=5435
```

> [!NOTE]
> **Graceful Zero-Key Fallback Mode:**
> What if you don't have an API key? **No problem!** The system includes an intelligent **Pluggable AI Router**. If `GEMINI_API_KEY` is not provided, the platform automatically falls back to local semantic vector search and offline cached responses. 100% of course questions, SMS keywords (`JOBS`, `ACC`, `HELP`), and the Teacher Dashboard work cleanly out of the box!

---

## ⚡ Quickstart: How to Run in Your Local Machine

### Method A: One-Command Docker Setup (Recommended for Judges)

This launches the FastAPI API, pgvector PostgreSQL database, and Nginx web server in isolated containers.

```bash
# 1. Clone the repository
git clone https://github.com/wubshet-kebede/savanna-multilingual-assistant.git
cd savanna-multilingual-assistant

# 2. Set up environment file
cp .env.example .env

# 3. Launch all containers
docker compose up -d --build
```

#### Verify Containers Are Running:
```bash
docker compose ps
```
You should see 3 healthy services running:
* `savanna-multilingual-assistant-api-1` (Port 8000)
* `savanna-multilingual-assistant-db-1` (Port 5435 $\rightarrow$ internal 5432)
* `savanna-multilingual-assistant-web-1` (Port 8086)

To view live backend logs:
```bash
docker compose logs -f api
```

---

### Method B: Native Local Setup (Without Docker)

If you prefer running services directly on your host machine:

#### 1. Backend Setup:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

#### 2. Web Frontend Setup:
In a separate terminal, serve the static web files:
```bash
npx serve -l 8086 .
```

---

## 🌐 Application URL Directory

You can access each portal either directly via our **live production deployment on Render** (zero installation needed) or on your **local development machine**:

| Portal / Service | 🚀 Live Production URL (Render) | 💻 Local URL | What to Test |
| :--- | :--- | :--- | :--- |
| **Student Web Experience** | [Open Live Course & Tutor](https://savanna-multilingual-assistant.onrender.com/html_course_files/concept-with-navigation.html) | `http://localhost:8086/html_course_files/concept-with-navigation.html` | Floating AI Assistant, voice input, click-to-highlight citations, Simple Mode toggle, Accommodations generator |
| **Educator Intelligence Portal** | [Open Live Teacher Dashboard](https://savanna-multilingual-assistant.onrender.com/html_course_files/teacher-dashboard.html) | `http://localhost:8086/html_course_files/teacher-dashboard.html` | Real-time confusion heatmap, Amharic/Oromo UI language toggle, CSV report export |
| **Interactive OpenAPI Documentation** | [Open Live Swagger UI](https://savanna-multilingual-assistant.onrender.com/docs) | `http://localhost:8000/docs` | Live Swagger UI to execute and inspect every REST endpoint |
| **Alternative ReDoc Specification** | [Open Live ReDoc](https://savanna-multilingual-assistant.onrender.com/redoc) | `http://localhost:8000/redoc` | Clean API schemas and payload models |
| **Web Component Isolated Sandbox** | [Open Live Component Sandbox](https://savanna-multilingual-assistant.onrender.com/widget/test.html) | `http://localhost:8086/widget/test.html` | Standalone testbed verifying `<multilingual-assistant>` drop-in tag |

---

## 🧪 Step-by-Step Testing & Verification Guide

### Test 1: Grounded Multilingual Web Tutor (Voice & Text)
1. Open the live course at **[https://savanna-multilingual-assistant.onrender.com/html_course_files/concept-with-navigation.html](https://savanna-multilingual-assistant.onrender.com/html_course_files/concept-with-navigation.html)** (or local `http://localhost:8086/html_course_files/concept-with-navigation.html`).
2. Click the floating AI Assistant button at the bottom right.
3. Ask a question in English or Amharic:
   * **English:** *"What is the main distinction between an AI assistant and a human Virtual Assistant?"*
   * **Amharic:** *"በ AI እና በሰው Virtual Assistant መካከል ያለው ልዩነት ምንድን ነው?"*
4. **Click the Citation Pill:** Clicking `📌 Source: Module 2 · An Important Distinction` smoothly scrolls the parent lesson page to the exact cited paragraph.

---

### Test 2: Cognitive Accessibility — Plain-Language "Simple Mode" (WCAG 3.1.5)
1. In the Web Assistant header, click **`[ 🧠 Simple Mode ]`**.
2. Ask a complex question. Notice how the AI reduces technical jargon, uses shorter sentences, and formats the output for low cognitive overload.
3. **On Telegram:** Send `/simple` to toggle Plain-Language mode.
4. **On SMS:** Send the text keyword `SIMPLE` to switch your phone number's profile.

---

### Test 3: Production 2G Low-Bandwidth SMS Channel (`POST /sms/inbound`)
Built for feature phones across Africa. Strictly limits responses to $\le 160$ characters and returns `text/plain`:

* **Command Menu (Live Render or Local):**
  ```bash
  # Live Cloud Test:
  curl -s -X POST https://savanna-multilingual-assistant.onrender.com/sms/inbound \
    -H "Content-Type: application/json" \
    -d '{"from_number": "+251911223344", "body": "JOBS"}'

  # Local Test:
  curl -s -X POST http://localhost:8000/sms/inbound \
    -H "Content-Type: application/json" \
    -d '{"from_number": "+251911223344", "body": "JOBS"}'
  ```
  *Output ($\le 160$ chars):*  
  `Savanna Jobs: 1) Junior VA ($500-$700) 2) Customer Support ($450). Text ACC for accommodations or ask about any role.`

* **Career RAG Query with Citation:**
  ```bash
  # Live Cloud Test:
  curl -s -X POST https://savanna-multilingual-assistant.onrender.com/sms/inbound \
    -H "Content-Type: application/json" \
    -d '{"from_number": "+251911223344", "body": "What jobs after VA-1?"}'
  ```

* **Offline 2G Keywords:**
  * `HELP` or `MENTOR` $\rightarrow$ Immediate 2G navigation commands.
  * `ACC` $\rightarrow$ Interview accommodation guide.
  * `LANG am` $\rightarrow$ Switches SMS profile to Amharic.
  * `SIMPLE` $\rightarrow$ Toggles plain-language mode.
  * Supports standard `application/x-www-form-urlencoded` payloads from **Africa's Talking** and **Twilio** (`From` and `Body`).

---

### Test 4: Inclusive Career Gateway (Level 3 & schema.org)
1. **Explore Jobs:**  
   * Live Cloud: `GET https://savanna-multilingual-assistant.onrender.com/api/v1/career/jobs?partner_id=savanna`  
   * Local: `GET http://localhost:8000/api/v1/career/jobs?partner_id=savanna`  
   Returns structured jobs with `schema.org/JobPosting` JSON-LD metadata and certified accessibility features.
2. **Request Interview Accommodations:**  
   Ask the tutor on Web or Telegram: *"How can I request interview accommodations?"*  
   Or submit an accommodation request directly:
   ```bash
   # Live Cloud Test:
   curl -s -X POST https://savanna-multilingual-assistant.onrender.com/api/v1/career/accommodations \
     -H "Content-Type: application/json" \
     -d '{"job_id": "job_01", "applicant_name": "Abebe B.", "accommodations": ["Screen reader compatible test", "Extended time"]}'
   ```
   *Returns a certified tracking letter with code `ACC-XXXXXX`.*
3. **Broadcast Job Alerts:**  
   `POST https://savanna-multilingual-assistant.onrender.com/api/v1/career/alerts/broadcast?job_id=job_01` (or local `http://localhost:8000/...`) dispatches alerts to Telegram and SMS subscribers.

---

### Test 5: Anonymized Educator Intelligence Dashboard (Bonus Feature)
1. Open the live dashboard at **[https://savanna-multilingual-assistant.onrender.com/html_course_files/teacher-dashboard.html](https://savanna-multilingual-assistant.onrender.com/html_course_files/teacher-dashboard.html)** (or local `http://localhost:8086/html_course_files/teacher-dashboard.html`, or click **`👩‍🏫 Instructor Analytics`** in the course header).
2. **Live Dynamic Data:** Fetches telemetry from `GET /api/v1/teacher/insights`.
3. **Multilingual Capabilities:** Click **`አማርኛ`** or **`Afaan Oromoo`** in the top-right header to watch the entire dashboard, questions, and pedagogical recommendations translate instantly into local languages.
4. **Curriculum Confusion Heatmap:** Displays topic difficulty meters (e.g. *AI vs Human VA: 43%*, *Timezone Math: 24%*).
5. **Pedagogical Action Center:** AI recommendations that advise instructors on exact curriculum fixes (e.g. *"Embed an interactive 24-hr slider in Lesson 2.4"*).
6. **Live Human Escalation Link:** When a student requests human help (`POST /api/v1/escalate`), the escalation counter on the dashboard increments live.
7. **1-Click CSV Export:** Click **`📥 Export RFC-4180 CSV`** to download a spreadsheet report.

---

### Test 6: Automated Vitest Test Suite (16/16 Passing)
Run the automated test suite locally:
```bash
npm install
npm test
```
* **Test Suite Coverage:**
  * `tests/sms-endpoint.test.js`: 8 tests verifying 160-character limits, JSON & URL-encoded parsing, keywords, and rate-limiting.
  * `tests/markdown-renderer.test.js`: 5 tests verifying XSS sanitization, Ge'ez script preservation, and accessible HTML tags.
  * `tests/offline-search.test.js`: 3 tests verifying client-side TF-IDF offline RAG search indexing.

---

## 🔌 Three Levels of Integration (Partner Guide)

### Level 1: Web Component (Drop-in Tag)
* **Who sets it up:** Website Editor / Content Manager (2 minutes).
* **How it works:** Any external partner (WordPress, Webflow, custom website) pastes one script tag:
  ```html
  <script src="https://our-cdn.org/widget/assistant.js" defer></script>
  <multilingual-assistant partner-id="partner_code" course-id="VA-1"></multilingual-assistant>
  ```
* Built using the standard W3C Web Component API (`customElements.define`) with Shadow DOM encapsulation so host styles never break the assistant.

### Level 2: Modular REST API
* **Who sets it up:** Software Developers building mobile or custom web apps.
* **How it works:** Partners consume our versioned endpoints (`/api/v1/tutor/chat`, `/api/v1/career/jobs`) with standard JSON payloads, building their own custom user interfaces.
* Complete interactive documentation and schemas available at `/docs`.

### Level 3: Semantic Standards & LMS Interoperability
* **schema.org/JobPosting:** Job postings include structured semantic data for Google Jobs, LinkedIn, and university crawlers.
* **LTI 1.3 LMS External Tool:** Architected to support 1EdTech LTI 1.3 standards, allowing Canvas, Moodle, and Blackboard administrators to install the assistant with OpenID Connect single sign-on.

---

## ♿ Accessibility Compliance (WCAG 2.2 Level AA)

Built to pass the **Accessibility Gate** with zero critical or serious violations:

| Success Criterion | How Our System Complies |
| :--- | :--- |
| **SC 4.1.3 Status Messages** | Incoming replies live inside `<div role="log" aria-live="polite">`, ensuring NVDA, JAWS, and TalkBack announce answers automatically. |
| **SC 3.1.1 / 3.1.2 Language** | Amharic text is tagged with `lang="am"` so screen readers switch to a Ge'ez speech synthesizer without mispronouncing words in English. |
| **SC 1.3.2 Meaningful Sequence** | Arabic responses render with `dir="rtl"` using CSS logical properties (`margin-inline-start`). |
| **SC 2.1.1 Keyboard Navigation** | Every control is keyboard operable; pressing `Escape` immediately closes drawers without keyboard traps. |
| **SC 2.4.7 Visible Focus** | High-contrast focus rings (`:focus-visible`) ensure keyboard users easily track navigation. |
| **SC 2.5.8 Target Size** | All interactive touch and click targets exceed 44×44px. |
| **SC 1.4.10 Reflow** | Content fluidly reflows at **400% zoom** without breaking the viewport or requiring horizontal scrolling. |
| **SC 3.1.5 Reading Level** | One-click **Simple Mode** reduces cognitive overload and simplifies text to lower secondary reading levels. |

---

## 📁 Repository Structure

```text
savanna-multilingual-assistant/
├── backend/                             # Level 2 REST API (Python 3.11 + FastAPI)
│   ├── app/
│   │   ├── main.py                      # Root FastAPI application & route bridges
│   │   ├── core/                        # Configs, DB Session, i18n & Pluggable Registry
│   │   │   ├── config.py                # App configuration & environment variables
│   │   │   ├── database.py              # PostgreSQL + pgvector engine
│   │   │   └── i18n.py                  # Internationalization translation helper
│   │   └── modules/                     # Modular Vertical Slices
│   │       ├── tutor/                   # AI Tutor RAG, vector embeddings & LLM router
│   │       ├── career/                  # Career Gateway, schema.org & accommodations
│   │       ├── escalate/                # Human mentor escalation & WebRTC signaling
│   │       ├── channels/                # Telegram Bot & 2G Low-Bandwidth SMS handler
│   │       └── teacher/                 # Anonymized Educator Intelligence Dashboard
│   ├── Dockerfile                       # Production Python container specification
│   └── requirements.txt                 # Backend dependencies
│
├── widget/                              # Level 1 Drop-in Web Component
│   ├── assistant.js                     # <multilingual-assistant> Custom Element
│   └── test.html                        # Standalone partner simulation testbed
│
├── html_course_files/                   # Static Course Platform (Savanna LMS)
│   ├── concept-with-navigation.html     # Course page with embedded assistant & nav pill
│   └── teacher-dashboard.html           # Full dynamic multilingual Teacher Dashboard
│
├── tests/                               # Automated Test Suite (Vitest)
│   ├── sms-endpoint.test.js             # SMS 160-char limits, RAG & keyword tests
│   ├── markdown-renderer.test.js        # HTML sanitization & Ge'ez script tests
│   └── offline-search.test.js           # Client-side offline RAG tests
│
├── .env.example                         # Environment configuration template
├── docker-compose.yml                   # Multi-service orchestration (api, db, web)
└── README.md                            # Comprehensive System Documentation
```

---

## 👥 Authors & Acknowledgments
Built for the **Accessibility Hackathon 2026** adhering to international accessibility standards (WCAG 2.2 AA / ISO/IEC 40500).
