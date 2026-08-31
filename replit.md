# Conextsol Projects

Standalone portfolio and case-study showcase for Conextsol, a Cape Town web design and software studio.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/conextsol-projects/src/data/portfolio.ts` — case study content and project imagery
- `artifacts/conextsol-projects/src/components/` — shared layout, portfolio, SEO, and CTA components
- `artifacts/conextsol-projects/src/pages/` — home, projects, detail, about, contact, and not-found routes
- `artifacts/conextsol-projects/src/index.css` — Conextsol brand tokens and visual system
- `artifacts/conextsol-projects/public/` — Cloudflare Pages redirects, headers, robots, sitemap, and Wrangler config

## Architecture decisions

- The portfolio is a frontend-only Vite SPA so it can deploy as static files to Cloudflare Pages.
- Wouter handles internal navigation and the route-aware SEO component updates metadata per page.
- Case-study visuals are bundled local assets to keep the static site reliable when remote image hosts are unavailable.
- Contact conversion uses WhatsApp and mailto actions; no backend is required for the brochure-site form.

## Product

Visitors can browse six case studies, filter work by industry, open detailed project stories with outcomes and process, learn about the studio, and start a conversation through WhatsApp or email.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
