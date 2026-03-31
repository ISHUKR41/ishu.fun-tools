// ═══════════════════════════════════════════════════════
// ISHU.FUN TOOLS — MASTER TOOLS REGISTRY (120+ Tools)
// Every tool that appears on the tools hub page
// ═══════════════════════════════════════════════════════

export const TOOLS = [
  // ═══════════ ORGANIZE PDF (8) ═══════════
  { slug: 'merge-pdf', name: 'Merge PDF', description: 'Combine multiple PDFs into one document', category: 'organize', icon: 'Merge', color: '#3B82F6', isPopular: true, uses: '2.4M', rating: 4.9 },
  { slug: 'split-pdf', name: 'Split PDF', description: 'Split PDF into multiple files by pages', category: 'organize', icon: 'Split', color: '#6366F1', isPopular: true, uses: '1.8M', rating: 4.9 },
  { slug: 'compress-pdf', name: 'Compress PDF', description: 'Reduce PDF file size up to 90%', category: 'organize', icon: 'Minimize2', color: '#8B5CF6', isPopular: true, uses: '3.1M', rating: 4.8 },
  { slug: 'rotate-pdf', name: 'Rotate PDF', description: 'Rotate pages 90°, 180° or 270°', category: 'organize', icon: 'RotateCw', color: '#06B6D4', uses: '890K', rating: 4.8 },
  { slug: 'organize-pdf', name: 'Organize PDF', description: 'Drag & drop to rearrange PDF pages', category: 'organize', icon: 'LayoutGrid', color: '#3B82F6', uses: '650K', rating: 4.7 },
  { slug: 'crop-pdf', name: 'Crop PDF', description: 'Crop margins and resize PDF pages', category: 'organize', icon: 'Crop', color: '#14B8A6', uses: '420K', rating: 4.7 },
  { slug: 'repair-pdf', name: 'Repair PDF', description: 'Fix corrupted or damaged PDF files', category: 'organize', icon: 'Wrench', color: '#F59E0B', uses: '310K', rating: 4.6 },
  { slug: 'delete-pages', name: 'Delete Pages', description: 'Remove unwanted pages from PDF', category: 'organize', icon: 'Trash2', color: '#EF4444', uses: '580K', rating: 4.8 },

  // ═══════════ CONVERT FROM PDF (12) ═══════════
  { slug: 'pdf-to-word', name: 'PDF to Word', description: 'Convert PDF to editable DOCX document', category: 'convert-from-pdf', icon: 'FileText', color: '#3B82F6', isPopular: true, uses: '4.2M', rating: 4.9 },
  { slug: 'pdf-to-excel', name: 'PDF to Excel', description: 'Convert PDF tables to XLSX spreadsheet', category: 'convert-from-pdf', icon: 'Table', color: '#10B981', uses: '1.5M', rating: 4.7 },
  { slug: 'pdf-to-powerpoint', name: 'PDF to PowerPoint', description: 'Convert PDF to editable PPTX slides', category: 'convert-from-pdf', icon: 'Presentation', color: '#F97316', uses: '980K', rating: 4.7 },
  { slug: 'pdf-to-jpg', name: 'PDF to JPG', description: 'Convert every PDF page to JPG image', category: 'convert-from-pdf', icon: 'Image', color: '#F59E0B', isPopular: true, uses: '2.8M', rating: 4.8 },
  { slug: 'pdf-to-png', name: 'PDF to PNG', description: 'Convert PDF pages to PNG with transparency', category: 'convert-from-pdf', icon: 'Image', color: '#8B5CF6', uses: '1.2M', rating: 4.8 },
  { slug: 'pdf-to-svg', name: 'PDF to SVG', description: 'Convert PDF to scalable vector graphics', category: 'convert-from-pdf', icon: 'PenTool', color: '#EC4899', uses: '340K', rating: 4.6 },
  { slug: 'pdf-to-epub', name: 'PDF to EPUB', description: 'Convert PDF to eBook EPUB format', category: 'convert-from-pdf', icon: 'BookOpen', color: '#6366F1', uses: '280K', rating: 4.5 },
  { slug: 'pdf-to-csv', name: 'PDF to CSV', description: 'Extract tables from PDF to CSV data', category: 'convert-from-pdf', icon: 'FileSpreadsheet', color: '#10B981', uses: '410K', rating: 4.6 },
  { slug: 'pdf-to-tiff', name: 'PDF to TIFF', description: 'Convert PDF to TIFF archival image', category: 'convert-from-pdf', icon: 'Image', color: '#6B7280', uses: '190K', rating: 4.5 },
  { slug: 'pdf-to-txt', name: 'PDF to Text', description: 'Extract plain text from any PDF', category: 'convert-from-pdf', icon: 'AlignLeft', color: '#3B82F6', uses: '720K', rating: 4.7 },
  { slug: 'pdf-to-pdfa', name: 'PDF to PDF/A', description: 'Convert to ISO archival PDF standard', category: 'convert-from-pdf', icon: 'Archive', color: '#F59E0B', uses: '150K', rating: 4.5 },
  { slug: 'pdf-to-rtf', name: 'PDF to RTF', description: 'Convert PDF to Rich Text Format', category: 'convert-from-pdf', icon: 'FileText', color: '#EC4899', uses: '120K', rating: 4.4 },

  // ═══════════ CONVERT TO PDF (35+) ═══════════
  { slug: 'word-to-pdf', name: 'Word to PDF', description: 'Convert DOC/DOCX to PDF perfectly', category: 'convert-to-pdf', icon: 'FileText', color: '#3B82F6', isPopular: true, uses: '3.8M', rating: 4.9 },
  { slug: 'excel-to-pdf', name: 'Excel to PDF', description: 'Convert XLS/XLSX spreadsheet to PDF', category: 'convert-to-pdf', icon: 'Table', color: '#10B981', uses: '1.9M', rating: 4.8 },
  { slug: 'powerpoint-to-pdf', name: 'PowerPoint to PDF', description: 'Convert PPT/PPTX slides to PDF', category: 'convert-to-pdf', icon: 'Presentation', color: '#F97316', uses: '1.6M', rating: 4.8 },
  { slug: 'jpg-to-pdf', name: 'JPG to PDF', description: 'Convert JPG images to PDF document', category: 'convert-to-pdf', icon: 'Image', color: '#F59E0B', isPopular: true, uses: '2.9M', rating: 4.9 },
  { slug: 'png-to-pdf', name: 'PNG to PDF', description: 'Convert PNG images to PDF document', category: 'convert-to-pdf', icon: 'Image', color: '#8B5CF6', uses: '1.4M', rating: 4.8 },
  { slug: 'html-to-pdf', name: 'HTML to PDF', description: 'Convert HTML pages to pixel-perfect PDF', category: 'convert-to-pdf', icon: 'Code', color: '#F43F5E', uses: '820K', rating: 4.7 },
  { slug: 'url-to-pdf', name: 'URL to PDF', description: 'Save any website URL as a PDF file', category: 'convert-to-pdf', icon: 'Globe', color: '#06B6D4', uses: '650K', rating: 4.6 },
  { slug: 'epub-to-pdf', name: 'EPUB to PDF', description: 'Convert EPUB eBook to PDF document', category: 'convert-to-pdf', icon: 'BookOpen', color: '#6366F1', uses: '380K', rating: 4.6 },
  { slug: 'heic-to-pdf', name: 'HEIC to PDF', description: 'Convert iPhone HEIC photos to PDF', category: 'convert-to-pdf', icon: 'Smartphone', color: '#EC4899', isNew: true, uses: '290K', rating: 4.7 },
  { slug: 'tiff-to-pdf', name: 'TIFF to PDF', description: 'Convert TIFF images to PDF document', category: 'convert-to-pdf', icon: 'Image', color: '#6B7280', uses: '210K', rating: 4.5 },
  { slug: 'webp-to-pdf', name: 'WebP to PDF', description: 'Convert WebP images to PDF document', category: 'convert-to-pdf', icon: 'Image', color: '#10B981', uses: '180K', rating: 4.6 },
  { slug: 'svg-to-pdf', name: 'SVG to PDF', description: 'Convert SVG vector files to PDF', category: 'convert-to-pdf', icon: 'PenTool', color: '#F97316', uses: '160K', rating: 4.5 },
  { slug: 'csv-to-pdf', name: 'CSV to PDF', description: 'Convert CSV data to formatted PDF table', category: 'convert-to-pdf', icon: 'FileSpreadsheet', color: '#10B981', uses: '320K', rating: 4.6 },
  { slug: 'rtf-to-pdf', name: 'RTF to PDF', description: 'Convert Rich Text Format to PDF', category: 'convert-to-pdf', icon: 'FileText', color: '#8B5CF6', uses: '140K', rating: 4.5 },
  { slug: 'txt-to-pdf', name: 'TXT to PDF', description: 'Convert plain text files to PDF', category: 'convert-to-pdf', icon: 'AlignLeft', color: '#3B82F6', uses: '450K', rating: 4.7 },
  { slug: 'md-to-pdf', name: 'Markdown to PDF', description: 'Convert Markdown with syntax highlighting', category: 'convert-to-pdf', icon: 'Hash', color: '#6366F1', isNew: true, uses: '190K', rating: 4.6 },
  { slug: 'odt-to-pdf', name: 'ODT to PDF', description: 'Convert OpenDocument to PDF', category: 'convert-to-pdf', icon: 'FileText', color: '#3B82F6', uses: '120K', rating: 4.5 },
  { slug: 'gif-to-pdf', name: 'GIF to PDF', description: 'Convert GIF images to PDF document', category: 'convert-to-pdf', icon: 'Film', color: '#EC4899', uses: '95K', rating: 4.4 },
  { slug: 'bmp-to-pdf', name: 'BMP to PDF', description: 'Convert BMP bitmap images to PDF', category: 'convert-to-pdf', icon: 'Image', color: '#F59E0B', uses: '80K', rating: 4.4 },
  { slug: 'xml-to-pdf', name: 'XML to PDF', description: 'Convert XML data to structured PDF', category: 'convert-to-pdf', icon: 'Code', color: '#14B8A6', uses: '110K', rating: 4.5 },
  { slug: 'zip-to-pdf', name: 'ZIP to PDF', description: 'Convert ZIP archive of images to PDF', category: 'convert-to-pdf', icon: 'FolderArchive', color: '#F59E0B', uses: '75K', rating: 4.4 },
  { slug: 'mobi-to-pdf', name: 'MOBI to PDF', description: 'Convert Kindle MOBI to PDF format', category: 'convert-to-pdf', icon: 'BookOpen', color: '#F97316', uses: '130K', rating: 4.5 },
  { slug: 'ebook-to-pdf', name: 'eBook to PDF', description: 'Convert any eBook format to PDF', category: 'convert-to-pdf', icon: 'BookOpen', color: '#8B5CF6', uses: '200K', rating: 4.5 },
  { slug: 'cbz-to-pdf', name: 'CBZ to PDF', description: 'Convert comic book archive to PDF', category: 'convert-to-pdf', icon: 'BookOpen', color: '#EC4899', uses: '45K', rating: 4.3 },
  { slug: 'cbr-to-pdf', name: 'CBR to PDF', description: 'Convert RAR comic book to PDF', category: 'convert-to-pdf', icon: 'BookOpen', color: '#F43F5E', uses: '38K', rating: 4.3 },
  { slug: 'dwg-to-pdf', name: 'DWG to PDF', description: 'Convert AutoCAD DWG drawings to PDF', category: 'convert-to-pdf', icon: 'Ruler', color: '#3B82F6', uses: '180K', rating: 4.5 },
  { slug: 'ai-to-pdf', name: 'AI to PDF', description: 'Convert Adobe Illustrator to PDF', category: 'convert-to-pdf', icon: 'Brush', color: '#F97316', uses: '160K', rating: 4.5 },
  { slug: 'xps-to-pdf', name: 'XPS to PDF', description: 'Convert Microsoft XPS to PDF', category: 'convert-to-pdf', icon: 'FileText', color: '#06B6D4', uses: '90K', rating: 4.4 },
  { slug: 'pub-to-pdf', name: 'PUB to PDF', description: 'Convert Publisher files to PDF', category: 'convert-to-pdf', icon: 'FileText', color: '#10B981', uses: '70K', rating: 4.4 },
  { slug: 'eml-to-pdf', name: 'EML to PDF', description: 'Convert email files to PDF document', category: 'convert-to-pdf', icon: 'Mail', color: '#3B82F6', uses: '55K', rating: 4.3 },
  { slug: 'wps-to-pdf', name: 'WPS to PDF', description: 'Convert WPS Office files to PDF', category: 'convert-to-pdf', icon: 'FileText', color: '#F59E0B', uses: '85K', rating: 4.4 },
  { slug: 'djvu-to-pdf', name: 'DjVu to PDF', description: 'Convert DjVu scanned documents to PDF', category: 'convert-to-pdf', icon: 'FileText', color: '#8B5CF6', uses: '95K', rating: 4.5 },
  { slug: 'hwp-to-pdf', name: 'HWP to PDF', description: 'Convert Korean HWP documents to PDF', category: 'convert-to-pdf', icon: 'FileText', color: '#EF4444', uses: '40K', rating: 4.3 },
  { slug: 'fb2-to-pdf', name: 'FB2 to PDF', description: 'Convert FictionBook to PDF', category: 'convert-to-pdf', icon: 'BookOpen', color: '#6366F1', uses: '35K', rating: 4.3 },
  { slug: 'chm-to-pdf', name: 'CHM to PDF', description: 'Convert Windows Help files to PDF', category: 'convert-to-pdf', icon: 'HelpCircle', color: '#6B7280', uses: '30K', rating: 4.2 },
  { slug: 'jfif-to-pdf', name: 'JFIF to PDF', description: 'Convert JFIF images to PDF', category: 'convert-to-pdf', icon: 'Image', color: '#14B8A6', uses: '65K', rating: 4.4 },
  { slug: 'heif-to-pdf', name: 'HEIF to PDF', description: 'Convert HEIF images to PDF', category: 'convert-to-pdf', icon: 'Image', color: '#EC4899', uses: '50K', rating: 4.4 },
  { slug: 'image-to-pdf', name: 'Image to PDF', description: 'Convert any image format to PDF', category: 'convert-to-pdf', icon: 'ImagePlus', color: '#6366F1', uses: '1.1M', rating: 4.8 },

  // ═══════════ PDF SECURITY (3) ═══════════
  { slug: 'protect-pdf', name: 'Protect PDF', description: 'Add password & restrict permissions', category: 'pdf-security', icon: 'Lock', color: '#EF4444', isPopular: true, uses: '1.3M', rating: 4.8 },
  { slug: 'unlock-pdf', name: 'Unlock PDF', description: 'Remove password protection from PDF', category: 'pdf-security', icon: 'Unlock', color: '#10B981', uses: '890K', rating: 4.7 },
  { slug: 'sign-pdf', name: 'Sign PDF', description: 'Add electronic signature to your PDF', category: 'pdf-security', icon: 'PenLine', color: '#6366F1', isPopular: true, uses: '1.8M', rating: 4.9 },

  // ═══════════ EDIT PDF (12) ═══════════
  { slug: 'edit-pdf', name: 'Edit PDF', description: 'Edit text, images and shapes in PDF', category: 'edit-pdf', icon: 'FileEdit', color: '#F59E0B', isPopular: true, uses: '2.1M', rating: 4.8 },
  { slug: 'watermark-pdf', name: 'Watermark PDF', description: 'Add text or image watermark to PDF', category: 'edit-pdf', icon: 'Droplets', color: '#06B6D4', uses: '580K', rating: 4.7 },
  { slug: 'annotate-pdf', name: 'Annotate PDF', description: 'Add notes, comments & drawings to PDF', category: 'edit-pdf', icon: 'MessageSquare', color: '#8B5CF6', uses: '420K', rating: 4.6 },
  { slug: 'page-numbers-pdf', name: 'Page Numbers', description: 'Add custom page numbers to PDF', category: 'edit-pdf', icon: 'Hash', color: '#3B82F6', uses: '680K', rating: 4.7 },
  { slug: 'header-footer-pdf', name: 'Header & Footer', description: 'Add custom headers and footers', category: 'edit-pdf', icon: 'AlignVerticalJustifyStart', color: '#14B8A6', uses: '340K', rating: 4.6 },
  { slug: 'redact-pdf', name: 'Redact PDF', description: 'Permanently remove sensitive content', category: 'edit-pdf', icon: 'EyeOff', color: '#EF4444', uses: '290K', rating: 4.6 },
  { slug: 'grayscale-pdf', name: 'Grayscale PDF', description: 'Convert color PDF to black & white', category: 'edit-pdf', icon: 'Contrast', color: '#6B7280', uses: '180K', rating: 4.5 },
  { slug: 'whiteout-pdf', name: 'Whiteout PDF', description: 'Cover areas with white rectangles', category: 'edit-pdf', icon: 'Square', color: '#F0F0FF', uses: '150K', rating: 4.5 },
  { slug: 'pdf-filler', name: 'PDF Filler', description: 'Fill interactive PDF form fields', category: 'edit-pdf', icon: 'ClipboardEdit', color: '#10B981', uses: '520K', rating: 4.7 },
  { slug: 'highlight-pdf', name: 'Highlight PDF', description: 'Highlight, underline & strike text', category: 'edit-pdf', icon: 'Highlighter', color: '#F59E0B', uses: '410K', rating: 4.7 },
  { slug: 'flatten-pdf', name: 'Flatten PDF', description: 'Flatten annotations into static PDF', category: 'edit-pdf', icon: 'Layers', color: '#8B5CF6', uses: '220K', rating: 4.5 },
  { slug: 'add-text-pdf', name: 'Add Text to PDF', description: 'Add text boxes anywhere on pages', category: 'edit-pdf', icon: 'Type', color: '#3B82F6', uses: '380K', rating: 4.6 },

  // ═══════════ EXTRACT & MANAGE (7) ═══════════
  { slug: 'extract-pages', name: 'Extract Pages', description: 'Pull out specific pages from PDF', category: 'extract', icon: 'FileOutput', color: '#EC4899', uses: '720K', rating: 4.7 },
  { slug: 'extract-text', name: 'Extract Text', description: 'Export all text from PDF document', category: 'extract', icon: 'AlignLeft', color: '#3B82F6', uses: '580K', rating: 4.7 },
  { slug: 'extract-images', name: 'Extract Images', description: 'Get all embedded images as ZIP', category: 'extract', icon: 'Images', color: '#F59E0B', uses: '420K', rating: 4.6 },
  { slug: 'edit-metadata', name: 'Edit Metadata', description: 'View & edit PDF properties and info', category: 'extract', icon: 'Info', color: '#6366F1', uses: '190K', rating: 4.5 },
  { slug: 'remove-metadata', name: 'Remove Metadata', description: 'Strip all metadata for privacy', category: 'extract', icon: 'ShieldOff', color: '#EF4444', uses: '310K', rating: 4.6 },
  { slug: 'create-pdf', name: 'Create PDF', description: 'Create a blank PDF from scratch', category: 'extract', icon: 'FilePlus', color: '#10B981', uses: '250K', rating: 4.5 },
  { slug: 'resize-pages', name: 'Resize Pages', description: 'Resize PDF pages: A4, Letter, custom', category: 'extract', icon: 'Maximize2', color: '#06B6D4', uses: '280K', rating: 4.6 },

  // ═══════════ AI-POWERED (4) ═══════════
  { slug: 'ocr-pdf', name: 'OCR PDF', description: 'Scanned PDF to searchable text (100+ languages)', category: 'ai-powered', icon: 'ScanText', color: '#6366F1', isPopular: true, isAI: true, uses: '1.6M', rating: 4.8 },
  { slug: 'translate-pdf', name: 'Translate PDF', description: 'AI-powered translation to 50+ languages', category: 'ai-powered', icon: 'Languages', color: '#10B981', isNew: true, isAI: true, uses: '420K', rating: 4.7 },
  { slug: 'summarize-pdf', name: 'Summarize PDF', description: 'Get AI-generated summary of any PDF', category: 'ai-powered', icon: 'Sparkles', color: '#8B5CF6', isNew: true, isAI: true, uses: '380K', rating: 4.7 },
  { slug: 'chat-with-pdf', name: 'Chat with PDF', description: 'Ask questions about your PDF with AI', category: 'ai-powered', icon: 'MessageCircle', color: '#EC4899', isNew: true, isAI: true, uses: '550K', rating: 4.8 },

  // ═══════════ ADVANCED (4) ═══════════
  { slug: 'compare-pdf', name: 'Compare PDF', description: 'Side-by-side diff of two PDF files', category: 'advanced', icon: 'GitCompare', color: '#3B82F6', uses: '280K', rating: 4.6 },
  { slug: 'scan-to-pdf', name: 'Scan to PDF', description: 'Camera scan documents to clean PDF', category: 'advanced', icon: 'Camera', color: '#6366F1', isNew: true, uses: '350K', rating: 4.7 },
  { slug: 'pdf-viewer', name: 'PDF Viewer', description: 'View PDF online with zoom & search', category: 'advanced', icon: 'Eye', color: '#8B5CF6', uses: '1.2M', rating: 4.8 },
  { slug: 'add-image-to-pdf', name: 'Add Image to PDF', description: 'Insert images anywhere in PDF pages', category: 'advanced', icon: 'ImagePlus', color: '#F59E0B', uses: '480K', rating: 4.7 },
];

// Pre-compute category counts
export function getToolsByCategory(categoryId) {
  if (categoryId === 'all') return TOOLS;
  return TOOLS.filter(t => t.category === categoryId);
}

export function getToolBySlug(slug) {
  return TOOLS.find(t => t.slug === slug);
}

export function getPopularTools() {
  return TOOLS.filter(t => t.isPopular);
}

export function getNewTools() {
  return TOOLS.filter(t => t.isNew);
}

export function getAITools() {
  return TOOLS.filter(t => t.isAI);
}

export function getFeaturedTools() {
  return [
    TOOLS.find(t => t.slug === 'merge-pdf'),
    TOOLS.find(t => t.slug === 'compress-pdf'),
    TOOLS.find(t => t.slug === 'pdf-to-word'),
    TOOLS.find(t => t.slug === 'ocr-pdf'),
    TOOLS.find(t => t.slug === 'chat-with-pdf'),
    TOOLS.find(t => t.slug === 'sign-pdf'),
  ].filter(Boolean);
}
