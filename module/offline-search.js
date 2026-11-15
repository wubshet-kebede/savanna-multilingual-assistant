import MiniSearch from 'minisearch';

export class OfflineSearcher {
  constructor() {
    // 1. Define common filler words to ignore completely
    const stopWords = new Set(['how', 'to', 'a', 'an', 'the', 'is', 'does', 'what', 'are', 'in', 'of', 'and', 'for', 'it']);

    this.miniSearch = new MiniSearch({
      fields: ['title', 'content'],
      storeFields: ['title', 'content', 'url'],
      idField: 'url',

      // 2. Strip stop words before indexing and searching
      processTerm: (term) => {
        const lowerTerm = term.toLowerCase();
        return stopWords.has(lowerTerm) ? null : lowerTerm;
      },

      searchOptions: {
        // 3. Only allow typos and partial matches on words longer than 3 letters
        fuzzy: term => term.length > 3 ? 0.2 : false,
        prefix: term => term.length > 3
      }
    });
  }

  buildIndex() {
    const documents = [];

    // Savanna uses <a class="anchor" id="..."> inside the headings
    const anchors = document.querySelectorAll('a.anchor[id]');

    anchors.forEach(anchor => {
      const heading = anchor.parentElement; // Grabs the <h4> or <h2>
      let content = '';
      let sibling = heading.nextElementSibling;

      // Grab all text until we hit the next heading or a horizontal rule (<hr>)
      while (sibling && !['H1', 'H2', 'H3', 'H4', 'HR'].includes(sibling.tagName)) {
        if (sibling.tagName === 'P' || sibling.tagName === 'DIV') {
          content += (sibling.textContent || '') + ' ';
        }
        sibling = sibling.nextElementSibling;
      }

      if (content.trim().length > 0) {
        documents.push({
          url: `#${anchor.id}`,
          title: (heading.textContent || '').trim(),
          content: content.trim()
        });
      }
    });

    this.miniSearch.addAll(documents);
    console.log("Index automatically built! Loaded sections:", documents.length);
  }

  search(query) {
    const results = this.miniSearch.search(query);
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
}