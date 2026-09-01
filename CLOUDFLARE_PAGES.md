# Deploying to Cloudflare Pages

## Exact dashboard settings (copy these)

Go to **Workers & Pages** → your project → **Settings** → **Builds**

| Setting | Exact value |
|---------|-------------|
| **Production branch** | `main` |
| **Framework preset** | `None` |
| **Build command** | `pnpm run build:cloudflare` |
| **Build output directory** | `artifacts/conextsol-projects/dist/public` |
| **Root directory** | *(leave empty)* |
| **Build system version** | `3` (or latest) |

### Environment variables (Settings → Environment variables → Production)

| Variable | Value |
|----------|--------|
| `BASE_PATH` | `/` |
| `PORT` | `5173` |
| `NODE_VERSION` | `22` |
| `PNPM_VERSION` | `10.11.1` |

Optional but recommended if install still fails:

| Variable | Value |
|----------|--------|
| `SKIP_DEPENDENCY_INSTALL` | `1` |

If you set `SKIP_DEPENDENCY_INSTALL=1`, change the **Build command** to:

```bash
pnpm install && pnpm run build:cloudflare
```

### After changing settings

1. **Clear build cache**: Settings → Builds → Clear cache  
2. **Retry deployment** (Deployments → ⋯ → Retry deployment)

## Why previous deploys failed

1. **pnpm frozen lockfile** – fixed via `.npmrc` (`frozen-lockfile=false`).
2. **Vite config required `PORT` and `BASE_PATH`** – Replit injects these; Cloudflare does not. The config now defaults them for static builds.
3. **Wrong output directory** – Vite writes to `dist/public`, not `dist`.

## Custom domain

Pages project → **Custom domains** → Set up a domain → follow DNS instructions.
