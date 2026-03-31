# 🛠️ TOOLS PAGE — ULTRA COMPLETE TECHNICAL BLUEPRINT V5
## Website: ishu.fun | Document Version: 5.0 ULTIMATE
## Status: World-Class Production-Ready Specification
## Author Role: Senior Architect + Lead Developer + UI/UX Director

---

> ### 🧠 DEVELOPER PERSONA — READ BEFORE STARTING
> You are the world's best full-stack engineer. You have worked at Apple, Vercel, Stripe, Linear, and Framer.
> You build with pixel-perfect precision. Every animation is buttery smooth (60fps).
> Every backend call is optimized. Every file is clean and readable.
> You draw inspiration from: **ilovepdf.com, smallpdf.com, Adobe Acrobat Online, Vercel Dashboard,
> Linear App, Framer.com, Stripe Docs, Apple.com, Notion, Figma, Loom, Raycast, Arc Browser,
> Superhuman, Craft.do, Cron Calendar, Pitch.com, Read.cv, Basement Studio, Awwwards winners**.
> No placeholder UI. No fake tools. Everything must WORK in production.
> Lag-free. Smooth. Stunning. World-class.

---

## 📐 ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────────────┐
│                        ishu.fun / TOOLS                             │
│                                                                     │
│  ┌─────────────────┐    ┌──────────────────┐    ┌───────────────┐  │
│  │   FRONTEND      │    │   BACKEND API    │    │   DATABASES   │  │
│  │  React + Vite   │◄──►│  Node + Express  │◄──►│  MongoDB      │  │
│  │  GSAP + Three   │    │  + BullMQ Worker  │    │  Redis        │  │
│  │  Framer Motion  │    │  + Socket.io     │    │  Cloudinary   │  │
│  └─────────────────┘    └──────────────────┘    └───────────────┘  │
│         │                        │                                  │
│         ▼                        ▼                                  │
│  ┌─────────────┐        ┌─────────────────┐                        │
│  │  Vercel CDN │        │  Render + Docker │                       │
│  │  Edge Cache │        │  Persistent Disk │                       │
│  └─────────────┘        └─────────────────┘                        │
└─────────────────────────────────────────────────────────────────────┘
```

### Technology Decision Rationale
| Decision | Choice | Why |
|---|---|---|
| Frontend Framework | React 18 + Vite 5 | Fastest HMR, RSC-ready, ecosystem |
| Styling | Tailwind CSS + CSS Modules | Utility speed + scoped styles |
| Animation | GSAP + Framer Motion | GSAP for timeline, Framer for React gestures |
| 3D | Three.js + R3F | Best 3D web library, React bindings |
| State | Zustand + React Query | Lightweight + server state separation |
| Backend | Node.js + Express | Non-blocking I/O perfect for file processing |
| Queue | BullMQ + Redis | Heavy PDF jobs need background processing |
| DB | MongoDB Atlas | Flexible schema for diverse tool configs |
| Deploy Frontend | Vercel | Zero-config, Edge CDN, instant rollbacks |
| Deploy Backend | Render | Docker support, persistent disk, env vars |

---

## 📁 COMPLETE FOLDER & FILE STRUCTURE

```
ishu.fun-tools/
│
├── 📁 frontend/                          ← React + Vite application
│   │
│   ├── 📁 public/
│   │   ├── 📁 fonts/
│   │   │   ├── Inter-Variable.woff2          # Primary font (variable)
│   │   │   ├── PlusJakartaSans-Variable.woff2 # Headings font
│   │   │   └── GeistMono-Variable.woff2      # Code / mono font
│   │   ├── 📁 icons/
│   │   │   ├── 📁 tools/                     # SVG icons per tool (NOT AI-generated)
│   │   │   │   ├── merge-pdf.svg             # Hand-crafted SVG icon
│   │   │   │   ├── split-pdf.svg
│   │   │   │   ├── compress-pdf.svg
│   │   │   │   └── ... (one per tool)
│   │   │   └── 📁 ui/                        # UI icons (Phosphor source SVGs)
│   │   ├── 📁 animations/
│   │   │   ├── 📁 lottie/
│   │   │   │   ├── upload-success.json       # Checkmark animation
│   │   │   │   ├── file-processing.json      # Spinning/processing
│   │   │   │   ├── file-upload.json          # Upload arrow animation
│   │   │   │   ├── error-shake.json          # Error state
│   │   │   │   └── download-ready.json       # Download bounce
│   │   │   └── 📁 spline/
│   │   │       └── tools-hero-3d.splinecode   # 3D hero object
│   │   ├── 📁 images/
│   │   │   ├── 📁 og/                        # Open Graph images per tool
│   │   │   │   ├── tools-hub.png             # 1200x630 OG for /tools
│   │   │   │   ├── merge-pdf.png             # 1200x630 OG per tool
│   │   │   │   └── ... (one per tool)
│   │   │   ├── 📁 screenshots/               # Tool UI screenshots
│   │   │   ├── hero-bg-grid.svg              # Dot grid pattern
│   │   │   └── noise-texture.png             # Grain overlay texture
│   │   └── manifest.webmanifest
│   │
│   ├── 📁 src/
│   │   │
│   │   ├── 📁 pages/
│   │   │   └── 📁 tools/
│   │   │       │
│   │   │       ├── 📄 ToolsHub.jsx            # /tools — Main listing page
│   │   │       ├── 📄 ToolsHub.module.css     # Hub-specific styles
│   │   │       │
│   │   │       ├── 📄 ToolPageTemplate.jsx    # Shared template for all tool pages
│   │   │       ├── 📄 ToolPageTemplate.module.css
│   │   │       │
│   │   │       ├── 📁 pdf-core/               # ── CATEGORY: Core PDF Tools ──
│   │   │       │   ├── 📁 merge-pdf/
│   │   │       │   │   ├── MergePDF.jsx       # Page component
│   │   │       │   │   ├── MergePDF.module.css
│   │   │       │   │   ├── MergePDF.meta.js   # SEO meta, FAQ data, schema
│   │   │       │   │   └── MergePDF.test.jsx  # Unit tests
│   │   │       │   ├── 📁 split-pdf/
│   │   │       │   │   ├── SplitPDF.jsx
│   │   │       │   │   ├── SplitPDF.module.css
│   │   │       │   │   └── SplitPDF.meta.js
│   │   │       │   ├── 📁 compress-pdf/
│   │   │       │   ├── 📁 organize-pdf/
│   │   │       │   ├── 📁 rotate-pdf/
│   │   │       │   ├── 📁 crop-pdf/
│   │   │       │   ├── 📁 repair-pdf/
│   │   │       │   ├── 📁 page-numbers/
│   │   │       │   ├── 📁 header-footer/
│   │   │       │   ├── 📁 watermark-pdf/
│   │   │       │   ├── 📁 redact-pdf/
│   │   │       │   ├── 📁 whiteout-pdf/
│   │   │       │   ├── 📁 grayscale-pdf/
│   │   │       │   ├── 📁 flatten-pdf/
│   │   │       │   ├── 📁 resize-pages/
│   │   │       │   └── 📁 create-pdf/
│   │   │       │
│   │   │       ├── 📁 pdf-security/           # ── CATEGORY: Security ──
│   │   │       │   ├── 📁 protect-pdf/
│   │   │       │   ├── 📁 unlock-pdf/
│   │   │       │   ├── 📁 sign-pdf/
│   │   │       │   └── 📁 remove-metadata/
│   │   │       │
│   │   │       ├── 📁 pdf-to-office/          # ── CATEGORY: PDF → Office ──
│   │   │       │   ├── 📁 pdf-to-word/
│   │   │       │   ├── 📁 pdf-to-powerpoint/
│   │   │       │   ├── 📁 pdf-to-excel/
│   │   │       │   └── 📁 pdf-to-csv/
│   │   │       │
│   │   │       ├── 📁 office-to-pdf/          # ── CATEGORY: Office → PDF ──
│   │   │       │   ├── 📁 word-to-pdf/
│   │   │       │   ├── 📁 excel-to-pdf/
│   │   │       │   ├── 📁 powerpoint-to-pdf/
│   │   │       │   ├── 📁 csv-to-pdf/
│   │   │       │   ├── 📁 html-to-pdf/
│   │   │       │   ├── 📁 url-to-pdf/
│   │   │       │   ├── 📁 md-to-pdf/
│   │   │       │   ├── 📁 txt-to-pdf/
│   │   │       │   ├── 📁 rtf-to-pdf/
│   │   │       │   ├── 📁 odt-to-pdf/
│   │   │       │   └── 📁 xml-to-pdf/
│   │   │       │
│   │   │       ├── 📁 pdf-to-image/           # ── CATEGORY: PDF ↔ Image ──
│   │   │       │   ├── 📁 pdf-to-jpg/
│   │   │       │   ├── 📁 pdf-to-png/
│   │   │       │   ├── 📁 pdf-to-svg/
│   │   │       │   ├── 📁 pdf-to-gif/
│   │   │       │   ├── 📁 pdf-to-bmp/
│   │   │       │   ├── 📁 pdf-to-tiff/
│   │   │       │   ├── 📁 jpg-to-pdf/
│   │   │       │   ├── 📁 png-to-pdf/
│   │   │       │   ├── 📁 svg-to-pdf/
│   │   │       │   ├── 📁 gif-to-pdf/
│   │   │       │   ├── 📁 bmp-to-pdf/
│   │   │       │   ├── 📁 tiff-to-pdf/
│   │   │       │   ├── 📁 heic-to-pdf/
│   │   │       │   ├── 📁 heif-to-pdf/
│   │   │       │   ├── 📁 webp-to-pdf/
│   │   │       │   ├── 📁 jfif-to-pdf/
│   │   │       │   ├── 📁 image-to-pdf/
│   │   │       │   └── 📁 pdf-to-image/
│   │   │       │
│   │   │       ├── 📁 pdf-ebook/              # ── CATEGORY: eBook ──
│   │   │       │   ├── 📁 epub-to-pdf/
│   │   │       │   ├── 📁 pdf-to-epub/
│   │   │       │   ├── 📁 mobi-to-pdf/
│   │   │       │   ├── 📁 pdf-to-mobi/
│   │   │       │   ├── 📁 ebook-to-pdf/
│   │   │       │   ├── 📁 fb2-to-pdf/
│   │   │       │   ├── 📁 cbz-to-pdf/
│   │   │       │   └── 📁 cbr-to-pdf/
│   │   │       │
│   │   │       ├── 📁 pdf-specialized/        # ── CATEGORY: Specialized ──
│   │   │       │   ├── 📁 dwg-to-pdf/
│   │   │       │   ├── 📁 pub-to-pdf/
│   │   │       │   ├── 📁 xps-to-pdf/
│   │   │       │   ├── 📁 djvu-to-pdf/
│   │   │       │   ├── 📁 pages-to-pdf/
│   │   │       │   ├── 📁 hwp-to-pdf/
│   │   │       │   ├── 📁 chm-to-pdf/
│   │   │       │   ├── 📁 wps-to-pdf/
│   │   │       │   ├── 📁 eml-to-pdf/
│   │   │       │   ├── 📁 zip-to-pdf/
│   │   │       │   ├── 📁 ai-to-pdf/
│   │   │       │   └── 📁 dxf-to-pdf/
│   │   │       │
│   │   │       ├── 📁 pdf-extract/            # ── CATEGORY: Extract ──
│   │   │       │   ├── 📁 extract-pages/
│   │   │       │   ├── 📁 extract-text/
│   │   │       │   └── 📁 extract-images/
│   │   │       │
│   │   │       ├── 📁 pdf-edit-advanced/      # ── CATEGORY: Advanced Edit ──
│   │   │       │   ├── 📁 edit-pdf/
│   │   │       │   ├── 📁 edit-pdf-text/
│   │   │       │   ├── 📁 add-image-to-pdf/
│   │   │       │   ├── 📁 annotate-pdf/
│   │   │       │   ├── 📁 highlight-pdf/
│   │   │       │   ├── 📁 compare-pdf/
│   │   │       │   ├── 📁 pdf-to-pdfa/
│   │   │       │   ├── 📁 pdf-filler/
│   │   │       │   └── 📁 pdf-viewer/
│   │   │       │
│   │   │       └── 📁 pdf-ai/                 # ── CATEGORY: AI Tools ──
│   │   │           ├── 📁 translate-pdf/
│   │   │           ├── 📁 summarize-pdf/
│   │   │           ├── 📁 chat-with-pdf/
│   │   │           ├── 📁 ocr-pdf/
│   │   │           └── 📁 scan-to-pdf/
│   │   │
│   │   ├── 📁 components/
│   │   │   │
│   │   │   ├── 📁 tools-hub/                  # Components for /tools listing page
│   │   │   │   ├── HeroSection.jsx            # Animated hero with 3D bg
│   │   │   │   ├── HeroSection.module.css
│   │   │   │   ├── SearchBar.jsx              # Fuse.js powered smart search
│   │   │   │   ├── SearchBar.module.css
│   │   │   │   ├── CategoryFilter.jsx         # Sticky filter tabs
│   │   │   │   ├── CategoryFilter.module.css
│   │   │   │   ├── ToolsGrid.jsx              # Main grid with GSAP Flip
│   │   │   │   ├── ToolsGrid.module.css
│   │   │   │   ├── ToolCard.jsx               # Individual animated card
│   │   │   │   ├── ToolCard.module.css
│   │   │   │   ├── FeaturedTools.jsx          # Highlighted top tools row
│   │   │   │   ├── StatsBar.jsx               # Animated counter stats
│   │   │   │   ├── TrustSection.jsx           # Security/trust badges
│   │   │   │   └── WorkflowPromo.jsx          # Workflow builder promo
│   │   │   │
│   │   │   ├── 📁 tool-page/                  # Shared components for each tool page
│   │   │   │   ├── ToolHero.jsx               # Per-tool hero
│   │   │   │   ├── ToolHero.module.css
│   │   │   │   ├── FileDropzone.jsx           # Drag & drop upload zone
│   │   │   │   ├── FileDropzone.module.css
│   │   │   │   ├── FilePreviewCard.jsx        # Uploaded file thumbnail
│   │   │   │   ├── FileList.jsx               # Sortable list (dnd-kit)
│   │   │   │   ├── ToolOptionsPanel.jsx       # Tool-specific config UI
│   │   │   │   ├── ProcessButton.jsx          # CTA + loading morph button
│   │   │   │   ├── ProgressTracker.jsx        # Socket.io real-time progress
│   │   │   │   ├── DownloadSection.jsx        # Result download UI
│   │   │   │   ├── HowItWorks.jsx             # 3-step animated guide
│   │   │   │   ├── ToolFeatures.jsx           # Feature grid (6 cards)
│   │   │   │   ├── RelatedTools.jsx           # Carousel of related tools
│   │   │   │   ├── ToolFAQ.jsx                # Accordion FAQ + schema
│   │   │   │   ├── ToolStats.jsx              # Social proof numbers
│   │   │   │   └── ToolBreadcrumb.jsx         # Breadcrumb navigation
│   │   │   │
│   │   │   ├── 📁 ui/                         # Reusable design system components
│   │   │   │   ├── Button.jsx                 # Primary/secondary/ghost/icon variants
│   │   │   │   ├── Badge.jsx                  # New / Popular / Hot / AI badges
│   │   │   │   ├── Tooltip.jsx                # Radix UI tooltip
│   │   │   │   ├── Modal.jsx                  # Framer Motion modal
│   │   │   │   ├── Sheet.jsx                  # Slide-in side panel
│   │   │   │   ├── Toast.jsx                  # Sonner toast wrapper
│   │   │   │   ├── Skeleton.jsx               # Loading skeleton
│   │   │   │   ├── Spinner.jsx                # Loading spinner variants
│   │   │   │   ├── GlowCard.jsx               # Card with gradient glow border
│   │   │   │   ├── MagneticButton.jsx         # Mouse-tracking magnetic button
│   │   │   │   ├── GradientText.jsx           # Animated gradient text
│   │   │   │   ├── AnimatedNumber.jsx         # CountUp number component
│   │   │   │   ├── CursorGlow.jsx             # Custom cursor with glow trail
│   │   │   │   ├── ParticleField.jsx          # tsParticles background
│   │   │   │   ├── GridPattern.jsx            # SVG dot grid overlay
│   │   │   │   ├── NoiseBg.jsx                # Grain texture overlay
│   │   │   │   ├── ScrollProgress.jsx         # Top scroll indicator bar
│   │   │   │   ├── BackToTop.jsx              # Smooth scroll-to-top button
│   │   │   │   ├── ProgressBar.jsx            # Horizontal progress bar
│   │   │   │   ├── CircularProgress.jsx       # Circular progress for upload
│   │   │   │   ├── FileIcon.jsx               # Dynamic file type icon
│   │   │   │   ├── RangeSlider.jsx            # Custom styled range input
│   │   │   │   ├── Toggle.jsx                 # Animated toggle switch
│   │   │   │   ├── ColorPicker.jsx            # Mini color picker (watermark)
│   │   │   │   ├── Select.jsx                 # Radix Select with animations
│   │   │   │   ├── Input.jsx                  # Animated input field
│   │   │   │   └── Divider.jsx                # Gradient divider line
│   │   │   │
│   │   │   └── 📁 layout/
│   │   │       ├── Navbar.jsx                 # Sticky navbar with tools mega menu
│   │   │       ├── Navbar.module.css
│   │   │       ├── Footer.jsx                 # Comprehensive footer
│   │   │       ├── Footer.module.css
│   │   │       └── PageWrapper.jsx            # Lenis + Barba page wrapper
│   │   │
│   │   ├── 📁 hooks/
│   │   │   ├── useFileUpload.js               # Upload logic with progress
│   │   │   ├── useToolProcess.js              # API call + socket listener
│   │   │   ├── useGSAP.js                     # GSAP context wrapper
│   │   │   ├── useLenis.js                    # Smooth scroll hook
│   │   │   ├── useMagnetic.js                 # Magnetic hover effect
│   │   │   ├── useParallax.js                 # Parallax scroll hook
│   │   │   ├── useInView.js                   # IntersectionObserver hook
│   │   │   ├── useToolSearch.js               # Fuse.js search logic
│   │   │   ├── useCountUp.js                  # Number count-up animation
│   │   │   ├── useCursorPosition.js           # Track mouse for glow effects
│   │   │   ├── useLocalStorage.js             # Persist tool preferences
│   │   │   ├── useClipboard.js                # Copy link to clipboard
│   │   │   ├── useFileValidation.js           # Client-side file checks
│   │   │   ├── useSocket.js                   # Socket.io connection hook
│   │   │   └── useMediaQuery.js               # Responsive breakpoint hook
│   │   │
│   │   ├── 📁 store/
│   │   │   ├── toolStore.js                   # Zustand: tool filter/search state
│   │   │   ├── uploadStore.js                 # Zustand: upload/processing state
│   │   │   ├── uiStore.js                     # Zustand: modal, theme, cursor state
│   │   │   └── userStore.js                   # Zustand: auth/user state
│   │   │
│   │   ├── 📁 services/
│   │   │   ├── api.js                         # Axios instance with interceptors
│   │   │   ├── toolsApi.js                    # All tool API calls
│   │   │   ├── socketService.js               # Socket.io client service
│   │   │   ├── storageService.js              # Cloud storage integration
│   │   │   └── analyticsService.js            # Usage tracking
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── fileHelpers.js                 # Format size, get extension, etc.
│   │   │   ├── toolData.js                    # ALL 100+ tools metadata array
│   │   │   ├── toolCategories.js              # Category definitions
│   │   │   ├── seoHelpers.js                  # Meta tag generators
│   │   │   ├── animationHelpers.js            # Reusable GSAP configs
│   │   │   ├── constants.js                   # App-wide constants
│   │   │   └── validators.js                  # Input validation functions
│   │   │
│   │   ├── 📁 data/
│   │   │   ├── tools.data.js                  # Master tools array (100+ entries)
│   │   │   ├── categories.data.js             # 12 category definitions
│   │   │   ├── faqs.data.js                   # FAQ per tool
│   │   │   └── features.data.js               # Feature list per tool
│   │   │
│   │   ├── 📁 styles/
│   │   │   ├── globals.css                    # CSS reset + global base
│   │   │   ├── variables.css                  # Design tokens (see section below)
│   │   │   ├── typography.css                 # Font face + type scale
│   │   │   ├── animations.css                 # Keyframe animations library
│   │   │   └── utilities.css                  # Extra utility classes
│   │   │
│   │   ├── 📁 lib/
│   │   │   ├── gsap.js                        # GSAP init + plugin register
│   │   │   ├── three.js                       # Three.js scene setup
│   │   │   ├── lenis.js                       # Lenis init
│   │   │   └── barba.js                       # Barba page transitions
│   │   │
│   │   ├── App.jsx                            # Root app + router
│   │   ├── main.jsx                           # Vite entry point
│   │   └── router.jsx                         # All route definitions
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .eslintrc.cjs
│   └── package.json
│
├── 📁 backend/                            ← Node.js + Express API
│   │
│   ├── 📁 src/
│   │   │
│   │   ├── 📁 routes/
│   │   │   ├── 📁 tools/
│   │   │   │   ├── pdf.routes.js              # Core PDF operations
│   │   │   │   ├── convert.routes.js          # All conversion routes
│   │   │   │   ├── ai.routes.js               # AI-powered tools
│   │   │   │   ├── extract.routes.js          # Extract operations
│   │   │   │   └── workflow.routes.js         # Workflow automation
│   │   │   ├── upload.routes.js               # File upload endpoint
│   │   │   ├── download.routes.js             # Signed download URLs
│   │   │   ├── auth.routes.js                 # Login/register
│   │   │   ├── user.routes.js                 # User profile/settings
│   │   │   └── admin.routes.js                # Admin dashboard data
│   │   │
│   │   ├── 📁 controllers/
│   │   │   ├── 📁 pdf/                        # One controller per tool group
│   │   │   │   ├── corePDF.controller.js      # Merge, split, rotate, crop
│   │   │   │   ├── editPDF.controller.js      # Edit, annotate, watermark
│   │   │   │   ├── securityPDF.controller.js  # Protect, unlock, sign
│   │   │   │   ├── organizePDF.controller.js  # Organize, extract, page numbers
│   │   │   │   └── repairPDF.controller.js    # Repair, flatten, grayscale
│   │   │   ├── 📁 convert/
│   │   │   │   ├── toOffice.controller.js     # PDF → Word/Excel/PPT
│   │   │   │   ├── fromOffice.controller.js   # Word/Excel/PPT → PDF
│   │   │   │   ├── toImage.controller.js      # PDF → JPG/PNG/SVG/GIF
│   │   │   │   ├── fromImage.controller.js    # JPG/PNG/HEIC → PDF
│   │   │   │   ├── ebook.controller.js        # EPUB/MOBI/CBZ conversions
│   │   │   │   ├── web.controller.js          # HTML/URL → PDF
│   │   │   │   └── specialized.controller.js  # DWG/XPS/CHM/EML → PDF
│   │   │   ├── 📁 ai/
│   │   │   │   ├── translate.controller.js    # Multilingual translation
│   │   │   │   ├── summarize.controller.js    # AI summarization
│   │   │   │   ├── chat.controller.js         # Chat with PDF (RAG)
│   │   │   │   └── ocr.controller.js          # OCR + Scan to PDF
│   │   │   ├── auth.controller.js
│   │   │   ├── user.controller.js
│   │   │   └── admin.controller.js
│   │   │
│   │   ├── 📁 workers/                        # BullMQ background workers
│   │   │   ├── pdf.worker.js                  # Main PDF processing worker
│   │   │   ├── convert.worker.js              # File conversion worker
│   │   │   ├── ai.worker.js                   # AI tasks worker (slow ops)
│   │   │   └── cleanup.worker.js              # Auto-delete expired files
│   │   │
│   │   ├── 📁 queues/
│   │   │   ├── pdfQueue.js                    # BullMQ queue definitions
│   │   │   ├── convertQueue.js
│   │   │   ├── aiQueue.js
│   │   │   └── cleanupQueue.js
│   │   │
│   │   ├── 📁 services/
│   │   │   ├── 📁 pdf/
│   │   │   │   ├── merge.service.js
│   │   │   │   ├── split.service.js
│   │   │   │   ├── compress.service.js        # Ghostscript-powered
│   │   │   │   ├── rotate.service.js
│   │   │   │   ├── crop.service.js
│   │   │   │   ├── watermark.service.js
│   │   │   │   ├── protect.service.js         # qpdf encryption
│   │   │   │   ├── unlock.service.js
│   │   │   │   ├── sign.service.js
│   │   │   │   ├── repair.service.js
│   │   │   │   ├── organize.service.js
│   │   │   │   ├── annotate.service.js
│   │   │   │   ├── compare.service.js
│   │   │   │   └── redact.service.js
│   │   │   ├── 📁 convert/
│   │   │   │   ├── libreoffice.service.js     # LibreOffice CLI wrapper
│   │   │   │   ├── puppeteer.service.js       # Headless Chrome PDF gen
│   │   │   │   ├── sharp.service.js           # Image processing
│   │   │   │   ├── imagemagick.service.js     # Advanced image ops
│   │   │   │   ├── ghostscript.service.js     # GS CLI wrapper
│   │   │   │   ├── calibre.service.js         # eBook conversion
│   │   │   │   ├── pandoc.service.js          # Document conversion
│   │   │   │   └── poppler.service.js         # PDF → image via poppler
│   │   │   ├── 📁 ai/
│   │   │   │   ├── openai.service.js          # OpenAI API wrapper
│   │   │   │   ├── langchain.service.js       # LangChain RAG setup
│   │   │   │   ├── pinecone.service.js        # Vector DB operations
│   │   │   │   ├── tesseract.service.js       # OCR processing
│   │   │   │   └── googleVision.service.js    # Google Cloud Vision
│   │   │   ├── storage.service.js             # Cloudinary + S3
│   │   │   ├── socket.service.js              # Socket.io emit helpers
│   │   │   └── cleanup.service.js             # File expiry + deletion
│   │   │
│   │   ├── 📁 middleware/
│   │   │   ├── auth.middleware.js             # JWT verification
│   │   │   ├── rateLimit.middleware.js        # IP-based rate limiting
│   │   │   ├── fileValidation.middleware.js   # Magic bytes check
│   │   │   ├── fileSize.middleware.js         # Per-tool size limits
│   │   │   ├── errorHandler.middleware.js     # Global error handler
│   │   │   ├── logger.middleware.js           # Winston request logger
│   │   │   ├── cors.middleware.js             # CORS config
│   │   │   └── securityHeaders.middleware.js  # Helmet custom config
│   │   │
│   │   ├── 📁 models/
│   │   │   ├── User.model.js                  # User schema
│   │   │   ├── ToolUsage.model.js             # Analytics per tool use
│   │   │   ├── ProcessedFile.model.js         # Temp file tracking
│   │   │   ├── Workflow.model.js              # Saved workflow chains
│   │   │   └── AdminLog.model.js              # Admin action logs
│   │   │
│   │   ├── 📁 config/
│   │   │   ├── database.js                    # MongoDB Atlas connection
│   │   │   ├── redis.js                       # Redis/Upstash connection
│   │   │   ├── cloudinary.js                  # Cloudinary SDK init
│   │   │   ├── aws.js                         # S3/R2 config
│   │   │   ├── openai.js                      # OpenAI SDK init
│   │   │   ├── socket.js                      # Socket.io server setup
│   │   │   ├── bullboard.js                   # Bull Board UI config
│   │   │   └── env.js                         # Validated env vars (Zod)
│   │   │
│   │   └── app.js                             # Express app entry point
│   │
│   ├── 📁 uploads/                            # Temp storage (auto-cleaned)
│   │   ├── 📁 input/                          # Incoming files
│   │   └── 📁 output/                         # Processed output files
│   │
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── 📁 shared/                             ← Shared types/constants
│   ├── toolsList.js                       # Master tool definitions (used by both)
│   ├── errorCodes.js                      # Standardized error codes
│   └── validationSchemas.js               # Zod schemas shared
│
├── docker-compose.yml                     # Local dev environment
├── docker-compose.prod.yml                # Production stack
├── .gitignore
├── README.md
└── DEPLOYMENT.md                          # Step-by-step deploy guide
```

---

## 🎨 COMPLETE FRONTEND TECH STACK — V5

### ⚡ Core Framework & Build
```
React 18.3.x           — UI framework (concurrent mode, Suspense)
Vite 5.x               — Build tool (sub-100ms HMR)
TypeScript 5.x         — Optional, recommended for large teams
React Router DOM 6.x   — Client routing with lazy loading
```

### 🎭 Animation Libraries (USE ALL — This is non-negotiable)
```
GSAP 3.12.x                 — Master animation engine (industry standard)
  ├── ScrollTrigger          — Scroll-based animations (mandatory)
  ├── Flip                   — Smooth layout transitions
  ├── TextPlugin             — Text character animations
  ├── DrawSVG                — SVG path drawing
  ├── MorphSVG               — Shape morphing
  └── CustomEase             — Custom easing curves

Framer Motion 11.x          — React-native gesture + layout animations
  ├── AnimatePresence        — Exit animations (modal, route)
  ├── LayoutGroup            — Shared layout animations
  ├── useScroll              — Scroll-linked transforms
  └── useSpring              — Spring physics

Three.js r167               — 3D graphics
  ├── @react-three/fiber     — React declarative Three.js
  ├── @react-three/drei      — Helpers: Float, Sparkles, Env
  └── @react-three/postprocessing — Bloom, depth of field effects

Anime.js 3.x                — Fine-grained DOM + SVG animations
React Spring 9.x            — Physics spring animations
Lottie React 2.x            — Micro-animation JSON files
@tsparticles/react 3.x      — Particle backgrounds + interactions
Vanta.js 0.5.x              — WebGL animated backgrounds (waves, fog)
AutoAnimate 0.8.x           — Zero-config list transition animations
Barba.js 2.x                — Page-to-page transition engine
Velocity.js 2.x             — High-performance DOM animations
```

### 🎨 Styling System
```
Tailwind CSS 3.x            — Utility-first (JIT mode)
CSS Modules                 — Component-scoped styles
CSS Custom Properties       — Design tokens (see full list below)
clsx + tailwind-merge       — Conditional class management
class-variance-authority    — Component variant system
```

### 🌐 3D & Visual Effects
```
Three.js + R3F              — 3D scenes, particles, geometry
Spline React                — Embed interactive 3D models
@react-three/postprocessing — Bloom, chromatic aberration
React Force Graph           — Optional: tool relationship graph
Canvas Confetti             — Celebration animation on download
```

### 📜 Smooth Scroll & Parallax
```
@studio-freight/lenis       — Buttery smooth scroll (primary)
Locomotive Scroll 4.x       — Alternative smooth scroll with parallax
GSAP ScrollTrigger          — Scroll-linked animation trigger
React Scroll Parallax       — Easy parallax for React components
```

### 📂 File Handling (Frontend)
```
React Dropzone 14.x         — Beautiful drag & drop zones
React-pdf 9.x               — PDF preview in browser
PDF.js (Mozilla) 4.x        — Canvas-based PDF rendering
File-saver 2.x              — Trigger downloads
Axios 1.x                   — HTTP with upload progress events
```

### 🔄 State & Data
```
Zustand 4.x                 — Global client state (ultra-lightweight)
Jotai 2.x                   — Atomic per-tool config state
@tanstack/react-query 5.x   — Server state, caching, background refetch
Immer 10.x                  — Immutable state updates
```

### 🔍 Search, Virtual, DnD
```
Fuse.js 7.x                 — Fuzzy search for tool discovery
@tanstack/react-virtual 3.x — Virtualized grid for 100+ tools
@dnd-kit/core 6.x           — Accessible drag-and-drop
@dnd-kit/sortable 8.x       — Sortable lists (file reorder)
@dnd-kit/utilities          — Helper transforms
```

### 🔔 Notifications & UX Polish
```
Sonner 1.x                  — Beautiful stacked toasts (from Vercel)
NProgress 0.2.x             — Top page progress bar
React Loading Skeleton 3.x  — Content skeleton loaders
React Hot Toast 2.x         — Backup toast system
```

### 📝 Forms & Validation
```
React Hook Form 7.x         — Performant forms
Zod 3.x                     — Schema validation
@hookform/resolvers         — Zod + RHF integration
```

### 🔤 Icons (Professional Only — NO AI Generated)
```
@phosphor-icons/react 2.x   — PRIMARY: 1400+ consistent icons
Lucide React 0.x            — Secondary: clean minimal set
Heroicons 2.x               — Tailwind-native SVG icons
Remix Icon                  — Additional coverage
Custom SVG files            — Tool-specific hand-crafted icons (in /public/icons/tools/)

ICON RULES:
- All icons must be SVG-based
- Consistent stroke width across all tools
- Use Phosphor "Regular" weight as default
- Use Phosphor "Fill" for active/hover states
- Animate icons on hover (GSAP scale + rotate)
- Tool icons: custom SVG designed to match the action visually
```

### 📊 Charts & Data Viz
```
Recharts 2.x                — Tool usage stats charts
D3.js 7.x                   — Custom data visualizations
React CountUp 6.x           — Animated number counters
```

### 🌍 SEO
```
React Helmet Async 2.x      — Per-page meta injection
Schema.org JSON-LD          — Structured data (manual JSON)
Sitemap (vite plugin)       — Auto-generate sitemap.xml
React Router sitemap        — Dynamic sitemap from routes
```

### ⚡ Performance
```
React.lazy + Suspense       — Code split every tool page
@loadable/component         — Advanced code splitting
React Scan                  — Detect unnecessary re-renders (dev)
Web Vitals library          — Monitor CWV in production
workbox (Vite PWA)          — Service Worker + offline support
```

---

## 🔧 COMPLETE BACKEND TECH STACK — V5

### 🟢 Core Runtime
```
Node.js 20 LTS              — Runtime (LTS = production stable)
Express.js 4.x              — Web framework
TypeScript 5.x              — Type safety recommended
```

### 📄 PDF PROCESSING LIBRARIES (COMPLETE)

#### Tier 1 — Primary PDF Libraries
```
pdf-lib 1.x
  PURPOSE: Create, merge, split, rotate, crop, organize, add text/images,
           watermark, page numbers, header/footer, flatten
  WHY: Pure JS, no system deps, fastest for basic operations
  TOOLS: Merge, Split, Rotate, Crop, Organize, Watermark, Page Numbers,
         Header/Footer, Extract Pages, Add Image, Sign (basic), Create PDF

@pdf-lib/fontkit 1.x
  PURPOSE: Embed custom fonts (TTF/OTF) into PDFs
  TOOLS: Edit PDF text, Page numbers with custom fonts

pdfmake 0.2.x
  PURPOSE: Generate PDFs from JSON/template definitions
  TOOLS: Create PDF, TXT to PDF, MD to PDF, CSV to PDF
```

#### Tier 2 — Conversion Libraries
```
libreoffice-convert 1.x (wraps LibreOffice CLI)
  PURPOSE: Office document → PDF (highest quality)
  TOOLS: Word to PDF, Excel to PDF, PPT to PDF, ODT to PDF,
         WPS to PDF, RTF to PDF, PAGES to PDF, HWP to PDF

puppeteer 23.x (Headless Chromium)
  PURPOSE: Render HTML/URL to PDF with full CSS support
  TOOLS: HTML to PDF, URL to PDF
  NOTE: Uses bundled Chromium, set executable path on Render

mammoth 1.x
  PURPOSE: DOCX → clean HTML (then rendered by pdfmake)
  TOOLS: Word to PDF (backup), Extract formatted text

xlsx (SheetJS) 0.18.x
  PURPOSE: Read/write Excel files, extract data
  TOOLS: PDF to Excel, Excel to PDF, CSV to PDF

pdf-parse 1.x
  PURPOSE: Extract text content from PDFs
  TOOLS: Extract Text, Chat with PDF (text extraction), Summarize

pdf2json 3.x
  PURPOSE: Extract structured JSON from PDFs
  TOOLS: PDF to CSV, Extract text (structured)
```

#### Tier 3 — System Tool Wrappers
```
node-poppler 7.x (wraps Poppler CLI)
  PURPOSE: High-quality PDF → Image conversion
  TOOLS: PDF to JPG, PDF to PNG, PDF to TIFF

node-tesseract-ocr 2.x (wraps Tesseract)
  PURPOSE: Optical character recognition
  TOOLS: OCR PDF, Scan to PDF
  LANGUAGES: English, Hindi (hin), and 15+ more

node-qpdf2 3.x (wraps qpdf)
  PURPOSE: PDF encryption and decryption
  TOOLS: Protect PDF (AES-256), Unlock PDF

child_process (exec/spawn for system tools):
  ghostscript → Compress PDF, PDF to PDF/A, Repair PDF, Grayscale PDF
  imagemagick → HEIC/HEIF/TIFF/GIF/BMP/JFIF to PDF
  calibre    → EPUB/MOBI/FB2/CBZ/CBR to PDF and back
  pandoc     → MD to PDF, RTF to PDF, EPUB to PDF
  djvulibre  → DjVu to PDF
  inkscape   → SVG to PDF, AI to PDF
  unoconv    → Universal doc converter (PUB, XPS, EML to PDF)
```

#### Tier 4 — Image Processing
```
sharp 0.33.x
  PURPOSE: High-performance image processing (libvips-based)
  TOOLS: JPG/PNG/WebP/HEIC/JFIF to PDF, image compression,
         resize, format conversion (all image types)
  NOTE: Pre-built binaries available, no build needed on Render

jimp 1.x
  PURPOSE: Pure JS image processing (fallback when Sharp fails)
  TOOLS: BMP, GIF conversions, basic image editing
```

#### Tier 5 — Specialized Converters
```
archiver 7.x            — ZIP creation (multi-file downloads)
unzipper 0.12.x         — Extract ZIP (ZIP to PDF workflow)
file-type 19.x          — Detect real file type from magic bytes
uuid 10.x               — Generate unique job/file IDs
tmp 0.2.x               — Cross-platform temp directories
fs-extra 11.x           — Enhanced file system operations
glob 11.x               — File pattern matching
mime 4.x                — MIME type detection/lookup
```

### 🤖 AI-Powered Tools Backend
```
openai 4.x              — GPT-4o for chat, summarize, translate
langchain 0.3.x         — LangChain for RAG pipeline (Chat with PDF)
@pinecone-database/pinecone — Vector DB for PDF embeddings
@google-cloud/vision    — High-accuracy OCR fallback
tiktoken                — Count tokens before API calls
pdf-parse               — Extract text for AI processing
```

### 📡 Real-time & Queue
```
socket.io 4.x           — Bi-directional real-time progress
bullmq 5.x              — Redis-backed job queue
bull-board 5.x          — Visual queue dashboard (admin only)
ioredis 5.x             — Redis client
@upstash/redis          — Redis on Render/Vercel (serverless-friendly)
```

### 🗄️ Database & Storage
```
mongoose 8.x            — MongoDB ODM
mongodb 6.x             — Native driver
cloudinary 2.x          — Cloud file storage + CDN
@aws-sdk/client-s3      — S3/Cloudflare R2 storage
multer 1.x              — Multipart upload middleware
multer-s3 3.x           — Direct-to-S3 streaming
busboy 1.x              — Raw stream parser
```

### 🔐 Security & Auth
```
jsonwebtoken 9.x        — JWT access + refresh tokens
bcryptjs 2.x            — Password hashing (bcrypt)
express-rate-limit 7.x  — Rate limiting per IP
rate-limit-redis        — Redis-backed rate limit store
helmet 7.x              — HTTP security headers
cors 2.x                — CORS configuration
express-validator 7.x   — Input sanitization/validation
hpp                     — HTTP Parameter Pollution protection
xss-clean               — XSS sanitization
```

### 📊 Monitoring & Logging
```
winston 3.x             — Structured logging
morgan 1.x              — HTTP request logs
winston-mongodb         — Log to MongoDB
@sentry/node            — Error tracking
node-cron 3.x           — Scheduled cleanup jobs
compression 1.x         — Gzip response compression
```

---

## 🖼️ TOOLS HUB PAGE — COMPLETE UI SPECIFICATION

### SECTION 1 — Hero (Full Viewport Height)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BACKGROUND:
  • #0a0a0f base (near black)
  • tsParticles: 80 floating dots, connecting lines on hover
  • Vanta.js NET: subtle animated neural network background
  • CSS noise grain texture overlay (opacity: 0.03)
  • Radial gradient bloom: center violet glow (opacity: 0.15)

CONTENT LAYOUT (centered vertically):
  ┌─────────────────────────────────────────────────┐
  │                                                 │
  │  [Pill badge — animated gradient border]        │
  │   ✨  100+ Professional PDF Tools               │
  │                                                 │
  │  [H1 — font: Plus Jakarta Sans 700]             │
  │   Every PDF Tool                                │
  │   You'll Ever Need.                             │
  │   [Gradient: #6366f1 → #a855f7 → #ec4899]      │
  │   [GSAP: letters fly in one by one, ease back]  │
  │                                                 │
  │  [Subheadline — Inter 400, #94a3b8]             │
  │   Free. Fast. No signup required.               │
  │   Process files securely in seconds.            │
  │   [Fade up — Framer Motion, delay 0.4s]         │
  │                                                 │
  │  [Search Bar — full width, max-w-2xl]           │
  │   ┌──────────────────────────────────────────┐  │
  │   │ 🔍  Search any tool...                   │  │
  │   │     (rotating placeholder text)          │  │
  │   └──────────────────────────────────────────┘  │
  │   [Glow border on focus: violet shadow]          │
  │   [Fuse.js instant search as user types]         │
  │                                                 │
  │  [Quick links row]                              │
  │   Popular: [Merge PDF] [Compress PDF]           │
  │            [PDF to Word] [OCR PDF]              │
  │   [Pill buttons, hover: scale 1.05 + glow]      │
  │                                                 │
  └─────────────────────────────────────────────────┘

STATS ROW (count-up on viewport enter):
  ┌──────────────┬──────────────┬──────────────┬──────────────┐
  │   100+       │   50M+       │   4.9★        │   0 cost     │
  │   Tools      │   Files/day  │   Rating      │   Always Free│
  └──────────────┴──────────────┴──────────────┴──────────────┘
  [Each stat: number CountUp animation + icon (Phosphor)]
  [Dividers between stats: gradient vertical lines]

THREE.JS ELEMENT (right side, desktop only):
  • Floating 3D document/file icon mesh
  • Slow rotation Y-axis + gentle float Y
  • Responds to mouse movement (parallax tilt)
  • Bloom post-processing effect
  • Material: gradient iridescent
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### SECTION 2 — Featured / Popular Tools Row

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LABEL: "⚡ Most Popular"
LAYOUT: Horizontal scrollable row of 6 featured tool cards

FEATURED CARD DESIGN:
  ┌───────────────────────────────────┐
  │  [Gradient bg — unique per tool]  │
  │                                   │
  │  [Tool icon — 64px SVG]           │
  │  [Lottie plays on hover]          │
  │                                   │
  │  Merge PDF                        │
  │  [Small description — 1 line]     │
  │                                   │
  │  [→ Use for free]                 │
  └───────────────────────────────────┘

FEATURED TOOLS LIST:
  1. Merge PDF     — gradient: blue → violet
  2. Compress PDF  — gradient: violet → purple
  3. PDF to Word   — gradient: teal → cyan
  4. OCR PDF       — gradient: orange → yellow (AI badge)
  5. Chat with PDF — gradient: pink → rose (AI badge)
  6. Translate PDF — gradient: green → teal (AI + New badge)

ANIMATION:
  • Cards entrance: staggered slide-up (GSAP, 0.1s stagger)
  • Hover: Y -8px + shadow glow + icon animation
  • Horizontal scroll with snap
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### SECTION 3 — Category Filter (Sticky on Scroll)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STICKY BEHAVIOR:
  • Position: sticky, top: 0 (sticks when page scrolled)
  • Background: rgba(10,10,15,0.85) + backdrop-blur(20px)
  • Border bottom: 1px rgba(255,255,255,0.06)
  • Z-index: 50

CATEGORIES (12 total):
  [All]  [Popular]  [Edit]  [Convert]  [Security]
  [Images]  [Office]  [AI Tools]  [Extract]
  [eBooks]  [Advanced]  [Specialized]

ACTIVE STATE:
  • Background: gradient (indigo → purple)
  • Text: white
  • Border: none
  • Box shadow: 0 0 20px rgba(99,102,241,0.4)

ANIMATION:
  • Tab click → animated sliding indicator
  • Grid reflows with GSAP Flip (smooth position transition)
  • Active tab indicator slides smoothly (CSS + GSAP)
  • Scroll overflow on mobile (hide scrollbar)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### SECTION 4 — Main Tools Grid

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GRID COLUMNS:
  Mobile (< 640px): 2 columns
  Tablet (640-1023px): 3 columns
  Desktop (1024-1279px): 4 columns
  Large (1280px+): 5 columns

TOOL CARD ANATOMY:
  ┌──────────────────────────────────────────┐
  │  [TOP ROW]                               │
  │  [Icon container 44px]    [Badge (opt.)] │
  │  [Gradient bg]            [New/Hot/AI]   │
  │  [SVG icon — Phosphor]                   │
  │                                          │
  │  [TITLE — 15px, 600 weight]              │
  │  Merge PDF                               │
  │                                          │
  │  [DESCRIPTION — 13px, #64748b]           │
  │  Combine multiple PDFs                   │
  │  into a single file.                     │
  │                                          │
  │  [FOOTER ROW]                            │
  │  [★ 4.9] [2.3M uses]  [Use Tool →]      │
  └──────────────────────────────────────────┘

HOVER STATE (Framer Motion):
  • Y: -6px
  • Scale: 1.02
  • Border color: gradient animated
  • Box shadow: 0 8px 32px rgba(99,102,241,0.25)
  • Icon: slight rotate or scale animation
  • "Use Tool →" text slides right 4px

CLICK ACTION:
  • React Router navigate to /tools/[slug]
  • Barba.js transition: clip-path wipe
  • Exit: current page fades + slides left
  • Enter: new page wipes in from right

GRID ANIMATION ENTRANCE (GSAP ScrollTrigger):
  • Batch animation: 4 cards at a time
  • Each batch: opacity 0→1, y 40→0
  • Stagger: 0.08s between cards
  • Ease: power2.out

FILTER ANIMATION (GSAP Flip):
  • Capture positions before filter change
  • Apply new filter class
  • GSAP Flip.from() with duration 0.45s
  • Cards that disappear: scale 0.8 + fade
  • Cards that appear: scale 0.8 → 1 + fade in
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### SECTION 5 — AI Tools Spotlight Banner

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN: Full-width banner between tool grid sections
BACKGROUND: Gradient border box (purple → pink gradient border)
CONTENT:
  "🤖 Powered by AI"
  "Translate, Summarize, and Chat with any PDF"
  [Three AI tool cards side by side]
  [Chat with PDF] [Translate PDF] [Summarize PDF]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### SECTION 6 — Trust & Security Section

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TITLE: "Your files are always safe"

TRUST ITEMS (4 cards):
  🔒 Bank-level Encryption
     Files encrypted in transit (TLS) and at rest
  🗑️ Auto Deleted After 1 Hour
     We never store your documents permanently
  🚫 No Registration
     Use any tool without creating an account
  🌐 Works Everywhere
     Any device, any browser, any OS

DESIGN: Dark cards with subtle border glow on hover
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### SECTION 7 — Workflow Builder Promo

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN: Gradient background section (dark indigo)
CONTENT:
  "⚙️ Build Custom Workflows"
  "Chain multiple tools together. Automate your PDF tasks."
  [Visual: animated flow diagram showing tools connected]
  [CTA Button: "Create Workflow →" — magnetic button]

ANIMATION:
  • Flow diagram draws itself (GSAP DrawSVG) on scroll enter
  • Nodes pulse gently
  • CTA button has shimmer sweep on hover
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 📋 INDIVIDUAL TOOL PAGE — COMPLETE V5 SPECIFICATION

### Route Structure
```
/tools/merge-pdf             → MergePDF.jsx
/tools/compress-pdf          → CompressPDF.jsx
/tools/pdf-to-word           → PdfToWord.jsx
... (one route per tool, all lazy-loaded)
```

### ToolPageTemplate.jsx — Reusable Structure

Every single tool uses this template (fill in tool-specific data via props/meta file):

---

#### ZONE 1: SEO Head (React Helmet Async)
```jsx
// Injected from [ToolSlug].meta.js
<Helmet>
  <title>{tool.seoTitle} | ishu.fun</title>
  <meta name="description" content={tool.seoDescription} />
  <meta name="keywords" content={tool.keywords.join(', ')} />
  <link rel="canonical" href={`https://ishu.fun/tools/${tool.slug}`} />
  <meta property="og:title" content={tool.seoTitle} />
  <meta property="og:description" content={tool.seoDescription} />
  <meta property="og:image" content={`/images/og/${tool.slug}.png`} />
  <script type="application/ld+json">
    {JSON.stringify(tool.schemaOrg)}
  </script>
</Helmet>
```

---

#### ZONE 2: Tool Hero Section
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYOUT: 2-column on desktop, stacked on mobile

LEFT COLUMN:
  [Breadcrumb: Home > Tools > Merge PDF]
  [H1: "Merge PDF Files Online — Free"]
  [Description paragraph: 2-3 sentences]
  [Trust badges row]:
    ✅ Secure    ✅ Free Forever    ✅ No Signup

RIGHT COLUMN (desktop):
  [3D Spline object or CSS 3D mockup]
  [Floating mock PDFs merging animation]
  [GSAP float animation: Y sin wave]

BACKGROUND:
  • Gradient: #0a0a0f → tool's accent color (5%)
  • Subtle dot grid pattern
  • No distracting animations — content is king
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

#### ZONE 3: File Upload Zone (THE CORE UI)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STATE 1 — IDLE (Default)
┌───────────────────────────────────────────────┐
│                                               │
│    [Dashed border — CSS dash-offset animate]  │
│                                               │
│    [Lottie animation: upload arrow]           │
│                                               │
│    Drop your PDF here                         │
│    or                                         │
│    [Select Files]  (gradient button)          │
│                                               │
│    ──────── OR IMPORT FROM ────────           │
│    [G Drive icon]  [Dropbox icon]  [URL icon] │
│                                               │
│    Max file size: 100MB · PDF only            │
│                                               │
└───────────────────────────────────────────────┘

STATE 2 — DRAG OVER
  • Border: solid, gradient glow (violet → pink)
  • Background: rgba(99,102,241, 0.08)
  • Scale: 1.01 (subtle pulse)
  • Text changes: "Release to upload"
  • Lottie switches to drop animation

STATE 3 — FILES ADDED (Merge PDF example: multiple files)
  ┌─────────────────────────────────────────────┐
  │  ┌──────┐  document1.pdf  2.3 MB  [✕]       │
  │  │ PDF  │                                   │
  │  └──────┘                                   │
  │  ┌──────┐  report-q3.pdf  1.1 MB  [✕]       │
  │  │ PDF  │  [drag handle ≡]  ← reorder!      │
  │  └──────┘                                   │
  │  ┌──────┐  contract.pdf   4.7 MB  [✕]       │
  │  │ PDF  │                                   │
  │  └──────┘                                   │
  │                                             │
  │  [+ Add More Files]                         │
  │  File list: dnd-kit sortable                │
  └─────────────────────────────────────────────┘

STATE 4 — UPLOADING
  • File card shows upload progress bar (per file)
  • Overall circular progress in button
  • "Uploading... 67%" text

STATE 5 — PROCESSING
  • Full-width animated progress bar (gradient sweep)
  • Socket.io message: "Processing page 3 of 12..."
  • Estimated time remaining (calculated from avg speed)
  • Cancel button available

STATE 6 — SUCCESS ✅
  ┌─────────────────────────────────────────────┐
  │                                             │
  │  [Lottie: checkmark with particles]         │
  │                                             │
  │  ✅  merged-document.pdf is ready!          │
  │  File size: 6.8 MB  |  Pages: 47           │
  │                                             │
  │  [⬇ Download]  [☁ Save to Drive]           │
  │  [📋 Copy Link]  [🔄 Process Another]      │
  │                                             │
  │  ⏱ Files auto-deleted in: [countdown 1hr]  │
  │                                             │
  └─────────────────────────────────────────────┘
  ANIMATION: Canvas confetti burst on success!

STATE 7 — ERROR ❌
  • Lottie: error shake animation
  • Border: red glow
  • Error message: clear, actionable text
  • Retry button
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

#### ZONE 4: Tool Options Panel (Tool-Specific)
```
MERGE PDF OPTIONS:
  □ Merge all pages in order
  □ Select specific page ranges
  [File reorder list - drag & drop]

COMPRESS PDF OPTIONS:
  Compression Level:
  [○ Low — smaller file] [● Medium — balanced] [○ High — best quality]
  Quality: [slider: 0 ——●—— 100]
  Target size: [input: ___ MB]

PROTECT PDF OPTIONS:
  Password: [input with show/hide toggle]
  Confirm Password: [input]
  Permissions: [checkboxes: Print, Copy, Edit]

OCR PDF OPTIONS:
  Language: [dropdown — 20 languages]
  Output: [● PDF with text layer] [○ Text file only]
  DPI: [72 / 150 / 300 / 600]

TRANSLATE PDF OPTIONS:
  Source Language: [Auto-detect ▾]
  Target Language: [Hindi / English / ... ▾]
  [Preserve Layout: toggle ON]

(Each tool has relevant options — designed contextually)
```

---

#### ZONE 5: Process CTA Button
```
DEFAULT:    [🔀 Merge PDF  →]
LOADING:    [⟳  Processing...]  ← morphed state (Framer Motion layoutId)
SUCCESS:    [✓  Done — Download ↓]

BUTTON STYLE:
  • Full width (max-w-md centered)
  • Background: gradient #6366f1 → #8b5cf6
  • Height: 52px, border-radius: 12px
  • Font: Inter 600, 16px, white
  • Hover: brightness 1.1 + scale 1.02
  • Hover: shimmer sweep animation (CSS keyframe)
  • Active: scale 0.97 (press feel)
  • Magnetic effect: follows cursor (useMagnetic hook)
```

---

#### ZONE 6: How It Works (3 Steps)
```
STEP 1          STEP 2           STEP 3
Upload Files → Configure → Download Result
[Icon]          [Icon]           [Icon]
[Lottie]        [Lottie]         [Lottie]

CONNECTING LINE: SVG path drawn with GSAP DrawSVG on scroll enter
ANIMATION: Steps appear sequentially (stagger 0.2s) with GSAP
```

---

#### ZONE 7: Tool Features Grid (6 cards)
```
Example for Merge PDF:
┌────────────────┬────────────────┬────────────────┐
│ 🔒 100% Secure │⚡ Process Fast │ 📱 Any Device  │
│ SSL encrypted  │ Under 5 sec    │ Mobile ready   │
├────────────────┼────────────────┼────────────────┤
│ 🆓 Always Free │ 📄 No Limit    │ 🎯 Preserve    │
│ No hidden fees │ Files or pages │ Original quality│
└────────────────┴────────────────┴────────────────┘

ANIMATION: Staggered fade-up on scroll enter
HOVER: Subtle border glow + icon scale
```

---

#### ZONE 8: Related Tools Carousel
```
TITLE: "You might also need..."
LAYOUT: Horizontal scroll, snap to card
ITEMS: 6-8 related tools (from same category + commonly paired)
NAVIGATION: Left/Right arrows + drag-to-scroll on mobile
ANIMATION: Framer Motion AnimatePresence on route

Example for Merge PDF:
→ Split PDF | Compress PDF | Organize PDF | Rotate PDF | PDF Viewer
```

---

#### ZONE 9: FAQ Section (SEO Gold)
```
DESIGN: Accordion list, Radix UI Accordion
ANIMATION: Framer Motion AnimatePresence for expand/collapse
CONTENT: 8 questions minimum per tool

FAQ SCHEMA (JSON-LD) — injected via Helmet:
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How do I merge PDF files online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To merge PDFs on ishu.fun, simply upload..."
    }
  }]
}

EXAMPLE FAQ (Merge PDF):
Q: Is the PDF merger free to use?
Q: How many PDF files can I merge at once?
Q: Is it safe to merge PDFs online?
Q: What is the maximum file size for merging PDFs?
Q: Will the quality of my PDF be affected after merging?
Q: Can I merge PDFs on mobile or iPhone?
Q: How long are my files stored after merging?
Q: Can I reorder pages before merging?
```

---

## 🔌 API ROUTES — COMPLETE SPECIFICATION V5

### Upload Endpoint
```http
POST /api/upload
Content-Type: multipart/form-data
Body: file (max 100MB), toolSlug (string), sessionId (string)

Response 200:
{
  "jobId": "uuid-v4",
  "filePath": "/uploads/input/uuid/filename.pdf",
  "fileSize": 2457600,
  "fileName": "document.pdf",
  "pages": 12,        // PDF page count
  "socketRoom": "job-uuid-v4"
}

Response 400: { "error": "FILE_TOO_LARGE" }
Response 415: { "error": "INVALID_FILE_TYPE" }
Response 429: { "error": "RATE_LIMIT_EXCEEDED" }
```

### Process Endpoint (per category)
```http
POST /api/tools/pdf/merge
Authorization: Bearer <optional JWT>
Content-Type: application/json
Body:
{
  "jobId": "uuid",
  "files": ["path1.pdf", "path2.pdf"],
  "options": {
    "outputFileName": "merged.pdf"
  }
}

POST /api/tools/pdf/compress
Body:
{
  "jobId": "uuid",
  "filePath": "path/to/file.pdf",
  "options": {
    "level": "medium",    // low | medium | high
    "targetSizeMB": 5
  }
}

POST /api/tools/convert/pdf-to-word
Body:
{
  "jobId": "uuid",
  "filePath": "path/to/file.pdf",
  "options": {
    "format": "docx"    // docx | doc
  }
}

POST /api/tools/ai/translate
Body:
{
  "jobId": "uuid",
  "filePath": "path/to/file.pdf",
  "options": {
    "sourceLang": "auto",
    "targetLang": "hi",      // BCP-47 language code
    "preserveLayout": true
  }
}

POST /api/tools/ai/chat
Body:
{
  "filePath": "path/to/file.pdf",
  "sessionId": "uuid",
  "message": "What is the main topic of this document?",
  "history": [...]    // Previous messages for context
}

// All Process responses:
Response 200: { "jobId": "uuid" }
// Then listen via Socket.io for progress updates
```

### Download Endpoint
```http
GET /api/download/:jobId
Authorization: Bearer <optional>

Response 200: File stream with headers:
  Content-Disposition: attachment; filename="merged.pdf"
  Content-Type: application/pdf
  Cache-Control: no-store

Response 404: { "error": "FILE_NOT_FOUND_OR_EXPIRED" }
Response 410: { "error": "FILE_EXPIRED" }
```

### Socket.io Events
```javascript
// Client connects with jobId as room identifier
socket.emit('join-job', { jobId: 'uuid' });

// Server emits during processing:
socket.to(room).emit('job:progress', {
  jobId: 'uuid',
  percent: 45,
  message: 'Compressing page 6 of 14...',
  stage: 'processing'   // uploading | queued | processing | done | error
});

socket.to(room).emit('job:complete', {
  jobId: 'uuid',
  downloadUrl: '/api/download/uuid',
  fileName: 'compressed.pdf',
  originalSize: 10240000,
  outputSize: 2048000,
  compressionRatio: '80%',
  processingTime: 3200    // ms
});

socket.to(room).emit('job:error', {
  jobId: 'uuid',
  error: 'CORRUPT_PDF',
  message: 'The uploaded PDF file appears to be corrupted.',
  suggestion: 'Try using our Repair PDF tool first.'
});
```

---

## 🗃️ MONGODB SCHEMAS — COMPLETE V5

### User Model
```javascript
// models/User.model.js
const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, unique: true, lowercase: true },
  whatsapp: { type: String, sparse: true },    // For notifications
  passwordHash: { type: String },              // null if OAuth
  avatar: { type: String },                    // Cloudinary URL
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  plan: { type: String, enum: ['free', 'pro'], default: 'free' },
  
  // Usage tracking
  totalFilesProcessed: { type: Number, default: 0 },
  totalStorageUsedBytes: { type: Number, default: 0 },
  
  // Auth
  emailVerified: { type: Boolean, default: false },
  lastLoginAt: { type: Date },
  loginCount: { type: Number, default: 0 },
  
  // Preferences
  preferences: {
    notifications: { type: Boolean, default: true },
    whatsappAlerts: { type: Boolean, default: false },
    defaultLanguage: { type: String, default: 'en' },
    theme: { type: String, enum: ['dark', 'light'], default: 'dark' }
  },
  
  // Rate limiting data
  hourlyProcessingCount: { type: Number, default: 0 },
  hourlyCountResetAt: { type: Date, default: Date.now },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### ToolUsage Model (Analytics)
```javascript
// models/ToolUsage.model.js
const ToolUsageSchema = new Schema({
  toolSlug: { type: String, required: true, index: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  sessionId: { type: String },               // Anonymous users
  
  // File metadata
  inputFileName: { type: String },
  inputFileSizeBytes: { type: Number },
  outputFileSizeBytes: { type: Number },
  inputPageCount: { type: Number },
  
  // Performance
  processingTimeMs: { type: Number },
  queueWaitTimeMs: { type: Number },
  workerNode: { type: String },              // Which worker processed it
  
  // Result
  status: { type: String, enum: ['success', 'error', 'cancelled'] },
  errorCode: { type: String },
  
  // Context
  ipHash: { type: String },                  // SHA256 hashed IP
  country: { type: String },                 // ISO 3166-1 alpha-2
  userAgent: { type: String },
  referrer: { type: String },
  
  timestamp: { type: Date, default: Date.now, index: true }
});

// Indexes for analytics queries
ToolUsageSchema.index({ toolSlug: 1, timestamp: -1 });
ToolUsageSchema.index({ timestamp: -1 });
ToolUsageSchema.index({ status: 1, toolSlug: 1 });
```

### ProcessedFile Model
```javascript
// models/ProcessedFile.model.js
const ProcessedFileSchema = new Schema({
  jobId: { type: String, unique: true, required: true },
  toolSlug: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  
  // File paths
  inputPaths: [{ type: String }],           // Array for multi-file tools
  outputPath: { type: String },
  cloudinaryUrl: { type: String },          // Public CDN URL
  cloudinaryPublicId: { type: String },     // For deletion
  
  // Metadata
  outputFileName: { type: String },
  outputFileSizeBytes: { type: Number },
  mimeType: { type: String },
  
  // Lifecycle
  expiresAt: { type: Date, required: true, index: true },
  downloadCount: { type: Number, default: 0 },
  lastDownloadedAt: { type: Date },
  isDeleted: { type: Boolean, default: false },
  
  createdAt: { type: Date, default: Date.now }
});

// TTL index: MongoDB auto-deletes after expiry
ProcessedFileSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
```

### Workflow Model
```javascript
// models/Workflow.model.js
const WorkflowSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String },
  icon: { type: String },                   // Emoji or icon name
  color: { type: String },                  // Brand color for workflow card
  
  steps: [{
    order: { type: Number, required: true },
    toolSlug: { type: String, required: true },
    toolName: { type: String },
    options: { type: Schema.Types.Mixed },   // Tool-specific config
    waitForComplete: { type: Boolean, default: true }
  }],
  
  isPublic: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },  // Admin can feature
  
  // Stats
  totalRuns: { type: Number, default: 0 },
  successfulRuns: { type: Number, default: 0 },
  
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

---

## ⚙️ BACKEND CORE FILES — KEY IMPLEMENTATIONS

### app.js (Express Entry Point)
```javascript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import { connectDB } from './config/database.js';
import { connectRedis } from './config/redis.js';
import { initBullBoard } from './config/bullboard.js';
import uploadRoutes from './routes/upload.routes.js';
import pdfRoutes from './routes/tools/pdf.routes.js';
import convertRoutes from './routes/tools/convert.routes.js';
import aiRoutes from './routes/tools/ai.routes.js';
import downloadRoutes from './routes/download.routes.js';
import authRoutes from './routes/auth.routes.js';
import errorHandler from './middleware/errorHandler.middleware.js';

const app = express();
const httpServer = createServer(app);

// Socket.io
const io = new SocketServer(httpServer, {
  cors: { origin: process.env.FRONTEND_URL, methods: ['GET', 'POST'] }
});
app.set('io', io);  // Make io accessible in controllers

// Core middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(compression());
app.use(express.json({ limit: '10kb' }));
app.use(morgan('combined'));

// Routes
app.get('/health', (req, res) => res.json({ status: 'ok', ts: Date.now() }));
app.use('/api/upload', uploadRoutes);
app.use('/api/tools/pdf', pdfRoutes);
app.use('/api/tools/convert', convertRoutes);
app.use('/api/tools/ai', aiRoutes);
app.use('/api/download', downloadRoutes);
app.use('/api/auth', authRoutes);

// Bull Board (admin only, protected)
const { router: bullBoardRouter } = initBullBoard();
app.use('/admin/queues', adminAuthMiddleware, bullBoardRouter);

// Error handler (must be last)
app.use(errorHandler);

// Socket rooms
io.on('connection', (socket) => {
  socket.on('join-job', ({ jobId }) => {
    socket.join(`job-${jobId}`);
  });
});

// Start
const start = async () => {
  await connectDB();
  await connectRedis();
  httpServer.listen(process.env.PORT || 3000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
  });
};
start();
```

### merge.service.js (Example PDF Service)
```javascript
import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { emitProgress } from '../socket.service.js';

export const mergePDFs = async (jobId, filePaths, options = {}) => {
  const mergedPDF = await PDFDocument.create();
  const total = filePaths.length;

  for (let i = 0; i < total; i++) {
    // Emit progress to client in real-time
    await emitProgress(jobId, {
      percent: Math.round(((i) / total) * 80),
      message: `Processing file ${i + 1} of ${total}...`,
      stage: 'processing'
    });

    const bytes = await fs.readFile(filePaths[i]);
    const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
    const pages = await mergedPDF.copyPages(pdf, pdf.getPageIndices());
    pages.forEach(p => mergedPDF.addPage(p));
  }

  await emitProgress(jobId, { percent: 90, message: 'Saving merged file...', stage: 'processing' });

  const outputBytes = await mergedPDF.save({ useObjectStreams: false });
  const outputDir = path.join(process.env.UPLOAD_DIR, 'output', jobId);
  await fs.mkdir(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, 'merged.pdf');
  await fs.writeFile(outputPath, outputBytes);

  return {
    outputPath,
    outputFileName: options.outputFileName || 'merged.pdf',
    sizeBytes: outputBytes.length,
    pageCount: mergedPDF.getPageCount()
  };
};
```

### compress.service.js (Ghostscript Wrapper)
```javascript
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

const COMPRESSION_SETTINGS = {
  low:    '/screen',     // 72 DPI — smallest file, web view
  medium: '/ebook',      // 150 DPI — balanced
  high:   '/printer',    // 300 DPI — high quality print
  max:    '/prepress',   // 300 DPI — maximum quality
};

export const compressPDF = async (inputPath, outputPath, level = 'medium') => {
  const setting = COMPRESSION_SETTINGS[level] || COMPRESSION_SETTINGS.medium;
  
  const gsCmd = [
    'gs',
    '-sDEVICE=pdfwrite',
    '-dCompatibilityLevel=1.4',
    `-dPDFSETTINGS=${setting}`,
    '-dNOPAUSE',
    '-dQUIET',
    '-dBATCH',
    `-sOutputFile="${outputPath}"`,
    `"${inputPath}"`
  ].join(' ');

  await execAsync(gsCmd, { timeout: 120000 });  // 2min timeout

  const { size } = await fs.stat(outputPath);
  return { outputPath, sizeBytes: size };
};
```

### socket.service.js (Progress Emitter)
```javascript
// services/socket.service.js
let io;

export const initSocket = (socketIo) => { io = socketIo; };

export const emitProgress = async (jobId, data) => {
  if (!io) return;
  io.to(`job-${jobId}`).emit('job:progress', { jobId, ...data });
};

export const emitComplete = async (jobId, data) => {
  if (!io) return;
  io.to(`job-${jobId}`).emit('job:complete', { jobId, ...data });
};

export const emitError = async (jobId, error) => {
  if (!io) return;
  io.to(`job-${jobId}`).emit('job:error', { jobId, ...error });
};
```

---

## 🏎️ PERFORMANCE — COMPLETE STRATEGY

### Frontend Performance
```javascript
// 1. ROUTE-LEVEL CODE SPLITTING (every tool is its own chunk)
const MergePDF = React.lazy(() =>
  import(/* webpackChunkName: "tool-merge-pdf" */ './pages/tools/pdf-core/merge-pdf/MergePDF')
);

// 2. PRELOAD ADJACENT ROUTES (prefetch on hover)
const preloadTool = (slug) => {
  import(`./pages/tools/${slug}/${slug}`);
};
<ToolCard onMouseEnter={() => preloadTool('compress-pdf')} />

// 3. IMAGE OPTIMIZATION
// All OG images: WebP format, 1200x630, compressed
// Tool icons: inline SVG (no HTTP request)
// Use srcSet for responsive:
<img
  src="/icons/tools/merge-pdf.svg"
  loading="lazy"
  decoding="async"
  width="44"
  height="44"
/>

// 4. FONT LOADING STRATEGY
// Preload critical fonts in <head>:
<link rel="preload" href="/fonts/Inter-Variable.woff2"
  as="font" type="font/woff2" crossOrigin="anonymous" />
// font-display: swap to prevent FOIT

// 5. GSAP PERFORMANCE RULES
// - Only animate transform and opacity (GPU composited)
// - Use will-change: transform on animated elements
// - Use GSAP.set() for initial states (not CSS)
// - Use ScrollTrigger.batch() for multiple elements
// - Kill all ScrollTrigger instances on component unmount

// 6. THREE.JS PERFORMANCE
// - InstancedMesh for particles (1 draw call)
// - LOD (Level of Detail) based on device
// - Disable on mobile with matchMedia check
// - Throttle RAF to 30fps on low-power devices
// - Use dispose() on unmount to free GPU memory

// 7. VIRTUAL SCROLL FOR TOOLS GRID (100+ items)
import { useVirtualizer } from '@tanstack/react-virtual';
// Only render visible cards in DOM

// 8. LENIS SCROLL
import Lenis from '@studio-freight/lenis';
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothTouch: false,  // Disable on touch (native is better)
});
// RAF loop integration with GSAP ticker

// 9. SERVICE WORKER (PWA)
// Cache shell, cache tool pages after first visit
// Offline: show "You're offline" with cached tools list
```

### Backend Performance
```javascript
// 1. WORKER THREADS for CPU-intensive PDF ops
import { Worker } from 'worker_threads';

// Heavy work goes to worker thread, keeps event loop free
const runInWorker = (workerScript, data) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerScript, { workerData: data });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
};

// 2. STREAM LARGE FILES — never load entire file into memory
const processLargeFile = async (inputPath, outputPath) => {
  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);
  // Pipe with transform
  readStream.pipe(transformer).pipe(writeStream);
};

// 3. BULLMQ CONCURRENCY CONFIG
const worker = new Worker('pdf-compress', async (job) => {
  return await compressPDF(job.data.inputPath, job.data.options);
}, {
  connection: redis,
  concurrency: 4,         // 4 concurrent PDF jobs
  limiter: {
    max: 20,              // Max 20 jobs
    duration: 60000       // Per minute
  }
});

// 4. REDIS CACHING for tool metadata
const getToolStats = async (toolSlug) => {
  const cached = await redis.get(`stats:${toolSlug}`);
  if (cached) return JSON.parse(cached);
  
  const stats = await ToolUsage.aggregate([...]);
  await redis.setex(`stats:${toolSlug}`, 3600, JSON.stringify(stats)); // 1hr cache
  return stats;
};

// 5. RESPONSE COMPRESSION
app.use(compression({ threshold: 1024 })); // Compress > 1KB responses

// 6. AUTO CLEANUP (runs every 15 minutes)
cron.schedule('*/15 * * * *', async () => {
  const expired = await ProcessedFile.find({
    expiresAt: { $lte: new Date() },
    isDeleted: false
  });
  for (const file of expired) {
    await fs.unlink(file.outputPath).catch(() => {});
    await cloudinary.uploader.destroy(file.cloudinaryPublicId).catch(() => {});
    await file.updateOne({ isDeleted: true });
  }
  console.log(`Cleaned up ${expired.length} expired files`);
});
```

---

## 🎨 DESIGN TOKENS — COMPLETE CSS VARIABLES

```css
/* styles/variables.css */
:root {
  /* ═══ BRAND COLORS ═══ */
  --color-primary-50:  #eef2ff;
  --color-primary-100: #e0e7ff;
  --color-primary-200: #c7d2fe;
  --color-primary-300: #a5b4fc;
  --color-primary-400: #818cf8;
  --color-primary-500: #6366f1;    /* PRIMARY */
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;
  --color-primary-800: #3730a3;
  --color-primary-900: #312e81;

  --color-secondary-400: #c084fc;
  --color-secondary-500: #a855f7;  /* SECONDARY / PURPLE */
  --color-secondary-600: #9333ea;

  --color-accent-400:  #f472b6;
  --color-accent-500:  #ec4899;    /* ACCENT / PINK */
  --color-accent-600:  #db2777;

  /* ═══ SEMANTIC COLORS ═══ */
  --color-success: #10b981;
  --color-success-bg: rgba(16, 185, 129, 0.1);
  --color-warning: #f59e0b;
  --color-warning-bg: rgba(245, 158, 11, 0.1);
  --color-error:   #ef4444;
  --color-error-bg: rgba(239, 68, 68, 0.1);
  --color-info:    #3b82f6;
  --color-info-bg: rgba(59, 130, 246, 0.1);

  /* ═══ BACKGROUNDS ═══ */
  --bg-base:         #09090e;    /* Deepest background */
  --bg-primary:      #0a0a0f;    /* Page background */
  --bg-secondary:    #0f0f17;    /* Slightly lighter */
  --bg-elevated:     #141420;    /* Cards, panels */
  --bg-elevated-2:   #1a1a2e;    /* Hover states */
  --bg-overlay:      rgba(9,9,14,0.85);  /* Modals, popups */

  /* ═══ BORDERS ═══ */
  --border-subtle:   rgba(255,255,255,0.04);
  --border-default:  rgba(255,255,255,0.07);
  --border-medium:   rgba(255,255,255,0.12);
  --border-strong:   rgba(255,255,255,0.20);

  /* ═══ TEXT COLORS ═══ */
  --text-primary:    #f8fafc;    /* Main content */
  --text-secondary:  #cbd5e1;    /* Secondary content */
  --text-tertiary:   #94a3b8;    /* Muted text */
  --text-quaternary: #64748b;    /* Disabled, placeholder */
  --text-inverse:    #0a0a0f;    /* Text on light bg */

  /* ═══ GRADIENTS ═══ */
  --gradient-brand:    linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
  --gradient-brand-h:  linear-gradient(90deg,  #6366f1 0%, #8b5cf6 100%);
  --gradient-card:     linear-gradient(145deg, rgba(99,102,241,0.08), rgba(139,92,246,0.03));
  --gradient-glow:     radial-gradient(circle at 50% 0%, rgba(99,102,241,0.3) 0%, transparent 60%);
  --gradient-dark:     linear-gradient(180deg, #0a0a0f 0%, #09090e 100%);
  --gradient-text:     linear-gradient(135deg, #a5b4fc 0%, #c084fc 50%, #f472b6 100%);

  /* ═══ SHADOWS ═══ */
  --shadow-xs:    0 1px 2px rgba(0,0,0,0.4);
  --shadow-sm:    0 2px 8px rgba(0,0,0,0.5);
  --shadow-md:    0 4px 16px rgba(0,0,0,0.6);
  --shadow-lg:    0 8px 32px rgba(0,0,0,0.7);
  --shadow-xl:    0 16px 64px rgba(0,0,0,0.8);
  --shadow-glow-sm:  0 0 12px rgba(99,102,241,0.25);
  --shadow-glow-md:  0 0 24px rgba(99,102,241,0.35);
  --shadow-glow-lg:  0 0 48px rgba(99,102,241,0.45);
  --shadow-glow-pink: 0 0 24px rgba(236,72,153,0.30);
  --shadow-success:  0 0 20px rgba(16,185,129,0.30);
  --shadow-error:    0 0 20px rgba(239,68,68,0.30);

  /* ═══ TYPOGRAPHY ═══ */
  --font-sans:  'Inter', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Plus Jakarta Sans', 'Inter', sans-serif;
  --font-mono:  'Geist Mono', 'JetBrains Mono', 'Fira Code', monospace;

  /* Type scale */
  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.875rem;   /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  1.875rem;   /* 30px */
  --text-4xl:  2.25rem;    /* 36px */
  --text-5xl:  3rem;       /* 48px */
  --text-6xl:  3.75rem;    /* 60px */
  --text-7xl:  4.5rem;     /* 72px */

  /* ═══ SPACING ═══ */
  --space-0:  0;
  --space-1:  0.25rem;  /* 4px */
  --space-2:  0.5rem;   /* 8px */
  --space-3:  0.75rem;  /* 12px */
  --space-4:  1rem;     /* 16px */
  --space-5:  1.25rem;  /* 20px */
  --space-6:  1.5rem;   /* 24px */
  --space-8:  2rem;     /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */

  /* ═══ BORDER RADIUS ═══ */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  20px;
  --radius-3xl:  24px;
  --radius-full: 9999px;

  /* ═══ TRANSITIONS ═══ */
  --transition-instant: 50ms ease;
  --transition-fast:    150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base:    250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:    400ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring:  600ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ═══ Z-INDEX SCALE ═══ */
  --z-base:     1;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-overlay:  300;
  --z-modal:    400;
  --z-popover:  500;
  --z-toast:    600;
  --z-cursor:   1000;

  /* ═══ BLUR ═══ */
  --blur-sm:  8px;
  --blur-md:  16px;
  --blur-lg:  24px;
  --blur-xl:  40px;
}
```

---

## 📱 RESPONSIVE DESIGN — COMPLETE BREAKPOINTS

```css
/* Mobile-first. All components designed for 320px width minimum. */

/* BASE: Mobile (320px - 639px) */
/* Stack everything. Full-width cards. Simplified animations. */

/* SM: Small tablet / large phone (640px+) */
@media (min-width: 640px) {
  .tools-grid { grid-template-columns: repeat(3, 1fr); }
}

/* MD: Tablet (768px+) */
@media (min-width: 768px) {
  .tools-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .tool-page-hero { flex-direction: row; }
  .three-js-canvas { display: block; }  /* Show 3D on tablet+ */
}

/* LG: Desktop (1024px+) */
@media (min-width: 1024px) {
  .tools-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .hero-title { font-size: var(--text-6xl); }
}

/* XL: Large desktop (1280px+) */
@media (min-width: 1280px) {
  .tools-grid { grid-template-columns: repeat(5, 1fr); gap: 24px; }
}

/* 2XL: Ultra-wide (1536px+) */
@media (min-width: 1536px) {
  .tools-container { max-width: 1440px; margin: 0 auto; }
}

/* TOUCH: Disable hover effects on touch devices */
@media (hover: none) {
  .tool-card:hover { transform: none; box-shadow: none; }
  .magnetic-button { transform: none !important; }
}

/* MOTION: Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .three-js-canvas { display: none; }
  .particles-canvas { display: none; }
}

/* HIGH CONTRAST MODE */
@media (forced-colors: active) {
  .tool-card { border: 2px solid ButtonText; }
}
```

---

## 🔧 DEPLOYMENT — STEP BY STEP

### Frontend → Vercel

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Connect repo
cd frontend
vercel --prod

# 3. vercel.json configuration
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/tools/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "s-maxage=86400, stale-while-revalidate=604800" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    },
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-store" }
      ]
    }
  ],
  "env": {
    "VITE_API_URL": "@ishu-api-url",
    "VITE_SOCKET_URL": "@ishu-socket-url"
  }
}

# 4. Environment variables in Vercel dashboard:
#    VITE_API_URL = https://api.ishu.fun
#    VITE_SOCKET_URL = wss://api.ishu.fun
#    VITE_CLOUDINARY_CLOUD_NAME = your-cloud-name
```

### Backend → Render

```yaml
# render.yaml
services:
  - type: web
    name: ishu-fun-api
    env: docker
    plan: standard          # Needs 2GB RAM for PDF processing
    dockerfilePath: ./backend/Dockerfile
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3000
      - key: MONGODB_URI
        sync: false         # Set in Render dashboard
      - key: REDIS_URL
        sync: false
      - key: JWT_SECRET
        sync: false
      - key: OPENAI_API_KEY
        sync: false
      - key: CLOUDINARY_URL
        sync: false
      - key: FRONTEND_URL
        value: https://ishu.fun
    disk:
      name: uploads
      mountPath: /app/uploads
      sizeGB: 20
    healthCheckPath: /health
    autoDeploy: true

  - type: worker
    name: ishu-fun-worker
    env: docker
    dockerfilePath: ./backend/Dockerfile.worker
    envVars:
      - fromGroup: ishu-fun-env-vars
```

### Dockerfile (Backend)
```dockerfile
# backend/Dockerfile
FROM node:20-slim

# Install ALL system tools needed
RUN apt-get update && apt-get install -y --no-install-recommends \
    ghostscript \
    libreoffice \
    libreoffice-writer \
    libreoffice-calc \
    libreoffice-impress \
    tesseract-ocr \
    tesseract-ocr-eng \
    tesseract-ocr-hin \
    poppler-utils \
    imagemagick \
    calibre \
    pandoc \
    djvulibre-bin \
    chromium \
    fonts-liberation \
    fonts-noto \
    fonts-noto-cjk \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Puppeteer — use system Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# ImageMagick policy fix (allow PDF)
RUN sed -i 's/rights="none" pattern="PDF"/rights="read|write" pattern="PDF"/' \
    /etc/ImageMagick-6/policy.xml

# App
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY src/ ./src/

# Create upload dirs
RUN mkdir -p /app/uploads/input /app/uploads/output

EXPOSE 3000
HEALTHCHECK CMD curl -f http://localhost:3000/health || exit 1
CMD ["node", "src/app.js"]
```

---

## ✅ DEVELOPER CHECKLIST — V5 ULTIMATE

### Phase 1: Foundation (Week 1)
- [ ] Set up Vite + React project with all dependencies installed
- [ ] Configure Tailwind CSS with custom theme
- [ ] Set up CSS variables file (all design tokens)
- [ ] Set up GSAP with all plugins registered
- [ ] Set up Lenis smooth scroll + RAF loop with GSAP
- [ ] Set up Barba.js page transitions (fade + clip-path)
- [ ] Set up Zustand stores (toolStore, uploadStore, uiStore)
- [ ] Set up React Query provider
- [ ] Set up React Router with all 100+ lazy routes
- [ ] Set up Axios instance with base URL + interceptors
- [ ] Set up Socket.io client service
- [ ] Set up Express server with all middleware
- [ ] Set up MongoDB connection (Atlas)
- [ ] Set up Redis connection (Upstash)
- [ ] Set up BullMQ queues + workers
- [ ] Set up Socket.io server

### Phase 2: Tools Hub Page (Week 2)
- [ ] Build HeroSection with Three.js background
- [ ] Build tsParticles field
- [ ] Build animated stats counter (CountUp)
- [ ] Build SearchBar with Fuse.js (instant results)
- [ ] Build CategoryFilter (sticky, animated tabs)
- [ ] Build ToolCard component (all hover states)
- [ ] Build ToolsGrid with GSAP ScrollTrigger batch
- [ ] Build GSAP Flip filter transitions
- [ ] Build FeaturedTools horizontal scroll
- [ ] Build AI Tools spotlight banner
- [ ] Build Trust section
- [ ] Build WorkflowPromo section
- [ ] Test grid on all breakpoints (320px → 1536px)

### Phase 3: File Processing UI (Week 3)
- [ ] Build FileDropzone (all 7 states)
- [ ] Build FilePreviewCard (thumbnail + metadata)
- [ ] Build FileList with dnd-kit sortable
- [ ] Build ProcessButton (loading morph animation)
- [ ] Build ProgressTracker with Socket.io live updates
- [ ] Build DownloadSection (canvas confetti on success)
- [ ] Build ToolOptions panel (per-tool config)
- [ ] Build HowItWorks (GSAP DrawSVG path)
- [ ] Build ToolFeatures grid
- [ ] Build RelatedTools carousel
- [ ] Build ToolFAQ accordion + JSON-LD schema
- [ ] Build ToolHero + Breadcrumb

### Phase 4: Backend API (Week 3-4)
- [ ] Implement file upload endpoint (Multer + validation)
- [ ] Implement merge.service.js + route
- [ ] Implement split.service.js + route
- [ ] Implement compress.service.js (Ghostscript) + route
- [ ] Implement rotate/crop/organize/watermark
- [ ] Implement protect/unlock (qpdf)
- [ ] Implement sign.service.js
- [ ] Implement PDF → Word/Excel/PPT (LibreOffice)
- [ ] Implement Word/Excel/PPT → PDF
- [ ] Implement PDF → JPG/PNG (Poppler)
- [ ] Implement JPG/PNG/WebP/HEIC → PDF (Sharp)
- [ ] Implement HTML/URL → PDF (Puppeteer)
- [ ] Implement OCR (Tesseract)
- [ ] Implement AI translate (OpenAI)
- [ ] Implement AI summarize (OpenAI)
- [ ] Implement Chat with PDF (LangChain + Pinecone)
- [ ] Implement eBook conversions (Calibre)
- [ ] Implement specialized converters
- [ ] Implement auto-cleanup (node-cron + TTL index)
- [ ] Implement signed download endpoint
- [ ] Set up Bull Board (admin queue monitor)

### Phase 5: SEO & Performance (Week 5)
- [ ] Add React Helmet meta tags for all 100+ tool pages
- [ ] Add JSON-LD schema (SoftwareApplication) per tool
- [ ] Add FAQ JSON-LD schema per tool
- [ ] Generate sitemap.xml with all tool URLs
- [ ] Add robots.txt
- [ ] Test Core Web Vitals (LCP < 2.5s, CLS < 0.1)
- [ ] Add Service Worker (Vite PWA plugin)
- [ ] Test Lighthouse score: target 95+
- [ ] Add Google Analytics 4 + Plausible
- [ ] Check all images use WebP + proper sizing

### Phase 6: Deployment
- [ ] Deploy frontend to Vercel with custom domain
- [ ] Deploy backend to Render with persistent disk
- [ ] Set up MongoDB Atlas with proper indexes
- [ ] Set up Upstash Redis
- [ ] Set up Cloudinary account + environment
- [ ] Set up Sentry for error tracking
- [ ] Configure all environment variables
- [ ] Test all tools end-to-end in production
- [ ] Set up uptime monitoring (BetterStack / UptimeRobot)
- [ ] Set up Vercel Speed Insights

---

## 📊 TOOL METADATA EXAMPLE (tools.data.js)

```javascript
// src/data/tools.data.js
export const TOOLS = [
  {
    id: 'merge-pdf',
    slug: 'merge-pdf',
    name: 'Merge PDF',
    shortDescription: 'Combine multiple PDFs into one file.',
    longDescription: 'Merge multiple PDF files in the exact order you want. Drag to reorder, then download your combined PDF instantly.',
    icon: 'GitMerge',              // Phosphor icon name
    iconColor: '#6366f1',          // Tool accent color
    gradient: 'from-indigo-500 to-purple-500',
    category: 'pdf-core',
    tags: ['merge', 'combine', 'join', 'pdf'],
    isPopular: true,
    isNew: false,
    isAI: false,
    isFeatured: true,
    rating: 4.9,
    totalUses: 2300000,
    maxFiles: 20,
    maxFileSizeMB: 100,
    acceptedFormats: ['.pdf'],
    outputFormat: '.pdf',
    processingTime: '< 5 seconds',
    relatedTools: ['split-pdf', 'compress-pdf', 'organize-pdf', 'rotate-pdf'],
    
    // SEO
    seoTitle: 'Merge PDF Files Online Free – ishu.fun',
    seoDescription: 'Merge multiple PDF files into one. Fast, free, no signup. Drag to reorder pages. Secure and instant.',
    keywords: ['merge pdf', 'combine pdf', 'pdf merger online', 'join pdf files free'],
    
    // FAQ
    faqs: [
      {
        q: 'How many PDF files can I merge at once?',
        a: 'You can merge up to 20 PDF files at once. Each file can be up to 100MB.'
      },
      {
        q: 'Is the PDF merger free?',
        a: 'Yes, completely free. No signup, no watermarks, no limits.'
      },
      // ... 6 more questions
    ],
    
    // Features
    features: [
      { icon: 'Lock', title: '100% Secure', description: 'Files encrypted in transit and deleted after 1 hour' },
      { icon: 'Lightning', title: 'Lightning Fast', description: 'Most PDFs merged in under 5 seconds' },
      { icon: 'DeviceMobile', title: 'Works on Mobile', description: 'Upload from phone, tablet, or desktop' },
      { icon: 'Star', title: 'Always Free', description: 'No hidden charges, no premium tiers' },
      { icon: 'FileText', title: 'All Page Sizes', description: 'A4, Letter, Legal — any page size supported' },
      { icon: 'ArrowsOut', title: 'Drag to Reorder', description: 'Rearrange files in any order before merging' },
    ],
    
    // Schema.org
    schemaOrg: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Merge PDF",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "All",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "15420" }
    }
  },
  // ... all 100+ tools follow same structure
];
```

---

## 🔑 ENVIRONMENT VARIABLES — COMPLETE

```bash
# .env.example — BACKEND

# ══ SERVER ══
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:5173

# ══ DATABASE ══
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ishu-fun
MONGODB_DB_NAME=ishu-fun-tools

# ══ REDIS ══
REDIS_URL=redis://localhost:6379
# OR for Upstash:
# REDIS_URL=rediss://:password@your-endpoint.upstash.io:6380

# ══ AUTH ══
JWT_SECRET=minimum-32-character-super-secret-key-here-replace-this
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=another-different-32-char-secret-key-here
REFRESH_TOKEN_EXPIRES_IN=30d

# ══ FILE STORAGE ══
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
# Cloudinary folder for processed files:
CLOUDINARY_FOLDER=ishu-fun-tools

# Optional: AWS S3 / Cloudflare R2
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
AWS_S3_BUCKET=ishu-fun-uploads

# ══ AI SERVICES ══
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o
OPENAI_MAX_TOKENS=4096

GOOGLE_CLOUD_PROJECT_ID=your-project
GOOGLE_CLOUD_API_KEY=your-key

PINECONE_API_KEY=your-pinecone-key
PINECONE_INDEX_NAME=pdf-chat-index
PINECONE_ENVIRONMENT=us-east-1

# ══ SYSTEM TOOLS ══
# Auto-detected on Linux, but can override:
GHOSTSCRIPT_BIN=/usr/bin/gs
LIBREOFFICE_BIN=/usr/bin/libreoffice
TESSERACT_BIN=/usr/bin/tesseract
CHROMIUM_BIN=/usr/bin/chromium
IMAGEMAGICK_BIN=/usr/bin/convert
CALIBRE_BIN=/usr/bin/ebook-convert
PANDOC_BIN=/usr/bin/pandoc
POPPLER_BIN=/usr/bin/pdftoppm

# ══ UPLOAD CONFIG ══
UPLOAD_DIR=/app/uploads
MAX_FILE_SIZE_MB=100
FILE_EXPIRY_HOURS=1
CLEANUP_INTERVAL_MINUTES=15

# ══ RATE LIMITING ══
FREE_HOURLY_LIMIT=10
PRO_HOURLY_LIMIT=100
RATE_LIMIT_WINDOW_MS=3600000

# ══ BULL BOARD ══
BULL_BOARD_USERNAME=admin
BULL_BOARD_PASSWORD=your-secure-admin-password

# ══ MONITORING ══
SENTRY_DSN=https://your-sentry-dsn
LOG_LEVEL=info
```

```bash
# .env.local — FRONTEND (Vite)
VITE_APP_NAME=ishu.fun Tools
VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=ws://localhost:3000
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_PLAUSIBLE_DOMAIN=ishu.fun
VITE_ENABLE_3D=true        # Disable for performance testing
VITE_ENABLE_PARTICLES=true
VITE_DEBUG_ANIMATIONS=false
```

---

*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*
*TOOLS.MD V5 — ishu.fun | Total Tools: 100+ | Pages: 1 hub + 100+ individual*
*Frontend Libraries: 40+ | Backend Libraries: 35+ | System Tools: 12+*
*Fully production-ready. Deploy on Vercel + Render. Zero placeholders.*
*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*
