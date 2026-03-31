import { motion } from 'framer-motion';
import { Loader2, Check, ArrowRight } from 'lucide-react';
import './ProcessButton.css';

export default function ProcessButton({ toolName, toolColor, status, onClick, disabled }) {
  const isIdle = status === 'idle';
  const isProcessing = status === 'processing';
  const isDone = status === 'done';

  return (
    <motion.button
      className={`process-btn process-btn--${status}`}
      style={{ '--btn-color': toolColor }}
      onClick={onClick}
      disabled={disabled || isProcessing}
      whileHover={isIdle ? { scale: 1.02 } : {}}
      whileTap={isIdle ? { scale: 0.97 } : {}}
    >
      <span className="process-btn__shimmer" />

      {isIdle && (
        <motion.span className="process-btn__label" layoutId="btn-content">
          {toolName} <ArrowRight size={18} />
        </motion.span>
      )}

      {isProcessing && (
        <motion.span className="process-btn__label" layoutId="btn-content">
          <Loader2 size={18} className="process-btn__spin" />
          Processing...
        </motion.span>
      )}

      {isDone && (
        <motion.span className="process-btn__label" layoutId="btn-content">
          <Check size={18} />
          Done — Download Below
        </motion.span>
      )}
    </motion.button>
  );
}
