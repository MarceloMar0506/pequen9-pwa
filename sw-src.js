// ============================================================
// Workbox (runtime cargado desde el CDN oficial)
// Si en algún momento prefieren no depender del CDN, avisen para
// cambiar esto por el runtime local generado por workbox-cli.
// ============================================================
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js');

// Este placeholder lo reemplaza automáticamente workbox-cli injectManifest
// por la lista real de archivos a precachear. Debe aparecer UNA sola vez.
const _m = self.__WB_MANIFEST;

workbox.precaching.precacheAndRoute(_m, {
    ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
});

// ============================================================
// Estado y reparación del precaché (lo consulta la página por MessageChannel)
// ============================================================
const CACHE_PRECACHE = workbox.core.cacheNames.precache;

async function estadoPrecache() {
  const cache = await caches.open(CACHE_PRECACHE);
  const guardadas = new Set((await cache.keys()).map(r => r.url));
  const faltan = _m
    .filter(e => !guardadas.has(workbox.precaching.getCacheKeyForURL(e.url)))
    .map(e => e.url);
  return { total: _m.length, listos: _m.length - faltan.length, faltan };
}

async function repararPrecache(avisar) {
  const cache = await caches.open(CACHE_PRECACHE);
  const { total, faltan } = await estadoPrecache();
  const cola = faltan.slice();
  const fallidos = [];
  let hechos = total - faltan.length;

  const obrero = async () => {
    while (cola.length) {
      const url = cola.shift();
      try {
        const resp = await fetch(url, { cache: 'reload' });
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        await cache.put(workbox.precaching.getCacheKeyForURL(url), resp);
        hechos++;
      } catch (err) {
        fallidos.push(url);
        console.error('[SW] No se pudo descargar', url, err);
      }
      avisar({ hechos, total, fallidos: fallidos.length });
    }
  };
  await Promise.all([obrero(), obrero(), obrero(), obrero(), obrero(), obrero()]);
  return { hechos, total, fallidos };
}

self.addEventListener('message', (e) => {
  const d = e.data || {};
  const puerto = e.ports && e.ports[0];

  if (d.type === 'SKIP_WAITING') { self.skipWaiting(); return; }

  if (d.type === 'GET_ESTADO' && puerto) {
    e.waitUntil(estadoPrecache().then(s =>
      puerto.postMessage({ tipo: 'estado', listos: s.listos, total: s.total, completo: s.faltan.length === 0 })
    ));
  }
  if (d.type === 'REPARAR' && puerto) {
    e.waitUntil(
      repararPrecache(p => puerto.postMessage({ tipo: 'progreso', ...p }))
        .then(r => puerto.postMessage({ tipo: 'fin', hechos: r.hechos, total: r.total, fallidos: r.fallidos }))
    );
  }
});