import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import path from 'path';

describe('Accessible Markdown Rendering & Speech Sanitization (WCAG 2.2 AA)', () => {
  let element;

  beforeAll(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.window = dom.window;
    global.document = dom.window.document;
    global.HTMLElement = dom.window.HTMLElement;
    global.customElements = dom.window.customElements;

    const assistantPath = path.resolve(__dirname, '../widget/assistant.js');
    // Load assistant web component definition
    delete require.cache[require.resolve(assistantPath)];
    require(assistantPath);

    element = document.createElement('multilingual-assistant');
  });

  it('should render triple-asterisk *** Draft *** as bold-italic <strong><em>Draft</em></strong>', () => {
    const html = element.renderMarkdown('*** Draft *** emails, notes, and documents');
    expect(html).toContain('<strong><em>Draft</em></strong>');
    expect(html).not.toContain('***');
  });

  it('should render double-asterisk **bold** as <strong>bold</strong>', () => {
    const html = element.renderMarkdown('This is **important** information.');
    expect(html).toContain('<strong>important</strong>');
    expect(html).not.toContain('**');
  });

  it('should render bullet lists into semantic <ul> and <li> tags', () => {
    const input = [
      '* **Drafting:** emails and letters',
      '* **Summarizing:** long meetings',
      '* **Scheduling:** calendar invites'
    ].join('\n');

    const html = element.renderMarkdown(input);
    expect(html).toContain('<ul>');
    expect(html).toContain('<li><strong>Drafting:</strong> emails and letters</li>');
    expect(html).toContain('<li><strong>Summarizing:</strong> long meetings</li>');
    expect(html).toContain('<li><strong>Scheduling:</strong> calendar invites</li>');
    expect(html).toContain('</ul>');
  });

  it('should sanitize text for Screen Reader and Speech Synthesis (zero asterisks)', () => {
    const input = '*** Draft *** emails, notes, and first-pass documents with **high accuracy**.';
    const clean = element.cleanSpeechText(input);

    expect(clean).toBe('Draft emails, notes, and first-pass documents with high accuracy.');
    expect(clean).not.toContain('*');
  });

  it('should prevent XSS by escaping dangerous HTML tags before rendering markdown', () => {
    const input = '<img src=x onerror=alert(1)> **safe text**';
    const html = element.renderMarkdown(input);

    expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;');
    expect(html).toContain('<strong>safe text</strong>');
    expect(html).not.toContain('<img');
  });
});
