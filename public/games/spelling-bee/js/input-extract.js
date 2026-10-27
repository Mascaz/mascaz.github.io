// Word Extraction Engine: Manual Entry, Pasted Text Parser, and Camera/Photo OCR (Tesseract.js)

const COMMON_STOP_WORDS = new Set([
  'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'any', 'can', 'had', 'her', 'was',
  'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'man', 'new', 'now', 'old',
  'see', 'two', 'way', 'who', 'did', 'its', 'let', 'put', 'say', 'she', 'too', 'use', 'that',
  'with', 'have', 'this', 'will', 'your', 'from', 'they', 'know', 'want', 'been', 'good',
  'much', 'some', 'time', 'very', 'when', 'come', 'here', 'just', 'like', 'long', 'make',
  'many', 'more', 'only', 'over', 'such', 'take', 'than', 'them', 'well', 'were', 'what',
  'name', 'date', 'grade', 'list', 'week', 'page', 'spelling', 'words', 'word', 'unit', 'test'
]);

// Extract candidate English words from arbitrary pasted or OCR text
function extractWordsFromText(rawText, options = { filterShort: true, filterStop: true }) {
  if (!rawText || typeof rawText !== 'string') return [];

  const results = [];
  const seen = new Set();
  const lines = rawText.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Check if the line looks like "1. butterfly - a colorful insect" or "butterfly: a colorful insect"
    const defMatch = trimmed.match(/^(?:\d+[\.\)\-]?\s*)?([a-zA-Z]{2,20})\s*[\-–—:]\s*(.+)$/);
    if (defMatch) {
      const candidate = defMatch[1].toLowerCase().trim();
      const hint = defMatch[2].trim();
      if (isValidCandidate(candidate, options) && !seen.has(candidate)) {
        seen.add(candidate);
        const metrics = window.SpellingBeeHelpers.computeWordMetrics(candidate);
        results.push({
          word: candidate,
          hint,
          selected: true,
          ...metrics
        });
        continue;
      }
    }

    // Otherwise extract all alphabetic tokens from the line
    const tokens = trimmed.match(/[a-zA-Z]+/g) || [];
    for (const tok of tokens) {
      const candidate = tok.toLowerCase();
      if (isValidCandidate(candidate, options) && !seen.has(candidate)) {
        seen.add(candidate);
        const metrics = window.SpellingBeeHelpers.computeWordMetrics(candidate);
        results.push({
          word: candidate,
          hint: '',
          selected: true,
          ...metrics
        });
      }
    }
  }

  return results;
}

function isValidCandidate(word, options) {
  if (!word || !/^[a-z]+$/.test(word)) return false;
  if (options.filterShort && word.length < 3) return false;
  if (!options.filterShort && word.length < 2) return false;
  if (word.length > 20) return false;
  // Reject obvious OCR noise like 4+ identical letters in a row or zero vowels
  if (/(.)\1\1/.test(word)) return false;
  if (!/[aeiouy]/.test(word)) return false;
  if (options.filterStop && COMMON_STOP_WORDS.has(word)) return false;
  return true;
}

// Preprocess an image onto a canvas for cleaner OCR on phone/iPad photos of paper sheets
function preprocessImageToCanvas(imgElement, canvas, highContrast = true) {
  const maxDim = 1600;
  let w = imgElement.naturalWidth || imgElement.width;
  let h = imgElement.naturalHeight || imgElement.height;
  if (w > maxDim || h > maxDim) {
    const scale = maxDim / Math.max(w, h);
    w = Math.round(w * scale);
    h = Math.round(h * scale);
  }
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imgElement, 0, 0, w, h);

  if (highContrast) {
    const imgData = ctx.getImageData(0, 0, w, h);
    const d = imgData.data;
    for (let i = 0; i < d.length; i += 4) {
      // Luminance grayscale
      const lum = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      // Soft contrast boost for dark text on light paper
      const contrasted = lum < 155 ? Math.max(0, (lum - 40) * 0.7) : Math.min(255, lum * 1.15);
      d[i] = contrasted;
      d[i + 1] = contrasted;
      d[i + 2] = contrasted;
    }
    ctx.putImageData(imgData, 0, 0);
  }
}

// Run OCR using Tesseract.js (loaded on demand or via script tag)
async function runPhotoOCR(canvas, onProgress) {
  if (!window.Tesseract) {
    // Dynamically load Tesseract.js from CDN if not yet loaded
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Could not load OCR library'));
      document.head.appendChild(script);
    });
  }

  const result = await window.Tesseract.recognize(canvas, 'eng', {
    logger: (m) => {
      if (m && m.status === 'recognizing text' && typeof m.progress === 'number') {
        onProgress(Math.round(m.progress * 100));
      }
    }
  });

  return (result && result.data && result.data.text) ? result.data.text : '';
}

window.WordExtractor = {
  extractWordsFromText,
  preprocessImageToCanvas,
  runPhotoOCR
};
