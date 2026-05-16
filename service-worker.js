const APP_VERSION = 'v16.1.0';
const CACHE_NAME = 'tripsafe-rdr-v16-1-0';
const CORE_ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg', './version.json'];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS).catch(() => undefined)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('tripsafe-rdr-') && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', event => { if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req, { cache: 'no-store' }).then(res => { const copy = res.clone(); caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy)).catch(() => {}); return res; }).catch(() => caches.match('./index.html')));
    return;
  }
  if (url.pathname.endsWith('/service-worker.js') || url.pathname.endsWith('/version.json')) {
    event.respondWith(fetch(req, { cache: 'no-store' }).catch(() => caches.match(req)));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {}); return res; }).catch(() => cached)));
});
