# Website

My personal website: https://jon.haddow.me

## Tech stack

- [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- Hosted on [Cloudflare Workers](https://workers.cloudflare.com) (`worker/index.js`, `wrangler.jsonc`), deployed from `master` by Workers Builds

## Development

```sh
npm ci
npm start        # local dev server
npm run build    # production build
npm run deploy   # deploy from a laptop (needs CLOUDFLARE_API_TOKEN)
```
