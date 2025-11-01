self.addEventListener('install', (event) => {
  console.log('Service worker installed.');
});

self.addEventListener('fetch', (event) => {
  // Default: just fetch everything normally
  event.respondWith(fetch(event.request));
});
