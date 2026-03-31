import fs from 'fs';
import path from 'path';

// Define the source tools data manually since we can't easily import an ES module inside this commonjs script
const TOOLS = [
  { slug: 'merge-pdf', name: 'Merge PDF', category: 'organize' },
  { slug: 'split-pdf', name: 'Split PDF', category: 'organize' },
  { slug: 'compress-pdf', name: 'Compress PDF', category: 'organize' },
  { slug: 'rotate-pdf', name: 'Rotate PDF', category: 'organize' },
  { slug: 'organize-pdf', name: 'Organize PDF', category: 'organize' },
  { slug: 'crop-pdf', name: 'Crop PDF', category: 'organize' },
  { slug: 'repair-pdf', name: 'Repair PDF', category: 'organize' },
  { slug: 'delete-pages', name: 'Delete Pages', category: 'organize' },
  { slug: 'pdf-to-word', name: 'PDF to Word', category: 'convert-from-pdf' },
  { slug: 'pdf-to-excel', name: 'PDF to Excel', category: 'convert-from-pdf' },
  { slug: 'pdf-to-powerpoint', name: 'PDF to PowerPoint', category: 'convert-from-pdf' },
  { slug: 'pdf-to-jpg', name: 'PDF to JPG', category: 'convert-from-pdf' },
  { slug: 'pdf-to-png', name: 'PDF to PNG', category: 'convert-from-pdf' },
  { slug: 'pdf-to-svg', name: 'PDF to SVG', category: 'convert-from-pdf' },
  { slug: 'pdf-to-epub', name: 'PDF to EPUB', category: 'convert-from-pdf' },
  { slug: 'pdf-to-csv', name: 'PDF to CSV', category: 'convert-from-pdf' },
  { slug: 'pdf-to-tiff', name: 'PDF to TIFF', category: 'convert-from-pdf' },
  { slug: 'pdf-to-txt', name: 'PDF to Text', category: 'convert-from-pdf' },
  { slug: 'pdf-to-pdfa', name: 'PDF to PDF/A', category: 'convert-from-pdf' },
  { slug: 'pdf-to-rtf', name: 'PDF to RTF', category: 'convert-from-pdf' },
  { slug: 'word-to-pdf', name: 'Word to PDF', category: 'convert-to-pdf' },
  { slug: 'excel-to-pdf', name: 'Excel to PDF', category: 'convert-to-pdf' },
  { slug: 'powerpoint-to-pdf', name: 'PowerPoint to PDF', category: 'convert-to-pdf' },
  { slug: 'jpg-to-pdf', name: 'JPG to PDF', category: 'convert-to-pdf' },
  { slug: 'png-to-pdf', name: 'PNG to PDF', category: 'convert-to-pdf' },
  { slug: 'html-to-pdf', name: 'HTML to PDF', category: 'convert-to-pdf' },
  { slug: 'url-to-pdf', name: 'URL to PDF', category: 'convert-to-pdf' },
  { slug: 'epub-to-pdf', name: 'EPUB to PDF', category: 'convert-to-pdf' },
  { slug: 'heic-to-pdf', name: 'HEIC to PDF', category: 'convert-to-pdf' },
  { slug: 'tiff-to-pdf', name: 'TIFF to PDF', category: 'convert-to-pdf' },
  { slug: 'webp-to-pdf', name: 'WebP to PDF', category: 'convert-to-pdf' },
  { slug: 'svg-to-pdf', name: 'SVG to PDF', category: 'convert-to-pdf' },
  { slug: 'csv-to-pdf', name: 'CSV to PDF', category: 'convert-to-pdf' },
  { slug: 'rtf-to-pdf', name: 'RTF to PDF', category: 'convert-to-pdf' },
  { slug: 'txt-to-pdf', name: 'TXT to PDF', category: 'convert-to-pdf' },
  { slug: 'md-to-pdf', name: 'Markdown to PDF', category: 'convert-to-pdf' },
  { slug: 'odt-to-pdf', name: 'ODT to PDF', category: 'convert-to-pdf' },
  { slug: 'gif-to-pdf', name: 'GIF to PDF', category: 'convert-to-pdf' },
  { slug: 'bmp-to-pdf', name: 'BMP to PDF', category: 'convert-to-pdf' },
  { slug: 'xml-to-pdf', name: 'XML to PDF', category: 'convert-to-pdf' },
  { slug: 'zip-to-pdf', name: 'ZIP to PDF', category: 'convert-to-pdf' },
  { slug: 'mobi-to-pdf', name: 'MOBI to PDF', category: 'convert-to-pdf' },
  { slug: 'ebook-to-pdf', name: 'eBook to PDF', category: 'convert-to-pdf' },
  { slug: 'cbz-to-pdf', name: 'CBZ to PDF', category: 'convert-to-pdf' },
  { slug: 'cbr-to-pdf', name: 'CBR to PDF', category: 'convert-to-pdf' },
  { slug: 'dwg-to-pdf', name: 'DWG to PDF', category: 'convert-to-pdf' },
  { slug: 'ai-to-pdf', name: 'AI to PDF', category: 'convert-to-pdf' },
  { slug: 'xps-to-pdf', name: 'XPS to PDF', category: 'convert-to-pdf' },
  { slug: 'pub-to-pdf', name: 'PUB to PDF', category: 'convert-to-pdf' },
  { slug: 'eml-to-pdf', name: 'EML to PDF', category: 'convert-to-pdf' },
  { slug: 'wps-to-pdf', name: 'WPS to PDF', category: 'convert-to-pdf' },
  { slug: 'djvu-to-pdf', name: 'DjVu to PDF', category: 'convert-to-pdf' },
  { slug: 'hwp-to-pdf', name: 'HWP to PDF', category: 'convert-to-pdf' },
  { slug: 'fb2-to-pdf', name: 'FB2 to PDF', category: 'convert-to-pdf' },
  { slug: 'chm-to-pdf', name: 'CHM to PDF', category: 'convert-to-pdf' },
  { slug: 'jfif-to-pdf', name: 'JFIF to PDF', category: 'convert-to-pdf' },
  { slug: 'heif-to-pdf', name: 'HEIF to PDF', category: 'convert-to-pdf' },
  { slug: 'image-to-pdf', name: 'Image to PDF', category: 'convert-to-pdf' },
  { slug: 'protect-pdf', name: 'Protect PDF', category: 'pdf-security' },
  { slug: 'unlock-pdf', name: 'Unlock PDF', category: 'pdf-security' },
  { slug: 'sign-pdf', name: 'Sign PDF', category: 'pdf-security' },
  { slug: 'edit-pdf', name: 'Edit PDF', category: 'edit-pdf' },
  { slug: 'watermark-pdf', name: 'Watermark PDF', category: 'edit-pdf' },
  { slug: 'annotate-pdf', name: 'Annotate PDF', category: 'edit-pdf' },
  { slug: 'page-numbers-pdf', name: 'Page Numbers', category: 'edit-pdf' },
  { slug: 'header-footer-pdf', name: 'Header & Footer', category: 'edit-pdf' },
  { slug: 'redact-pdf', name: 'Redact PDF', category: 'edit-pdf' },
  { slug: 'grayscale-pdf', name: 'Grayscale PDF', category: 'edit-pdf' },
  { slug: 'whiteout-pdf', name: 'Whiteout PDF', category: 'edit-pdf' },
  { slug: 'pdf-filler', name: 'PDF Filler', category: 'edit-pdf' },
  { slug: 'highlight-pdf', name: 'Highlight PDF', category: 'edit-pdf' },
  { slug: 'flatten-pdf', name: 'Flatten PDF', category: 'edit-pdf' },
  { slug: 'add-text-pdf', name: 'Add Text to PDF', category: 'edit-pdf' },
  { slug: 'extract-pages', name: 'Extract Pages', category: 'extract' },
  { slug: 'extract-text', name: 'Extract Text', category: 'extract' },
  { slug: 'extract-images', name: 'Extract Images', category: 'extract' },
  { slug: 'edit-metadata', name: 'Edit Metadata', category: 'extract' },
  { slug: 'remove-metadata', name: 'Remove Metadata', category: 'extract' },
  { slug: 'create-pdf', name: 'Create PDF', category: 'extract' },
  { slug: 'resize-pages', name: 'Resize Pages', category: 'extract' },
  { slug: 'ocr-pdf', name: 'OCR PDF', category: 'ai-powered' },
  { slug: 'translate-pdf', name: 'Translate PDF', category: 'ai-powered' },
  { slug: 'summarize-pdf', name: 'Summarize PDF', category: 'ai-powered' },
  { slug: 'chat-with-pdf', name: 'Chat with PDF', category: 'ai-powered' },
  { slug: 'compare-pdf', name: 'Compare PDF', category: 'advanced' },
  { slug: 'scan-to-pdf', name: 'Scan to PDF', category: 'advanced' },
  { slug: 'pdf-viewer', name: 'PDF Viewer', category: 'advanced' },
  { slug: 'add-image-to-pdf', name: 'Add Image to PDF', category: 'advanced' },
];

const __dirname = import.meta.dirname;
const basePath = path.join(__dirname, 'src', 'pages', 'tools');
if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

function toPascalCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

let routesConfig = [];

TOOLS.forEach(tool => {
  const compName = toPascalCase(tool.slug);
  const catDir = path.join(basePath, tool.category);
  const toolDir = path.join(catDir, tool.slug);
  
  if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });
  if (!fs.existsSync(toolDir)) fs.mkdirSync(toolDir, { recursive: true });
  
  const compPath = path.join(toolDir, `${compName}.jsx`);
  const metaPath = path.join(toolDir, `${compName}.meta.js`);
  const cssPath = path.join(toolDir, `${compName}.module.css`);

  // Write component based on a wrapper holding the core logic
  const content = `import React from 'react';
import ToolPage from '../../../ToolPage'; // Temporary fallback to the existing unified template

export default function ${compName}() {
  return <ToolPage fallbackSlug="${tool.slug}" />;
}
`;
  if(!fs.existsSync(compPath)) fs.writeFileSync(compPath, content);
  if(!fs.existsSync(metaPath)) fs.writeFileSync(metaPath, `export const metadata = {\n  slug: "${tool.slug}",\n  title: "${tool.name} Online",\n};\n`);
  if(!fs.existsSync(cssPath)) fs.writeFileSync(cssPath, `/* ${compName} Styles */\n.${tool.slug}-container {}\n`);
  
  routesConfig.push({
    slug: tool.slug,
    importPath: `./pages/tools/${tool.category}/${tool.slug}/${compName}`
  });
});

// Generate dynamic routes for App.jsx (Outputs to a temp file for us to analyze)
const routingOutput = routesConfig.map(r => 
  `const ${toPascalCase(r.slug)} = lazy(() => import('${r.importPath}'));`
).join('\n') + '\n\n' + 
routesConfig.map(r => 
  `        <Route path="/tools/${r.slug}" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants}><${toPascalCase(r.slug)} /></motion.div>} />`
).join('\n');

fs.writeFileSync(path.join(__dirname, 'routes-snippet.txt'), routingOutput);

console.log("Successfully generated all folders and files for 80+ tools.");
