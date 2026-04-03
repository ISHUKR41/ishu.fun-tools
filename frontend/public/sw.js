// Service Worker for ishu.fun-tools
// Provides offline support and instant loading via caching
// Target: 90-120 FPS with zero-lag page loads

const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `ishu-fun-tools-${CACHE_VERSION}`;

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Network first, fallback to cache (for API calls)
  networkFirst: async (request) => {
    try {
      const response = await fetch(request);
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
      return response;
    } catch (error) {
      const cached = await caches.match(request);
      return cached || new Response('Offline', { status: 503 });
    }
  },

  // Cache first, fallback to network (for static assets)
  cacheFirst: async (request) => {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
      const response = await fetch(request);
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
      return response;
    } catch (error) {
      return new Response('Offline', { status: 503 });
    }
  },

  // Network only (for dynamic content)
  networkOnly: async (request) => {
    return fetch(request);
  },
};

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - apply caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome extensions
  if (url.protocol === 'chrome-extension:') return;

  // Determine strategy based on request type
  let strategy;

  if (url.pathname.startsWith('/api/')) {
    // API requests: network first
    strategy = CACHE_STRATEGIES.networkFirst;
  } else if (
    url.pathname.match(/\.(js|css|woff2?|ttf|otf|eot)$/) ||
    url.pathname.startsWith('/assets/')
  ) {
    // Static assets: cache first
    strategy = CACHE_STRATEGIES.cacheFirst;
  } else if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
    // Images: cache first
    strategy = CACHE_STRATEGIES.cacheFirst;
  } else {
    // HTML pages: network first
    strategy = CACHE_STRATEGIES.networkFirst;
  }

  event.respondWith(strategy(request));
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-tools-data') {
    event.waitUntil(syncToolsData());
  }
});

async function syncToolsData() {
  // Sync any offline actions when back online
  console.log('Syncing tools data...');
}

// Push notifications (optional - for future use)
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  const options = {
    body: data.body || 'New update available!',
    icon: '/icon-192.png',
    badge: '/icon-96.png',
    vibrate: [200, 100, 200],
  };

  event.waitUntil(self.registration.showNotification(data.title || 'ishu.fun', options));
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});
