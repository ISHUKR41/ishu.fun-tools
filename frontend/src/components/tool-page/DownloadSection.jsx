import { motion } from 'framer-motion';
import { Download, Copy, RefreshCw, Clock } from 'lucide-react';
import './DownloadSection.css';

export default function DownloadSection({ fileName, fileSize, onReset }) {
  return (
    <motion.div
      className="download-section"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="download-section__success">
        <div className="download-section__check">✓</div>
        <h3 className="download-section__title">Your file is ready!</h3>
      </div>

      <div className="download-section__file">
        <span className="download-section__name">{fileName || 'processed-file.pdf'}</span>
        <span className="download-section__size">{fileSize || '2.4 MB'}</span>
      </div>

      <div className="download-section__actions">
        <button className="download-section__btn download-section__btn--primary">
          <Download size={18} />
          Download
        </button>
        <button className="download-section__btn download-section__btn--secondary">
          <Copy size={16} />
          Copy Link
        </button>
        <button
          className="download-section__btn download-section__btn--secondary"
          onClick={onReset}
        >
          <RefreshCw size={16} />
          Process Another
        </button>
      </div>

      <div className="download-section__notice">
        <Clock size={13} />
        <span>Files auto-deleted in 1 hour for security</span>
      </div>
    </motion.div>
  );
}
