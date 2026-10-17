// Serves the built site (dist/), redirects haddow.me and www.haddow.me to
// jon.haddow.me and adds security headers.
const HOST = "jon.haddow.me";
const REDIRECT_HOSTS = new Set(["haddow.me", "www.haddow.me"]);

const HEADERS = {
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "same-origin",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (REDIRECT_HOSTS.has(url.hostname)) {
      url.hostname = HOST;
      return Response.redirect(url.toString(), 301);
    }

    const asset = await env.ASSETS.fetch(request);
    const response = new Response(asset.body, asset);
    for (const [name, value] of Object.entries(HEADERS)) {
      response.headers.set(name, value);
    }
    return response;
  },
};
