import { OfflineSearcher } from './offline-search.js';

class DbAssistant extends HTMLElement {
  constructor() {
    super();
    // 1. The Shadow DOM Sandbox: Blocks Savanna's Bootstrap CSS
    this.attachShadow({ mode: 'open' });
    this.searchEngine = new OfflineSearcher();
    this.isOpen = false;
  }

  connectedCallback() {
    this.render();
    // Scrape the DOM and build the MiniSearch index immediately
    this.searchEngine.buildIndex();
    this.setupEventListeners();
  }

  render() {
    // 2. CSS & HTML: Stealing Host Colors & Setting up Accessibility
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          font-family: var(--bs-body-font-family, system-ui, sans-serif);
        }

        /* The Launcher: Fixed bottom-right */
        #launcher {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--bs-primary, #002b56);
          color: white;
          border: none;
          cursor: pointer;
          z-index: 9999;
          font-size: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        /* Visible Focus Requirement for accessibility */
        button:focus-visible, input:focus-visible {
          outline: 3px solid #f5a300;
          outline-offset: 2px;
        }

        #chat-panel {
          display: none;
          position: fixed;
          bottom: 85px;
          right: 20px;
          width: 350px;
          height: 500px;
          max-width: calc(100vw - 40px);
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          z-index: 9999;
          flex-direction: column;
        }

        #chat-panel.open {
          display: flex;
        }

        /* The Chat Feed */
        #messages {
          flex-grow: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bubble {
          padding: 12px;
          border-radius: 8px;
          max-width: 85%;
          line-height: 1.4;
        }

        .bubble.user { background: #f0f0f0; align-self: flex-end; }
        .bubble.bot { background: var(--bs-primary-subtle, #e6f0ff); align-self: flex-start; }

        #input-area {
          padding: 12px;
          border-top: 1px solid #ddd;
          display: flex;
          gap: 8px;
        }

        #chat-input {
          flex-grow: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      </style>

      <button id="launcher" aria-label="Open learning assistant">💬</button>

      <div id="chat-panel">
        <!-- aria-live="polite" ensures screen readers read new AI replies automatically -->
        <div id="messages" role="log" aria-live="polite">
          <div class="bubble bot" dir="auto">Hello! I am your offline learning assistant. Ask me anything about the lesson.</div>
        </div>

        <div id="input-area">
          <input type="text" id="chat-input" placeholder="Type your question..." />
          <button id="send-btn">Send</button>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    const launcher = this.shadowRoot.getElementById('launcher');
    const panel = this.shadowRoot.getElementById('chat-panel');
    const sendBtn = this.shadowRoot.getElementById('send-btn');
    const input = this.shadowRoot.getElementById('chat-input');

    // Toggle Chat
    launcher.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        panel.classList.add('open');
        input.focus();
      } else {
        panel.classList.remove('open');
      }
    });

    // Escape to Close (Accessibility Requirement)
    this.shadowRoot.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.isOpen = false;
        panel.classList.remove('open');
        launcher.focus();
      }
    });

    // Handle Sending Messages with Hybrid Routing
    const handleSend = async () => {
      const text = input.value.trim();
      if (!text) return;

      this.appendMessage(text, 'user');
      input.value = '';

      // Add a temporary loading indicator
      this.appendMessage('<span class="loading">Thinking...</span>', 'bot');
      const messagesDiv = this.shadowRoot.getElementById('messages');
      const loadingBubble = messagesDiv.lastElementChild;

      try {
        // 1. Attempt to hit the Local AI Backend (FastAPI)
        const response = await fetch('http://localhost:8000/api/v1/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: text })
        });

        if (!response.ok) throw new Error("API unreachable");

        const data = await response.json();
        loadingBubble.remove();

        // 2. Display the RAG AI response
        let reply = data.answer;
        if (data.sources && data.sources.length > 0) {
            reply += `<br><br><a href="#${data.sources[0].url}" style="color: #002b56; font-weight: bold;">Source: ${data.sources[0].title}</a>`;
        }
        this.appendMessage(reply, 'bot');

      } catch (error) {
        // 3. The "Deep Offline" Fallback: Trigger MiniSearch
        loadingBubble.remove();
        console.warn("AI Backend unreachable. Falling back to offline MiniSearch.", error);

        const result = this.searchEngine.search(text);
        if (result) {
          const reply = `<em>(Offline Mode)</em><br>${result.content}<br><br><a href="${result.url}" style="color: #002b56; font-weight: bold;">Read this section</a>`;
          this.appendMessage(reply, 'bot');
        } else {
          this.appendMessage("I couldn't find that in this lesson.", 'bot');
        }
      }
    };

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  appendMessage(html, sender) {
    const messagesDiv = this.shadowRoot.getElementById('messages');
    const bubble = document.createElement('div');
    bubble.className = `bubble ${sender}`;
    bubble.dir = 'auto'; // Supports Right-to-Left languages automatically
    bubble.innerHTML = html;
    messagesDiv.appendChild(bubble);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}

// Register the custom element
customElements.define('db-assistant', DbAssistant);