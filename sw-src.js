// ============================================================
// Código personalizado: progreso de instalación (SW_PROGRESS / SW_COMPLETE)
// No tocar sin actualizar también la lógica que escucha estos mensajes
// en el front-end (index.html / donde sea que se muestre la barra de progreso).
// ============================================================
self._c = 0;
self._t = 1;
self._isInstalling = false;

self.addEventListener('install', function () {
    self._isInstalling = true;
    self._c = 0;
});

if (!self._isPatched) {
    self._isPatched = true;
    var _realFetch = self.fetch;
    self.fetch = function (i, n) {
        return _realFetch.call(self, i, n).then(function (r) {
            if (r && self._isInstalling) {
                self._c++;
                var p = Math.min(100, Math.round((self._c / self._t) * 100));
                self.clients.matchAll({ includeUncontrolled: true }).then(function (k) {
                    k.forEach(function (c) {
                        c.postMessage({ type: 'SW_PROGRESS', porcentaje: p, descargados: self._c, total: self._t });
                    });
                    if (self._c >= self._t) {
                        self._isInstalling = false;
                        k.forEach(function (c) { c.postMessage({ type: 'SW_COMPLETE' }); });
                    }
                });
            }
            return r;
        });
    };
}

// ============================================================
// Workbox (runtime cargado desde el CDN oficial)
// Si en algún momento prefieren no depender del CDN, avisen para
// cambiar esto por el runtime local generado por workbox-cli.
// ============================================================
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js');

self.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// Este placeholder lo reemplaza automáticamente workbox-cli injectManifest
// por la lista real de archivos a precachear.
const _m = self.__WB_MANIFEST;
self._t = _m.length; // <- esto es lo que faltaba: ahora sí refleja el total real de archivos

workbox.precaching.precacheAndRoute(_m, {
    ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
});