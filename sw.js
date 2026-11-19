/* sw.js · ПНР Контроль — автономный режим */
const VERSION = '1.4.0';
const SHELL = 'pnr-shell-' + VERSION;
const FONTS = 'pnr-fonts-' + VERSION;
const RUNTIME = 'pnr-runtime-' + VERSION;
const KEEP = [SHELL, FONTS, RUNTIME];
const SHELL_FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    await Promise.all(SHELL_FILES.map(async url => {
      try {
        const res = await fetch(new Request(url, { cache: 'reload' }));
        if (res && (res.ok || res.type === 'opaque')) await cache.put(url, res.clone());
      } catch (e) {}
    }));
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.indexOf('pnr-') === 0 && KEEP.indexOf(k) < 0).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function putSafe(cache, req, res) {
  try {
    if (res && (res.ok || res.type === 'opaque') && !res.redirected) await cache.put(req, res.clone());
  } catch (e) {}
}

async function navigate(req) {
  try {
    const res = await fetch(req);
    const cache = await caches.open(SHELL);
    await putSafe(cache, './index.html', res);
    return res;
  } catch (e) {
    const cache = await caches.open(SHELL);
    const hit = (await cache.match('./index.html')) || (await cache.match('./'));
    return hit || new Response(
      '<!doctype html><meta charset="utf-8"><body style="font:16px system-ui;background:#0B1220;color:#EAF1FF;padding:40px">' +
      '<h2>Офлайн-копия не найдена</h2><p>Откройте приложение один раз с интернетом, чтобы оно сохранилось на устройстве.</p>',
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(RUNTIME);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    await putSafe(cache, req, res);
    return res;
  } catch (e) {
    const shell = await caches.open(SHELL);
    return (await shell.match(req)) || Response.error();
  }
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  if (FONT_HOSTS.indexOf(url.hostname) >= 0) {
    const update = (async () => {
      const cache = await caches.open(FONTS);
      try { const res = await fetch(req); await putSafe(cache, req, res); return res; }
      catch (e) { return null; }
    })();
    event.waitUntil(update.then(() => {}).catch(() => {}));
    event.respondWith((async () => {
      const cache = await caches.open(FONTS);
      const hit = await cache.match(req);
      return hit || (await update) || Response.error();
    })());
    return;
  }

  if (req.mode === 'navigate') { event.respondWith(navigate(req)); return; }
  if (url.origin === self.location.origin) { event.respondWith(cacheFirst(req)); return; }

  event.respondWith((async () => {
    try { return await fetch(req); }
    catch (e) { return (await caches.match(req)) || Response.error(); }
  })());
});

self.addEventListener('message', event => {
  const data = event.data || {};
  if (data.type === 'SKIP_WAITING') self.skipWaiting();
  if (data.type === 'PING' && event.ports && event.ports[0]) event.ports[0].postMessage({ version: VERSION });
});
