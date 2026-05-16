const APP_VERSION = 'v15.0.0';
const CACHE_PREFIX = 'tripsafe-rdr-';
const CACHE_NAME = 'tripsafe-rdr-v15-0-0';
const CORE_ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg', './version.json', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).catch(() => undefined));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data && event.data.type === 'RESET_CACHES') {
    event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith(CACHE_PREFIX)).map(k => caches.delete(k)))));
  }
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html')) {
    event.respondWith(
      fetch(req, { cache: 'no-store' }).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy)).catch(() => undefined);
        return res;
      }).catch(() => caches.match('./index.html').then(cached => cached || caches.match('./')))
    );
    return;
  }

  if (url.pathname.endsWith('/service-worker.js') || url.pathname.endsWith('/version.json')) {
    event.respondWith(fetch(req, { cache: 'no-store' }).catch(() => caches.match(req)));
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => undefined);
      return res;
    }).catch(() => cached))
  );
});
