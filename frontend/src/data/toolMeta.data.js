// ═══════════════════════════════════════════════════════
// ISHU.FUN TOOLS — EXTENDED TOOL METADATA
// Per-tool: features, FAQs, related tools, SEO, file config
// ═══════════════════════════════════════════════════════

const TOOL_META = {
  'merge-pdf': {
    seoTitle: 'Merge PDF Files Online — Free PDF Combiner',
    seoDescription: 'Combine multiple PDF files into one document. Free, fast, no signup. Drag & drop to reorder pages. Works on any device.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 20,
    maxSizeMB: 100,
    multiFile: true,
    features: [
      { icon: 'Shield', title: '100% Secure', desc: 'Files encrypted with TLS. Auto-deleted after 1 hour.' },
      { icon: 'Zap', title: 'Lightning Fast', desc: 'Process files in under 5 seconds on average.' },
      { icon: 'Smartphone', title: 'Works Everywhere', desc: 'Mobile, tablet, desktop — any device, any browser.' },
      { icon: 'Ban', title: 'Always Free', desc: 'No hidden fees, no watermarks, no limits.' },
      { icon: 'FileText', title: 'Unlimited Pages', desc: 'No restriction on number of pages or files.' },
      { icon: 'Gem', title: 'Preserves Quality', desc: 'Original formatting and quality maintained.' },
    ],
    faqs: [
      { q: 'Is the PDF merger free to use?', a: 'Yes, completely free. No signup, no watermarks, no hidden charges.' },
      { q: 'How many PDFs can I merge at once?', a: 'You can merge up to 20 PDF files in a single operation.' },
      { q: 'Is it safe to merge PDFs online?', a: 'Absolutely. Files are encrypted during transfer and automatically deleted after 1 hour.' },
      { q: 'What is the maximum file size?', a: 'Each file can be up to 100MB. Total combined size up to 500MB.' },
      { q: 'Will quality be affected?', a: 'No. We preserve original quality, fonts, images, and formatting.' },
      { q: 'Can I reorder pages before merging?', a: 'Yes! Drag and drop to rearrange files in your preferred order.' },
    ],
    relatedSlugs: ['split-pdf', 'compress-pdf', 'organize-pdf', 'rotate-pdf', 'pdf-viewer'],
  },

  'split-pdf': {
    seoTitle: 'Split PDF Online — Extract Pages for Free',
    seoDescription: 'Split PDF into multiple files. Extract specific pages or split by range. Free, instant, no signup.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Shield', title: '100% Secure', desc: 'Files auto-deleted after processing.' },
      { icon: 'Zap', title: 'Instant Split', desc: 'Split any PDF in seconds.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works on mobile, tablet, desktop.' },
      { icon: 'Ban', title: 'Free Forever', desc: 'No fees, no watermarks.' },
      { icon: 'Scissors', title: 'Custom Ranges', desc: 'Select exact pages to extract.' },
      { icon: 'Gem', title: 'Quality Intact', desc: 'No quality loss whatsoever.' },
    ],
    faqs: [
      { q: 'How do I split a PDF?', a: 'Upload your PDF, select pages or ranges, click Split.' },
      { q: 'Can I extract specific pages?', a: 'Yes, select individual pages or ranges like 1-5, 8, 10-15.' },
      { q: 'Is there a page limit?', a: 'No limit on the number of pages in the PDF.' },
    ],
    relatedSlugs: ['merge-pdf', 'extract-pages', 'organize-pdf', 'compress-pdf', 'delete-pages'],
  },

  'compress-pdf': {
    seoTitle: 'Compress PDF Online — Reduce File Size up to 90%',
    seoDescription: 'Compress PDF files to reduce size by up to 90% without losing quality. Free, fast, secure.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Bank-level encryption.' },
      { icon: 'Minimize2', title: 'Up to 90% Smaller', desc: 'Advanced compression algorithms.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works everywhere.' },
      { icon: 'Ban', title: 'Free', desc: 'No hidden costs.' },
      { icon: 'SlidersHorizontal', title: '3 Levels', desc: 'Low, Medium, High compression.' },
      { icon: 'Gem', title: 'Smart Quality', desc: 'Balances size and quality automatically.' },
    ],
    faqs: [
      { q: 'How much can PDF be compressed?', a: 'Typically 50-90% reduction depending on content.' },
      { q: 'Does compression reduce quality?', a: 'Our smart algorithm balances size reduction with quality preservation.' },
      { q: 'What compression levels are available?', a: 'Low (smallest reduction, best quality), Medium (balanced), High (maximum reduction).' },
    ],
    relatedSlugs: ['merge-pdf', 'split-pdf', 'resize-pages', 'grayscale-pdf', 'repair-pdf'],
  },

  'pdf-to-word': {
    seoTitle: 'PDF to Word Converter — Free Online DOCX Export',
    seoDescription: 'Convert PDF to editable Word document (DOCX). Preserves formatting, tables, images. Free, no signup.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'TLS encryption, auto-delete.' },
      { icon: 'Zap', title: 'Fast Conversion', desc: 'Convert in seconds.' },
      { icon: 'FileText', title: 'Editable Output', desc: 'Fully editable DOCX file.' },
      { icon: 'Table', title: 'Tables Preserved', desc: 'Tables and layouts intact.' },
      { icon: 'Image', title: 'Images Kept', desc: 'All images preserved.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks or fees.' },
    ],
    faqs: [
      { q: 'Will formatting be preserved?', a: 'Yes, we preserve fonts, tables, images, and layout as much as possible.' },
      { q: 'What format is the output?', a: 'Standard DOCX format compatible with Microsoft Word, Google Docs, etc.' },
    ],
    relatedSlugs: ['pdf-to-excel', 'pdf-to-powerpoint', 'word-to-pdf', 'pdf-to-txt', 'edit-pdf'],
  },

  'ocr-pdf': {
    seoTitle: 'OCR PDF — Extract Text from Scanned PDFs',
    seoDescription: 'Convert scanned PDF to searchable text. 100+ languages supported. AI-powered OCR. Free online.',
    acceptedTypes: { 'application/pdf': ['.pdf'], 'image/*': ['.jpg', '.jpeg', '.png', '.tiff', '.bmp'] },
    maxFiles: 1, maxSizeMB: 50, multiFile: false,
    features: [
      { icon: 'Languages', title: '100+ Languages', desc: 'All major world languages supported.' },
      { icon: 'Brain', title: 'AI-Powered', desc: 'Neural network for highest accuracy.' },
      { icon: 'FileSearch', title: 'Searchable PDF', desc: 'Output is a fully searchable PDF.' },
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted after processing.' },
      { icon: 'Zap', title: 'Fast', desc: 'Process in seconds.' },
      { icon: 'Ban', title: 'Free', desc: 'No signup required.' },
    ],
    faqs: [
      { q: 'What is OCR?', a: 'OCR (Optical Character Recognition) converts scanned images/PDFs into searchable, editable text.' },
      { q: 'Which languages are supported?', a: 'Over 100 languages including English, Hindi, Spanish, Chinese, Arabic, and more.' },
    ],
    relatedSlugs: ['scan-to-pdf', 'extract-text', 'translate-pdf', 'summarize-pdf', 'chat-with-pdf'],
  },

  'chat-with-pdf': {
    seoTitle: 'Chat with PDF — AI Document Assistant',
    seoDescription: 'Ask questions about your PDF using AI. Get instant answers, summaries, and insights. Free.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 50, multiFile: false,
    features: [
      { icon: 'MessageCircle', title: 'Natural Chat', desc: 'Ask questions in plain language.' },
      { icon: 'Brain', title: 'AI-Powered', desc: 'GPT-4 powered analysis.' },
      { icon: 'BookOpen', title: 'Deep Understanding', desc: 'Understands context and nuance.' },
      { icon: 'Shield', title: 'Private', desc: 'Your documents stay private.' },
      { icon: 'Zap', title: 'Instant Answers', desc: 'Get answers in seconds.' },
      { icon: 'Sparkles', title: 'Smart Summaries', desc: 'Auto-generate key takeaways.' },
    ],
    faqs: [
      { q: 'How does Chat with PDF work?', a: 'Upload your PDF, and our AI reads and understands it. Then ask any question in natural language.' },
      { q: 'Is my document private?', a: 'Yes. Documents are processed securely and deleted after your session.' },
    ],
    relatedSlugs: ['summarize-pdf', 'translate-pdf', 'ocr-pdf', 'extract-text', 'pdf-viewer'],
  },

  'sign-pdf': {
    seoTitle: 'Sign PDF Online — Free Electronic Signature',
    seoDescription: 'Add your electronic signature to any PDF. Draw, type, or upload your signature. Free, secure.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'PenLine', title: 'Draw Signature', desc: 'Draw with mouse or finger.' },
      { icon: 'Type', title: 'Type Signature', desc: 'Type and choose font style.' },
      { icon: 'Upload', title: 'Upload Image', desc: 'Upload signature image.' },
      { icon: 'Shield', title: 'Legally Valid', desc: 'Meets e-signature standards.' },
      { icon: 'Zap', title: 'Instant', desc: 'Sign in seconds.' },
      { icon: 'Ban', title: 'Free', desc: 'No account needed.' },
    ],
    faqs: [
      { q: 'Is the e-signature legally valid?', a: 'Yes, electronic signatures are legally binding in most countries.' },
    ],
    relatedSlugs: ['protect-pdf', 'edit-pdf', 'pdf-filler', 'watermark-pdf', 'flatten-pdf'],
  },
};

// Default metadata for tools not explicitly defined
const DEFAULT_META = {
  acceptedTypes: { 'application/pdf': ['.pdf'] },
  maxFiles: 1,
  maxSizeMB: 100,
  multiFile: false,
  features: [
    { icon: 'Shield', title: '100% Secure', desc: 'Files encrypted and auto-deleted.' },
    { icon: 'Zap', title: 'Lightning Fast', desc: 'Process files in seconds.' },
    { icon: 'Smartphone', title: 'Any Device', desc: 'Works on mobile, tablet, desktop.' },
    { icon: 'Ban', title: 'Always Free', desc: 'No hidden fees or watermarks.' },
    { icon: 'FileText', title: 'High Quality', desc: 'Preserves original quality.' },
    { icon: 'Globe', title: 'No Signup', desc: 'Use instantly without registration.' },
  ],
  faqs: [
    { q: 'Is this tool free?', a: 'Yes, completely free with no hidden charges or watermarks.' },
    { q: 'Is it safe to use?', a: 'Absolutely. Files are encrypted during transfer and deleted after 1 hour.' },
    { q: 'Do I need to create an account?', a: 'No signup required. Use any tool instantly.' },
    { q: 'What devices are supported?', a: 'Works on any device — mobile, tablet, or desktop with a modern browser.' },
  ],
  relatedSlugs: ['merge-pdf', 'compress-pdf', 'pdf-to-word', 'split-pdf', 'edit-pdf'],
};

export function getToolMeta(slug) {
  const meta = TOOL_META[slug];
  if (meta) return { ...DEFAULT_META, ...meta };
  
  // Auto-generate SEO for unmapped tools
  return {
    ...DEFAULT_META,
    seoTitle: null,
    seoDescription: null,
  };
}

export default TOOL_META;
