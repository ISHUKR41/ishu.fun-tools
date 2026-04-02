import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ToolsHub from './pages/ToolsHub';
import ParticleBackground from './components/ui/ParticleBackground';
import useLenis from './hooks/useLenis';
import useScrollAnimations from './hooks/useScrollAnimations';
import usePageTransition from './hooks/usePageTransition';
import usePassiveListeners from './hooks/usePassiveListeners';
import './styles/globals.css';

// Lazy loading all 80+ distinct tools to adhere to discrete component architecture
const MergePdf = lazy(() => import('./pages/tools/organize/merge-pdf/MergePdf'));
const SplitPdf = lazy(() => import('./pages/tools/organize/split-pdf/SplitPdf'));
const CompressPdf = lazy(() => import('./pages/tools/organize/compress-pdf/CompressPdf'));
const RotatePdf = lazy(() => import('./pages/tools/organize/rotate-pdf/RotatePdf'));
const OrganizePdf = lazy(() => import('./pages/tools/organize/organize-pdf/OrganizePdf'));
const CropPdf = lazy(() => import('./pages/tools/organize/crop-pdf/CropPdf'));
const RepairPdf = lazy(() => import('./pages/tools/organize/repair-pdf/RepairPdf'));
const DeletePages = lazy(() => import('./pages/tools/organize/delete-pages/DeletePages'));
const PdfToWord = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-word/PdfToWord'));
const PdfToExcel = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-excel/PdfToExcel'));
const PdfToPowerpoint = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-powerpoint/PdfToPowerpoint'));
const PdfToJpg = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-jpg/PdfToJpg'));
const PdfToPng = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-png/PdfToPng'));
const PdfToSvg = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-svg/PdfToSvg'));
const PdfToEpub = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-epub/PdfToEpub'));
const PdfToCsv = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-csv/PdfToCsv'));
const PdfToTiff = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-tiff/PdfToTiff'));
const PdfToTxt = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-txt/PdfToTxt'));
const PdfToPdfa = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-pdfa/PdfToPdfa'));
const PdfToRtf = lazy(() => import('./pages/tools/convert-from-pdf/pdf-to-rtf/PdfToRtf'));
const WordToPdf = lazy(() => import('./pages/tools/convert-to-pdf/word-to-pdf/WordToPdf'));
const ExcelToPdf = lazy(() => import('./pages/tools/convert-to-pdf/excel-to-pdf/ExcelToPdf'));
const PowerpointToPdf = lazy(() => import('./pages/tools/convert-to-pdf/powerpoint-to-pdf/PowerpointToPdf'));
const JpgToPdf = lazy(() => import('./pages/tools/convert-to-pdf/jpg-to-pdf/JpgToPdf'));
const PngToPdf = lazy(() => import('./pages/tools/convert-to-pdf/png-to-pdf/PngToPdf'));
const HtmlToPdf = lazy(() => import('./pages/tools/convert-to-pdf/html-to-pdf/HtmlToPdf'));
const UrlToPdf = lazy(() => import('./pages/tools/convert-to-pdf/url-to-pdf/UrlToPdf'));
const EpubToPdf = lazy(() => import('./pages/tools/convert-to-pdf/epub-to-pdf/EpubToPdf'));
const HeicToPdf = lazy(() => import('./pages/tools/convert-to-pdf/heic-to-pdf/HeicToPdf'));
const TiffToPdf = lazy(() => import('./pages/tools/convert-to-pdf/tiff-to-pdf/TiffToPdf'));
const WebpToPdf = lazy(() => import('./pages/tools/convert-to-pdf/webp-to-pdf/WebpToPdf'));
const SvgToPdf = lazy(() => import('./pages/tools/convert-to-pdf/svg-to-pdf/SvgToPdf'));
const CsvToPdf = lazy(() => import('./pages/tools/convert-to-pdf/csv-to-pdf/CsvToPdf'));
const RtfToPdf = lazy(() => import('./pages/tools/convert-to-pdf/rtf-to-pdf/RtfToPdf'));
const TxtToPdf = lazy(() => import('./pages/tools/convert-to-pdf/txt-to-pdf/TxtToPdf'));
const MdToPdf = lazy(() => import('./pages/tools/convert-to-pdf/md-to-pdf/MdToPdf'));
const OdtToPdf = lazy(() => import('./pages/tools/convert-to-pdf/odt-to-pdf/OdtToPdf'));
const GifToPdf = lazy(() => import('./pages/tools/convert-to-pdf/gif-to-pdf/GifToPdf'));
const BmpToPdf = lazy(() => import('./pages/tools/convert-to-pdf/bmp-to-pdf/BmpToPdf'));
const XmlToPdf = lazy(() => import('./pages/tools/convert-to-pdf/xml-to-pdf/XmlToPdf'));
const ZipToPdf = lazy(() => import('./pages/tools/convert-to-pdf/zip-to-pdf/ZipToPdf'));
const MobiToPdf = lazy(() => import('./pages/tools/convert-to-pdf/mobi-to-pdf/MobiToPdf'));
const EbookToPdf = lazy(() => import('./pages/tools/convert-to-pdf/ebook-to-pdf/EbookToPdf'));
const CbzToPdf = lazy(() => import('./pages/tools/convert-to-pdf/cbz-to-pdf/CbzToPdf'));
const CbrToPdf = lazy(() => import('./pages/tools/convert-to-pdf/cbr-to-pdf/CbrToPdf'));
const DwgToPdf = lazy(() => import('./pages/tools/convert-to-pdf/dwg-to-pdf/DwgToPdf'));
const AiToPdf = lazy(() => import('./pages/tools/convert-to-pdf/ai-to-pdf/AiToPdf'));
const XpsToPdf = lazy(() => import('./pages/tools/convert-to-pdf/xps-to-pdf/XpsToPdf'));
const PubToPdf = lazy(() => import('./pages/tools/convert-to-pdf/pub-to-pdf/PubToPdf'));
const EmlToPdf = lazy(() => import('./pages/tools/convert-to-pdf/eml-to-pdf/EmlToPdf'));
const WpsToPdf = lazy(() => import('./pages/tools/convert-to-pdf/wps-to-pdf/WpsToPdf'));
const DjvuToPdf = lazy(() => import('./pages/tools/convert-to-pdf/djvu-to-pdf/DjvuToPdf'));
const HwpToPdf = lazy(() => import('./pages/tools/convert-to-pdf/hwp-to-pdf/HwpToPdf'));
const Fb2ToPdf = lazy(() => import('./pages/tools/convert-to-pdf/fb2-to-pdf/Fb2ToPdf'));
const ChmToPdf = lazy(() => import('./pages/tools/convert-to-pdf/chm-to-pdf/ChmToPdf'));
const JfifToPdf = lazy(() => import('./pages/tools/convert-to-pdf/jfif-to-pdf/JfifToPdf'));
const HeifToPdf = lazy(() => import('./pages/tools/convert-to-pdf/heif-to-pdf/HeifToPdf'));
const ImageToPdf = lazy(() => import('./pages/tools/convert-to-pdf/image-to-pdf/ImageToPdf'));
const ProtectPdf = lazy(() => import('./pages/tools/pdf-security/protect-pdf/ProtectPdf'));
const UnlockPdf = lazy(() => import('./pages/tools/pdf-security/unlock-pdf/UnlockPdf'));
const SignPdf = lazy(() => import('./pages/tools/pdf-security/sign-pdf/SignPdf'));
const EditPdf = lazy(() => import('./pages/tools/edit-pdf/edit-pdf/EditPdf'));
const WatermarkPdf = lazy(() => import('./pages/tools/edit-pdf/watermark-pdf/WatermarkPdf'));
const AnnotatePdf = lazy(() => import('./pages/tools/edit-pdf/annotate-pdf/AnnotatePdf'));
const PageNumbersPdf = lazy(() => import('./pages/tools/edit-pdf/page-numbers-pdf/PageNumbersPdf'));
const HeaderFooterPdf = lazy(() => import('./pages/tools/edit-pdf/header-footer-pdf/HeaderFooterPdf'));
const RedactPdf = lazy(() => import('./pages/tools/edit-pdf/redact-pdf/RedactPdf'));
const GrayscalePdf = lazy(() => import('./pages/tools/edit-pdf/grayscale-pdf/GrayscalePdf'));
const WhiteoutPdf = lazy(() => import('./pages/tools/edit-pdf/whiteout-pdf/WhiteoutPdf'));
const PdfFiller = lazy(() => import('./pages/tools/edit-pdf/pdf-filler/PdfFiller'));
const HighlightPdf = lazy(() => import('./pages/tools/edit-pdf/highlight-pdf/HighlightPdf'));
const FlattenPdf = lazy(() => import('./pages/tools/edit-pdf/flatten-pdf/FlattenPdf'));
const AddTextPdf = lazy(() => import('./pages/tools/edit-pdf/add-text-pdf/AddTextPdf'));
const ExtractPages = lazy(() => import('./pages/tools/extract/extract-pages/ExtractPages'));
const ExtractText = lazy(() => import('./pages/tools/extract/extract-text/ExtractText'));
const ExtractImages = lazy(() => import('./pages/tools/extract/extract-images/ExtractImages'));
const EditMetadata = lazy(() => import('./pages/tools/extract/edit-metadata/EditMetadata'));
const RemoveMetadata = lazy(() => import('./pages/tools/extract/remove-metadata/RemoveMetadata'));
const CreatePdf = lazy(() => import('./pages/tools/extract/create-pdf/CreatePdf'));
const ResizePages = lazy(() => import('./pages/tools/extract/resize-pages/ResizePages'));
const OcrPdf = lazy(() => import('./pages/tools/ai-powered/ocr-pdf/OcrPdf'));
const TranslatePdf = lazy(() => import('./pages/tools/ai-powered/translate-pdf/TranslatePdf'));
const SummarizePdf = lazy(() => import('./pages/tools/ai-powered/summarize-pdf/SummarizePdf'));
const ChatWithPdf = lazy(() => import('./pages/tools/ai-powered/chat-with-pdf/ChatWithPdf'));
const ComparePdf = lazy(() => import('./pages/tools/advanced/compare-pdf/ComparePdf'));
const ScanToPdf = lazy(() => import('./pages/tools/advanced/scan-to-pdf/ScanToPdf'));
const PdfViewer = lazy(() => import('./pages/tools/advanced/pdf-viewer/PdfViewer'));
const AddImageToPdf = lazy(() => import('./pages/tools/advanced/add-image-to-pdf/AddImageToPdf'));
// Fallback Tools Template for anything not hardcoded
const ToolPage = lazy(() => import('./pages/ToolPage'));

function PageLoader() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', color: 'var(--color-text-muted)', fontSize: '14px',
    }}>
      Loading...
    </div>
  );
}

// Route transition animation variants (optimized for 60fps performance)
const pageVariants = {
  initial: {
    opacity: 0,
    y: 8
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] // Custom easing for smoother feel
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

function PageWrapper({ children }) {
  usePageTransition();

  return (
    <motion.div
      className="page-wrapper"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{
        willChange: 'opacity, transform',
        position: 'relative',
        zIndex: 1
      }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  useLenis(); // Initialize Lenis globally within the Router context
  useScrollAnimations(); // Initialize scroll-triggered animations
  usePassiveListeners(); // ULTRA-OPTIMIZED: Passive event listeners for 90-120 FPS

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/tools" replace />} />
        
        <Route path="/tools" element={<PageWrapper><ToolsHub /></PageWrapper>} />
        
        <Route path="/tools/merge-pdf" element={<PageWrapper><MergePdf /></PageWrapper>} />
        <Route path="/tools/split-pdf" element={<PageWrapper><SplitPdf /></PageWrapper>} />
        <Route path="/tools/compress-pdf" element={<PageWrapper><CompressPdf /></PageWrapper>} />
        <Route path="/tools/rotate-pdf" element={<PageWrapper><RotatePdf /></PageWrapper>} />
        <Route path="/tools/organize-pdf" element={<PageWrapper><OrganizePdf /></PageWrapper>} />
        <Route path="/tools/crop-pdf" element={<PageWrapper><CropPdf /></PageWrapper>} />
        <Route path="/tools/repair-pdf" element={<PageWrapper><RepairPdf /></PageWrapper>} />
        <Route path="/tools/delete-pages" element={<PageWrapper><DeletePages /></PageWrapper>} />
        <Route path="/tools/pdf-to-word" element={<PageWrapper><PdfToWord /></PageWrapper>} />
        <Route path="/tools/pdf-to-excel" element={<PageWrapper><PdfToExcel /></PageWrapper>} />
        <Route path="/tools/pdf-to-powerpoint" element={<PageWrapper><PdfToPowerpoint /></PageWrapper>} />
        <Route path="/tools/pdf-to-jpg" element={<PageWrapper><PdfToJpg /></PageWrapper>} />
        <Route path="/tools/pdf-to-png" element={<PageWrapper><PdfToPng /></PageWrapper>} />
        <Route path="/tools/pdf-to-svg" element={<PageWrapper><PdfToSvg /></PageWrapper>} />
        <Route path="/tools/pdf-to-epub" element={<PageWrapper><PdfToEpub /></PageWrapper>} />
        <Route path="/tools/pdf-to-csv" element={<PageWrapper><PdfToCsv /></PageWrapper>} />
        <Route path="/tools/pdf-to-tiff" element={<PageWrapper><PdfToTiff /></PageWrapper>} />
        <Route path="/tools/pdf-to-txt" element={<PageWrapper><PdfToTxt /></PageWrapper>} />
        <Route path="/tools/pdf-to-pdfa" element={<PageWrapper><PdfToPdfa /></PageWrapper>} />
        <Route path="/tools/pdf-to-rtf" element={<PageWrapper><PdfToRtf /></PageWrapper>} />
        <Route path="/tools/word-to-pdf" element={<PageWrapper><WordToPdf /></PageWrapper>} />
        <Route path="/tools/excel-to-pdf" element={<PageWrapper><ExcelToPdf /></PageWrapper>} />
        <Route path="/tools/powerpoint-to-pdf" element={<PageWrapper><PowerpointToPdf /></PageWrapper>} />
        <Route path="/tools/jpg-to-pdf" element={<PageWrapper><JpgToPdf /></PageWrapper>} />
        <Route path="/tools/png-to-pdf" element={<PageWrapper><PngToPdf /></PageWrapper>} />
        <Route path="/tools/html-to-pdf" element={<PageWrapper><HtmlToPdf /></PageWrapper>} />
        <Route path="/tools/url-to-pdf" element={<PageWrapper><UrlToPdf /></PageWrapper>} />
        <Route path="/tools/epub-to-pdf" element={<PageWrapper><EpubToPdf /></PageWrapper>} />
        <Route path="/tools/heic-to-pdf" element={<PageWrapper><HeicToPdf /></PageWrapper>} />
        <Route path="/tools/tiff-to-pdf" element={<PageWrapper><TiffToPdf /></PageWrapper>} />
        <Route path="/tools/webp-to-pdf" element={<PageWrapper><WebpToPdf /></PageWrapper>} />
        <Route path="/tools/svg-to-pdf" element={<PageWrapper><SvgToPdf /></PageWrapper>} />
        <Route path="/tools/csv-to-pdf" element={<PageWrapper><CsvToPdf /></PageWrapper>} />
        <Route path="/tools/rtf-to-pdf" element={<PageWrapper><RtfToPdf /></PageWrapper>} />
        <Route path="/tools/txt-to-pdf" element={<PageWrapper><TxtToPdf /></PageWrapper>} />
        <Route path="/tools/md-to-pdf" element={<PageWrapper><MdToPdf /></PageWrapper>} />
        <Route path="/tools/odt-to-pdf" element={<PageWrapper><OdtToPdf /></PageWrapper>} />
        <Route path="/tools/gif-to-pdf" element={<PageWrapper><GifToPdf /></PageWrapper>} />
        <Route path="/tools/bmp-to-pdf" element={<PageWrapper><BmpToPdf /></PageWrapper>} />
        <Route path="/tools/xml-to-pdf" element={<PageWrapper><XmlToPdf /></PageWrapper>} />
        <Route path="/tools/zip-to-pdf" element={<PageWrapper><ZipToPdf /></PageWrapper>} />
        <Route path="/tools/mobi-to-pdf" element={<PageWrapper><MobiToPdf /></PageWrapper>} />
        <Route path="/tools/ebook-to-pdf" element={<PageWrapper><EbookToPdf /></PageWrapper>} />
        <Route path="/tools/cbz-to-pdf" element={<PageWrapper><CbzToPdf /></PageWrapper>} />
        <Route path="/tools/cbr-to-pdf" element={<PageWrapper><CbrToPdf /></PageWrapper>} />
        <Route path="/tools/dwg-to-pdf" element={<PageWrapper><DwgToPdf /></PageWrapper>} />
        <Route path="/tools/ai-to-pdf" element={<PageWrapper><AiToPdf /></PageWrapper>} />
        <Route path="/tools/xps-to-pdf" element={<PageWrapper><XpsToPdf /></PageWrapper>} />
        <Route path="/tools/pub-to-pdf" element={<PageWrapper><PubToPdf /></PageWrapper>} />
        <Route path="/tools/eml-to-pdf" element={<PageWrapper><EmlToPdf /></PageWrapper>} />
        <Route path="/tools/wps-to-pdf" element={<PageWrapper><WpsToPdf /></PageWrapper>} />
        <Route path="/tools/djvu-to-pdf" element={<PageWrapper><DjvuToPdf /></PageWrapper>} />
        <Route path="/tools/hwp-to-pdf" element={<PageWrapper><HwpToPdf /></PageWrapper>} />
        <Route path="/tools/fb2-to-pdf" element={<PageWrapper><Fb2ToPdf /></PageWrapper>} />
        <Route path="/tools/chm-to-pdf" element={<PageWrapper><ChmToPdf /></PageWrapper>} />
        <Route path="/tools/jfif-to-pdf" element={<PageWrapper><JfifToPdf /></PageWrapper>} />
        <Route path="/tools/heif-to-pdf" element={<PageWrapper><HeifToPdf /></PageWrapper>} />
        <Route path="/tools/image-to-pdf" element={<PageWrapper><ImageToPdf /></PageWrapper>} />
        <Route path="/tools/protect-pdf" element={<PageWrapper><ProtectPdf /></PageWrapper>} />
        <Route path="/tools/unlock-pdf" element={<PageWrapper><UnlockPdf /></PageWrapper>} />
        <Route path="/tools/sign-pdf" element={<PageWrapper><SignPdf /></PageWrapper>} />
        <Route path="/tools/edit-pdf" element={<PageWrapper><EditPdf /></PageWrapper>} />
        <Route path="/tools/watermark-pdf" element={<PageWrapper><WatermarkPdf /></PageWrapper>} />
        <Route path="/tools/annotate-pdf" element={<PageWrapper><AnnotatePdf /></PageWrapper>} />
        <Route path="/tools/page-numbers-pdf" element={<PageWrapper><PageNumbersPdf /></PageWrapper>} />
        <Route path="/tools/header-footer-pdf" element={<PageWrapper><HeaderFooterPdf /></PageWrapper>} />
        <Route path="/tools/redact-pdf" element={<PageWrapper><RedactPdf /></PageWrapper>} />
        <Route path="/tools/grayscale-pdf" element={<PageWrapper><GrayscalePdf /></PageWrapper>} />
        <Route path="/tools/whiteout-pdf" element={<PageWrapper><WhiteoutPdf /></PageWrapper>} />
        <Route path="/tools/pdf-filler" element={<PageWrapper><PdfFiller /></PageWrapper>} />
        <Route path="/tools/highlight-pdf" element={<PageWrapper><HighlightPdf /></PageWrapper>} />
        <Route path="/tools/flatten-pdf" element={<PageWrapper><FlattenPdf /></PageWrapper>} />
        <Route path="/tools/add-text-pdf" element={<PageWrapper><AddTextPdf /></PageWrapper>} />
        <Route path="/tools/extract-pages" element={<PageWrapper><ExtractPages /></PageWrapper>} />
        <Route path="/tools/extract-text" element={<PageWrapper><ExtractText /></PageWrapper>} />
        <Route path="/tools/extract-images" element={<PageWrapper><ExtractImages /></PageWrapper>} />
        <Route path="/tools/edit-metadata" element={<PageWrapper><EditMetadata /></PageWrapper>} />
        <Route path="/tools/remove-metadata" element={<PageWrapper><RemoveMetadata /></PageWrapper>} />
        <Route path="/tools/create-pdf" element={<PageWrapper><CreatePdf /></PageWrapper>} />
        <Route path="/tools/resize-pages" element={<PageWrapper><ResizePages /></PageWrapper>} />
        <Route path="/tools/ocr-pdf" element={<PageWrapper><OcrPdf /></PageWrapper>} />
        <Route path="/tools/translate-pdf" element={<PageWrapper><TranslatePdf /></PageWrapper>} />
        <Route path="/tools/summarize-pdf" element={<PageWrapper><SummarizePdf /></PageWrapper>} />
        <Route path="/tools/chat-with-pdf" element={<PageWrapper><ChatWithPdf /></PageWrapper>} />
        <Route path="/tools/compare-pdf" element={<PageWrapper><ComparePdf /></PageWrapper>} />
        <Route path="/tools/scan-to-pdf" element={<PageWrapper><ScanToPdf /></PageWrapper>} />
        <Route path="/tools/pdf-viewer" element={<PageWrapper><PdfViewer /></PageWrapper>} />
        <Route path="/tools/add-image-to-pdf" element={<PageWrapper><AddImageToPdf /></PageWrapper>} />

        {/* Dynamic Fallback for newly added routes not in the hardcoded list */}
        <Route path="/tools/:slug" element={<PageWrapper><ToolPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ParticleBackground />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
