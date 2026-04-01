import { motion } from 'framer-motion';
import { Loader2, Check, ArrowRight } from 'lucide-react';
import './ProcessButton.css';

export default function ProcessButton({ toolName, toolColor, status, progress = 0, onClick, disabled }) {
  const isIdle = status === 'idle';
  const isProcessing = status === 'processing';
  const isDone = status === 'done';

  return (
    <div className="process-btn-wrapper">
      <motion.button
        className={`process-btn process-btn--${status}`}
        style={{ '--btn-color': toolColor }}
        onClick={onClick}
        disabled={disabled || isProcessing}
        whileHover={isIdle && !disabled ? { scale: 1.02, y: -1 } : {}}
        whileTap={isIdle && !disabled ? { scale: 0.97 } : {}}
      >
        <span className="process-btn__shimmer" />

        {isIdle && (
          <span className="process-btn__label">
            {toolName} <ArrowRight size={18} />
          </span>
        )}

        {isProcessing && (
          <span className="process-btn__label">
            <Loader2 size={18} className="process-btn__spin" />
            Processing... {progress > 0 && progress < 100 ? `${progress}%` : ''}
          </span>
        )}

        {isDone && (
          <span className="process-btn__label">
            <Check size={18} />
            Done — Download Below
          </span>
        )}
      </motion.button>

      {isProcessing && (
        <div className="process-btn__progress-bar">
          <motion.div
            className="process-btn__progress-fill"
            style={{ '--fill-color': toolColor }}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      )}
    </div>
  );
}
