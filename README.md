# 🌐 Universal Multilingual Assistant & Live Help Platform
> **An inclusive, multi-channel educational assistant and career gateway designed for learners who think in Amharic, Afaan Oromo, Tigrinya, Somali, or Arabic, or who are new to computers.**

---

## 🎯 The Purpose & Real-World Mission

In modern digital training programs across Africa (such as ALX, Savanna, and partner institutions), students face critical barriers that lead to high dropout rates:

1. **The Language & Cognitive Barrier:** Course content is authored 100% in English. When learners who think in regional languages (**Amharic, Afaan Oromo, Tigrinya, Somali, or Arabic**) encounter complex technical terms or instructions, translating their thoughts into English causes cognitive overload and frustration.
2. **The "New to Computers" Isolation:** Beginners often lack the technical vocabulary to describe their errors in English (e.g., *"My container port mapping failed"*). They can't explain what is broken, and there is no mentor in the room to look over their shoulder.
3. **The Infrastructure Reality:** Learners don't always have unlimited fiber broadband. They rely on mobile phones, Telegram, or even 2G SMS when mobile data packages run out.
4. **The Career & Disability Gap:** Finishing a course is only half the battle. Disabled or neurodivergent learners often fear asking employers for interview accommodations (e.g., screen-reader compatible tests, extra time) due to fear of stigma or bias.

### Our Solution
A **unified, accessible learning companion** that:
* Tutors learners in their native language through voice and text.
* Proves every answer with verifiable course citations.
* Follows them across **Web, Telegram, and low-bandwidth SMS**.
* Lets them request human help and share their screen with one click.
* Connects them to jobs and provides a dignified, standardized way to request interview accommodations.

---

## 🚀 Key System Features

```
                                SYSTEM CAPABILITIES
  ┌─────────────────────────────────┬─────────────────────────────────┐
  │ 1. Grounded Multilingual Tutor  │ 2. Omnichannel Availability     │
  │ • Voice & Text in Local Tongues │ • Web Embed inside Savanna LMS  │
  │ • Strictly course-based answers │ • Full-featured Telegram Bot    │
  │ • Verifiable source citations   │ • Low-bandwidth 2G SMS route    │
  ├─────────────────────────────────┼─────────────────────────────────┤
  │ 3. Human Help & Screen Sharing  │ 4. Pluggable AI Engine          │
  │ • 1-click mentor escalation     │ • Cloud: High-reasoning LLM     │
  │ • Learner-controlled WebRTC feed│ • Local: Zero-cost Ollama model │
  │ • Complete context hand-off     │ • Offline: Instant FAQ cache    │
  ├─────────────────────────────────┼─────────────────────────────────┤
  │ 5. Career Gateway (Level 3)     │ 6. Cognitive & Teacher Bonuses  │
  │ • Proactive job alerts (TG/SMS) │ • Plain-Language "Simple Mode"  │
  │ • Standardized accommodation req│ • Anonymized Teacher Heatmap    │
  │ • schema.org/JobPosting schema  │ • 1-click live A11y Gate audit  │
  └─────────────────────────────────┴─────────────────────────────────┘
```

### 1. Grounded Multilingual AI Tutor (Voice & Text)
* **Voice-First Input:** Learners on standard English QWERTY laptops can struggle to type Ge'ez script. The Web Speech API lets learners speak questions naturally in **Amharic (`am-ET`)**, **English**, or **Arabic (`ar-SA`)**.
* **Zero Hallucination Guarantee:** The AI answers **only** from verified course materials (e.g. Savanna's *VA-1: Virtual Assistant* and *WR 100* curricula).
* **Clickable Source Citations:** Every answer cites the exact module and section (e.g., `📌 Source: Module 2 · An Important Distinction`). Clicking the citation scrolls the parent learning page directly to the referenced paragraph.

### 2. Multi-Channel Access: Web + Telegram + SMS
* **Savanna Web Embed:** An accessible floating widget running inside course pages. Supports Right-to-Left (`dir="rtl"`) layout for Arabic.
* **Telegram Bot (`@SavannaTutorBot`):** Voice notes and text chat on the app learners use daily. Allows continuing study sessions away from the computer.
* **Low-Bandwidth SMS Route:** Lightweight text fallback for rural areas or when mobile data packages run out.

### 3. One-Click Human Escalation with Learner-Controlled Screen Sharing
* When AI is not enough, a single tap on **"Talk to a Person"** alerts a human mentor.
* **Contextual Handoff:** The mentor receives the student's current course page, language preference, and recent questions automatically.
* **Privacy-First Screen Sharing:** Uses the browser's native `navigator.mediaDevices.getDisplayMedia` API. The learner maintains complete control to start and stop the visual feed at any time.

### 4. Pluggable AI Architecture (Strategy Pattern)
The backend does not break if external APIs fail or internet drops. It dynamically cascades through 3 tiers:
1. **Tier 1 (Cloud):** Google Gemini Flash for high-speed, nuanced multilingual reasoning.
2. **Tier 2 (Local Open Model):** Ollama running local models (Llama 3 / Mistral) for private, zero-cost campus deployments.
3. **Tier 3 (Offline FAQ Cache):** In-memory JSON database answering common course questions in under 5ms with **zero internet connection**.

### 5. Career Gateway & Interview Accommodations
* **Grounded Job Q&A:** Answers questions about proposal pricing, international client communications, and remote work contracts.
* **Push Job Alerts:** Notifies learners via Telegram and SMS when verified entry-level roles are posted.
* **Standardized Accommodation Requests:** A respectful flow generating formal accommodation request documentation (e.g., NVDA screen reader compatibility, 50% extra test time) per international inclusion standards.

### 6. Cognitive & Teacher Bonus Features
* **Plain-Language "Simple Mode" (WCAG 3.1.5):** One-click toggle that simplifies explanations into short, high-contrast, jargon-free sentences for learners with cognitive challenges or low English literacy.
* **Anonymized Teacher Insights:** A privacy-compliant dashboard showing instructors which topics confuse learners most across the cohort, allowing schools to iteratively improve curriculum content.

---

## 🏛️ "One Core, Three Doors" Architecture

The system is built to serve **any partner** (Savanna, Canvas, Moodle, custom web/mobile apps) through three standard integration tiers:

```
                            OUR CORE SYSTEM
               (Course Knowledge · Multilingual AI · Jobs)
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
     LEVEL 1                    LEVEL 2                    LEVEL 3
  Web Component                REST API              Semantic Standards
 ("Paste a Tag")         ("Data for Developers")      ("Open Interop")
        │                          │                          │
 • <multilingual-assistant> • OpenAPI 3.0 (/docs)      • schema.org/JobPosting
 • Shadow DOM encapsulation • Powers Web + Telegram    • LTI 1.3 for Canvas
 • Full WCAG 2.2 AA a11y    • Pluggable backend        • Open Badges 3.0
```

---

## ♿ Accessibility Compliance (WCAG 2.2 Level AA)

Built to pass the **Accessibility Gate** with zero critical or serious issues:

| Success Criterion | How Our System Complies |
| :--- | :--- |
| **SC 4.1.3 Status Messages** | Incoming chat replies live inside `<div role="log" aria-live="polite">`, ensuring NVDA and TalkBack announce answers automatically. |
| **SC 3.1.1 / 3.1.2 Language** | Amharic text is tagged with `lang="am"` so screen readers switch to an Amharic synthesizer rather than mispronouncing words in English. |
| **SC 1.3.2 Meaningful Sequence** | Arabic responses and UI dynamically render with `dir="rtl"` using CSS logical properties. |
| **SC 2.1.1 Keyboard Navigation** | Every control is keyboard operable; pressing `Escape` immediately closes drawers without keyboard traps. |
| **SC 2.4.7 Visible Focus** | Interactive buttons feature a distinct 3px high-contrast gold focus outline. |
| **SC 2.5.8 Target Size** | All touch and click targets exceed the 24×24px requirement (sized at 44×44px). |
| **SC 1.4.10 Reflow** | Content fluidly reflows at **400% zoom** without breaking the viewport or requiring horizontal scrolling. |

---

## 📁 Repository Structure

```text
savanna-multilingual-assistant/
├── backend/                             # Level 2 REST API (Python 3.12 + FastAPI)
│   ├── app/
│   │   ├── main.py                      # Central FastAPI application & OpenAPI metadata
│   │   ├── core/                        # Configs & Shared Multilingual Registry
│   │   │   ├── config.py                # Environment variables & AI settings
│   │   │   └── languages.py             # Locale registry (am, om, ti, so, ar, en)
│   │   └── modules/                     # Feature-Based / Domain-Driven Modules
│   │       ├── tutor/                   # AI Tutor, Course RAG & Offline FAQ
│   │       ├── career/                  # Career Gateway & Accommodation Requests
│   │       ├── escalate/                # Human Mentor Queue & Screen Share Signaling
│   │       ├── channels/                # Telegram Bot & Low-Bandwidth SMS Routes
│   │       └── teacher/                 # Anonymized Cohort Curriculum Analytics
│   └── requirements.txt                 # Backend dependencies
│
├── widget/                              # Level 1 Drop-in Web Component
│   ├── assistant.js                     # <multilingual-assistant> Custom Element (Shadow DOM)
│   └── test.html                        # Standalone partner simulation page
│
├── standards/                           # Level 3 Educational Standards
│   ├── lti_config.json                  # LTI 1.3 Tool Configuration for LMSs
│   └── schema_job_posting.json          # schema.org/JobPosting JSON-LD Specification
│
└── README.md                            # Comprehensive System Documentation
```

---

## ⚡ Quickstart Guide

### 1. Run the Backend API (Level 2)
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
* **Interactive OpenAPI Documentation:** Open `http://localhost:8000/docs` in your browser.

### 2. Run the Web Embed (Level 1)
* Open `widget/test.html` in any web browser to test the assistant in standalone mode.
* **To embed into Savanna**, add one script tag to `Savanna-static-pages/pages/concept-with-navigation.html`:
  ```html
  <script src="../../savanna-multilingual-assistant/widget/assistant.js" defer></script>
  <multilingual-assistant partner="savanna" course="VA-1"></multilingual-assistant>
  ```

---

### 👥 Team & Acknowledgments
Built for the **Accessibility Hackathon 2026** adhering to international accessibility technical standards (WCAG 2.2 AA / ISO/IEC 40500:2025).
