// Service worker mínimo: solo habilita que la app sea "instalable".
// No cachea nada crítico para no interferir con los datos en tiempo real de Firebase.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", e => {
  // Deja pasar todo directo a la red (los datos siempre deben ser frescos).
});
