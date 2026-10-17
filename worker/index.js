// Serves the built site (dist/) and does what netlify.toml used to:
// redirects haddow.me to jon.haddow.me and adds security headers.
const HOST = "jon.haddow.me";

const HEADERS = {
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "same-origin",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "haddow.me") {
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
