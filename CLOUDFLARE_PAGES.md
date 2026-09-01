# Deploying to Cloudflare (Workers / Pages)

Your project is deployed via **Wrangler** (`npx wrangler versions upload`).
That needs a root `wrangler.jsonc` that points at the built static files.

## Exact Cloudflare dashboard settings

**Workers & Pages → your project → Settings → Builds**

| Setting | Exact value |
|---------|-------------|
| **Production branch** | `main` |
| **Build command** | `pnpm run build:cloudflare` |
| **Deploy command** | `npx wrangler versions upload` (default is fine if this is already set) |
| **Root directory** | *(leave empty)* |

You do **not** need a separate “Build output directory” when using the Workers
assets + `wrangler.jsonc` flow — the output path is defined in `wrangler.jsonc`.

### Environment variables (Production)

| Variable | Value |
|----------|--------|
| `BASE_PATH` | `/` |
| `PORT` | `5173` |
| `NODE_VERSION` | `22` |
| `PNPM_VERSION` | `10.11.1` |

### After changing settings

1. Merge the fix branch to `main`
2. **Clear build cache**
3. **Retry deployment**

## What the root `wrangler.jsonc` does

```jsonc
{
  "name": "conextsol-projects",
  "compatibility_date": "2026-09-01",
  "assets": {
    "directory": "./artifacts/conextsol-projects/dist/public",
    "not_found_handling": "single-page-application"
  }
}
```

- `assets.directory` → where Vite writes the site  
- `not_found_handling: single-page-application` → client-side routing (React/wouter) works  

If your Cloudflare project has a **different name**, either rename the project
to `conextsol-projects` or change the `"name"` field in `wrangler.jsonc` to match.
