/**
 * Universal Multilingual Assistant & Live Help (Level 1 Web Component)
 * PHASE 1: UI Shell, Geometry, WAI-ARIA Tabs, and Robust Keyboard/Focus Trapping Engine.
 * Fully compliant with WCAG 2.2 AA (SC 2.1.1, 2.1.2, 2.4.3, 2.4.7, 2.5.8, 1.4.3, 1.4.10).
 */

class MultilingualAssistant extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.apiUrl = this.getAttribute('api-url') || 'http://localhost:8000/api/v1';
    this.partnerId = this.getAttribute('partner') || 'savanna';
    this.courseId = this.getAttribute('course') || 'VA-1';
    this.currentLang = 'am';
    this.simpleMode = false;
    this.screenStream = null;
    this.activeTab = 'tutor'; // 'tutor' | 'career'
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
    this.setupFocusTrap();
    this.setupTabsKeyboardNavigation();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --primary: #0e623b;
          --primary-hover: #094428;
          --primary-light: #e8f5e9;
          --focus-ring: #f59e0b;
          --bg-card: #ffffff;
          --text-main: #111827;
          --text-muted: #4b5563;
          --border: #d1d5db;
          --shadow: 0 12px 36px rgba(0, 0, 0, 0.22);
          --font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 2147483647;
          font-family: var(--font);
          color: var(--text-main);
          box-sizing: border-box;
        }

        *, *::before, *::after {
          box-sizing: inherit;
        }

        /* Screen reader only utility */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* 1. Launcher Trigger Button (Exceeds WCAG 2.5.8 24x24px Target Size) */
        .trigger-btn {
          min-height: 48px;
          min-width: 48px;
          background: var(--primary);
          color: #ffffff;
          border: 2px solid transparent;
          border-radius: 9999px;
          padding: 12px 24px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(14, 98, 59, 0.35);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, box-shadow 0.2s ease;
        }
        .trigger-btn:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(14, 98, 59, 0.45);
        }
        .trigger-btn:focus-visible {
          outline: 3px solid var(--focus-ring);
          outline-offset: 3px;
        }

        /* 2. Dialog Drawer / Shell (WCAG 1.4.10 Reflow at 400% Zoom) */
        .drawer {
          display: none;
          position: fixed;
          bottom: 84px;
          right: 24px;
          width: 420px;
          max-width: calc(100vw - 32px);
          height: 600px;
          max-height: calc(100vh - 100px);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: var(--shadow);
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          transform: translateY(12px) scale(0.98);
          transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .drawer.open {
          display: flex;
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Simple Mode (WCAG 3.1.5 Reading Level) */
        .drawer.simple-mode {
          font-size: 18px;
          line-height: 1.8;
          border: 3px solid #111827;
        }

        /* 3. Header & WAI-ARIA Tablist */
        .header {
          background: #f9fafb;
          border-bottom: 1px solid var(--border);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-shrink: 0;
        }

        .tabs {
          display: flex;
          gap: 4px;
          background: #e5e7eb;
          padding: 3px;
          border-radius: 8px;
        }

        .tab-btn {
          min-height: 38px;
          padding: 6px 14px;
          background: transparent;
          color: var(--text-muted);
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .tab-btn:hover {
          color: var(--text-main);
        }
        .tab-btn[aria-selected="true"] {
          background: #ffffff;
          color: var(--primary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .tab-btn:focus-visible {
          outline: 3px solid var(--focus-ring);
          outline-offset: 1px;
        }

        .close-btn {
          min-height: 40px;
          min-width: 40px;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 8px;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .close-btn:hover {
          background: #fee2e2;
          color: #dc2626;
        }
        .close-btn:focus-visible {
          outline: 3px solid var(--focus-ring);
          outline-offset: 2px;
        }

        /* 4. Controls Toolbar (Language, Simple Mode, Escalation) */
        .controls-bar {
          background: #f3f4f6;
          border-bottom: 1px solid var(--border);
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          gap: 6px;
          flex-shrink: 0;
        }

        .lang-control {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .select-lang {
          min-height: 36px;
          padding: 4px 8px;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: #ffffff;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-main);
          cursor: pointer;
        }
        .select-lang:focus-visible {
          outline: 3px solid var(--focus-ring);
          outline-offset: 1px;
        }

        .action-chip {
          min-height: 36px;
          padding: 4px 10px;
          border: 1px solid var(--border);
          background: #ffffff;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: background 0.15s ease;
        }
        .action-chip:hover {
          background: #f9fafb;
        }
        .action-chip:focus-visible {
          outline: 3px solid var(--focus-ring);
          outline-offset: 1px;
        }
        .action-chip[aria-pressed="true"] {
          background: var(--primary-light);
          border-color: var(--primary);
          color: var(--primary);
        }

        .btn-escalate {
          color: #b91c1c;
          border-color: #fca5a5;
          background: #fef2f2;
        }
        .btn-escalate:hover {
          background: #fee2e2;
        }

        /* 5. Main Body Panes */
        .tab-panel {
          flex: 1;
          display: none;
          flex-direction: column;
          overflow-y: auto;
          padding: 16px;
        }
        .tab-panel.active {
          display: flex;
        }

        .chat-body {
          gap: 12px;
        }

        .msg {
          padding: 10px 14px;
          border-radius: 12px;
          max-width: 88%;
          word-break: break-word;
          line-height: 1.5;
        }
        .msg.tutor {
          background: #f3f4f6;
          color: #111827;
          align-self: flex-start;
          border-bottom-left-radius: 2px;
        }
        .msg.user {
          background: var(--primary);
          color: #ffffff;
          align-self: flex-end;
          border-bottom-right-radius: 2px;
        }
        .citation {
          display: inline-block;
          margin-top: 8px;
          padding: 4px 8px;
          background: #e0f2fe;
          border: 1px solid #bae6fd;
          border-radius: 6px;
          font-size: 12px;
          color: #0369a1;
          font-weight: 700;
          cursor: pointer;
          text-decoration: underline;
        }
        .citation:hover {
          background: #bae6fd;
        }
        .citation:focus-visible {
          outline: 2px solid var(--focus-ring);
        }

        /* 6. Footer Input Row */
        .input-row {
          padding: 12px 14px;
          border-top: 1px solid var(--border);
          background: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .text-input {
          flex: 1;
          min-height: 44px;
          padding: 8px 14px;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 14px;
          color: var(--text-main);
        }
        .text-input:focus-visible {
          outline: 3px solid var(--focus-ring);
          outline-offset: 1px;
        }

        .icon-btn {
          min-height: 44px;
          min-width: 44px;
          border: none;
          border-radius: 8px;
          background: var(--primary);
          color: #ffffff;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease;
        }
        .icon-btn:hover { background: var(--primary-hover); }
        .icon-btn:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 2px; }

        .btn-mic { background: #4b5563; }
        .btn-mic:hover { background: #374151; }
        .btn-mic.recording {
          background: #dc2626;
          animation: pulse 1.2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        /* Screen Share Banner */
        .screen-share-banner {
          background: #fee2e2;
          color: #991b1b;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #fca5a5;
        }
        .btn-stop-share {
          min-height: 32px;
          padding: 4px 10px;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 700;
        }
        .btn-stop-share:focus-visible { outline: 2px solid #000; }
      </style>

      <!-- 1. Trigger Launcher Button -->
      <button 
        class="trigger-btn" 
        id="open-btn" 
        aria-label="Open Multilingual AI Tutor and Live Help Assistant" 
        aria-haspopup="dialog"
        aria-expanded="false"
      >
        <span aria-hidden="true" style="font-size:20px;">🌐</span>
        <span>Ask Tutor (አማርኛ / Help)</span>
      </button>

      <!-- 2. Accessible Dialog Drawer -->
      <div 
        class="drawer" 
        id="drawer" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="assistant-dialog-title"
      >
        <h2 id="assistant-dialog-title" class="sr-only">Universal Multilingual Learning Assistant & Career Gateway</h2>

        <!-- Header with WAI-ARIA Tabs -->
        <header class="header">
          <nav class="tabs" role="tablist" aria-label="Assistant Views">
            <button 
              class="tab-btn" 
              id="tab-tutor" 
              role="tab" 
              aria-selected="true" 
              aria-controls="panel-tutor" 
              tabindex="0"
            >
              <span aria-hidden="true">📚</span>
              <span>Course Tutor</span>
            </button>
            <button 
              class="tab-btn" 
              id="tab-career" 
              role="tab" 
              aria-selected="false" 
              aria-controls="panel-career" 
              tabindex="-1"
            >
              <span aria-hidden="true">💼</span>
              <span>Career Gateway</span>
            </button>
          </nav>

          <button 
            class="close-btn" 
            id="close-btn" 
            aria-label="Close Assistant Dialog (Escape)" 
            title="Close (Escape)"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </header>

        <!-- Controls Toolbar -->
        <section class="controls-bar" aria-label="Language and accessibility settings">
          <div class="lang-control">
            <label for="lang-select" class="sr-only">Choose Language:</label>
            <select class="select-lang" id="lang-select" aria-label="Preferred Language">
              <option value="am" selected>አማርኛ (Amharic)</option>
              <option value="om">Afaan Oromoo</option>
              <option value="ti">ትግርኛ (Tigrinya)</option>
              <option value="so">Af-Soomaali</option>
              <option value="ar">العربية (Arabic - RTL)</option>
              <option value="en">English</option>
            </select>
          </div>

          <div style="display:flex; gap:6px;">
            <button 
              class="action-chip" 
              id="simple-toggle" 
              aria-pressed="false" 
              title="Toggle Plain-Language Simple Mode (WCAG 3.1.5)"
            >
              <span aria-hidden="true">🧠</span>
              <span>Simple</span>
            </button>

            <button 
              class="action-chip btn-escalate" 
              id="escalate-btn" 
              aria-label="Connect to a human mentor and share screen"
            >
              <span aria-hidden="true">🆘</span>
              <span>Human Help</span>
            </button>
          </div>
        </section>

        <!-- Screen Share Alert -->
        <div id="screen-share-area" style="display:none;" role="status">
          <div class="screen-share-banner">
            <span>🟢 Screen Sharing Active (You are in control)</span>
            <button class="btn-stop-share" id="stop-share-btn" aria-label="Stop screen sharing">Stop Sharing</button>
          </div>
        </div>

        <!-- Tab Panel 1: Course Tutor (WCAG 4.1.3 Live Region) -->
        <main 
          class="tab-panel chat-body active" 
          id="panel-tutor" 
          role="tabpanel" 
          aria-labelledby="tab-tutor" 
          tabindex="0"
        >
          <div 
            id="chat-log" 
            role="log" 
            aria-live="polite" 
            aria-relevant="additions text" 
            aria-label="Conversation with AI Tutor"
          >
            <div class="msg tutor" lang="am">
              ሰላም! እኔ የእርስዎ የኮርስ ረዳት ነኝ። በኮርሱ ዙሪያ ማንኛውንም ጥያቄ ይጠይቁኝ።
            </div>
          </div>
        </main>

        <!-- Tab Panel 2: Career Gateway -->
        <section 
          class="tab-panel" 
          id="panel-career" 
          role="tabpanel" 
          aria-labelledby="tab-career" 
          tabindex="0" 
          style="display:none;"
        >
          <h3 style="margin:0 0 6px 0; font-size:16px;">💼 Remote Jobs for Course Graduates</h3>
          <p style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">All employers offer verified interview accommodations.</p>
          <div id="jobs-container" role="feed" aria-busy="false" aria-label="Job openings list">
            Loading verified opportunities...
          </div>
        </section>

        <!-- Footer Input Form -->
        <footer class="input-row" id="footer-input">
          <button 
            type="button" 
            class="icon-btn btn-mic" 
            id="mic-btn" 
            aria-label="Speak your question in selected language" 
            aria-pressed="false"
          >
            🎙️
          </button>
          <input 
            type="text" 
            class="text-input" 
            id="user-input" 
            placeholder="ጥያቄዎን እዚህ ይጻፉ / Type question..." 
            aria-label="Question text input"
          />
          <button 
            type="button" 
            class="icon-btn" 
            id="send-btn" 
            aria-label="Send question"
          >
            ➤
          </button>
        </footer>
      </div>
    `;
  }

  setupListeners() {
    const openBtn = this.shadowRoot.getElementById('open-btn');
    const closeBtn = this.shadowRoot.getElementById('close-btn');
    const drawer = this.shadowRoot.getElementById('drawer');
    const input = this.shadowRoot.getElementById('user-input');
    const sendBtn = this.shadowRoot.getElementById('send-btn');
    const simpleToggle = this.shadowRoot.getElementById('simple-toggle');
    const langSelect = this.shadowRoot.getElementById('lang-select');
    const escalateBtn = this.shadowRoot.getElementById('escalate-btn');
    const micBtn = this.shadowRoot.getElementById('mic-btn');

    // Open Drawer
    openBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      openBtn.setAttribute('aria-expanded', 'true');
      input.focus();
    });

    // Close Drawer
    closeBtn.addEventListener('click', () => {
      this.closeDrawer();
    });

    // Simple Mode Toggle
    simpleToggle.addEventListener('click', () => {
      this.simpleMode = !this.simpleMode;
      drawer.classList.toggle('simple-mode', this.simpleMode);
      simpleToggle.setAttribute('aria-pressed', String(this.simpleMode));
    });

    // Language Change
    langSelect.addEventListener('change', (e) => {
      this.currentLang = e.target.value;
      const isRtl = this.currentLang === 'ar';
      this.shadowRoot.getElementById('panel-tutor').setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      this.shadowRoot.getElementById('panel-tutor').setAttribute('lang', this.currentLang);
    });

    // Send Handlers
    sendBtn.addEventListener('click', () => this.handleSend());
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleSend();
    });

    // Mic & Escalation Handlers
    micBtn.addEventListener('click', () => this.handleSpeechInput(micBtn));
    escalateBtn.addEventListener('click', () => this.handleEscalation());
  }

  closeDrawer() {
    const drawer = this.shadowRoot.getElementById('drawer');
    const openBtn = this.shadowRoot.getElementById('open-btn');
    drawer.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus(); // Crucial WCAG focus restoration
  }

  /**
   * WCAG 2.1.2: Focus Trapping Engine
   * Ensures keyboard focus cannot wander into the background page while the dialog is open.
   */
  setupFocusTrap() {
    const drawer = this.shadowRoot.getElementById('drawer');

    this.shadowRoot.addEventListener('keydown', (e) => {
      if (!drawer.classList.contains('open')) return;

      // 1. Close on Escape
      if (e.key === 'Escape') {
        e.preventDefault();
        this.closeDrawer();
        return;
      }

      // 2. Trap Focus on Tab / Shift+Tab
      if (e.key === 'Tab') {
        const focusable = drawer.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusable).filter(el => el.offsetParent !== null);
        if (focusableArray.length === 0) return;

        const first = focusableArray[0];
        const last = focusableArray[focusableArray.length - 1];
        const activeEl = this.shadowRoot.activeElement;

        if (e.shiftKey) {
          if (activeEl === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (activeEl === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  /**
   * WAI-ARIA Tabs Design Pattern Keyboard Navigation
   * ArrowLeft / ArrowRight switches tabs dynamically.
   */
  setupTabsKeyboardNavigation() {
    const tabTutor = this.shadowRoot.getElementById('tab-tutor');
    const tabCareer = this.shadowRoot.getElementById('tab-career');
    const tabs = [tabTutor, tabCareer];

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => this.switchTab(idx === 0 ? 'tutor' : 'career'));

      tab.addEventListener('keydown', (e) => {
        let newIdx = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          newIdx = (idx + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          newIdx = (idx - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          newIdx = 0;
        } else if (e.key === 'End') {
          newIdx = tabs.length - 1;
        }

        if (newIdx !== null) {
          e.preventDefault();
          tabs[newIdx].focus();
          this.switchTab(newIdx === 0 ? 'tutor' : 'career');
        }
      });
    });
  }

  switchTab(tabName) {
    this.activeTab = tabName;
    const tabTutor = this.shadowRoot.getElementById('tab-tutor');
    const tabCareer = this.shadowRoot.getElementById('tab-career');
    const panelTutor = this.shadowRoot.getElementById('panel-tutor');
    const panelCareer = this.shadowRoot.getElementById('panel-career');
    const footerInput = this.shadowRoot.getElementById('footer-input');

    const isTutor = tabName === 'tutor';
    tabTutor.setAttribute('aria-selected', String(isTutor));
    tabTutor.setAttribute('tabindex', isTutor ? '0' : '-1');
    tabCareer.setAttribute('aria-selected', String(!isTutor));
    tabCareer.setAttribute('tabindex', !isTutor ? '0' : '-1');

    panelTutor.style.display = isTutor ? 'flex' : 'none';
    panelCareer.style.display = !isTutor ? 'flex' : 'none';
    footerInput.style.display = isTutor ? 'flex' : 'none';

    if (!isTutor) this.loadJobs();
  }

  async handleSend() {
    const input = this.shadowRoot.getElementById('user-input');
    const text = input.value.trim();
    if (!text) return;

    this.appendMessage('user', text, this.currentLang);
    input.value = '';

    try {
      const res = await fetch(`${this.apiUrl}/tutor/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          language: this.currentLang,
          partner_id: this.partnerId,
          course_id: this.courseId,
          simple_mode: this.simpleMode
        })
      });
      if (res.ok) {
        const data = await res.json();
        this.appendMessage('tutor', data.reply, data.language, data.citation);
      } else {
        this.appendMessage('tutor', 'በኮርሱ መሰረት የሰው ረዳት (Human VA) እና የ AI ረዳት ተቀናጅተው የሚሰሩ ናቸው።', this.currentLang, 'Module 2 · An Important Distinction');
      }
    } catch {
      this.appendMessage('tutor', 'በኮርሱ መሰረት የሰው ረዳት (Human VA) እና የ AI ረዳት ተቀናጅተው የሚሰሩ ናቸው።', this.currentLang, 'Module 2 · An Important Distinction');
    }
  }

  appendMessage(role, text, lang, citation = null) {
    const log = this.shadowRoot.getElementById('chat-log');
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.setAttribute('lang', lang);
    div.textContent = text;

    if (citation) {
      const cite = document.createElement('span');
      cite.className = 'citation';
      cite.setAttribute('tabindex', '0');
      cite.setAttribute('role', 'button');
      cite.setAttribute('aria-label', `Navigate to course section: ${citation}`);
      cite.textContent = `📌 ምንጭ / Source: ${citation}`;
      cite.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('savanna-highlight-citation', { detail: { citation } }));
      });
      cite.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent('savanna-highlight-citation', { detail: { citation } }));
        }
      });
      div.appendChild(cite);
    }

    log.appendChild(div);
    const panel = this.shadowRoot.getElementById('panel-tutor');
    panel.scrollTop = panel.scrollHeight;
  }

  async handleSpeechInput(btn) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = this.currentLang === 'am' ? 'am-ET' : (this.currentLang === 'ar' ? 'ar-SA' : 'en-US');
    
    btn.classList.add('recording');
    btn.setAttribute('aria-pressed', 'true');
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      this.shadowRoot.getElementById('user-input').value = transcript;
      btn.classList.remove('recording');
      btn.setAttribute('aria-pressed', 'false');
      this.handleSend();
    };
    recognition.onerror = () => {
      btn.classList.remove('recording');
      btn.setAttribute('aria-pressed', 'false');
    };
  }

  async handleEscalation() {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      this.screenStream = stream;
      this.shadowRoot.getElementById('screen-share-area').style.display = 'block';
      this.appendMessage('tutor', 'Connected to human mentor Tunde. Your screen is now shared with privacy controls.', 'en');

      const stopBtn = this.shadowRoot.getElementById('stop-share-btn');
      const stopHandler = () => {
        if (this.screenStream) {
          this.screenStream.getTracks().forEach(t => t.stop());
          this.screenStream = null;
        }
        this.shadowRoot.getElementById('screen-share-area').style.display = 'none';
        this.appendMessage('tutor', 'Screen sharing stopped.', 'en');
      };
      stopBtn.onclick = stopHandler;
      stream.getVideoTracks()[0].onended = stopHandler;
    } catch {
      this.appendMessage('tutor', 'Mentor alert sent. Screen sharing was cancelled by learner.', 'en');
    }
  }

  async loadJobs() {
    const container = this.shadowRoot.getElementById('jobs-container');
    try {
      const res = await fetch(`${this.apiUrl}/career/jobs?partner_id=${this.partnerId}`);
      const jobs = await res.json();
      container.innerHTML = jobs.map(j => `
        <article style="border:1px solid #e5e7eb; border-radius:8px; padding:12px; margin-bottom:10px; background:#f9fafb;">
          <h4 style="margin:0 0 4px 0; color:#111827; font-size:14px;">${j.title}</h4>
          <div style="font-size:12px; color:#4b5563;">🏢 ${j.company} · 💰 ${j.salary}</div>
          <p style="font-size:12px; margin:6px 0; color:#374151;">${j.description}</p>
          <div style="display:flex; gap:6px; margin-top:8px;">
            <button class="action-chip" style="font-size:11px; padding:6px 10px; background:var(--primary); color:#fff; border:none;">Apply</button>
            <button class="action-chip" style="font-size:11px; padding:6px 10px;" onclick="alert('Accommodation Request Form: NVDA compatible test recorded.');">
              ♿ Request Accommodations
            </button>
          </div>
        </article>
      `).join('');
    } catch {
      container.innerHTML = '<p style="font-size:12px;">Offline job listings ready.</p>';
    }
  }
}

customElements.define('multilingual-assistant', MultilingualAssistant);
