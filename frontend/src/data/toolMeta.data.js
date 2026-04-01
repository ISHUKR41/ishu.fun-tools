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

  // ─── IMAGE TO PDF TOOLS ───────────────────────────────

  'jpg-to-pdf': {
    seoTitle: 'JPG to PDF Converter — Free Online Tool',
    seoDescription: 'Convert JPG images to PDF instantly. Supports multiple images. Free, no signup, no watermark.',
    acceptedTypes: { 'image/jpeg': ['.jpg', '.jpeg'] },
    maxFiles: 20, maxSizeMB: 50, multiFile: true,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted after conversion.' },
      { icon: 'Layers', title: 'Multi-Page', desc: 'Convert multiple JPGs to one PDF.' },
      { icon: 'Image', title: 'Quality Preserved', desc: 'Original image quality maintained.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works on all devices.' },
      { icon: 'Zap', title: 'Instant', desc: 'Convert in seconds.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks or limits.' },
    ],
    faqs: [
      { q: 'Can I convert multiple JPGs to one PDF?', a: 'Yes! Upload multiple JPG files and they will be combined into a single PDF.' },
      { q: 'Will quality be reduced?', a: 'No, we preserve the original image quality.' },
    ],
    relatedSlugs: ['png-to-pdf', 'image-to-pdf', 'pdf-to-jpg', 'compress-pdf', 'merge-pdf'],
  },

  'png-to-pdf': {
    seoTitle: 'PNG to PDF Converter — Free Online Tool',
    seoDescription: 'Convert PNG images to PDF. Supports transparency. Multiple files supported. Free online.',
    acceptedTypes: { 'image/png': ['.png'] },
    maxFiles: 20, maxSizeMB: 50, multiFile: true,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files encrypted and auto-deleted.' },
      { icon: 'Image', title: 'Transparency', desc: 'PNG transparency supported.' },
      { icon: 'Layers', title: 'Multi-Page', desc: 'Multiple PNGs to one PDF.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works everywhere.' },
      { icon: 'Zap', title: 'Instant', desc: 'Convert in seconds.' },
      { icon: 'Ban', title: 'Free', desc: 'No limits or watermarks.' },
    ],
    faqs: [
      { q: 'Does PNG transparency get preserved?', a: 'PNG transparency is supported and converted to white background in PDF.' },
    ],
    relatedSlugs: ['jpg-to-pdf', 'image-to-pdf', 'pdf-to-png', 'compress-pdf', 'merge-pdf'],
  },

  'image-to-pdf': {
    seoTitle: 'Image to PDF Converter — Free, Any Format',
    seoDescription: 'Convert any image format (JPG, PNG, WEBP, GIF, BMP, TIFF) to PDF. Free, fast, no signup.',
    acceptedTypes: { 'image/*': ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp', '.tiff', '.tif'] },
    maxFiles: 20, maxSizeMB: 50, multiFile: true,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted after conversion.' },
      { icon: 'Image', title: 'Any Format', desc: 'JPG, PNG, WEBP, GIF, BMP, TIFF.' },
      { icon: 'Layers', title: 'Multi-Page', desc: 'Multiple images to one PDF.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works on all devices.' },
      { icon: 'Zap', title: 'Fast', desc: 'Convert in seconds.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks.' },
    ],
    faqs: [
      { q: 'What image formats are supported?', a: 'JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF and more.' },
    ],
    relatedSlugs: ['jpg-to-pdf', 'png-to-pdf', 'pdf-to-jpg', 'merge-pdf', 'compress-pdf'],
  },

  'webp-to-pdf': {
    seoTitle: 'WEBP to PDF Converter — Free Online',
    seoDescription: 'Convert WEBP images to PDF format instantly. Free online converter.',
    acceptedTypes: { 'image/webp': ['.webp'], 'image/jpeg': ['.jpg', '.jpeg'], 'image/png': ['.png'] },
    maxFiles: 20, maxSizeMB: 50, multiFile: true,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted.' },
      { icon: 'Image', title: 'WEBP Support', desc: 'Native WEBP conversion.' },
      { icon: 'Layers', title: 'Multi-Page', desc: 'Multiple files in one PDF.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works everywhere.' },
      { icon: 'Zap', title: 'Fast', desc: 'Instant conversion.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks.' },
    ],
    faqs: [{ q: 'What is WEBP format?', a: 'WEBP is a modern image format by Google that provides superior compression.' }],
    relatedSlugs: ['jpg-to-pdf', 'png-to-pdf', 'image-to-pdf', 'compress-pdf', 'merge-pdf'],
  },

  'heic-to-pdf': {
    seoTitle: 'HEIC to PDF Converter — Convert iPhone Photos',
    seoDescription: 'Convert iPhone HEIC photos to PDF. Free online HEIC to PDF converter. No app needed.',
    acceptedTypes: { 'image/heic': ['.heic', '.heif'], 'image/jpeg': ['.jpg', '.jpeg'] },
    maxFiles: 10, maxSizeMB: 50, multiFile: true,
    features: [
      { icon: 'Smartphone', title: 'iPhone Photos', desc: 'Convert HEIC directly from iPhone.' },
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted after processing.' },
      { icon: 'Layers', title: 'Multi-Page', desc: 'Multiple HEIC to one PDF.' },
      { icon: 'Image', title: 'High Quality', desc: 'Preserves original photo quality.' },
      { icon: 'Zap', title: 'Fast', desc: 'Convert in seconds.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks.' },
    ],
    faqs: [{ q: 'What is HEIC?', a: 'HEIC is the image format used by iPhones. This tool converts it to universal PDF format.' }],
    relatedSlugs: ['jpg-to-pdf', 'png-to-pdf', 'image-to-pdf', 'compress-pdf', 'merge-pdf'],
  },

  'tiff-to-pdf': {
    seoTitle: 'TIFF to PDF Converter — Free Online',
    seoDescription: 'Convert TIFF images to PDF format. High-quality TIFF to PDF conversion. Free, no signup.',
    acceptedTypes: { 'image/tiff': ['.tiff', '.tif'], 'image/jpeg': ['.jpg', '.jpeg'] },
    maxFiles: 20, maxSizeMB: 100, multiFile: true,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files encrypted and auto-deleted.' },
      { icon: 'Image', title: 'Multi-Page TIFF', desc: 'Supports multi-page TIFF files.' },
      { icon: 'Layers', title: 'Multi-File', desc: 'Convert multiple TIFFs to one PDF.' },
      { icon: 'Zap', title: 'Fast', desc: 'Quick conversion.' },
      { icon: 'Gem', title: 'High Quality', desc: 'Lossless quality preservation.' },
      { icon: 'Ban', title: 'Free', desc: 'No fees or watermarks.' },
    ],
    faqs: [{ q: 'Are multi-page TIFF files supported?', a: 'Yes, multi-page TIFF files are fully supported.' }],
    relatedSlugs: ['jpg-to-pdf', 'png-to-pdf', 'image-to-pdf', 'pdf-to-tiff', 'compress-pdf'],
  },

  'gif-to-pdf': {
    seoTitle: 'GIF to PDF Converter — Free Online',
    seoDescription: 'Convert GIF images to PDF. Supports animated GIFs (first frame). Free online tool.',
    acceptedTypes: { 'image/gif': ['.gif'], 'image/jpeg': ['.jpg', '.jpeg'] },
    maxFiles: 10, maxSizeMB: 20, multiFile: true,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted.' },
      { icon: 'Image', title: 'GIF Support', desc: 'Convert GIF to PDF easily.' },
      { icon: 'Layers', title: 'Multiple GIFs', desc: 'Batch convert multiple files.' },
      { icon: 'Zap', title: 'Fast', desc: 'Instant conversion.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works everywhere.' },
      { icon: 'Ban', title: 'Free', desc: 'No limits.' },
    ],
    faqs: [{ q: 'How are animated GIFs handled?', a: 'The first frame of animated GIFs is used for the PDF conversion.' }],
    relatedSlugs: ['jpg-to-pdf', 'png-to-pdf', 'image-to-pdf', 'compress-pdf'],
  },

  // ─── TEXT TOOLS ───────────────────────────────────────

  'word-to-pdf': {
    seoTitle: 'Word to PDF Converter — Free DOCX to PDF',
    seoDescription: 'Convert Word documents to PDF. Preserves formatting, fonts, images. Free online converter.',
    acceptedTypes: {
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc'],
    },
    maxFiles: 1, maxSizeMB: 50, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files encrypted and auto-deleted.' },
      { icon: 'FileText', title: 'DOCX & DOC', desc: 'Supports all Word formats.' },
      { icon: 'Gem', title: 'Formatting Preserved', desc: 'Fonts, images, tables intact.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works on all devices.' },
      { icon: 'Zap', title: 'Fast', desc: 'Convert in seconds.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks.' },
    ],
    faqs: [
      { q: 'Are DOC and DOCX both supported?', a: 'Yes, both .doc and .docx formats are supported.' },
      { q: 'Will my formatting be preserved?', a: 'Yes, fonts, images, tables and layout are preserved.' },
    ],
    relatedSlugs: ['pdf-to-word', 'excel-to-pdf', 'powerpoint-to-pdf', 'compress-pdf', 'merge-pdf'],
  },

  'excel-to-pdf': {
    seoTitle: 'Excel to PDF Converter — Free XLSX to PDF',
    seoDescription: 'Convert Excel spreadsheets to PDF. All sheets, formulas, and formatting preserved. Free.',
    acceptedTypes: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'text/csv': ['.csv'],
    },
    maxFiles: 1, maxSizeMB: 50, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted.' },
      { icon: 'Table', title: 'Tables & Grids', desc: 'All spreadsheet data preserved.' },
      { icon: 'Gem', title: 'All Sheets', desc: 'Multiple sheets supported.' },
      { icon: 'Zap', title: 'Fast', desc: 'Instant conversion.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works everywhere.' },
      { icon: 'Ban', title: 'Free', desc: 'No limits.' },
    ],
    faqs: [
      { q: 'Are all Excel sheets converted?', a: 'Yes, all sheets are included in the output PDF.' },
    ],
    relatedSlugs: ['pdf-to-excel', 'word-to-pdf', 'powerpoint-to-pdf', 'compress-pdf', 'pdf-to-csv'],
  },

  'powerpoint-to-pdf': {
    seoTitle: 'PowerPoint to PDF Converter — Free PPTX to PDF',
    seoDescription: 'Convert PowerPoint presentations to PDF. All slides preserved. Free online tool.',
    acceptedTypes: {
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
    },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files encrypted and auto-deleted.' },
      { icon: 'Presentation', title: 'All Slides', desc: 'All slides converted to PDF pages.' },
      { icon: 'Image', title: 'Images & Charts', desc: 'All visuals preserved.' },
      { icon: 'Zap', title: 'Fast', desc: 'Quick conversion.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works on all devices.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks.' },
    ],
    faqs: [
      { q: 'Are animations preserved in PDF?', a: 'PDF is a static format, so animations are converted to static frames.' },
    ],
    relatedSlugs: ['pdf-to-powerpoint', 'word-to-pdf', 'excel-to-pdf', 'compress-pdf', 'merge-pdf'],
  },

  'txt-to-pdf': {
    seoTitle: 'Text to PDF Converter — Free TXT to PDF Online',
    seoDescription: 'Convert plain text files to PDF. Supports .txt and .md files. Free online converter.',
    acceptedTypes: { 'text/plain': ['.txt'], 'text/markdown': ['.md'] },
    maxFiles: 1, maxSizeMB: 10, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted after conversion.' },
      { icon: 'AlignLeft', title: 'Clean Layout', desc: 'Text is formatted cleanly in PDF.' },
      { icon: 'Type', title: 'Font Options', desc: 'Choose font and size.' },
      { icon: 'Zap', title: 'Fast', desc: 'Instant conversion.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works everywhere.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks or limits.' },
    ],
    faqs: [
      { q: 'What text formats are supported?', a: '.txt and .md (markdown) files are supported.' },
    ],
    relatedSlugs: ['word-to-pdf', 'md-to-pdf', 'pdf-to-txt', 'create-pdf', 'compress-pdf'],
  },

  'html-to-pdf': {
    seoTitle: 'HTML to PDF Converter — Webpage to PDF Free',
    seoDescription: 'Convert HTML files or web pages to PDF. Preserves styles and layout. Free online.',
    acceptedTypes: { 'text/html': ['.html', '.htm'] },
    maxFiles: 1, maxSizeMB: 10, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files processed and deleted instantly.' },
      { icon: 'Code', title: 'Full HTML', desc: 'CSS and JavaScript supported.' },
      { icon: 'Gem', title: 'Layout Preserved', desc: 'Styles and layout intact.' },
      { icon: 'Zap', title: 'Fast', desc: 'Instant conversion.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works on all devices.' },
      { icon: 'Ban', title: 'Free', desc: 'No limits.' },
    ],
    faqs: [
      { q: 'Are CSS styles preserved?', a: 'Yes, inline and external CSS styles are preserved in the PDF output.' },
    ],
    relatedSlugs: ['url-to-pdf', 'word-to-pdf', 'create-pdf', 'compress-pdf'],
  },

  'url-to-pdf': {
    seoTitle: 'URL to PDF — Convert Web Page to PDF Free',
    seoDescription: 'Convert any website URL to PDF. Capture web pages as PDF documents. Free online.',
    acceptedTypes: {},
    maxFiles: 0, maxSizeMB: 0, multiFile: false,
    features: [
      { icon: 'Globe', title: 'Any URL', desc: 'Convert any public webpage to PDF.' },
      { icon: 'Shield', title: 'Secure', desc: 'Processed via secure proxy.' },
      { icon: 'Gem', title: 'Full Page', desc: 'Captures entire page content.' },
      { icon: 'Zap', title: 'Fast', desc: 'Quick capture.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works everywhere.' },
      { icon: 'Ban', title: 'Free', desc: 'No limits.' },
    ],
    faqs: [
      { q: 'Can I convert any website to PDF?', a: 'Yes, any publicly accessible URL can be converted to PDF.' },
    ],
    relatedSlugs: ['html-to-pdf', 'create-pdf', 'compress-pdf', 'merge-pdf'],
  },

  // ─── PDF VIEWING / EDITING ────────────────────────────

  'pdf-to-jpg': {
    seoTitle: 'PDF to JPG Converter — Free Online PDF to Image',
    seoDescription: 'Convert PDF pages to JPG images. High quality PDF to JPG conversion. Free, fast, no signup.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted after conversion.' },
      { icon: 'Image', title: 'High Quality', desc: 'High-resolution JPG output.' },
      { icon: 'Layers', title: 'All Pages', desc: 'Every page converted to separate JPG.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works everywhere.' },
      { icon: 'Zap', title: 'Fast', desc: 'Quick conversion.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks.' },
    ],
    faqs: [
      { q: 'What resolution are the JPG images?', a: 'We output at 2x scale (high resolution) for clear, sharp images.' },
      { q: 'Are all pages converted?', a: 'Yes, each page becomes a separate JPG image.' },
    ],
    relatedSlugs: ['pdf-to-png', 'jpg-to-pdf', 'pdf-to-word', 'pdf-to-excel', 'compress-pdf'],
  },

  'pdf-to-png': {
    seoTitle: 'PDF to PNG Converter — Free Online PDF to Image',
    seoDescription: 'Convert PDF to PNG images with transparency. High-quality output. Free online tool.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted.' },
      { icon: 'Image', title: 'PNG Transparency', desc: 'Supports transparent backgrounds.' },
      { icon: 'Layers', title: 'All Pages', desc: 'All pages converted.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works on all devices.' },
      { icon: 'Zap', title: 'Fast', desc: 'Instant conversion.' },
      { icon: 'Ban', title: 'Free', desc: 'No watermarks.' },
    ],
    faqs: [
      { q: 'Is PNG transparency supported?', a: 'Yes, PDF backgrounds are rendered with transparent PNG support.' },
    ],
    relatedSlugs: ['pdf-to-jpg', 'png-to-pdf', 'pdf-to-word', 'compress-pdf'],
  },

  'pdf-viewer': {
    seoTitle: 'PDF Viewer — Free Online PDF Reader',
    seoDescription: 'View PDF files online. No download required. Zoom, search, and navigate PDF documents. Free.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Eye', title: 'Full PDF View', desc: 'View all pages in browser.' },
      { icon: 'ZoomIn', title: 'Zoom Controls', desc: 'Zoom in/out with precision.' },
      { icon: 'Search', title: 'Text Search', desc: 'Search text within PDF.' },
      { icon: 'Shield', title: 'Secure', desc: 'Files never stored on servers.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Mobile-friendly viewer.' },
      { icon: 'Ban', title: 'Free', desc: 'No signup required.' },
    ],
    faqs: [
      { q: 'Is the viewer free?', a: 'Yes, completely free with no limits.' },
      { q: 'Are there size limits?', a: 'PDF files up to 100MB can be viewed.' },
    ],
    relatedSlugs: ['merge-pdf', 'split-pdf', 'compress-pdf', 'edit-pdf', 'extract-text'],
  },

  'watermark-pdf': {
    seoTitle: 'Watermark PDF — Add Text or Image Watermark Free',
    seoDescription: 'Add custom watermarks to PDF files. Text or image watermarks. Free, instant, no signup.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Shield', title: 'Secure', desc: 'Files auto-deleted after processing.' },
      { icon: 'Type', title: 'Text Watermarks', desc: 'Custom text, font, size, color.' },
      { icon: 'Image', title: 'Image Watermarks', desc: 'Upload logo or image.' },
      { icon: 'SlidersHorizontal', title: 'Opacity Control', desc: 'Adjust transparency.' },
      { icon: 'Rotate3d', title: 'Rotation', desc: 'Rotate watermark at any angle.' },
      { icon: 'Ban', title: 'Free', desc: 'No charges.' },
    ],
    faqs: [
      { q: 'Can I add an image watermark?', a: 'Yes, you can upload a logo or image to use as a watermark.' },
      { q: 'Can I control opacity?', a: 'Yes, adjust transparency from 10% to 100%.' },
    ],
    relatedSlugs: ['protect-pdf', 'sign-pdf', 'edit-pdf', 'page-numbers-pdf', 'annotate-pdf'],
  },

  'protect-pdf': {
    seoTitle: 'Protect PDF — Add Password to PDF Free',
    seoDescription: 'Password protect your PDF files. 256-bit AES encryption. Free online PDF protection.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Lock', title: '256-bit AES', desc: 'Military-grade encryption.' },
      { icon: 'Shield', title: 'Open Password', desc: 'Require password to open.' },
      { icon: 'Ban', title: 'Permission Lock', desc: 'Block printing, copying, editing.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works on all devices.' },
      { icon: 'Zap', title: 'Instant', desc: 'Protection applied in seconds.' },
      { icon: 'FileText', title: 'Free', desc: 'No charges.' },
    ],
    faqs: [
      { q: 'What encryption is used?', a: '256-bit AES encryption, the same used by banks.' },
      { q: 'Can I restrict printing?', a: 'Yes, set owner permissions to restrict printing, copying, and editing.' },
    ],
    relatedSlugs: ['unlock-pdf', 'sign-pdf', 'watermark-pdf', 'edit-pdf', 'remove-metadata'],
  },

  'unlock-pdf': {
    seoTitle: 'Unlock PDF — Remove PDF Password Free',
    seoDescription: 'Remove password protection from PDF files. Free online PDF unlocker. No signup required.',
    acceptedTypes: { 'application/pdf': ['.pdf'] },
    maxFiles: 1, maxSizeMB: 100, multiFile: false,
    features: [
      { icon: 'Unlock', title: 'Remove Password', desc: 'Unlock password-protected PDFs.' },
      { icon: 'Shield', title: 'Secure', desc: 'Processed locally, never stored.' },
      { icon: 'Zap', title: 'Instant', desc: 'Unlock in seconds.' },
      { icon: 'Smartphone', title: 'Any Device', desc: 'Works on all devices.' },
      { icon: 'Ban', title: 'Free', desc: 'No charges.' },
      { icon: 'FileText', title: 'Quality Kept', desc: 'Original quality preserved.' },
    ],
    faqs: [
      { q: 'Do I need the original password?', a: 'If the PDF has an open password, you need to provide it. Owner passwords can sometimes be removed.' },
    ],
    relatedSlugs: ['protect-pdf', 'edit-pdf', 'sign-pdf', 'remove-metadata', 'repair-pdf'],
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
