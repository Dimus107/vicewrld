// Service worker mínimo: solo habilita que la app sea "instalable".
// No cachea nada crítico para no interferir con los datos en tiempo real de Firebase.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", e => {
  // Deja pasar todo directo a la red (los datos siempre deben ser frescos).
});

// Al tocar un aviso, abre (o enfoca) la app.
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:"window", includeUncontrolled:true}).then(cs => {
    if(cs.length) return cs[0].focus();
    return self.clients.openWindow("./index.html");
  }));
});
