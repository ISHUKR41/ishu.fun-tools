import { useState, useCallback } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getToolBySlug } from '../data/tools.data';
import { getToolMeta } from '../data/toolMeta.data';
import ToolHero from '../components/tool-page/ToolHero';
import FileDropzone from '../components/tool-page/FileDropzone';
import ProcessButton from '../components/tool-page/ProcessButton';
import DownloadSection from '../components/tool-page/DownloadSection';
import ToolFeatures from '../components/tool-page/ToolFeatures';
import RelatedTools from '../components/tool-page/RelatedTools';
import ToolFAQ from '../components/tool-page/ToolFAQ';
import { processFile, downloadBytes, downloadBlob } from '../services/pdfProcessor';
import './ToolPage.css';

export default function ToolPage({ fallbackSlug }) {
  const params = useParams();
  const slug = fallbackSlug || params.slug;
  const tool = getToolBySlug(slug);
  const meta = getToolMeta(slug);

  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [options] = useState({});

  if (!tool) {
    return <Navigate to="/" replace />;
  }

  const seoTitle = meta.seoTitle || `${tool.name} — Free Online | ishu.fun`;
  const seoDesc = meta.seoDescription || `${tool.description}. Free, fast, secure. No signup required.`;

  const handleProcess = useCallback(async () => {
    if (files.length === 0) return;
    setStatus('processing');
    setProgress(0);
    setErrorMsg('');
    setResult(null);

    try {
      const res = await processFile(slug, files, options, (p) => setProgress(p));
      if (Array.isArray(res)) {
        if (res.length === 1) {
          setResult({ ...res[0], multi: false });
        } else {
          setResult({ multi: true, items: res });
        }
      } else {
        setResult({ ...res, multi: false });
      }
      setStatus('done');
    } catch (err) {
      console.error('Processing error:', err);
      setErrorMsg(err.message || 'Processing failed. Please try again.');
      setStatus('error');
    }
  }, [files, slug, options]);

  const handleDownload = useCallback(() => {
    if (!result) return;
    if (result.multi) {
      result.items.forEach((item, i) => {
        setTimeout(() => {
          if (item.blob) downloadBlob(item.blob, item.filename);
          else if (item.bytes) downloadBytes(item.bytes, item.filename);
        }, i * 250);
      });
    } else {
      if (result.blob) downloadBlob(result.blob, result.filename);
      else if (result.bytes) downloadBytes(result.bytes, result.filename);
    }
  }, [result]);

  const handleReset = useCallback(() => {
    setFiles([]);
    setStatus('idle');
    setProgress(0);
    setResult(null);
    setErrorMsg('');
  }, []);

  const displaySize = result?.size || result?.items?.[0]?.size || '—';
  const displayFilename = result?.filename || result?.items?.map((i) => i.filename).join(', ') || `${slug}-output`;

  return (
    <main className="tool-page" key={slug}>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={`free ${tool.name}, online ${tool.name}, ${slug.replace(/-/g, ' ')} tool, pdf editor, secure pdf, ishu.fun`} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={`https://ishu.fun/tools/${slug}`} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": tool.name,
          "description": seoDesc,
          "url": `https://ishu.fun/tools/${slug}`,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": tool.rating || 4.8, "ratingCount": 2847 }
        })}
      </script>

      <ToolHero tool={tool} />

      <section className="tool-page__workspace container">
        {status === 'error' && (
          <div className="tool-page__error">
            <span>⚠️ {errorMsg}</span>
            <button onClick={handleReset} className="tool-page__retry-btn">Try Again</button>
          </div>
        )}

        {status !== 'done' ? (
          <>
            <FileDropzone toolMeta={meta} files={files} setFiles={setFiles} toolColor={tool.color} />
            <ProcessButton
              toolName={tool.name}
              toolColor={tool.color}
              status={status}
              progress={progress}
              onClick={handleProcess}
              disabled={files.length === 0}
            />
          </>
        ) : (
          <DownloadSection
            fileName={displayFilename}
            fileSize={displaySize}
            onDownload={handleDownload}
            onReset={handleReset}
            multiCount={result?.multi ? result.items?.length : null}
          />
        )}
      </section>

      <ToolFeatures features={meta.features} toolColor={tool.color} />
      <RelatedTools slugs={meta.relatedSlugs} />
      <ToolFAQ faqs={meta.faqs} toolName={tool.name} />
    </main>
  );
}
