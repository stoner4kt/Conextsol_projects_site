# Deploying to Cloudflare Pages

## Dashboard settings

| Setting | Value |
|---------|--------|
| Production branch | `main` |
| Framework preset | None / Vite |
| Build command | `pnpm run build:cloudflare` |
| Build output directory | `artifacts/conextsol-projects/dist` |
| Root directory | `/` (leave empty) |

## Recommended environment variables (optional)

| Name | Value | Notes |
|------|--------|--------|
| `PNPM_VERSION` | `10.11.1` | Match `packageManager` in package.json |
| `NODE_VERSION` | `22` or `24` | Either works |

## Why `frozen-lockfile=false` is in `.npmrc`

Cloudflare Pages runs `pnpm install --frozen-lockfile` before your build command.
This repo uses extensive `overrides` in `pnpm-workspace.yaml` (platform package exclusions for esbuild/rollup/etc.). That can trigger `ERR_PNPM_LOCKFILE_CONFIG_MISMATCH` under Cloudflare’s CI environment even when the lockfile is valid locally.

Setting `frozen-lockfile=false` in `.npmrc` lets the install succeed on Pages without changing normal local development behavior.

After the first successful deploy you can clear the Pages build cache if an old failed install was cached.

## Custom domain

In the Pages project → **Custom domains** → add your domain and follow the DNS instructions.
