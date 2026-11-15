import { describe, it, expect, beforeEach } from 'vitest';
import { OfflineSearcher } from './offline-search.js';

describe('OfflineSearcher ETL and TF-IDF Pipeline', () => {
  beforeEach(() => {
    // Inject the exact HTML structure from Savanna's concept-with-navigation.html
    document.body.innerHTML = `
      <h4>
        <a href="#" aria-hidden="true" class="anchor" id="what-is-shaping-the-future-of-va-work"></a>
        What is Shaping the Future of VA Work?
      </h4>
      <p>More remote-first businesses are hiring.</p>
      <p>Companies are comfortable building distributed teams.</p>
      <hr>
      <h4>
        <a href="#" aria-hidden="true" class="anchor" id="artificial-intelligence-and-the-future-of-va-work"></a>
        Artificial Intelligence and the Future of VA Work
      </h4>
      <p>AI is one of the most important forces shaping the future.</p>
      <p>Many modern workplaces already use AI tools to help draft and summarize.</p>
    `;
  });

  it('should scrape the DOM and index the sections correctly', () => {
    const searchEngine = new OfflineSearcher();
    searchEngine.buildIndex();

    expect(searchEngine.miniSearch.documentCount).toBe(2);
  });

  it('should find the correct section even with typos and stop words', () => {
    const searchEngine = new OfflineSearcher();
    searchEngine.buildIndex();

    const query = "how does artifical inteligence shape the future";
    const result = searchEngine.search(query);

    expect(result).not.toBeNull();
    expect(result.url).toBe('#artificial-intelligence-and-the-future-of-va-work');
    expect(result.title).toContain('Artificial Intelligence');
    expect(result.content).toContain('AI is one of the most important forces');
  });

  it('should return null for completely irrelevant queries (zero false positives)', () => {
    const searchEngine = new OfflineSearcher();
    searchEngine.buildIndex();

    // Test a wide variety of off-topic queries including substring edge cases
    const offTopicQueries = [
      "how to bake a chocolate cake",
      "what is the weather like in spain",
      "who won the world cup",
      "how to fix a car engine",
      "trending dance on tiktok",
      "start the car",
      "do you like rain",
      "what is email",
      "tell me a joke about dogs",
      "clean the bottom of the pan"
    ];

    for (const q of offTopicQueries) {
      const result = searchEngine.search(q);
      expect(result, `Expected "${q}" to return null`).toBeNull();
    }
  });
});
