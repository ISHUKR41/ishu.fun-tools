import { useEffect } from 'react';

/**
 * Service Worker Registration Hook
 * Enables offline support and instant page loads
 * Only registers in production for security
 */
export default function useServiceWorker() {
  useEffect(() => {
    // Only register in production
    if (process.env.NODE_ENV !== 'production') return;

    // Check if service workers are supported
    if (!('serviceWorker' in navigator)) {
      console.log('Service workers not supported');
      return;
    }

    // Register service worker
    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
        });

        console.log('Service Worker registered:', registration.scope);

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;

          newWorker?.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker available
              console.log('New version available! Refresh to update.');

              // Optional: Show update notification to user
              if (window.confirm('New version available! Reload to update?')) {
                window.location.reload();
              }
            }
          });
        });

        // Auto-update check every hour
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    };

    // Register on load
    if (document.readyState === 'complete') {
      registerServiceWorker();
    } else {
      window.addEventListener('load', registerServiceWorker);
    }

    return () => {
      window.removeEventListener('load', registerServiceWorker);
    };
  }, []);
}

/**
 * Check if app is running in standalone mode (installed as PWA)
 */
export function useIsPWA() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

/**
 * Prompt user to install PWA
 */
export function useInstallPrompt() {
  useEffect(() => {
    let deferredPrompt;

    const handleBeforeInstallPrompt = (e) => {
      // Prevent default prompt
      e.preventDefault();
      deferredPrompt = e;

      // Optionally show custom install button
      console.log('PWA install prompt available');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Handle install
    window.showInstallPrompt = async () => {
      if (!deferredPrompt) return;

      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      console.log(`User ${outcome === 'accepted' ? 'accepted' : 'dismissed'} the install prompt`);
      deferredPrompt = null;
    };

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);
}
