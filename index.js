addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const target = "https://188.114.97.3:443"  //
  const newUrl = target + url.pathname + url.search
  const modifiedHeaders = new Headers(request.headers)
  modifiedHeaders.set("x-host", "avaco-railway.x4o4.workers.dev:443") // همون X-Host از کانفیگ شما
  const modifiedRequest = new Request(newUrl, {
    method: request.method,
    headers: modifiedHeaders,
    body: request.body
  })
  return fetch(modifiedRequest)
}
