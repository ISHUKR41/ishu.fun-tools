/**
 * Performance Monitoring Utility for ishu.fun-tools
 * Tracks Core Web Vitals and provides insights for optimization
 */

// Core Web Vitals tracking
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Log performance metrics in development
  if (import.meta.env.DEV) {
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
        console.log('FCP:', Math.round(entry.startTime), 'ms');
      }
    });

    try {
      fcpObserver.observe({ type: 'paint', buffered: true });
    } catch (e) {
      // Browser doesn't support
    }

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', Math.round(lastEntry.startTime), 'ms');
    });

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      // Browser doesn't support
    }

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          console.log('CLS:', clsValue.toFixed(3));
        }
      }
    });

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // Browser doesn't support
    }

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const fid = entry.processingStart - entry.startTime;
        console.log('FID:', Math.round(fid), 'ms');
      }
    });

    try {
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      // Browser doesn't support
    }
  }

  // Report long tasks
  if ('PerformanceObserver' in window) {
    const longTaskObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (import.meta.env.DEV) {
          console.warn('Long Task detected:', Math.round(entry.duration), 'ms');
        }
      }
    });

    try {
      longTaskObserver.observe({ type: 'longtask', buffered: true });
    } catch (e) {
      // Browser doesn't support
    }
  }
}

// Memory usage monitoring (for development)
export function logMemoryUsage() {
  if (import.meta.env.DEV && performance.memory) {
    console.log('Memory:', {
      usedJSHeapSize: `${Math.round(performance.memory.usedJSHeapSize / 1048576)} MB`,
      totalJSHeapSize: `${Math.round(performance.memory.totalJSHeapSize / 1048576)} MB`,
      jsHeapSizeLimit: `${Math.round(performance.memory.jsHeapSizeLimit / 1048576)} MB`,
    });
  }
}

// Frame rate monitoring
export function startFPSMonitoring() {
  if (!import.meta.env.DEV) return;

  let lastTime = performance.now();
  let frames = 0;
  let fps = 60;

  function measureFPS() {
    const currentTime = performance.now();
    frames++;

    if (currentTime >= lastTime + 1000) {
      fps = Math.round((frames * 1000) / (currentTime - lastTime));

      // Warn if FPS drops below 50
      if (fps < 50) {
        console.warn(`Low FPS detected: ${fps} fps`);
      }

      frames = 0;
      lastTime = currentTime;
    }

    requestAnimationFrame(measureFPS);
  }

  requestAnimationFrame(measureFPS);
}

// Bundle size analysis helper
export function logBundleInfo() {
  if (import.meta.env.DEV) {
    const scripts = document.querySelectorAll('script[src]');
    console.log(`Loaded ${scripts.length} script files`);
  }
}

// Page load time
export function logPageLoadTime() {
  if (typeof window !== 'undefined' && window.performance) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;

        if (import.meta.env.DEV) {
          console.log('Page Load Time:', Math.round(pageLoadTime), 'ms');
          console.log('DOM Ready Time:', Math.round(domReadyTime), 'ms');
        }
      }, 0);
    });
  }
}

// Initialize all monitoring
export function initAllMonitoring() {
  initPerformanceMonitoring();
  logPageLoadTime();

  // Delayed monitoring to avoid affecting initial load
  setTimeout(() => {
    logMemoryUsage();
    logBundleInfo();

    if (import.meta.env.DEV) {
      startFPSMonitoring();
    }
  }, 3000);
}
