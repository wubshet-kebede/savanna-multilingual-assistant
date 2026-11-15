import MiniSearch from 'minisearch';

export const MULTILINGUAL_STOP_WORDS = new Set([
  // English stop words & conversational question words
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'as', 'at',
  'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by',
  'can', 'could', 'did', 'do', 'does', 'doing', 'down', 'during',
  'each', 'few', 'for', 'from', 'further',
  'had', 'has', 'have', 'having', 'he', 'her', 'here', 'hers', 'herself', 'him', 'himself', 'his', 'how',
  'i', 'if', 'in', 'into', 'is', 'it', 'its', 'itself',
  'let', 'me', 'more', 'most', 'my', 'myself',
  'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'our', 'ours', 'ourselves', 'out', 'over', 'own',
  'same', 'she', 'should', 'so', 'some', 'such',
  'than', 'that', 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they', 'this', 'those', 'through', 'to', 'too',
  'under', 'until', 'up', 'very',
  'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'with', 'would',
  'you', 'your', 'yours', 'yourself', 'yourselves',
  'tell', 'give', 'show', 'like', 'just', 'know', 'want', 'please', 'hi', 'hello', 'hey', 'start',
  // Amharic function words
  'ሁኔታ', 'ሁኔታዎች', 'ላይ', 'ውስጥ', 'ጋር', 'ስለ', 'እንደ', 'ነው', 'ናቸው', 'ይህ', 'ያሉ', 'ዛሬ', 'ምን', 'እንዴት', 'የት', 'መቼ', 'ማን', 'ለምን',
  // Somali function words
  'waa', 'maxay', 'sidee', 'xagee', 'goorma', 'yaa', 'maxaa', 'ku', 'ka', 'ee', 'ah', 'iyo', 'loo', 'soo', 'oo', 'la', 'kan', 'tan',
  // Arabic function words
  'في', 'من', 'على', 'إلى', 'عن', 'مع', 'ما', 'ماذا', 'كيف', 'أين', 'متى', 'هل', 'كم', 'هو', 'هي', 'أن', 'هذا', 'هذه', 'الان',
  // Tigrinya function words
  'ናይ', 'ኣብ', 'ምስ', 'እንታይ', 'ከመይ', 'ኣበይ', 'መዓስ', 'መን', 'ስለ', 'እዩ', 'እዮም', 'እቲ', 'እታ',
  // Afaan Oromo function words
  'akka', 'keessatti', 'irraa', 'maaloo', 'akkamitti', 'maaliif', 'eessa', 'yoom', 'eenyu', 'kun', 'sun', 'fi', 'ti', 'kan'
]);

export class OfflineSearcher {
  constructor() {
    this.stopWords = MULTILINGUAL_STOP_WORDS;

    this.miniSearch = new MiniSearch({
      fields: ['title', 'content'],
      storeFields: ['title', 'content', 'url'],
      idField: 'url',

      processTerm: (term) => {
        const lowerTerm = term.toLowerCase().replace(/[^a-z0-9\u1200-\u137F\u0600-\u06FF]/g, '');
        if (!lowerTerm || lowerTerm.length < 2) return null;
        return MULTILINGUAL_STOP_WORDS.has(lowerTerm) ? null : lowerTerm;
      },

      searchOptions: {
        fuzzy: term => term.length >= 5 ? 0.25 : false,
        prefix: false
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
    if (!query || !query.trim()) return null;
    const results = this.miniSearch.search(query);
    if (results.length > 0) {
      const top = results[0];
      if (top.score >= 1.0 || (top.terms && top.terms.length > 0 && ['ai', 'va', 'chatgpt', 'notion', 'zapier'].includes(top.terms[0]))) {
        return top;
      }
    }
    return null;
  }
}
