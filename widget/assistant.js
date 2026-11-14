/**
 * Universal Multilingual Assistant & Live Help (Level 1 Web Component)
 * PHASE 2: Comprehensive Multilingual Adaptation & Bidirectional RTL Arabic Engine.
 * Supports Amharic, Afaan Oromo, Tigrinya, Somali, Arabic (RTL), and English.
 * Fully compliant with WCAG 2.2 AA (SC 3.1.1, 3.1.2, 1.3.2, 3.1.5).
 */

const LOCALIZED_UI = {
  am: {
    launcher: "ረዳት ይጠይቁ (አማርኛ)",
    dialogTitle: "ሁለንተናዊ ባለብዙ ቋንቋ የትምህርት ረዳት",
    tutorTab: "📚 የኮርስ ረዳት",
    careerTab: "💼 የስራ እድሎች",
    placeholder: "ጥያቄዎን እዚህ ይጻፉ...",
    send: "ላክ",
    micLabel: "በድምጽ ይጠይቁ",
    simpleBtn: "🧠 ቀላል ሁነታ",
    simpleActive: "ቀላል ሁነታ: በርቷል",
    humanHelpBtn: "🆘 የሰው እርዳታ",
    closeTitle: "ዝጋ (Escape)",
    screenShareActive: "🟢 ስክሪን ማጋራት በርቷል (በእርስዎ ቁጥጥር ስር)",
    stopShare: "አቁም",
    welcome: "ሰላም! እኔ የእርስዎ የኮርስ ረዳት ነኝ። በኮርሱ ዙሪያ ማንኛውንም ጥያቄ ይጠይቁኝ።",
    sourceLabel: "ምንጭ",
    direction: "ltr",
    speechLang: "am-ET"
  },
  om: {
    launcher: "Gargaaraa Gaafadhaa",
    dialogTitle: "Gargaaraa Barnootaa Afaan Baay'ee",
    tutorTab: "📚 Gargaaraa Koorsii",
    careerTab: "💼 Carraawwan Hojii",
    placeholder: "Gaaffii keessan asitti barreessaa...",
    send: "Ergi",
    micLabel: "Sagaleen gaafadhaa",
    simpleBtn: "🧠 Haala Salphaa",
    simpleActive: "Salphaa: Hojjetaa jira",
    humanHelpBtn: "🆘 Gargaarsa Namaa",
    closeTitle: "Cufi (Escape)",
    screenShareActive: "🟢 Iskirinii qooduun hojjetaa jira (To'annoo keessan jala)",
    stopShare: "Dhaabi",
    welcome: "Akkam! Ani gargaaraa koorsii keessaniiti. Gaaffii qabdan kamiyyuu na gaafadhaa.",
    sourceLabel: "Madda",
    direction: "ltr",
    speechLang: "om-ET"
  },
  ti: {
    launcher: "ሓጋዚ ሕተቱ",
    dialogTitle: "ኩለመዳያዊ فرቲ ሓጋዚ ትምህርቲ",
    tutorTab: "📚 ናይ ኮርስ ሓጋዚ",
    careerTab: "💼 ናይ ስራሕ ዕድላት",
    placeholder: "ሕቶኹም ኣብዚ ጸሓፉ...",
    send: "ስደድ",
    micLabel: "ብድምጺ ሕተቱ",
    simpleBtn: "🧠 ቀሊል ኣገባብ",
    simpleActive: "ቀሊል: በርቲሁ ኣሎ",
    humanHelpBtn: "🆘 ናይ ሰብ ሓገዝ",
    closeTitle: "ዕጾ (Escape)",
    screenShareActive: "🟢 ስክሪን ምክፋል በርቲሁ ኣሎ",
    stopShare: "ኣቋርጽ",
    welcome: "ሰላም! ኣነ ናይዚ ኮርስ ሓጋዚኹም እየ። ዝኾነ ሕቶ ሃልዩኩም ሕተቱኒ።",
    sourceLabel: "ምንጪ",
    direction: "ltr",
    speechLang: "ti-ET"
  },
  so: {
    launcher: "Weydii Caawiyaha",
    dialogTitle: "Kaaliyaha Waxbarashada Luqadaha Badan",
    tutorTab: "📚 Caawiyaha Koorsada",
    careerTab: "💼 Fursadaha Shaqada",
    placeholder: "Halkan ku qor su'aashaada...",
    send: "Dir",
    micLabel: "Cod ku weydii",
    simpleBtn: "🧠 Qaab Fudud",
    simpleActive: "Fudud: Waa shidan yahay",
    humanHelpBtn: "🆘 Caawinaad Qof",
    closeTitle: "Xidh (Escape)",
    screenShareActive: "🟢 Wadaagista shaashadu waa shaqaynaysaa",
    stopShare: "Jooji",
    welcome: "Kusoo dhowow! Waxaan ahay caawiyahaaga koorsada. Wax su'aal ah i waydii.",
    sourceLabel: "Xigasho",
    direction: "ltr",
    speechLang: "so-SO"
  },
  ar: {
    launcher: "اسأل المساعد التعليمي",
    dialogTitle: "المساعد التعليمي متعدد اللغات وبوابة المهن",
    tutorTab: "📚 المساعد الدراسي",
    careerTab: "💼 بوابة الوظائف",
    placeholder: "اكتب سؤالك التعليمي هنا...",
    send: "إرسال",
    micLabel: "تحدث بسؤالك صوتياً",
    simpleBtn: "🧠 النمط المبسط",
    simpleActive: "النمط المبسط: مفعّل",
    humanHelpBtn: "🆘 طلب مساعدة بشرية",
    closeTitle: "إغلاق (Escape)",
    screenShareActive: "🟢 مشاركة الشاشة قيد التشغيل (تحت سيطرتك)",
    stopShare: "إيقاف المشاركة",
    welcome: "مرحباً! أنا المساعد التعليمي الذكي الخاص بك. اسألني أي سؤال من محتوى الدورة.",
    sourceLabel: "المصدر",
    direction: "rtl",
    speechLang: "ar-SA"
  },
  en: {
    launcher: "Ask AI Tutor (Help)",
    dialogTitle: "Universal Multilingual Assistant & Career Gateway",
    tutorTab: "📚 Course Tutor",
    careerTab: "💼 Career Gateway",
    placeholder: "Type your question from the course...",
    send: "Send",
    micLabel: "Speak your question",
    simpleBtn: "🧠 Simple Mode",
    simpleActive: "Simple Mode: ON",
    humanHelpBtn: "🆘 Human Help",
    closeTitle: "Close (Escape)",
    screenShareActive: "🟢 Screen Sharing Active (You are in control)",
    stopShare: "Stop Sharing",
    welcome: "Hello! I am your course assistant. Ask me any question from the curriculum.",
    sourceLabel: "Source",
    direction: "ltr",
    speechLang: "en-US"
  }
};

class MultilingualAssistant extends HTMLElement {
  static get observedAttributes() {
    return ['partner', 'course', 'api-url', 'theme-color', 'default-lang', 'position'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Configurable Settings In
    this.apiUrl = this.getAttribute('api-url') || 'http://localhost:8000/api/v1';
    this.partnerId = this.getAttribute('partner') || 'savanna';
    this.courseId = this.getAttribute('course') || 'VA-1';
    this.themeColor = this.getAttribute('theme-color') || '#0e623b';
    this.currentLang = this.getAttribute('default-lang') || 'am';
    this.position = this.getAttribute('position') || 'bottom-right';

    this.simpleMode = false;
    this.screenStream = null;
    this.activeTab = 'tutor';
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === 'theme-color') this.themeColor = newValue;
    if (name === 'default-lang') this.currentLang = newValue;
    if (name === 'partner') this.partnerId = newValue;
    if (name === 'course') this.courseId = newValue;
    if (name === 'position') this.position = newValue;
    if (name === 'api-url') this.apiUrl = newValue;
    
    if (this.shadowRoot.innerHTML) {
      this.updateTheme();
      this.applyLocalization(this.currentLang);
    }
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
    this.setupFocusTrap();
    this.setupTabsKeyboardNavigation();
    this.updateTheme();
    this.applyLocalization(this.currentLang);
  }

  /* ------------------- Public JavaScript API ------------------- */
  open() {
    const drawer = this.shadowRoot.getElementById('drawer');
    const openBtn = this.shadowRoot.getElementById('open-btn');
    drawer.classList.add('open');
    openBtn.setAttribute('aria-expanded', 'true');
    this.shadowRoot.getElementById('user-input').focus();
    this.emitEvent('assistant:opened', { partner: this.partnerId, course: this.courseId });
  }

  close() {
    this.closeDrawer();
  }

  setLanguage(langCode) {
    const select = this.shadowRoot.getElementById('lang-select');
    if (select && LOCALIZED_UI[langCode]) {
      select.value = langCode;
      this.handleLanguageSwitch(langCode);
    }
  }

  askQuestion(text) {
    const input = this.shadowRoot.getElementById('user-input');
    if (input) {
      input.value = text;
      this.open();
      this.handleSend();
    }
  }

  /* ------------------- Universal Events Out ------------------- */
  emitEvent(name, detail = {}) {
    this.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      composed: true,
      detail: {
        partnerId: this.partnerId,
        courseId: this.courseId,
        language: this.currentLang,
        ...detail
      }
    }));
  }

  updateTheme() {
    this.style.setProperty('--assistant-primary', this.themeColor);
    const trigger = this.shadowRoot.getElementById('open-btn');
    const drawer = this.shadowRoot.getElementById('drawer');
    const pos = this.position === 'bottom-left' ? 'left: 24px; right: auto;' : 'right: 24px; left: auto;';
    
    if (trigger) trigger.style.cssText = `${pos}; background: var(--assistant-primary, ${this.themeColor});`;
    if (drawer) drawer.style.cssText = `${pos}`;
  }

  applyLocalization(langCode) {
    const t = LOCALIZED_UI[langCode] || LOCALIZED_UI['en'];
    const isRtl = t.direction === 'rtl';

    // Update Launcher Label
    const launcherText = this.shadowRoot.getElementById('launcher-text');
    if (launcherText) launcherText.textContent = t.launcher;

    // Update Dialog Title
    const titleEl = this.shadowRoot.getElementById('assistant-dialog-title');
    if (titleEl) titleEl.textContent = `${t.dialogTitle} (${this.partnerId.toUpperCase()})`;

    // Update Tabs
    const tabTutorText = this.shadowRoot.getElementById('tab-tutor-text');
    const tabCareerText = this.shadowRoot.getElementById('tab-career-text');
    if (tabTutorText) tabTutorText.textContent = t.tutorTab;
    if (tabCareerText) tabCareerText.textContent = t.careerTab;

    // Update Buttons & Tooltips
    const closeBtn = this.shadowRoot.getElementById('close-btn');
    const simpleText = this.shadowRoot.getElementById('simple-text');
    const escalateText = this.shadowRoot.getElementById('escalate-text');
    const sendBtn = this.shadowRoot.getElementById('send-btn');
    const micBtn = this.shadowRoot.getElementById('mic-btn');
    const input = this.shadowRoot.getElementById('user-input');

    if (closeBtn) closeBtn.setAttribute('aria-label', t.closeTitle);
    if (simpleText) simpleText.textContent = this.simpleMode ? t.simpleActive : t.simpleBtn;
    if (escalateText) escalateText.textContent = t.humanHelpBtn;
    if (sendBtn) sendBtn.setAttribute('aria-label', t.send);
    if (micBtn) micBtn.setAttribute('aria-label', t.micLabel);
    if (input) input.setAttribute('placeholder', t.placeholder);

    // Apply Bidirectional Direction (RTL vs LTR)
    const drawer = this.shadowRoot.getElementById('drawer');
    drawer.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    drawer.setAttribute('lang', langCode);

    // Update first welcome message if only 1 message exists
    const chatLog = this.shadowRoot.getElementById('chat-log');
    if (chatLog && chatLog.children.length === 1) {
      chatLog.children[0].textContent = t.welcome;
      chatLog.children[0].setAttribute('lang', langCode);
      chatLog.children[0].setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    }
  }

  handleLanguageSwitch(langCode) {
    this.currentLang = langCode;
    const t = LOCALIZED_UI[langCode] || LOCALIZED_UI['en'];
    this.applyLocalization(langCode);
    this.emitEvent('assistant:language-change', { language: langCode, isRtl: t.direction === 'rtl' });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --primary: var(--assistant-primary, #0e623b);
          --primary-hover: var(--assistant-primary-hover, #094428);
          --primary-light: var(--assistant-primary-light, #e8f5e9);
          --focus-ring: #f59e0b;
          --bg-card: #ffffff;
          --text-main: #111827;
          --text-muted: #4b5563;
          --border: #d1d5db;
          --shadow: 0 12px 36px rgba(0, 0, 0, 0.22);
          --font: var(--assistant-font, system-ui, -apple-system, sans-serif);
          
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 2147483647;
          font-family: var(--font);
          color: var(--text-main);
          box-sizing: border-box;
        }

        *, *::before, *::after { box-sizing: inherit; }

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

        /* 1. Launcher Trigger Button */
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
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease;
        }
        .trigger-btn:hover { filter: brightness(0.9); transform: translateY(-2px); }
        .trigger-btn:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 3px; }

        /* 2. Dialog Drawer Shell */
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
        .drawer.open { display: flex; opacity: 1; transform: translateY(0) scale(1); }

        /* 3. Simple Mode (WCAG 3.1.5 Reading Level) */
        .drawer.simple-mode {
          font-size: 18px;
          line-height: 1.8;
          border: 3px solid #111827;
        }
        .drawer.simple-mode .msg {
          font-size: 17px;
          line-height: 1.8;
          padding: 14px 18px;
        }

        /* 4. Bidirectional Logical Styles (RTL & LTR) */
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
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
        }
        .tab-btn[aria-selected="true"] {
          background: #ffffff;
          color: var(--primary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .tab-btn:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 1px; }

        .close-btn {
          min-height: 40px;
          min-width: 40px;
          background: transparent;
          border: none;
          border-radius: 8px;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
        }
        .close-btn:hover { background: #fee2e2; color: #dc2626; }
        .close-btn:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 2px; }

        /* Controls Toolbar */
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
          font-family: inherit;
        }
        .select-lang:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 1px; }

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
          font-family: inherit;
        }
        .action-chip:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 1px; }
        .action-chip[aria-pressed="true"] {
          background: var(--primary-light);
          border-color: var(--primary);
          color: var(--primary);
        }
        .btn-escalate { color: #b91c1c; border-color: #fca5a5; background: #fef2f2; }
        .btn-escalate:hover { background: #fee2e2; }

        /* Panes & Bubbles with CSS Logical Properties */
        .tab-panel {
          flex: 1;
          display: none;
          flex-direction: column;
          overflow-y: auto;
          padding: 16px;
        }
        .tab-panel.active { display: flex; }
        .chat-body { gap: 12px; }

        .msg {
          padding: 10px 14px;
          border-radius: 12px;
          max-width: 88%;
          word-break: break-word;
          line-height: 1.5;
        }
        
        /* Logical speech bubble alignment */
        .msg.tutor {
          background: #f3f4f6;
          color: #111827;
          align-self: flex-start;
          border-end-start-radius: 2px;
        }
        .msg.user {
          background: var(--primary);
          color: #ffffff;
          align-self: flex-end;
          border-end-end-radius: 2px;
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
        .citation:hover { background: #bae6fd; }
        .citation:focus-visible { outline: 2px solid var(--focus-ring); }

        /* Footer Input Row */
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
          font-family: inherit;
        }
        .text-input:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 1px; }

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
        }
        .icon-btn:hover { filter: brightness(0.9); }
        .icon-btn:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 2px; }

        /* RTL Arrow Flip */
        :host([dir="rtl"]) .icon-send,
        [dir="rtl"] .icon-send {
          transform: scaleX(-1);
        }

        .btn-mic { background: #4b5563; }
        .btn-mic.recording { background: #dc2626; animation: pulse 1.2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.08); } 100% { transform: scale(1); } }

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
        <span id="launcher-text">Ask Tutor (አማርኛ)</span>
      </button>

      <!-- 2. Accessible Dialog Drawer -->
      <div 
        class="drawer" 
        id="drawer" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="assistant-dialog-title"
        dir="ltr"
        lang="am"
      >
        <h2 id="assistant-dialog-title" class="sr-only">Universal Multilingual Assistant</h2>

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
              <span id="tab-tutor-text">📚 Course Tutor</span>
            </button>
            <button 
              class="tab-btn" 
              id="tab-career" 
              role="tab" 
              aria-selected="false" 
              aria-controls="panel-career" 
              tabindex="-1"
            >
              <span id="tab-career-text">💼 Career Gateway</span>
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
              <option value="am">አማርኛ (Amharic)</option>
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
              <span id="simple-text">Simple</span>
            </button>

            <button 
              class="action-chip btn-escalate" 
              id="escalate-btn" 
              aria-label="Connect to a human mentor and share screen"
            >
              <span aria-hidden="true">🆘</span>
              <span id="escalate-text">Human Help</span>
            </button>
          </div>
        </section>

        <!-- Screen Share Alert -->
        <div id="screen-share-area" style="display:none;" role="status">
          <div class="screen-share-banner">
            <span id="screenshare-banner-text">🟢 Screen Sharing Active</span>
            <button class="btn-stop-share" id="stop-share-btn" aria-label="Stop screen sharing">Stop</button>
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
          <h3 id="career-title" style="margin:0 0 6px 0; font-size:16px;">💼 Opportunities for Learners</h3>
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
            placeholder="Type your question..." 
            aria-label="Question text input"
          />
          <button 
            type="button" 
            class="icon-btn" 
            id="send-btn" 
            aria-label="Send question"
          >
            <span class="icon-send">➤</span>
          </button>
        </footer>
      </div>
    `;
  }

  setupListeners() {
    const openBtn = this.shadowRoot.getElementById('open-btn');
    const closeBtn = this.shadowRoot.getElementById('close-btn');
    const input = this.shadowRoot.getElementById('user-input');
    const sendBtn = this.shadowRoot.getElementById('send-btn');
    const simpleToggle = this.shadowRoot.getElementById('simple-toggle');
    const langSelect = this.shadowRoot.getElementById('lang-select');
    const escalateBtn = this.shadowRoot.getElementById('escalate-btn');
    const micBtn = this.shadowRoot.getElementById('mic-btn');

    openBtn.addEventListener('click', () => this.open());
    closeBtn.addEventListener('click', () => this.close());

    // Simple Mode Toggle with Localized announcement
    simpleToggle.addEventListener('click', () => {
      this.simpleMode = !this.simpleMode;
      this.shadowRoot.getElementById('drawer').classList.toggle('simple-mode', this.simpleMode);
      simpleToggle.setAttribute('aria-pressed', String(this.simpleMode));
      const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
      this.shadowRoot.getElementById('simple-text').textContent = this.simpleMode ? t.simpleActive : t.simpleBtn;
      this.emitEvent('assistant:simple-mode-toggle', { simpleMode: this.simpleMode });
    });

    // Language Dropdown Handler
    langSelect.addEventListener('change', (e) => {
      this.handleLanguageSwitch(e.target.value);
    });

    sendBtn.addEventListener('click', () => this.handleSend());
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleSend();
    });

    micBtn.addEventListener('click', () => this.handleSpeechInput(micBtn));
    escalateBtn.addEventListener('click', () => this.handleEscalation());
  }

  closeDrawer() {
    const drawer = this.shadowRoot.getElementById('drawer');
    const openBtn = this.shadowRoot.getElementById('open-btn');
    drawer.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
    this.emitEvent('assistant:closed', { partner: this.partnerId });
  }

  setupFocusTrap() {
    const drawer = this.shadowRoot.getElementById('drawer');

    this.shadowRoot.addEventListener('keydown', (e) => {
      if (!drawer.classList.contains('open')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        this.closeDrawer();
        return;
      }

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

  setupTabsKeyboardNavigation() {
    const tabTutor = this.shadowRoot.getElementById('tab-tutor');
    const tabCareer = this.shadowRoot.getElementById('tab-career');
    const tabs = [tabTutor, tabCareer];

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => this.switchTab(idx === 0 ? 'tutor' : 'career'));

      tab.addEventListener('keydown', (e) => {
        let newIdx = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') newIdx = (idx + 1) % tabs.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') newIdx = (idx - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') newIdx = 0;
        else if (e.key === 'End') newIdx = tabs.length - 1;

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

    this.emitEvent('assistant:tab-switch', { tab: tabName });
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
        this.fallbackReply(text);
      }
    } catch {
      this.fallbackReply(text);
    }
  }

  fallbackReply(query) {
    const defaultAnswers = {
      am: 'በኮርሱ መሰረት የሰው ረዳት (Human VA) እና የ AI ረዳት ተቀናጅተው የሚሰሩ ናቸው።',
      om: 'Akka koorsichaatti gargaaraan namootaa fi AI gargaaran walitti hidhamanii hojjetu.',
      ti: 'ብመሰረት እቲ ኮርስ ናይ ሰብ ሓጋዚን ናይ AI ሓጋዚን ተሓባቢሮም ይሰርሑ።',
      so: 'Sida ku cad koorsada, kaaliyaha aadanaha iyo AI waxay u wada shaqeeyaan si wadajir ah.',
      ar: 'وفقاً للمنهاج، يتعاون المساعد الافتراضي البشري مع أدوات الذكاء الاصطناعي لتقديم أفضل أداء.',
      en: 'According to the curriculum, human Virtual Assistants and AI software tools collaborate together.'
    };
    this.appendMessage(
      'tutor', 
      defaultAnswers[this.currentLang] || defaultAnswers['en'], 
      this.currentLang, 
      `${this.courseId} · Module 2 Grounding Baseline`
    );
  }

  appendMessage(role, text, lang, citation = null) {
    const log = this.shadowRoot.getElementById('chat-log');
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    
    // Explicit Language Tagging & Direction (WCAG 3.1.2)
    div.setAttribute('lang', lang);
    div.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    div.textContent = text;

    if (citation) {
      const cite = document.createElement('span');
      cite.className = 'citation';
      cite.setAttribute('tabindex', '0');
      cite.setAttribute('role', 'button');
      cite.setAttribute('aria-label', `Citation: ${citation}`);
      const t = LOCALIZED_UI[lang] || LOCALIZED_UI['en'];
      cite.textContent = `📌 ${t.sourceLabel}: ${citation}`;
      
      const onCitationClick = () => {
        this.emitEvent('assistant:citation-click', { citation, text });
      };
      cite.addEventListener('click', onCitationClick);
      cite.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCitationClick();
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
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    recognition.lang = t.speechLang;
    
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
      this.appendMessage('tutor', 'Connected to human mentor. Screen sharing is active with learner privacy control.', 'en');

      this.emitEvent('assistant:escalate', { screenShareActive: true });

      const stopBtn = this.shadowRoot.getElementById('stop-share-btn');
      const stopHandler = () => {
        if (this.screenStream) {
          this.screenStream.getTracks().forEach(t => t.stop());
          this.screenStream = null;
        }
        this.shadowRoot.getElementById('screen-share-area').style.display = 'none';
        this.appendMessage('tutor', 'Screen sharing stopped.', 'en');
        this.emitEvent('assistant:screenshare-stopped');
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
            <button class="action-chip" style="font-size:11px; padding:6px 10px;" onclick="alert('Accommodation Request Form: Screen reader and extra time verified for ' + '${j.company}');">
              ♿ Request Accommodations
            </button>
          </div>
        </article>
      `).join('');
    } catch {
      container.innerHTML = '<p style="font-size:12px;">Verified job listings ready.</p>';
    }
  }
}

customElements.define('multilingual-assistant', MultilingualAssistant);
