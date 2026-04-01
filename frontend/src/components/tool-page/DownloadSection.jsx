import { motion } from 'framer-motion';
import { Download, RefreshCw, Clock, CheckCircle, Files } from 'lucide-react';
import './DownloadSection.css';

export default function DownloadSection({ fileName, fileSize, onDownload, onReset, multiCount }) {
  return (
    <motion.div
      className="download-section"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="download-section__success">
        <motion.div
          className="download-section__check"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 400, damping: 20 }}
        >
          <CheckCircle size={48} strokeWidth={1.5} />
        </motion.div>
        <h3 className="download-section__title">
          {multiCount ? `${multiCount} files ready!` : 'Your file is ready!'}
        </h3>
        {multiCount && (
          <p className="download-section__subtitle">All {multiCount} files will download automatically</p>
        )}
      </div>

      <div className="download-section__file">
        {multiCount ? <Files size={18} /> : null}
        <span className="download-section__name">{fileName || 'processed-file.pdf'}</span>
        <span className="download-section__size">{fileSize || '—'}</span>
      </div>

      <div className="download-section__actions">
        <motion.button
          className="download-section__btn download-section__btn--primary"
          onClick={onDownload}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          <Download size={18} />
          {multiCount ? `Download All (${multiCount})` : 'Download'}
        </motion.button>
        <motion.button
          className="download-section__btn download-section__btn--secondary"
          onClick={onReset}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <RefreshCw size={16} />
          Process Another
        </motion.button>
      </div>

      <div className="download-section__notice">
        <Clock size={13} />
        <span>Files processed locally — nothing uploaded to servers</span>
      </div>
    </motion.div>
  );
}
