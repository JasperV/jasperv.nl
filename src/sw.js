importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js'
)

self.addEventListener('message', (evt) => {
  if (evt?.data.type === 'SKIP_WAITING') self.skipWaiting()
})

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'offline-cache.jasperv.nl',
  })
)
