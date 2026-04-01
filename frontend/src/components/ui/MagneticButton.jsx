import { forwardRef } from 'react';
import useMagneticEffect from '../../hooks/useMagneticEffect';
import './MagneticButton.css';

const MagneticButton = forwardRef(
  ({ children, className = '', strength = 0.3, variant = 'primary', ...props }, ref) => {
    const magneticRef = useMagneticEffect(strength);

    return (
      <button
        ref={(node) => {
          magneticRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={`magnetic-button magnetic-button--${variant} ${className}`}
        {...props}
      >
        <span className="magnetic-button__inner">{children}</span>
      </button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';

export default MagneticButton;
