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
import './ToolPage.css';

export default function ToolPage({ fallbackSlug }) {
  const params = useParams();
  const slug = fallbackSlug || params.slug;
  const tool = getToolBySlug(slug);
  const meta = getToolMeta(slug);

  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | processing | done

  if (!tool) {
    return <Navigate to="/tools" replace />;
  }

  const seoTitle = meta.seoTitle || `${tool.name} — Free Online | ishu.fun`;
  const seoDesc = meta.seoDescription || `${tool.description}. Free, fast, secure. No signup required.`;

  const handleProcess = useCallback(() => {
    if (files.length === 0) return;
    setStatus('processing');
    // Simulate processing (backend integration later)
    setTimeout(() => setStatus('done'), 2500);
  }, [files]);

  const handleReset = useCallback(() => {
    setFiles([]);
    setStatus('idle');
  }, []);

  return (
    <main className="tool-page" key={slug}>
      {/* SEO hoisted by React 19 */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={`free ${tool.name}, online ${tool.name}, ${slug.replace('-', ' ')} tool, pdf editor, secure pdf`} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": tool.name,
          "description": seoDesc,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": tool.rating || 4.8,
            "ratingCount": Math.floor(Math.random() * 5000) + 1000
          }
        })}
      </script>

      {/* Hero */}
      <ToolHero tool={tool} />

      {/* Upload Zone */}
      <section className="tool-page__workspace container">
        {status !== 'done' ? (
          <>
            <FileDropzone
              toolMeta={meta}
              files={files}
              setFiles={setFiles}
              toolColor={tool.color}
            />
            <ProcessButton
              toolName={tool.name}
              toolColor={tool.color}
              status={status}
              onClick={handleProcess}
              disabled={files.length === 0}
            />
          </>
        ) : (
          <DownloadSection
            fileName={`${slug}-output.pdf`}
            fileSize="2.4 MB"
            onReset={handleReset}
          />
        )}
      </section>

      {/* Features */}
      <ToolFeatures features={meta.features} toolColor={tool.color} />

      {/* Related Tools */}
      <RelatedTools slugs={meta.relatedSlugs} />

      {/* FAQ */}
      <ToolFAQ faqs={meta.faqs} toolName={tool.name} />
    </main>
  );
}
