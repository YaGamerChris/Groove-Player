self.addEventListener('install', event => {
  console.log('[ServiceWorker] Instalado');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activado');
});

self.addEventListener('fetch', event => {
  // Puedes manejar caché aquí si quieres
});
