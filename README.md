# 🌐 Universal Multilingual Assistant & Live Help Platform
> **An inclusive educational assistant, career gateway, and educator intelligence engine built for learners who think in Amharic, Afaan Oromo, Tigrinya, Somali, or Arabic, or who are new to computers.**

---

## 🎯 The Real-World Mission

In modern digital skills programs across Africa (such as ALX, Savanna, and regional training institutes), students face critical barriers leading to unnecessary dropouts:

1. **The Language & Cognitive Barrier:** Course content is authored 100% in English. When learners who think in regional languages (**Amharic, Afaan Oromo, Tigrinya, Somali, or Arabic**) encounter complex technical terms, translating back and forth into English causes severe cognitive fatigue.
2. **The "New to Computers" Isolation:** Beginners often lack the technical English vocabulary to explain what is broken (e.g. *"My container port mapping failed"*). They feel stuck, and there is no mentor physically present to look over their shoulder.
3. **The Low-Bandwidth Reality:** Students often study under erratic internet or running on 2G feature phones after mobile data expires.
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

## ⚡ Quickstart Guide (Run with Docker)

The entire platform runs in Docker with multi-container orchestration (FastAPI, pgvector, and Nginx).

### 1. Launch All Services
```bash
git clone https://github.com/wubshet-kebede/savanna-multilingual-assistant.git
cd savanna-multilingual-assistant
docker compose up -d
```

### 2. Live Application URLs
| Application / Door | URL | Description |
| :--- | :--- | :--- |
| **Student Web Experience** | `http://localhost:8086/html_course_files/concept-with-navigation.html` | Course page with embedded floating `<multilingual-assistant>` widget |
| **Educator Intelligence Portal** | `http://localhost:8086/html_course_files/teacher-dashboard.html` | Multilingual Teacher View with confusion heatmap & CSV export |
| **Interactive OpenAPI Docs** | `http://localhost:8000/docs` | Swagger UI for all REST endpoints & schemas |
| **Alternative ReDoc Specs** | `http://localhost:8000/redoc` | Clean API reference documentation |
| **Widget Standalone Sandbox** | `http://localhost:8086/widget/test.html` | Isolated partner web component testbed |

---

## 🧪 Comprehensive Evaluation & Testing Guide

### Test 1: Grounded Multilingual Web Tutor (Voice & Text)
1. Open **`http://localhost:8086/html_course_files/concept-with-navigation.html`**.
2. Click the floating AI Assistant button at the bottom right.
3. Ask a question in English or Amharic:
   * English: *"What is the main distinction between an AI assistant and a human Virtual Assistant?"*
   * Amharic: *"በ AI እና በሰው Virtual Assistant መካከል ያለው ልዩነት ምንድን ነው?"*
4. **Click the Citation Pill:** Clicking `📌 Source: Module 2 · An Important Distinction` smoothly scrolls the parent lesson page to the exact cited paragraph.

### Test 2: Cognitive Accessibility — Plain-Language "Simple Mode" (WCAG 3.1.5)
1. In the Web Assistant header, click **`[ 🧠 Simple Mode ]`**.
2. Ask a complex question. Notice how the AI reduces technical jargon, uses shorter sentences, and formats the output for low cognitive overload.
3. **On Telegram:** Send `/simple` to toggle Plain-Language mode.
4. **On SMS:** Send the text keyword `SIMPLE` to switch your phone number's profile.

### Test 3: Production 2G Low-Bandwidth SMS Channel (`POST /sms/inbound`)
Built for feature phones across Africa. Strictly limits responses to $\le 160$ characters and returns `text/plain`:

* **Command Menu:**
  ```bash
  curl -s -X POST http://localhost:8000/sms/inbound \
    -H "Content-Type: application/json" \
    -d '{"from_number": "+251911223344", "body": "JOBS"}'
  ```
  *Output ($\le 160$ chars):*  
  `Savanna Jobs: 1) Junior VA ($500-$700) 2) Customer Support ($450). Text ACC for accommodations or ask about any role.`

* **Career RAG Query with Citation:**
  ```bash
  curl -s -X POST http://localhost:8000/sms/inbound \
    -H "Content-Type: application/json" \
    -d '{"from_number": "+251911223344", "body": "What jobs after VA-1?"}'
  ```

* **Offline 2G Keywords:**
  * `HELP` or `MENTOR` $\rightarrow$ Immediate 2G navigation commands.
  * `ACC` $\rightarrow$ Interview accommodation guide.
  * `LANG am` $\rightarrow$ Switches SMS profile to Amharic.
  * `SIMPLE` $\rightarrow$ Toggles plain-language mode.
  * Supports standard `application/x-www-form-urlencoded` payloads from **Africa's Talking** and **Twilio** (`From` and `Body`).

### Test 4: Inclusive Career Gateway (Level 3 & schema.org)
1. **Explore Jobs:**  
   `GET http://localhost:8000/api/v1/career/jobs?partner_id=savanna`  
   Returns structured jobs with `schema.org/JobPosting` JSON-LD metadata and certified accessibility features.
2. **Request Interview Accommodations:**  
   Ask the tutor on Web or Telegram: *"How can I request interview accommodations?"*  
   Or submit an accommodation request:
   ```bash
   curl -s -X POST http://localhost:8000/api/v1/career/accommodations \
     -H "Content-Type: application/json" \
     -d '{"job_id": "job_01", "applicant_name": "Abebe B.", "accommodations": ["Screen reader compatible test", "Extended time"]}'
   ```
   *Returns a certified tracking letter with code `ACC-XXXXXX`.*
3. **Broadcast Job Alerts:**  
   `POST http://localhost:8000/api/v1/career/alerts/broadcast?job_id=job_01` dispatches alerts to Telegram and SMS subscribers.

### Test 5: Anonymized Educator Intelligence Dashboard (Bonus Feature)
1. Open **`http://localhost:8086/html_course_files/teacher-dashboard.html`** (or click **`👩‍🏫 Instructor Analytics`** in the course header).
2. **Live Dynamic Data:** Fetches telemetry from `GET /api/v1/teacher/insights`.
3. **Multilingual Capabilities:** Click **`አማርኛ`** or **`Afaan Oromoo`** in the top-right header to watch the entire dashboard, questions, and pedagogical recommendations translate instantly into local languages.
4. **Curriculum Confusion Heatmap:** Displays topic difficulty meters (e.g. *AI vs Human VA: 43%*, *Timezone Math: 24%*).
5. **Pedagogical Action Center:** AI recommendations that advise instructors on exact curriculum fixes (e.g. *"Embed an interactive 24-hr slider in Lesson 2.4"*).
6. **Live Human Escalation Link:** When a student requests human help (`POST /api/v1/escalate`), the escalation counter on the dashboard increments live.
7. **1-Click CSV Export:** Click **`📥 Export RFC-4180 CSV`** to download a spreadsheet report.

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
├── docker-compose.yml                   # Multi-service orchestration (api, db, web)
└── README.md                            # Comprehensive System Documentation
```

---

## 👥 Authors & Acknowledgments
Built for the **Accessibility Hackathon 2026** adhering to international accessibility standards (WCAG 2.2 AA / ISO/IEC 40500).
