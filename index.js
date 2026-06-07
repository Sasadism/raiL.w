export default {
  async fetch(request) {
    const url = new URL(request.url)
    const target = "https://178.105.179.72:443"
    const newUrl = target + url.pathname + url.search
    const modifiedHeaders = new Headers(request.headers)
    modifiedHeaders.set("x-host", "netlify.parsashonam.sbs:444")
    const modifiedRequest = new Request(newUrl, {
      method: request.method,
      headers: modifiedHeaders,
      body: request.body
    })
    return fetch(modifiedRequest)
  }
}
