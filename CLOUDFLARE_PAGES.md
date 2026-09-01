# Deploying to Cloudflare (Workers / Pages)

## Exact Cloudflare dashboard settings

**Workers & Pages → your project → Settings → Builds**

| Setting | Exact value |
|---------|-------------|
| **Production branch** | `main` |
| **Build command** | `pnpm run build:cloudflare` |
| **Deploy command** | `npx wrangler versions upload` |
| **Root directory** | *(leave empty)* |

### Environment variables (Production)

| Variable | Value |
|----------|--------|
| `BASE_PATH` | `/` |
| `PORT` | `5173` |
| `NODE_VERSION` | `22` |
| `PNPM_VERSION` | `10.11.1` |

### After every config change

1. Clear build cache  
2. Retry deployment  

## How routing works

SPA client-side routes are handled by **root `wrangler.jsonc`**:

```jsonc
"assets": {
  "directory": "./artifacts/conextsol-projects/dist/public",
  "not_found_handling": "single-page-application"
}
```

Do **not** use `/* /index.html 200` in `public/_redirects` — that conflicts
with Workers static assets and causes deploy error code 100324.

## Project name

`wrangler.jsonc` uses `"name": "conextsol-projects"`. It must match your
Cloudflare project name, or change the JSON field to match.
