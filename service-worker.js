const CACHE_NAME = "readify-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/explorer.html",
  "/tracker.html",
  "/recommender.html",
  "/flow.html",
  "/feedback.html",
  "/css/main.css",
  "/css/layout.css",
  "/css/animations.css",
  "/js/data.js",
  "/js/utils.js",
  "/items/icons/logo-192.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
