# 🛠️ TOOLS PAGE — COMPLETE TECHNICAL BLUEPRINT
### Website: ishu.fun | Version: 5.0 | Status: Production-Ready Spec
### Document Type: Full-Stack Architecture + Developer Handbook
---

> **ROLE:** You are a Senior Full-Stack Engineer + UI/UX Architect building the world's most modern, animated, and functional Tools page. Inspiration: ilovepdf.com, smallpdf.com, Adobe Acrobat Online, Vercel, Linear, Framer, Notion, Apple, and Stripe. Every pixel must feel alive. Every tool must work. No placeholders. No fake UIs.

---

## 📁 PROJECT FOLDER STRUCTURE

```
ishu.fun/
│
├── frontend/                          # React + Vite frontend
│   ├── public/
│   │   ├── icons/                     # SVG tool icons (Heroicons / Phosphor / custom)
│   │   ├── animations/                # Lottie JSON files
│   │   └── fonts/                     # Inter, Plus Jakarta Sans, Geist
│   │
│   ├── src/
│   │   ├── pages/
│   │   │   └── tools/
│   │   │       ├── ToolsLanding.jsx           # Main tools listing page
│   │   │       ├── merge-pdf/
│   │   │       │   ├── MergePDF.jsx
│   │   │       │   └── MergePDF.module.css
│   │   │       ├── split-pdf/
│   │   │       │   ├── SplitPDF.jsx
│   │   │       │   └── SplitPDF.module.css
│   │   │       ├── compress-pdf/
│   │   │       │   ├── CompressPDF.jsx
│   │   │       │   └── CompressPDF.module.css
│   │   │       ├── pdf-to-word/
│   │   │       ├── pdf-to-powerpoint/
│   │   │       ├── pdf-to-excel/
│   │   │       ├── word-to-pdf/
│   │   │       ├── powerpoint-to-pdf/
│   │   │       ├── excel-to-pdf/
│   │   │       ├── edit-pdf/
│   │   │       ├── pdf-to-jpg/
│   │   │       ├── jpg-to-pdf/
│   │   │       ├── sign-pdf/
│   │   │       ├── watermark-pdf/
│   │   │       ├── rotate-pdf/
│   │   │       ├── html-to-pdf/
│   │   │       ├── unlock-pdf/
│   │   │       ├── protect-pdf/
│   │   │       ├── organize-pdf/
│   │   │       ├── pdf-to-pdfa/
│   │   │       ├── repair-pdf/
│   │   │       ├── page-numbers/
│   │   │       ├── scan-to-pdf/
│   │   │       ├── ocr-pdf/
│   │   │       ├── compare-pdf/
│   │   │       ├── redact-pdf/
│   │   │       ├── crop-pdf/
│   │   │       ├── translate-pdf/
│   │   │       ├── png-to-pdf/
│   │   │       ├── pdf-to-png/
│   │   │       ├── epub-to-pdf/
│   │   │       ├── pdf-to-epub/
│   │   │       ├── chat-with-pdf/
│   │   │       ├── summarize-pdf/
│   │   │       ├── extract-pages/
│   │   │       ├── extract-text/
│   │   │       ├── extract-images/
│   │   │       ├── edit-pdf-text/
│   │   │       ├── pdf-viewer/
│   │   │       ├── add-watermark/
│   │   │       ├── add-image-to-pdf/
│   │   │       ├── flatten-pdf/
│   │   │       ├── annotate-pdf/
│   │   │       ├── highlight-pdf/
│   │   │       ├── create-pdf/
│   │   │       ├── remove-metadata/
│   │   │       ├── resize-pages/
│   │   │       ├── pdf-to-svg/
│   │   │       ├── svg-to-pdf/
│   │   │       ├── pdf-to-csv/
│   │   │       ├── csv-to-pdf/
│   │   │       ├── url-to-pdf/
│   │   │       ├── grayscale-pdf/
│   │   │       ├── header-footer/
│   │   │       ├── whiteout-pdf/
│   │   │       ├── pdf-filler/
│   │   │       ├── zip-to-pdf/
│   │   │       ├── tiff-to-pdf/
│   │   │       ├── gif-to-pdf/
│   │   │       ├── bmp-to-pdf/
│   │   │       ├── webp-to-pdf/
│   │   │       ├── heic-to-pdf/
│   │   │       ├── heif-to-pdf/
│   │   │       ├── txt-to-pdf/
│   │   │       ├── odt-to-pdf/
│   │   │       ├── rtf-to-pdf/
│   │   │       ├── dwg-to-pdf/
│   │   │       ├── xps-to-pdf/
│   │   │       ├── xml-to-pdf/
│   │   │       ├── md-to-pdf/
│   │   │       ├── ebook-to-pdf/
│   │   │       ├── cbz-to-pdf/
│   │   │       ├── cbr-to-pdf/
│   │   │       ├── ai-to-pdf/
│   │   │       ├── hwp-to-pdf/
│   │   │       ├── chm-to-pdf/
│   │   │       ├── fb2-to-pdf/
│   │   │       ├── eml-to-pdf/
│   │   │       ├── wps-to-pdf/
│   │   │       ├── pub-to-pdf/
│   │   │       ├── djvu-to-pdf/
│   │   │       ├── pages-to-pdf/
│   │   │       ├── jfif-to-pdf/
│   │   │       ├── mobi-to-pdf/
│   │   │       ├── pdf-to-mobi/
│   │   │       └── workflow-builder/
│   │   │
│   │   ├── components/
│   │   │   ├── tools/
│   │   │   │   ├── ToolCard.jsx              # Animated tool card component
│   │   │   │   ├── ToolGrid.jsx              # Masonry / grid layout
│   │   │   │   ├── ToolSearch.jsx            # Search with fuzzy matching
│   │   │   │   ├── ToolFilter.jsx            # Category filter tabs
│   │   │   │   ├── FileDropzone.jsx          # Drag & drop upload area
│   │   │   │   ├── ProgressBar.jsx           # Upload/processing progress
│   │   │   │   ├── ResultDownload.jsx        # Download result section
│   │   │   │   ├── ToolHero.jsx              # Per-tool hero section
│   │   │   │   ├── ToolFeatures.jsx          # Features grid per tool
│   │   │   │   ├── HowItWorks.jsx            # Step-by-step section
│   │   │   │   ├── RelatedTools.jsx          # Related tools carousel
│   │   │   │   ├── ToolStats.jsx             # Live stats counter
│   │   │   │   └── WorkflowBuilder.jsx       # Visual workflow builder
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   ├── Tooltip.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── GlowCard.jsx
│   │   │   │   ├── MagneticButton.jsx
│   │   │   │   └── ParticleCanvas.jsx
│   │   │   └── layout/
│   │   │       ├── Navbar.jsx
│   │   │       └── Footer.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useFileUpload.js
│   │   │   ├── useToolProcess.js
│   │   │   ├── useScrollAnimation.js
│   │   │   ├── useMagneticEffect.js
│   │   │   └── useToolSearch.js
│   │   │
│   │   ├── store/
│   │   │   ├── toolStore.js              # Zustand store
│   │   │   ├── uploadStore.js
│   │   │   └── userStore.js
│   │   │
│   │   ├── utils/
│   │   │   ├── fileHelpers.js
│   │   │   ├── apiClient.js
│   │   │   └── constants.js
│   │   │
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── variables.css
│   │   │   └── animations.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                           # Node.js + Express backend
│   ├── src/
│   │   ├── routes/
│   │   │   ├── tools/
│   │   │   │   ├── pdf.routes.js          # All PDF processing routes
│   │   │   │   ├── convert.routes.js      # File conversion routes
│   │   │   │   ├── ai.routes.js           # AI-powered tools (translate, summarize, chat)
│   │   │   │   └── workflow.routes.js     # Workflow builder routes
│   │   │   ├── upload.routes.js
│   │   │   └── auth.routes.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── pdf/
│   │   │   │   ├── mergePDF.controller.js
│   │   │   │   ├── splitPDF.controller.js
│   │   │   │   ├── compressPDF.controller.js
│   │   │   │   ├── editPDF.controller.js
│   │   │   │   ├── ocr.controller.js
│   │   │   │   ├── signPDF.controller.js
│   │   │   │   ├── watermark.controller.js
│   │   │   │   ├── protect.controller.js
│   │   │   │   ├── unlock.controller.js
│   │   │   │   ├── rotate.controller.js
│   │   │   │   ├── crop.controller.js
│   │   │   │   ├── organize.controller.js
│   │   │   │   └── repair.controller.js
│   │   │   ├── convert/
│   │   │   │   ├── pdfToWord.controller.js
│   │   │   │   ├── pdfToExcel.controller.js
│   │   │   │   ├── pdfToPPT.controller.js
│   │   │   │   ├── pdfToJPG.controller.js
│   │   │   │   ├── pdfToPNG.controller.js
│   │   │   │   ├── htmlToPDF.controller.js
│   │   │   │   ├── wordToPDF.controller.js
│   │   │   │   ├── excelToPDF.controller.js
│   │   │   │   └── imageToPDF.controller.js
│   │   │   └── ai/
│   │   │       ├── translatePDF.controller.js
│   │   │       ├── summarizePDF.controller.js
│   │   │       └── chatWithPDF.controller.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   ├── rateLimit.middleware.js
│   │   │   ├── fileValidation.middleware.js
│   │   │   ├── errorHandler.middleware.js
│   │   │   └── logger.middleware.js
│   │   │
│   │   ├── services/
│   │   │   ├── pdfService.js              # Core PDF operations
│   │   │   ├── convertService.js          # File conversion service
│   │   │   ├── storageService.js          # Cloudinary / S3 file storage
│   │   │   ├── aiService.js               # OpenAI / Gemini integration
│   │   │   ├── ocrService.js              # Tesseract OCR service
│   │   │   └── cleanupService.js          # Auto-delete temp files (1hr)
│   │   │
│   │   ├── models/
│   │   │   ├── User.model.js
│   │   │   ├── ToolUsage.model.js         # Track tool usage stats
│   │   │   ├── ProcessedFile.model.js
│   │   │   └── Workflow.model.js
│   │   │
│   │   ├── config/
│   │   │   ├── database.js                # MongoDB connection
│   │   │   ├── redis.js                   # Redis connection
│   │   │   ├── cloudinary.js              # Cloudinary config
│   │   │   └── env.js                     # Environment variables
│   │   │
│   │   └── app.js                         # Express app entry point
│   │
│   ├── uploads/                           # Temp file storage (auto-cleaned)
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🎨 FRONTEND TECH STACK — COMPLETE LIST

### Core Framework
| Library | Version | Purpose |
|---|---|---|
| React | 18.x | UI Framework |
| Vite | 5.x | Build tool (fastest HMR) |
| React Router DOM | 6.x | Client-side routing |
| TypeScript | 5.x | Type safety (optional but recommended) |

### Animation Libraries (USE ALL OF THESE)
| Library | Purpose |
|---|---|
| **GSAP (GreenSock)** | Master timeline animations, scroll triggers, morphSVG |
| **GSAP ScrollTrigger** | Scroll-based animations on every section |
| **GSAP Flip** | Smooth layout transitions when filtering tools |
| **Three.js** | 3D background particles, floating geometry |
| **@react-three/fiber** | React wrapper for Three.js |
| **@react-three/drei** | Ready-made Three.js helpers |
| **Framer Motion** | Page transitions, gesture animations, layout animations |
| **Anime.js** | Fine-grained DOM animations, SVG morphing |
| **Lottie React** | JSON-based micro-animations for tool icons |
| **React Spring** | Physics-based spring animations |
| **Barba.js** | Smooth page-to-page transitions |
| **Velocity.js** | High-performance DOM animations |
| **AutoAnimate** | Zero-config list animations |

### UI / Styling
| Library | Purpose |
|---|---|
| **Tailwind CSS v3** | Utility-first styling |
| **shadcn/ui** | Headless professional components |
| **Radix UI** | Accessible primitives |
| **CSS Custom Properties** | Dynamic theming (dark/light) |
| **Clsx + CVA** | Conditional classNames |

### 3D & Visual Effects
| Library | Purpose |
|---|---|
| **Three.js** | 3D rendering |
| **React Three Fiber** | Declarative Three.js in React |
| **Drei (maath)** | Floating particles, environment maps |
| **Spline (Spline-react)** | Embed interactive 3D objects |
| **React Particles (tsParticles)** | Particle background effects |
| **Vanta.js** | Animated WebGL backgrounds |

### Scroll & Parallax
| Library | Purpose |
|---|---|
| **Locomotive Scroll** | Smooth inertia scrolling |
| **GSAP ScrollTrigger** | Parallax and scroll animations |
| **React Intersection Observer** | Trigger animations on enter viewport |
| **Lenis** | Ultra-smooth scroll |

### File Handling (Frontend)
| Library | Purpose |
|---|---|
| **React Dropzone** | Beautiful drag & drop file upload |
| **React-pdf** | In-browser PDF preview |
| **PDF.js (Mozilla)** | Render PDFs in canvas |
| **File-saver** | Trigger file downloads |
| **Axios** | HTTP requests with progress |
| **React Query (TanStack)** | Server state management, caching |

### State Management
| Library | Purpose |
|---|---|
| **Zustand** | Lightweight global state |
| **Jotai** | Atomic state for tool configs |
| **React Query** | Server/async state |

### Search & Filter
| Library | Purpose |
|---|---|
| **Fuse.js** | Fuzzy search for tools |
| **React Virtual** | Virtualized list (performance) |

### Notifications & UX
| Library | Purpose |
|---|---|
| **Sonner** | Beautiful toast notifications |
| **React Hot Toast** | Backup toast library |
| **NProgress** | Page loading progress bar |
| **React Loading Skeleton** | Skeleton loaders |

### Forms
| Library | Purpose |
|---|---|
| **React Hook Form** | Performant forms |
| **Zod** | Schema validation |

### Icons (NO AI GENERATED — Professional only)
| Library | Purpose |
|---|---|
| **Phosphor Icons** | Modern, consistent icon set (primary) |
| **Heroicons** | Tailwind-compatible SVG icons |
| **Lucide React** | Clean minimal icons |
| **Remix Icon** | Additional icon coverage |
| **Custom SVG icons** | Tool-specific icons designed manually |

### SEO
| Library | Purpose |
|---|---|
| **React Helmet Async** | Per-page meta tags |
| **React Sitemap** | Auto sitemap generation |
| **Schema.org JSON-LD** | Structured data for Google |

---

## 🔧 BACKEND TECH STACK — COMPLETE LIST

### Core
| Technology | Purpose |
|---|---|
| **Node.js v20 LTS** | Runtime |
| **Express.js v4** | Web framework |
| **TypeScript** | Type safety |

### PDF Processing Libraries (THE MOST IMPORTANT SECTION)
| Library | Purpose | Tools Using It |
|---|---|---|
| **pdf-lib** | Create, merge, split, rotate, crop, organize PDFs | Merge, Split, Rotate, Crop, Organize, Page Numbers, Header/Footer, Watermark, Protect, Repair |
| **pdf-lib/fontkit** | Custom font embedding | Edit PDF text, Page numbers |
| **hummus (muhammara)** | Advanced PDF manipulation | Merge, Split, Form filling |
| **pdfmake** | Generate PDFs from JSON | Create PDF, TXT to PDF, MD to PDF |
| **puppeteer** | HTML to PDF, URL to PDF, Screenshot | HTML to PDF, URL to PDF |
| **libreoffice-convert** | DOC/DOCX/PPT/XLS to PDF | Word to PDF, Excel to PDF, PPT to PDF, ODT to PDF |
| **mammoth** | DOCX to HTML (then to PDF) | Word to PDF |
| **xlsx (SheetJS)** | Excel read/write | Excel to PDF, PDF to Excel |
| **node-poppler** | PDF to image, text extraction | PDF to JPG, PDF to PNG, Extract Text |
| **node-tesseract-ocr** | OCR — image to searchable text | OCR PDF, Scan to PDF |
| **sharp** | Image processing, JPG/PNG/WEBP operations | JPG to PDF, Image to PDF, compress images |
| **jimp** | Image manipulation | BMP, GIF, JFIF, TIFF conversions |
| **pdf2json** | Extract JSON data from PDF | Extract text, PDF to CSV |
| **node-qpdf2** | Encrypt/decrypt PDFs | Protect PDF, Unlock PDF |
| **canvas (node-canvas)** | Canvas rendering on server | Watermark, Annotations |
| **archiver** | Create ZIP files | Multiple file downloads |
| **unzipper** | Extract ZIP files | ZIP to PDF |
| **epub** | EPUB generation/parsing | PDF to EPUB, EPUB to PDF |
| **pdfjs-dist (server)** | Parse PDF structure | Compare PDF, Redact PDF |
| **Calibre CLI** | eBook conversions (MOBI, EPUB) | PDF to MOBI, MOBI to PDF, eBook to PDF |
| **Ghostscript (system)** | PDF compression, PDF/A, repair | Compress PDF, PDF to PDF/A, Repair PDF |
| **ImageMagick (system)** | Advanced image conversion | HEIC, HEIF, TIFF, DjVu conversions |
| **unoconv** | Universal document converter | DWG, PUB, XPS, WPS, EML to PDF |
| **pandoc (system)** | Document format conversion | MD to PDF, RTF to PDF, FB2 to PDF |

### AI-Powered Tools
| Library | Purpose | Tools |
|---|---|---|
| **OpenAI API (GPT-4)** | Chat with PDF, Summarize, Translate | Chat PDF, Summarize, Translate |
| **Google Cloud Vision API** | Advanced OCR | OCR PDF, Scan to PDF |
| **LangChain.js** | RAG pipeline for Chat with PDF | Chat with PDF |
| **Pinecone / Chroma** | Vector database for PDF embeddings | Chat with PDF |
| **pdf-parse** | Extract text for AI processing | Chat PDF, Summarize |

### File Storage & CDN
| Service | Purpose |
|---|---|
| **Cloudinary** | Store processed files temporarily |
| **AWS S3 (or Cloudflare R2)** | Long-term / bulk storage |
| **Multer** | Multipart file upload middleware |
| **Multer-S3** | Direct S3 upload |
| **Busboy** | High-performance stream upload |

### Database
| Technology | Purpose |
|---|---|
| **MongoDB Atlas** | Primary database (users, usage stats, workflows) |
| **Mongoose** | ODM for MongoDB |
| **Redis (Upstash)** | Job queue, rate limiting, session cache |
| **Bull / BullMQ** | Background job queue for heavy processing |

### Security & Auth
| Library | Purpose |
|---|---|
| **JWT (jsonwebtoken)** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **express-rate-limit** | Rate limiting per IP |
| **helmet** | Security headers |
| **cors** | CORS handling |
| **express-validator** | Input validation |
| **multer file-type** | File type verification (prevent malicious uploads) |

### API & Communication
| Library | Purpose |
|---|---|
| **Socket.io** | Real-time progress updates during processing |
| **Axios** | Internal API calls |
| **Node-cron** | Scheduled cleanup jobs |
| **Winston** | Professional logging |
| **Morgan** | HTTP request logging |

### Performance & Monitoring
| Tool | Purpose |
|---|---|
| **Compression** | Gzip response compression |
| **PM2** | Process manager (production) |
| **Sentry** | Error tracking |
| **New Relic / Datadog** | Performance monitoring |

---

## 🎯 TOOLS PAGE — UI/UX DESIGN SPECIFICATION

### Hero Section
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  [Full-width gradient background — #0a0a0a to #111827]
  [Floating 3D geometric shapes — Three.js]
  [Animated particle grid — tsParticles]
  
  HEADLINE:
  "Every PDF Tool You'll"
  "Ever Need. Free."
  [Gradient text: blue → purple → pink]
  [GSAP text reveal — letter by letter]
  
  SUBHEADLINE:
  "100+ professional tools. No watermarks. No limits."
  [Fade up animation with Framer Motion]
  
  STATS ROW (animated count-up on scroll):
  ┌─────────────┬─────────────┬─────────────┐
  │  100+ Tools │  50M+ Files │  4.9★ Rating│
  │  Processed  │  Every Day  │  Worldwide  │
  └─────────────┴─────────────┴─────────────┘
  
  SEARCH BAR:
  [Full-width animated search — Fuse.js powered]
  [Placeholder rotates: "Try 'Merge PDF', 'Compress', 'Convert'..."]
  [Glow effect on focus — CSS box-shadow animation]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Category Filter Bar (Sticky)
```
All  |  Popular  |  PDF Edit  |  Convert  |  AI Tools  |  Security  |  Images  |  Office  |  Advanced

[Pill-shaped tabs — animated underline slide]
[GSAP Flip for smooth grid reflow on filter change]
[Active state: gradient background + glow]
```

### Tool Cards Grid
```
CARD DESIGN (inspired by Linear, Vercel, Notion):
┌─────────────────────────────────────────┐
│  [Gradient icon container — 48x48px]    │
│  [Icon: Phosphor icon — animated]       │
│                                         │
│  Merge PDF                              │
│  Combine multiple PDFs into one file    │
│                                         │
│  [Popular badge — if top tool]          │
│  [New badge — if recently added]        │
│                                         │
│  [→ Use Tool]  [★ 4.9]  [2.3M uses]   │
└─────────────────────────────────────────┘

ANIMATIONS:
- Card entrance: staggered fade-up (GSAP / Framer Motion)
- Hover: subtle lift + glow border + icon spin/morph
- Click: scale press effect + route transition (Barba.js)
- Magnetic hover effect on cards (custom hook)

GRID LAYOUT:
- Desktop: 4 columns
- Tablet: 3 columns
- Mobile: 2 columns (compact cards)
- Masonry layout with GSAP Flip for filter transitions
```

---

## 📄 INDIVIDUAL TOOL PAGE TEMPLATE

Every tool has its own page at `/tools/[tool-name]` with this structure:

### 1. Tool Hero Section
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  [Animated gradient background]
  [Tool-specific 3D icon — Spline or Three.js]
  
  H1: "Merge PDF Files Online — Free"
  [Breadcrumb: Home > Tools > Merge PDF]
  [Short description — 1 line]
  [Trust badges: Secure | Free | No Signup Required]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 2. File Upload Zone
```
┌────────────────────────────────────────────────┐
│                                                │
│     [Animated dashed border — CSS animation]  │
│                                                │
│     [Upload icon — Lottie animated]            │
│                                                │
│     Drop your PDF files here                  │
│     or click to browse                        │
│                                                │
│     [Select Files Button — magnetic effect]   │
│                                                │
│     Supported: PDF (max 100MB per file)        │
│     [Google Drive] [Dropbox] [OneDrive] icons  │
│                                                │
└────────────────────────────────────────────────┘

STATES:
1. Default — animated dashed border, floating icon
2. Drag Over — border turns blue, background shifts, scale pulse
3. File Added — thumbnail previews slide in (GSAP stagger)
4. Uploading — progress bar animation (GSAP)
5. Processing — spinner + live status text
6. Done — success checkmark (Lottie) + download button
7. Error — shake animation + red glow + error message
```

### 3. Tool Options Panel
```
[Each tool shows relevant options]
Example for Merge PDF:
- Drag to reorder files (React DnD / dnd-kit)
- Add more files button
- Remove file button
- Page range selector (for split)
- Compression level slider (for compress)
- Password input (for protect/unlock)
- Language selector (for translate/OCR)
```

### 4. Process Button
```
[Full-width CTA button]
"Merge PDF →"
[Gradient: blue to purple]
[On hover: shimmer sweep animation]
[On click: morphs into loading state]
[Socket.io shows real-time progress: "Processing page 3 of 12..."]
```

### 5. Download Section (Post-Processing)
```
┌──────────────────────────────────────────────┐
│  ✅  Your file is ready!                     │
│                                              │
│  [File name] — [File size]                   │
│                                              │
│  [⬇ Download] [☁ Save to Drive] [📋 Copy Link]│
│                                              │
│  ⚠️ Files are automatically deleted after 1 hour │
└──────────────────────────────────────────────┘
```

### 6. How It Works Section
```
Step 1: Upload → Step 2: Configure → Step 3: Download
[Animated connecting line between steps — GSAP draw SVG]
[Each step has a Lottie animation]
```

### 7. Features Grid
```
[6-card grid showing tool benefits]
Example for Merge PDF:
✓ No file size limits    ✓ Preserves quality
✓ 100% secure           ✓ Works on any device
✓ No software install   ✓ Process in seconds
```

### 8. Related Tools Carousel
```
[Horizontal scroll carousel — Framer Motion]
[5-7 related tools shown as mini cards]
[Auto-scroll + manual arrow navigation]
```

### 9. FAQ Section
```
[Accordion-style FAQ — Framer Motion AnimatePresence]
[Schema.org FAQPage structured data for SEO]
[5-8 questions per tool]
```

---

## 🔄 COMPLETE TOOLS LIST WITH ROUTES & BACKEND METHODS

### Category: PDF Core
| Tool | Route | Method | Backend Library |
|---|---|---|---|
| Merge PDF | `/tools/merge-pdf` | POST /api/pdf/merge | pdf-lib |
| Split PDF | `/tools/split-pdf` | POST /api/pdf/split | pdf-lib |
| Compress PDF | `/tools/compress-pdf` | POST /api/pdf/compress | Ghostscript |
| Organize PDF | `/tools/organize-pdf` | POST /api/pdf/organize | pdf-lib |
| Rotate PDF | `/tools/rotate-pdf` | POST /api/pdf/rotate | pdf-lib |
| Crop PDF | `/tools/crop-pdf` | POST /api/pdf/crop | pdf-lib |
| Repair PDF | `/tools/repair-pdf` | POST /api/pdf/repair | Ghostscript |
| Page Numbers | `/tools/page-numbers` | POST /api/pdf/page-numbers | pdf-lib |
| Header Footer | `/tools/header-footer` | POST /api/pdf/header-footer | pdf-lib |
| Watermark | `/tools/watermark` | POST /api/pdf/watermark | pdf-lib |
| Redact PDF | `/tools/redact-pdf` | POST /api/pdf/redact | pdf-lib + canvas |
| Whiteout PDF | `/tools/whiteout-pdf` | POST /api/pdf/whiteout | pdf-lib |
| Grayscale PDF | `/tools/grayscale-pdf` | POST /api/pdf/grayscale | Ghostscript |
| Flatten PDF | `/tools/flatten-pdf` | POST /api/pdf/flatten | Ghostscript |
| Resize Pages | `/tools/resize-pages` | POST /api/pdf/resize | pdf-lib |
| Create PDF | `/tools/create-pdf` | POST /api/pdf/create | pdfmake |

### Category: PDF Security
| Tool | Route | Method | Backend Library |
|---|---|---|---|
| Protect PDF | `/tools/protect-pdf` | POST /api/pdf/protect | node-qpdf2 |
| Unlock PDF | `/tools/unlock-pdf` | POST /api/pdf/unlock | node-qpdf2 |
| Sign PDF | `/tools/sign-pdf` | POST /api/pdf/sign | pdf-lib |
| Remove Metadata | `/tools/remove-metadata` | POST /api/pdf/remove-metadata | pdf-lib |

### Category: PDF to Office Conversion
| Tool | Route | Method | Backend Library |
|---|---|---|---|
| PDF to Word | `/tools/pdf-to-word` | POST /api/convert/pdf-to-word | libreoffice-convert |
| PDF to PowerPoint | `/tools/pdf-to-ppt` | POST /api/convert/pdf-to-ppt | libreoffice-convert |
| PDF to Excel | `/tools/pdf-to-excel` | POST /api/convert/pdf-to-excel | node-poppler + xlsx |
| PDF to CSV | `/tools/pdf-to-csv` | POST /api/convert/pdf-to-csv | pdf2json |

### Category: Office to PDF
| Tool | Route | Method | Backend Library |
|---|---|---|---|
| Word to PDF | `/tools/word-to-pdf` | POST /api/convert/word-to-pdf | libreoffice-convert |
| Excel to PDF | `/tools/excel-to-pdf` | POST /api/convert/excel-to-pdf | libreoffice-convert |
| PowerPoint to PDF | `/tools/ppt-to-pdf` | POST /api/convert/ppt-to-pdf | libreoffice-convert |
| CSV to PDF | `/tools/csv-to-pdf` | POST /api/convert/csv-to-pdf | pdfmake |
| HTML to PDF | `/tools/html-to-pdf` | POST /api/convert/html-to-pdf | puppeteer |
| URL to PDF | `/tools/url-to-pdf` | POST /api/convert/url-to-pdf | puppeteer |
| MD to PDF | `/tools/md-to-pdf` | POST /api/convert/md-to-pdf | pandoc |
| TXT to PDF | `/tools/txt-to-pdf` | POST /api/convert/txt-to-pdf | pdfmake |
| RTF to PDF | `/tools/rtf-to-pdf` | POST /api/convert/rtf-to-pdf | libreoffice-convert |
| ODT to PDF | `/tools/odt-to-pdf` | POST /api/convert/odt-to-pdf | libreoffice-convert |
| XML to PDF | `/tools/xml-to-pdf` | POST /api/convert/xml-to-pdf | pdfmake |

### Category: PDF to Image / Image to PDF
| Tool | Route | Method | Backend Library |
|---|---|---|---|
| PDF to JPG | `/tools/pdf-to-jpg` | POST /api/convert/pdf-to-jpg | node-poppler + sharp |
| PDF to PNG | `/tools/pdf-to-png` | POST /api/convert/pdf-to-png | node-poppler + sharp |
| PDF to SVG | `/tools/pdf-to-svg` | POST /api/convert/pdf-to-svg | Inkscape CLI |
| PDF to GIF | `/tools/pdf-to-gif` | POST /api/convert/pdf-to-gif | ImageMagick |
| PDF to BMP | `/tools/pdf-to-bmp` | POST /api/convert/pdf-to-bmp | ImageMagick |
| PDF to TIFF | `/tools/pdf-to-tiff` | POST /api/convert/pdf-to-tiff | ImageMagick |
| JPG to PDF | `/tools/jpg-to-pdf` | POST /api/convert/jpg-to-pdf | pdf-lib + sharp |
| PNG to PDF | `/tools/png-to-pdf` | POST /api/convert/png-to-pdf | pdf-lib + sharp |
| SVG to PDF | `/tools/svg-to-pdf` | POST /api/convert/svg-to-pdf | pdf-lib |
| GIF to PDF | `/tools/gif-to-pdf` | POST /api/convert/gif-to-pdf | sharp + pdf-lib |
| BMP to PDF | `/tools/bmp-to-pdf` | POST /api/convert/bmp-to-pdf | sharp + pdf-lib |
| TIFF to PDF | `/tools/tiff-to-pdf` | POST /api/convert/tiff-to-pdf | sharp + pdf-lib |
| HEIC to PDF | `/tools/heic-to-pdf` | POST /api/convert/heic-to-pdf | sharp (heic) + pdf-lib |
| HEIF to PDF | `/tools/heif-to-pdf` | POST /api/convert/heif-to-pdf | sharp + pdf-lib |
| WebP to PDF | `/tools/webp-to-pdf` | POST /api/convert/webp-to-pdf | sharp + pdf-lib |
| JFIF to PDF | `/tools/jfif-to-pdf` | POST /api/convert/jfif-to-pdf | sharp + pdf-lib |
| Image to PDF | `/tools/image-to-pdf` | POST /api/convert/image-to-pdf | pdf-lib + sharp |
| PDF to Image | `/tools/pdf-to-image` | POST /api/convert/pdf-to-image | node-poppler |

### Category: eBook Conversions
| Tool | Route | Method | Backend Library |
|---|---|---|---|
| EPUB to PDF | `/tools/epub-to-pdf` | POST /api/convert/epub-to-pdf | Calibre CLI |
| PDF to EPUB | `/tools/pdf-to-epub` | POST /api/convert/pdf-to-epub | Calibre CLI |
| MOBI to PDF | `/tools/mobi-to-pdf` | POST /api/convert/mobi-to-pdf | Calibre CLI |
| PDF to MOBI | `/tools/pdf-to-mobi` | POST /api/convert/pdf-to-mobi | Calibre CLI |
| eBook to PDF | `/tools/ebook-to-pdf` | POST /api/convert/ebook-to-pdf | Calibre CLI |
| FB2 to PDF | `/tools/fb2-to-pdf` | POST /api/convert/fb2-to-pdf | Calibre CLI |
| CBZ to PDF | `/tools/cbz-to-pdf` | POST /api/convert/cbz-to-pdf | ImageMagick |
| CBR to PDF | `/tools/cbr-to-pdf` | POST /api/convert/cbr-to-pdf | unrar + ImageMagick |

### Category: Specialized Conversions
| Tool | Route | Method | Backend Library |
|---|---|---|---|
| DWG to PDF | `/tools/dwg-to-pdf` | POST /api/convert/dwg-to-pdf | LibreCAD / ODA |
| PUB to PDF | `/tools/pub-to-pdf` | POST /api/convert/pub-to-pdf | LibreOffice |
| XPS to PDF | `/tools/xps-to-pdf` | POST /api/convert/xps-to-pdf | Ghostscript |
| DjVu to PDF | `/tools/djvu-to-pdf` | POST /api/convert/djvu-to-pdf | djvulibre |
| PAGES to PDF | `/tools/pages-to-pdf` | POST /api/convert/pages-to-pdf | LibreOffice |
| HWP to PDF | `/tools/hwp-to-pdf` | POST /api/convert/hwp-to-pdf | LibreOffice |
| CHM to PDF | `/tools/chm-to-pdf` | POST /api/convert/chm-to-pdf | chm2pdf |
| WPS to PDF | `/tools/wps-to-pdf` | POST /api/convert/wps-to-pdf | LibreOffice |
| EML to PDF | `/tools/eml-to-pdf` | POST /api/convert/eml-to-pdf | emailjs + pdfmake |
| ZIP to PDF | `/tools/zip-to-pdf` | POST /api/convert/zip-to-pdf | unzipper + pdf-lib |
| AI to PDF | `/tools/ai-to-pdf` | POST /api/convert/ai-to-pdf | Ghostscript |
| DXF to PDF | `/tools/dxf-to-pdf` | POST /api/convert/dxf-to-pdf | LibreCAD |

### Category: Extract & Advanced
| Tool | Route | Method | Backend Library |
|---|---|---|---|
| Extract Pages | `/tools/extract-pages` | POST /api/pdf/extract-pages | pdf-lib |
| Extract Text | `/tools/extract-text` | POST /api/pdf/extract-text | pdf-parse |
| Extract Images | `/tools/extract-images` | POST /api/pdf/extract-images | pdf-lib + sharp |
| Edit PDF Text | `/tools/edit-pdf-text` | POST /api/pdf/edit-text | pdf-lib + fontkit |
| Add Image to PDF | `/tools/add-image` | POST /api/pdf/add-image | pdf-lib |
| Annotate PDF | `/tools/annotate-pdf` | POST /api/pdf/annotate | pdf-lib |
| Highlight PDF | `/tools/highlight-pdf` | POST /api/pdf/highlight | pdf-lib |
| Compare PDF | `/tools/compare-pdf` | POST /api/pdf/compare | diff + pdf2json |
| PDF to PDF/A | `/tools/pdf-to-pdfa` | POST /api/pdf/to-pdfa | Ghostscript |
| PDF Filler | `/tools/pdf-filler` | POST /api/pdf/fill | pdf-lib |
| PDF Viewer | `/tools/pdf-viewer` | GET (client-side) | PDF.js (frontend) |
| Scan to PDF | `/tools/scan-to-pdf` | POST /api/pdf/scan | Sharp + pdf-lib |

### Category: AI-Powered Tools
| Tool | Route | Method | Backend Library |
|---|---|---|---|
| Translate PDF | `/tools/translate-pdf` | POST /api/ai/translate | OpenAI + pdf-lib |
| Summarize PDF | `/tools/summarize` | POST /api/ai/summarize | OpenAI + pdf-parse |
| Chat with PDF | `/tools/chat-with-pdf` | POST /api/ai/chat | LangChain + Pinecone |
| OCR PDF | `/tools/ocr-pdf` | POST /api/pdf/ocr | Tesseract + Google Vision |

---

## 🎭 ANIMATIONS — DETAILED SPECIFICATION

### Tools Landing Page Animations

#### 1. Page Entry (Barba.js transition)
```javascript
// Page enter: clip-path wipe from left
// Previous page: fade out + slide left
// New page: clip-path reveal + content stagger
timeline
  .from('.tool-hero', { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' })
  .from('.tool-stats .stat', { opacity: 0, y: 30, stagger: 0.1, duration: 0.6 }, '-=0.4')
  .from('.search-bar', { opacity: 0, scaleX: 0.8, duration: 0.5 }, '-=0.3')
  .from('.filter-tabs .tab', { opacity: 0, y: 20, stagger: 0.05, duration: 0.4 }, '-=0.2')
```

#### 2. Tool Card Entrance (GSAP ScrollTrigger)
```javascript
// Cards animate in as user scrolls
gsap.from('.tool-card', {
  scrollTrigger: { trigger: '.tools-grid', start: 'top 80%' },
  opacity: 0, y: 40, scale: 0.95,
  stagger: { amount: 0.6, grid: [4, 'auto'], from: 'start' },
  duration: 0.5, ease: 'power2.out'
});
```

#### 3. Card Hover Effect (Framer Motion)
```javascript
// Magnetic hover — mouse follows card slightly
// Border glow gradient rotates on hover
// Icon animates on hover (rotate, scale, color change)
whileHover={{ y: -6, scale: 1.02 }}
// CSS: box-shadow gradient that follows mouse position
```

#### 4. Filter Transition (GSAP Flip)
```javascript
// Capture layout state before filter
const state = Flip.getState('.tool-card');
// Apply filter (add/remove CSS classes)
filterTools(category);
// Animate to new layout
Flip.from(state, { duration: 0.5, ease: 'power2.inOut', stagger: 0.02 });
```

#### 5. Search Animation
```javascript
// Fuse.js fuzzy search as user types
// Non-matching cards: fade out + scale down
// Matching cards: highlight text with yellow gradient
// "No results" state: animated empty state illustration
```

#### 6. 3D Background (Three.js)
```javascript
// Floating geometric wireframes in background
// Particles that react to mouse movement
// Low-opacity, non-distracting
// Performance: RequestAnimationFrame throttled to 30fps
```

#### 7. Stats Counter (CountUp + GSAP)
```javascript
// When stats section enters viewport:
// Numbers count up from 0 to target
// Eased deceleration (expo.out)
// "100+" suffix fades in after count
```

---

## 📤 FILE UPLOAD FLOW — COMPLETE SPECIFICATION

### Frontend Upload Flow
```
1. User drags file or clicks browse
2. File validated client-side:
   - Type check (file.type)
   - Size check (max 100MB default)
   - Corrupt check (try to read first bytes)
3. Show file thumbnail/preview
4. User configures options
5. Click "Process" button
6. Axios POST with FormData + upload progress
7. Socket.io receives real-time processing updates
8. Download link appears on completion
9. Auto-cleanup warning shown (1 hour)
```

### Backend Processing Flow
```javascript
// 1. Multer receives file → saves to /uploads/temp/[uuid]/
// 2. File type verified (file-type library, not just extension)
// 3. BullMQ job created with file path + options
// 4. Worker picks up job, processes with appropriate library
// 5. Progress emitted via Socket.io to specific room (job ID)
// 6. Output saved to /uploads/output/[uuid]/
// 7. Cloudinary upload (optional, for sharing)
// 8. Response: download URL (signed, expires in 1hr)
// 9. Cleanup job scheduled (node-cron, runs every 15min)
```

### Socket.io Progress Events
```javascript
// Server emits:
socket.emit('progress', { jobId, percent: 45, message: 'Compressing page 5 of 12...' });
socket.emit('complete', { jobId, downloadUrl: '/api/download/xyz', fileSize: '2.3MB' });
socket.emit('error', { jobId, message: 'Invalid PDF structure detected' });

// Client subscribes:
socket.on('progress', updateProgressBar);
socket.on('complete', showDownloadSection);
socket.on('error', showErrorState);
```

---

## 🗄️ DATABASE SCHEMA

### MongoDB Collections

#### users
```javascript
{
  _id: ObjectId,
  email: String,
  name: String,
  whatsapp: String,           // For WhatsApp notifications
  passwordHash: String,
  role: 'user' | 'admin',
  plan: 'free' | 'pro',       // Future premium tier
  toolsUsed: Number,
  filesProcessed: Number,
  storageUsed: Number,        // bytes
  createdAt: Date,
  lastActive: Date,
  preferences: {
    notifications: Boolean,
    language: String
  }
}
```

#### tool_usage (analytics)
```javascript
{
  _id: ObjectId,
  toolSlug: String,           // 'merge-pdf'
  userId: ObjectId | null,    // null for anonymous
  sessionId: String,
  inputFileSize: Number,
  outputFileSize: Number,
  processingTime: Number,     // milliseconds
  status: 'success' | 'error',
  errorMessage: String,
  ipHash: String,             // hashed for privacy
  timestamp: Date,
  country: String             // from IP geolocation
}
```

#### processed_files
```javascript
{
  _id: ObjectId,
  jobId: String,
  toolSlug: String,
  userId: ObjectId | null,
  inputPath: String,
  outputPath: String,
  cloudinaryUrl: String,
  expiresAt: Date,            // +1 hour from creation
  downloadCount: Number,
  isDeleted: Boolean,
  createdAt: Date
}
```

#### workflows
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  name: String,
  description: String,
  steps: [
    {
      order: Number,
      toolSlug: String,
      config: Object          // Tool-specific options
    }
  ],
  isPublic: Boolean,
  uses: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 SECURITY IMPLEMENTATION

### File Security
```javascript
// 1. File type validation (magic bytes, not extension)
import fileType from 'file-type';
const type = await fileType.fromBuffer(buffer);
if (!allowedTypes.includes(type?.mime)) throw new Error('Invalid file type');

// 2. File size limits per tool
const limits = {
  'merge-pdf': 100 * 1024 * 1024,      // 100MB
  'compress-pdf': 200 * 1024 * 1024,   // 200MB
  'default': 50 * 1024 * 1024          // 50MB
};

// 3. Sandboxed processing (each job in isolated temp directory)
// 4. Auto-delete after 1 hour (BullMQ + node-cron)
// 5. No permanent storage of user files
// 6. HTTPS only (enforced by Vercel/Render)
// 7. Rate limiting per IP: 10 files per hour (free)
// 8. Input sanitization (path traversal prevention)
```

### API Security
```javascript
// Helmet.js headers:
app.use(helmet());
// CORS: only allow your domain
app.use(cors({ origin: 'https://ishu.fun' }));
// Rate limiting:
app.use('/api/pdf', rateLimit({ windowMs: 60*60*1000, max: 10 }));
// JWT for authenticated users (extended limits)
```

---

## 🌐 SEO SPECIFICATION FOR TOOLS PAGE

### Meta Tags (per tool page)
```html
<!-- Merge PDF Example -->
<title>Merge PDF Files Online Free — ishu.fun</title>
<meta name="description" content="Merge multiple PDF files into one. Free online PDF merger. No signup. No watermarks. Fast and secure." />
<meta name="keywords" content="merge pdf, combine pdf, pdf merger, join pdf files, merge pdf online free" />
<link rel="canonical" href="https://ishu.fun/tools/merge-pdf" />

<!-- Open Graph -->
<meta property="og:title" content="Merge PDF Files Online Free — ishu.fun" />
<meta property="og:description" content="Combine multiple PDFs in seconds. 100% free, secure, and no registration needed." />
<meta property="og:image" content="https://ishu.fun/og/tools/merge-pdf.png" />
<meta property="og:url" content="https://ishu.fun/tools/merge-pdf" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

### Structured Data (JSON-LD)
```javascript
// Tool page: SoftwareApplication schema
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Merge PDF",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "15420" }
}

// FAQ schema on every tool page
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I merge PDF files?",
      "acceptedAnswer": { "@type": "Answer", "text": "..." }
    }
  ]
}
```

### URL Structure
```
https://ishu.fun/tools/                     ← Tools hub
https://ishu.fun/tools/merge-pdf            ← Individual tool
https://ishu.fun/tools/compress-pdf
https://ishu.fun/tools/pdf-to-word
https://ishu.fun/tools/ocr-pdf
... (one clean URL per tool)
```

### Performance (Core Web Vitals)
```
Target Scores:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms

Implementation:
- Lazy load all tool cards below fold (React.lazy + Suspense)
- Image: WebP format, srcSet for responsive
- Fonts: preload Inter + subsetting
- Code split: each tool page loads its own JS chunk
- Vite rollup manual chunks
- CDN: Vercel Edge Network
- Service Worker: cache tool pages offline
```

---

## 🚀 DEPLOYMENT SPECIFICATION

### Frontend (Vercel)
```bash
# vercel.json
{
  "buildCommand": "vite build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/tools/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "s-maxage=86400" }]
    }
  ]
}

# Environment variables in Vercel dashboard:
VITE_API_URL=https://api.ishu.fun
VITE_SOCKET_URL=wss://api.ishu.fun
VITE_CLOUDINARY_CLOUD_NAME=...
```

### Backend (Render)
```yaml
# render.yaml
services:
  - type: web
    name: ishu-fun-api
    env: node
    plan: standard          # Needs CPU for PDF processing
    buildCommand: npm install
    startCommand: node src/app.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        sync: false
      - key: REDIS_URL
        sync: false
      - key: OPENAI_API_KEY
        sync: false
      - key: CLOUDINARY_URL
        sync: false
    disk:
      name: uploads
      mountPath: /app/uploads
      sizeGB: 10

  - type: worker
    name: ishu-fun-worker
    env: node
    buildCommand: npm install
    startCommand: node src/workers/pdf.worker.js
```

### System Dependencies (Render Dockerfile)
```dockerfile
FROM node:20-alpine

# Install system tools needed for PDF processing
RUN apk add --no-cache \
    ghostscript \
    imagemagick \
    libreoffice \
    tesseract-ocr \
    tesseract-ocr-data-eng \
    tesseract-ocr-data-hin \
    poppler-utils \
    calibre \
    pandoc \
    chromium \          # For puppeteer
    ttf-freefont

# Puppeteer config
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "src/app.js"]
```

---

## 🔧 KEY .ENV VARIABLES

```bash
# .env.example

# Server
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:5173

# Database
MONGODB_URI=mongodb+srv://...
REDIS_URL=redis://...

# Auth
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES=7d

# File Storage
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# AI Services
OPENAI_API_KEY=sk-...
GOOGLE_CLOUD_API_KEY=...
PINECONE_API_KEY=...
PINECONE_INDEX=pdf-embeddings

# System tools paths (auto-detected on Linux)
GHOSTSCRIPT_PATH=/usr/bin/gs
LIBREOFFICE_PATH=/usr/bin/libreoffice
TESSERACT_PATH=/usr/bin/tesseract
CHROMIUM_PATH=/usr/bin/chromium-browser

# Rate Limiting
FREE_TIER_HOURLY_LIMIT=10
MAX_FILE_SIZE_MB=100

# Cleanup
FILE_EXPIRY_HOURS=1
CLEANUP_INTERVAL_MINUTES=15
```

---

## 📊 ADMIN PANEL — TOOLS SECTION

The admin panel (hidden from normal users) shows:

### Tools Dashboard
```
┌─────────────────────────────────────────────────┐
│  TOOLS ANALYTICS                                │
│                                                 │
│  Most Used Tools (Today / Week / Month)         │
│  [Bar chart — Recharts]                         │
│                                                 │
│  Processing Queue Status                        │
│  [BullMQ board integration]                     │
│  Active: 3 | Waiting: 12 | Completed: 1,429     │
│                                                 │
│  Error Rate: 0.3% ↓ (better than yesterday)    │
│                                                 │
│  Avg Processing Time: 2.3s                      │
│  Storage Used: 14.2GB / 100GB                   │
└─────────────────────────────────────────────────┘
```

### Tool Management
```
- Enable/disable any tool (toggle switch)
- Set per-tool file size limits
- View error logs per tool
- Monitor real-time jobs in queue
- Force-cleanup temp files
- AI API cost tracking (per tool)
```

---

## 📱 RESPONSIVE DESIGN BREAKPOINTS

```css
/* Mobile First Approach */

/* Base: Mobile (< 640px) */
.tools-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
.tool-card { padding: 16px; }
.tool-card__icon { width: 36px; height: 36px; }
.tool-card__title { font-size: 13px; }

/* Small tablet (640px+) */
@media (min-width: 640px) {
  .tools-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .tools-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .tool-card { padding: 20px; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .tools-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
}

/* Large (1280px+) */
@media (min-width: 1280px) {
  .tools-grid { grid-template-columns: repeat(5, 1fr); gap: 24px; }
  .tools-container { max-width: 1440px; margin: 0 auto; }
}
```

---

## ⚡ PERFORMANCE OPTIMIZATION

### Frontend
```javascript
// 1. Code splitting — each tool is a lazy chunk
const MergePDF = React.lazy(() => import('./tools/merge-pdf/MergePDF'));
const CompressPDF = React.lazy(() => import('./tools/compress-pdf/CompressPDF'));

// 2. Tool card images — lazy load with IntersectionObserver
<img loading="lazy" decoding="async" src={tool.icon} />

// 3. Virtual list for tools grid (if 100+ tools)
import { useVirtualizer } from '@tanstack/react-virtual';

// 4. GSAP: only animate visible elements
// Use ScrollTrigger.batch for performance

// 5. Three.js: use InstancedMesh for particles
// Reduce polygon count for mobile

// 6. Service Worker: cache tool pages
// Users revisiting /tools/merge-pdf get instant load
```

### Backend
```javascript
// 1. Worker threads for CPU-intensive processing
import { Worker, isMainThread, workerData } from 'worker_threads';

// 2. Stream large files — don't load entire file in memory
// Use Node.js streams with pdf-lib

// 3. Redis cache for frequently accessed tool metadata

// 4. BullMQ concurrency config
const worker = new Worker('pdf-processor', processor, {
  concurrency: 5,    // Process 5 PDFs simultaneously
  limiter: { max: 10, duration: 1000 }  // Max 10 jobs/second
});
```

---

## 🎨 DESIGN TOKENS

```css
:root {
  /* Brand Colors */
  --color-primary: #6366f1;       /* Indigo */
  --color-primary-dark: #4f46e5;
  --color-secondary: #8b5cf6;     /* Purple */
  --color-accent: #ec4899;        /* Pink */
  --color-success: #10b981;       /* Green */
  --color-warning: #f59e0b;       /* Amber */
  --color-error: #ef4444;         /* Red */
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  --gradient-card: linear-gradient(145deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05));
  --gradient-glow: radial-gradient(circle at 50% 50%, rgba(99,102,241,0.3), transparent 70%);
  
  /* Backgrounds */
  --bg-primary: #0a0a0f;          /* Almost black */
  --bg-secondary: #111118;
  --bg-card: #16161f;
  --bg-card-hover: #1c1c28;
  --bg-border: rgba(255,255,255,0.06);
  
  /* Typography */
  --font-primary: 'Inter', 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  
  /* Border radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-card: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-glow-primary: 0 0 20px rgba(99,102,241,0.3);
  --shadow-glow-hover: 0 0 40px rgba(99,102,241,0.5);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 📦 PACKAGE.JSON — FRONTEND

```json
{
  "name": "ishu-fun-tools-frontend",
  "version": "5.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .jsx,.js",
    "format": "prettier --write src"
  },
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.26.0",
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1",
    "framer-motion": "^11.3.0",
    "three": "^0.167.0",
    "@react-three/fiber": "^8.17.5",
    "@react-three/drei": "^9.109.0",
    "animejs": "^3.2.2",
    "@react-spring/web": "^9.7.3",
    "lottie-react": "^2.4.0",
    "@tsparticles/react": "^3.0.0",
    "@tsparticles/engine": "^3.5.0",
    "locomotive-scroll": "^4.1.4",
    "@studio-freight/lenis": "^1.1.13",
    "react-intersection-observer": "^9.13.1",
    "react-dropzone": "^14.2.3",
    "react-pdf": "^9.1.1",
    "pdfjs-dist": "^4.4.168",
    "axios": "^1.7.3",
    "@tanstack/react-query": "^5.52.0",
    "zustand": "^4.5.4",
    "jotai": "^2.9.1",
    "@dnd-kit/core": "^6.1.0",
    "@dnd-kit/sortable": "^8.0.0",
    "fuse.js": "^7.0.0",
    "@tanstack/react-virtual": "^3.10.0",
    "sonner": "^1.5.0",
    "nprogress": "^0.2.0",
    "react-loading-skeleton": "^3.4.0",
    "react-hook-form": "^7.53.0",
    "zod": "^3.23.8",
    "@hookform/resolvers": "^3.9.0",
    "react-helmet-async": "^2.0.5",
    "file-saver": "^2.0.5",
    "socket.io-client": "^4.7.5",
    "clsx": "^2.1.1",
    "class-variance-authority": "^0.7.0",
    "tailwind-merge": "^2.5.2",
    "@phosphor-icons/react": "^2.1.7",
    "lucide-react": "^0.436.0",
    "countup.js": "^2.8.0",
    "react-countup": "^6.5.3",
    "vanta": "^0.5.24",
    "barba": "^2.10.3"
  },
  "devDependencies": {
    "vite": "^5.4.0",
    "@vitejs/plugin-react": "^4.3.1",
    "tailwindcss": "^3.4.10",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.41",
    "eslint": "^9.9.0",
    "prettier": "^3.3.3"
  }
}
```

---

## 📦 PACKAGE.JSON — BACKEND

```json
{
  "name": "ishu-fun-tools-backend",
  "version": "5.0.0",
  "scripts": {
    "dev": "nodemon src/app.js",
    "start": "node src/app.js",
    "worker": "node src/workers/pdf.worker.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "compression": "^1.7.4",
    "morgan": "^1.10.0",
    "winston": "^3.13.0",
    "dotenv": "^16.4.5",
    "mongoose": "^8.5.4",
    "ioredis": "^5.4.1",
    "bullmq": "^5.12.0",
    "socket.io": "^4.7.5",
    "multer": "^1.4.5-lts.1",
    "multer-s3": "^3.0.1",
    "@aws-sdk/client-s3": "^3.637.0",
    "cloudinary": "^2.4.0",
    "pdf-lib": "^1.17.1",
    "@pdf-lib/fontkit": "^1.1.1",
    "pdf-parse": "^1.1.1",
    "pdf2json": "^3.1.0",
    "pdfmake": "^0.2.10",
    "puppeteer": "^23.1.0",
    "sharp": "^0.33.4",
    "jimp": "^1.3.0",
    "xlsx": "^0.18.5",
    "mammoth": "^1.8.0",
    "node-tesseract-ocr": "^2.2.1",
    "node-qpdf2": "^3.0.0",
    "libreoffice-convert": "^1.6.0",
    "archiver": "^7.0.1",
    "unzipper": "^0.12.3",
    "file-type": "^19.4.1",
    "uuid": "^10.0.0",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "express-rate-limit": "^7.4.0",
    "express-validator": "^7.2.0",
    "node-cron": "^3.0.3",
    "openai": "^4.56.0",
    "@google-cloud/vision": "^4.3.2",
    "langchain": "^0.3.1",
    "@pinecone-database/pinecone": "^3.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}
```

---

## 🧑‍💻 DEVELOPER QUICK START GUIDE

```bash
# 1. Clone repository
git clone https://github.com/your-username/ishu.fun.git
cd ishu.fun

# 2. Setup Frontend
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your values
npm run dev
# Frontend: http://localhost:5173

# 3. Setup Backend
cd ../backend
npm install
cp .env.example .env
# Edit .env with MongoDB, Redis, API keys
npm run dev
# Backend: http://localhost:3000

# 4. Install System Dependencies (Ubuntu/Debian)
sudo apt-get update
sudo apt-get install -y ghostscript libreoffice tesseract-ocr poppler-utils \
  imagemagick calibre pandoc chromium-browser djvulibre-bin

# 5. Start MongoDB (local)
mongod --dbpath /data/db

# 6. Start Redis (local)
redis-server

# 7. Build for Production
cd frontend && npm run build
# Deploy dist/ to Vercel

cd backend
# Deploy to Render (push to main branch)
```

---

## ✅ DEVELOPER CHECKLIST

### Frontend
- [ ] Tools landing page with hero, search, filter, grid
- [ ] All 100+ tool cards with proper icons
- [ ] Filter by category with GSAP Flip animation
- [ ] Fuzzy search with Fuse.js
- [ ] Individual tool page template (reusable)
- [ ] File dropzone with all states (drop, upload, process, done, error)
- [ ] Real-time progress via Socket.io
- [ ] Post-processing download section
- [ ] Related tools carousel
- [ ] FAQ section per tool with Schema.org markup
- [ ] How it works section (animated steps)
- [ ] Three.js background on tools landing
- [ ] Smooth scroll (Lenis)
- [ ] Page transitions (Barba.js / Framer Motion)
- [ ] Responsive on all breakpoints (320px to 2560px)
- [ ] Dark theme (default) with optional light theme
- [ ] SEO meta tags per page (React Helmet Async)
- [ ] Lazy loading for all tool pages
- [ ] Loading skeleton states
- [ ] Toast notifications (Sonner)
- [ ] Magnetic hover effect on cards
- [ ] Stats counter (count-up animation)
- [ ] Workflow builder UI
- [ ] Google Drive / Dropbox integration UI

### Backend
- [ ] Express server with all middleware
- [ ] File upload endpoint (Multer)
- [ ] All PDF processing routes implemented
- [ ] All conversion routes implemented
- [ ] AI routes (translate, summarize, chat)
- [ ] Socket.io real-time progress
- [ ] BullMQ job queue
- [ ] MongoDB connected with all models
- [ ] Redis connected
- [ ] JWT auth middleware
- [ ] Rate limiting per route
- [ ] File validation (magic bytes)
- [ ] Auto-cleanup (1 hour expiry)
- [ ] Error handling middleware
- [ ] Logging (Winston)
- [ ] Health check endpoint (`GET /health`)
- [ ] Cloudinary integration
- [ ] OpenAI integration
- [ ] All system tools installed (GS, LibreOffice, Tesseract, etc.)

### Deployment
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Render (with persistent disk)
- [ ] MongoDB Atlas configured
- [ ] Redis (Upstash) configured
- [ ] All environment variables set
- [ ] Custom domain: ishu.fun → Vercel
- [ ] API domain: api.ishu.fun → Render
- [ ] SSL certificates active
- [ ] CI/CD: GitHub Actions pipeline

---

*Document version: 5.0 | Created for ishu.fun Tools Page | Full-stack blueprint*
*Total tools covered: 100+ | All routes defined | All backend libraries specified*
*Ready for implementation by any developer*
