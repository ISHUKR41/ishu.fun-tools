import { useEffect } from 'react';

/**
 * Ultra-optimized passive event listeners for 90-120 FPS scroll/touch performance
 * Prevents main thread blocking by marking listeners as passive
 */
export default function usePassiveListeners() {
  useEffect(() => {
    // Store original addEventListener
    const originalAddEventListener = EventTarget.prototype.addEventListener;

    // Override addEventListener to make scroll/touch events passive by default
    EventTarget.prototype.addEventListener = function(type, listener, options) {
      // Events that benefit from passive listeners
      const passiveEvents = ['scroll', 'wheel', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'mousewheel'];

      if (passiveEvents.includes(type)) {
        // Convert options to object if boolean
        const opts = typeof options === 'boolean' ? { capture: options } : options || {};

        // Set passive: true unless explicitly set to false
        if (!opts.hasOwnProperty('passive')) {
          opts.passive = true;
        }

        return originalAddEventListener.call(this, type, listener, opts);
      }

      return originalAddEventListener.call(this, type, listener, options);
    };

    // Cleanup: restore original addEventListener
    return () => {
      EventTarget.prototype.addEventListener = originalAddEventListener;
    };
  }, []);
}
