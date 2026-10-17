# website

[![Build Status](https://travis-ci.org/jonhaddow/website.svg?branch=master)](https://travis-ci.org/jonhaddow/website)

Hosts my website - https://jon.haddow.me

Built with [Astro](https://astro.build/), hosted on [Cloudflare Workers](https://workers.cloudflare.com/) (`worker/index.js`, `wrangler.jsonc`). Pushing to `master` deploys via Workers Builds; `npm run deploy` deploys from a laptop (needs `CLOUDFLARE_API_TOKEN`).

## Commands

- `yarn` - installs dependencies
- `yarn start` - runs local server on http://localhost:8000/
- `yarn build` - runs production build
- `yarn serve` - serves production output on http://localhost:9000/ tests

See `package.json` for more.
