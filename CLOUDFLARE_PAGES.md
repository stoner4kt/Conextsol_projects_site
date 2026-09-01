# Deploying to Cloudflare

## Dashboard settings

| Setting | Value |
|---------|--------|
| Production branch | `main` |
| Build command | `pnpm run build:cloudflare` |
| Deploy command | `npx wrangler versions upload` |
| Root directory | *(empty)* |

### Environment variables

| Variable | Value |
|----------|--------|
| `BASE_PATH` | `/` |
| `PORT` | `5173` |
| `NODE_VERSION` | `22` |
| `PNPM_VERSION` | `10.11.1` |

After changes: clear build cache → retry deploy.

## How the site is served

- Vite builds into `artifacts/conextsol-projects/dist/public`
- Root `wrangler.jsonc` points assets at that folder
- Root `worker.js` always returns `env.ASSETS.fetch(request)` so the default Hello World Worker is replaced
- SPA routes use `not_found_handling: single-page-application`

Project name in `wrangler.jsonc` must match the Cloudflare Worker name (`conextsol-projects`).
