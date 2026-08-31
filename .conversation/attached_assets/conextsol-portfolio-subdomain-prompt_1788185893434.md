# Conextsol Portfolio Subdomain — Code Generation Prompt
### For use with Replit, Lovable, Bolt, or v0.dev
### Target: `https://projects.conextsol.co.za` (Cloudflare-hosted static site)

---

## 1. PROJECT OVERVIEW

Build a **standalone, responsive portfolio showcase website** for the subdomain `https://projects.conextsol.co.za`. This is a dedicated case study hub for **Conextsol**, a South African web design and development agency based in Cape Town. The site must feel like a natural extension of the main brand (`conextsol.co.za`) — same design language, same fonts, same color system — but focused entirely on showcasing client work in depth.

**Output type:** A fully static site (or a Vite-based React SPA that pre-renders to static HTML) deployable as static files to Cloudflare Pages.

---

## 2. TECH STACK (EXACT)

Use these exact dependencies to match the main site's architecture:

```json
{
  "framework": "React 19 + TypeScript",
  "bundler": "Vite 6",
  "styling": "Tailwind CSS v4 (@tailwindcss/vite plugin)",
  "animation": "Framer Motion 12",
  "routing": "Wouter 3",
  "ui-primitives": "Radix UI (via shadcn/ui)",
  "icons": "lucide-react",
  "seo": "react-helmet-async",
  "fonts": "Google Fonts — Inter + Space Grotesk (via @import in CSS)"
}
```

**Build command:** `vite build`
**Output directory:** `dist/` (Cloudflare Pages default)

Create a `vite.config.ts` with `base: '/'` and ensure all routes work with Cloudflare Pages by adding a `_redirects` file in `public/`:

```
/* /index.html 200
```

Also add a `public/_headers` file for security and performance:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

---

## 3. DESIGN SYSTEM — MATCH EXACTLY

This is non-negotiable. The subdomain must use identical tokens to the main site.

### 3.1 Color Palette (CSS Custom Properties)

```css
:root {
  /* Backgrounds */
  --background: hsl(36 100% 96%);        /* Warm cream */
  --card:        hsl(39 100% 98%);        /* Near-white card surface */
  --muted:       hsl(35 42% 90%);         /* Light warm beige for muted areas */

  /* Text */
  --foreground:         hsl(24 20% 12%);  /* Deep warm near-black */
  --muted-foreground:   hsl(24 12% 38%);  /* Body text, secondary */

  /* Brand colors */
  --primary:   hsl(18 95% 56%);           /* Vivid orange — CTAs, accents */
  --secondary: hsl(174 70% 41%);          /* Teal — services, highlights */
  --accent:    hsl(50 96% 57%);           /* Yellow — badges, kickers */

  /* Borders */
  --border: hsl(24 26% 82%);

  /* Radius */
  --radius: 1.35rem;
}
```

### 3.2 Background Treatment

The body background must use this exact fixed radial gradient (critical to match the main site's atmosphere):

```css
body {
  background-color: hsl(36 100% 96%);
  background-image:
    radial-gradient(circle at 8% 12%, hsl(50 96% 57% / 0.55), transparent 20rem),
    radial-gradient(circle at 88% 10%, hsl(174 70% 41% / 0.20), transparent 24rem),
    radial-gradient(circle at 90% 82%, hsl(18 95% 56% / 0.16), transparent 26rem),
    linear-gradient(135deg, hsl(36 100% 96%), hsl(42 100% 92%) 52%, hsl(32 100% 95%));
  background-attachment: fixed;
}
```

### 3.3 Typography

```css
/* Import in index.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap');

/* Usage rules:
   - ALL display headings (h1, h2, section titles): font-family: 'Space Grotesk', sans-serif
   - Hero h1: font-size clamp(3rem, 8vw, 5.5rem), font-weight: 900, letter-spacing: -0.065em, line-height: 0.9
   - Section h2: font-size clamp(2rem, 4vw, 3rem), font-weight: 700, letter-spacing: -0.03em
   - Body, nav, buttons, labels: font-family: 'Inter', sans-serif
*/
```

### 3.4 Signature Component Classes

These must be defined in `src/index.css` and used consistently:

```css
/* Neo-brutalist card — THE signature style of the brand */
.neo-card {
  border: 2px solid rgba(28, 25, 23, 0.80);
  background-color: var(--card);
  box-shadow: 8px 8px 0 rgba(28, 25, 23, 0.22);
  transition: all 300ms ease;
  border-radius: 2rem;
}
.neo-card:hover {
  transform: translateY(-4px);
  box-shadow: 12px 12px 0 rgba(28, 25, 23, 0.25);
}

/* Section kicker — uppercase pill badge */
.section-kicker {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 2px solid rgba(28, 25, 23, 0.80);
  background-color: hsl(50 96% 57%);
  padding: 0.375rem 1rem;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  box-shadow: 4px 4px 0 rgba(28, 25, 23, 0.18);
}

/* Gradient text utility */
.gradient-text {
  background: linear-gradient(to right, hsl(18 95% 56%), #f97316, #eab308);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 4. SITE STRUCTURE & PAGES

```
/                       → Home / Hero landing
/projects               → All case studies grid
/projects/:id           → Individual case study deep-dive
/about                  → Short "about the studio" page (bridge to main site)
/contact                → Simple contact form (WhatsApp + email)
```

### 4.1 Navigation Header

Sticky header with blur backdrop. Include:
- **Logo:** Text "Conextsol" in Space Grotesk 700, with "projects" in a smaller weight or teal color to signal the subdomain context. Example: `Conextsol <span style="color: teal; font-weight:500">/ projects</span>`
- **Nav links:** Projects | About | Contact
- **"Back to main site" link:** `← conextsol.co.za` — subtle, right-aligned, opens `https://conextsol.co.za` in a new tab
- **CTA button:** "Get a Quote" → links to `https://wa.me/27661192498?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20website.` (neo-card style pill button in primary orange)
- Mobile: hamburger menu with smooth slide-in drawer

### 4.2 Footer

Match the main site's footer structure:
- Logo + tagline: "South Africa's results-driven web studio."
- Navigation columns: Projects | Services (link to `conextsol.co.za/services`) | Contact
- Legal: Privacy Policy link (link to `conextsol.co.za/privacy-policy`) | Terms (link to `conextsol.co.za/terms-of-service`)
- Copyright: `© 2025 Conextsol. All rights reserved.`
- Social links: WhatsApp | LinkedIn | X (Twitter) — icon buttons
- Tag: `Built by Conextsol · Hosted on Cloudflare`

### 4.3 Floating WhatsApp Button

Fixed position, bottom-right, on every page:

```tsx
<a
  href="https://wa.me/27661192498?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20website."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  aria-label="Chat with us on WhatsApp"
>
  {/* WhatsApp SVG icon */}
  <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
</a>
```

---

## 5. PAGE SPECIFICATIONS

### 5.1 HOME PAGE (`/`)

**Hero Section:**
- Full-width, `min-height: 100dvh`, centered content
- Background: the body gradient (see §3.2) — no extra image overlay needed here
- Animated entrance: Framer Motion `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` with stagger delays of 0.1s each for kicker → h1 → subheading → CTA
- **Section kicker:** `● Our Work`
- **H1:** `The Work That Speaks` with `"Speaks"` wrapped in `.gradient-text`
- **Subheading (Inter, text-xl, muted-foreground):** "Every project here is a real brief, a real client, and a measurable result. Browse the case studies or get in touch to discuss yours."
- **CTA buttons (side by side):**
  - Primary: "Browse Case Studies" → `/projects` — neo-card style, orange fill
  - Secondary: "Start a Project" → WhatsApp link — outlined, border-2, border-stone-900/80
- **Stats bar** below CTA (3 stats in a row, separated by dividers):
  - `6+` Projects Delivered
  - `R45M+` Client Revenue Generated
  - `100%` On-Time Delivery
  - Style: large Space Grotesk 700 number + small Inter label below. Wrap in a `.neo-card` pill strip.
- **Featured Projects Preview:** Show 3 most recent `CaseStudyCard` components in a responsive 3-column grid (see §6.1 for card spec)
- **CTA Banner** at bottom: "See your business here next?" with WhatsApp button

**Industry Filter Section** (between hero and featured projects):
- Horizontal scrollable pill filter bar: `All | Logistics | Legal | Real Estate | E-commerce | Finance | Hospitality`
- Pills use `.section-kicker` styling, selected state fills with `--primary` color
- Filters the case study grid in real-time (client-side state)

---

### 5.2 ALL PROJECTS PAGE (`/projects`)

**Page header:**
- `pt-24 pb-16`, `bg-muted/30`, bottom border
- H1: "Our Work" (Space Grotesk 900)
- Subheading: "Real briefs. Real clients. Measurable results."
- Industry filter pill bar (same as above, same logic)

**Projects grid:**
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Each item: `CaseStudyCard` component (see §6.1)
- Framer Motion stagger: each card fades in with `whileInView` at 0.1s increments
- Empty state: if filter returns no results, show a friendly empty state card

**Bottom CTA Banner:**
- Background: gradient from `--primary` to orange-500
- Neo-card style with black borders
- Text: "Don't see your industry? We work across all sectors."
- Button: "Let's Talk" → WhatsApp

---

### 5.3 CASE STUDY DETAIL PAGE (`/projects/:id`)

This is the most important page. It must be thorough and structured. Use this exact section flow:

**Section A — Page Header:**
- `pt-24 pb-16`, `bg-muted/30`, bottom border
- Back link: `← Back to Projects` → `/projects`
- Two-column layout on desktop (1-col stacked on mobile):
  - **Left:** Industry badge (teal, `.section-kicker` style) | H1 = `clientType` | Short description | Key Metric callout box (see §3.4 `.neo-card`, yellow-100 bg, "Key Result" label above metric in bold)
  - **Right:** Hero image in `aspect-video` rounded-3xl with border and shadow; cover fit

**Section B — Challenge / Solution / Outcome (3-column grid):**
- Each column is a `.neo-card` with an H2 and body text
- Column 1: "The Challenge" + `project.challenge`
- Column 2: "Our Solution" + `project.solution`
- Column 3: "The Outcome" — bulleted list with `CheckCircle2` icon (teal) prefix for each `project.outcomes[]` item

**Section C — Project Metadata Strip:**
- Horizontal card with: Services Used | Industry | Key Metric — displayed as 3 labeled value pairs in a `.neo-card` strip

**Section D — Tech & Process Breakdown (NEW — not on main site):**
- H2: "How We Built It"
- Display `project.techStack[]` as pill tags (`.section-kicker` style but smaller)
- Display `project.processSteps[]` as a numbered list (1→2→3) — each step has a title and one-line description
- If no data, show placeholder text gracefully

**Section E — Visual Gallery (NEW):**
- 2-column masonry-style grid for `project.gallery[]` image URLs
- Each image is rounded-2xl with border and hover:scale-[1.02] transition
- If no gallery data, skip section gracefully

**Section F — Client Testimonial (NEW, optional):**
- Shown only if `project.testimonial` exists
- Large blockquote style: big quotation mark graphic (Space Grotesk, opacity-10, 8xl), quote text in Inter italic, author name + role below
- Wrap in `.neo-card`

**Section G — Related Projects:**
- H2: "More Work You Might Like"
- Horizontal scroll row of 2-3 `CaseStudyCard` components filtered by same industry OR adjacent industries
- "View All Projects" link at end

**Section H — CTA Banner:**
- "Ready to build something like this?" + WhatsApp button

---

### 5.4 ABOUT PAGE (`/about`)

Keep this concise — it exists to support the subdomain, not to duplicate the main site's About page.

- **Hero:** H1 "We Build What Works" + 2-sentence studio intro
- **3 value pills:** Extreme Ownership | No Jargon | Local Context — each as a `.neo-card` with icon
- **CTA:** "Read our full story →" linking to `https://conextsol.co.za/about` (opens in new tab)
- **Services tease:** "What we offer" — 3 service pills linking to `https://conextsol.co.za/services`

---

### 5.5 CONTACT PAGE (`/contact`)

- **Left col (desktop):** Contact info card — WhatsApp number, email, Cape Town, South Africa location
- **Right col:** Simple contact form with fields: Name | Email | Phone (optional) | What do you need? (textarea) | Submit button
- Form validation: required fields marked, email format check
- On submit: show success state (no backend needed — use `mailto:` action or link to WhatsApp)
- WhatsApp quick-action button: "Prefer to chat? Message us on WhatsApp" → WhatsApp link

---

## 6. SHARED COMPONENTS

### 6.1 CaseStudyCard

```tsx
interface CaseStudyCardProps {
  id: string;
  clientType: string;    // e.g. "Corporate Law Firm"
  industry: string;      // e.g. "Legal"
  services: string[];    // e.g. ["Website Design", "SEO"]
  keyMetric: string;     // e.g. "+210% organic local traffic"
  description: string;
  imageUrl: string;
  index?: number;        // for stagger animation delay
}
```

Layout:
- Outer: `.neo-card`, `overflow-hidden`, `flex flex-col`
- Top: `aspect-[3/2]` image with `object-cover`, industry badge (yellow accent pill) top-left absolute
- Body: services in teal small text | H3 clientType | description (3-line clamp) | Key Result box (yellow-100 bg, black border, bold metric) | "View Case Study →" link with arrow that translates on group-hover
- Framer Motion: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`

### 6.2 SEOHead Component

Use `react-helmet-async` to render per-page SEO. Template:

```tsx
<Helmet>
  <title>{title} | Conextsol Projects</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={`https://projects.conextsol.co.za${canonicalPath}`} />
  <meta property="og:title" content={`${title} | Conextsol Projects`} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://projects.conextsol.co.za${canonicalPath}`} />
  <meta name="robots" content="index, follow" />
</Helmet>
```

### 6.3 CTABanner Component

```tsx
interface CTABannerProps {
  title: string;       // e.g. "See your business here next?"
  subtitle?: string;
  ctaLabel?: string;   // default: "Start a Project"
  ctaHref?: string;    // default: WhatsApp link
}
```

Style: full-width section, gradient bg from `--primary` to orange-400, `.neo-card` inset container, large white headline, button with black border and shadow.

### 6.4 IndustryFilter Component

```tsx
const industries = ['All', 'Logistics', 'Legal', 'Real Estate', 'E-commerce', 'Finance', 'Hospitality'];

// Horizontal scrollable on mobile, wrapping on desktop
// Selected pill: bg-primary text-white border-2 border-stone-900/80
// Unselected: bg-card text-foreground border-2 border-stone-900/80 hover:bg-muted
```

---

## 7. DATA STRUCTURE

Create a `src/data/portfolio.ts` file with this exact schema (pre-populate with the 6 projects below):

```typescript
export interface PortfolioProject {
  id: string;
  clientType: string;
  industry: 'Logistics' | 'Legal' | 'Real Estate' | 'E-commerce' | 'Finance' | 'Hospitality';
  services: string[];
  keyMetric: string;
  description: string;
  imageUrl: string;           // Use placeholder: `https://picsum.photos/seed/${id}/1200/800`
  challenge: string;
  solution: string;
  outcomes: string[];
  techStack?: string[];       // e.g. ["React", "Node.js", "PostgreSQL"]
  processSteps?: { title: string; description: string }[];
  gallery?: string[];         // Additional image URLs
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  relatedProjectIds?: string[];
}
```

**Pre-populate with these 6 projects:**

1. `id: 'nexus-logistics'` — Logistics & Supply Chain | Reduced dispatch time by 45% | Tech: React, Node.js, PostgreSQL, Socket.io
2. `id: 'apex-legal'` — Corporate Law Firm | +210% organic local traffic | Tech: Next.js, Tailwind, Sanity CMS
3. `id: 'urban-nest'` — Property Real Estate Agency | R45M in property inquiries | Tech: React, CRM API Integration, Mapbox
4. `id: 'lumiere-boutique'` — Luxury E-commerce Retailer | 32% increase in checkout rate | Tech: Headless Shopify, React, Cloudflare Workers
5. `id: 'finvest-capital'` — Financial Services | Zero downtime across 10k users | Tech: React, Node.js, AWS, Encryption
6. `id: 'bistro-booking'` — Restaurant Group | Fully automated booking system | Tech: React, Node.js, Custom booking engine

Use `https://picsum.photos/seed/{id}/1200/800` for all placeholder images until real assets are added.

---

## 8. ANIMATIONS & INTERACTIONS

Use Framer Motion consistently:

```tsx
// Page entrance — wrap each major section in:
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
>

// Scroll-triggered (for cards, feature sections):
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>

// Card hover (already handled by neo-card CSS, but optionally add):
whileHover={{ y: -4 }}
```

**Respect `prefers-reduced-motion`:** Wrap all animations conditionally:

```tsx
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// If true, skip initial/animate props
```

---

## 9. PERFORMANCE & CLOUDFLARE REQUIREMENTS

### 9.1 Image Handling
- All `<img>` tags must have explicit `width` and `height` attributes
- Use `loading="lazy"` on all images except the hero (above-the-fold)
- Use `fetchpriority="high"` on the hero image
- Wrap images in `aspect-ratio` containers to prevent layout shift

### 9.2 Cloudflare Pages Deployment Config

Create `wrangler.toml` in the root (for optional Workers integration, not required for static hosting):

```toml
name = "conextsol-projects"
compatibility_date = "2024-01-01"

[site]
bucket = "./dist"
```

Create `public/_redirects`:
```
/* /index.html 200
```

Create `public/_headers` (as specified in §2).

### 9.3 Build Output

The `vite build` output in `dist/` must be a fully self-contained static site. Do not use any server-side rendering unless using Cloudflare Workers (optional advanced feature). The site must load with zero JavaScript errors in a cold browser.

### 9.4 Google Analytics

Add GA4 tracking in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-69LSE74QT4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-69LSE74QT4');
</script>
```

### 9.5 robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://projects.conextsol.co.za/sitemap.xml
```

### 9.6 Sitemap

Generate `public/sitemap.xml` at build time (or statically for now):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://projects.conextsol.co.za/</loc></url>
  <url><loc>https://projects.conextsol.co.za/projects</loc></url>
  <url><loc>https://projects.conextsol.co.za/projects/nexus-logistics</loc></url>
  <url><loc>https://projects.conextsol.co.za/projects/apex-legal</loc></url>
  <url><loc>https://projects.conextsol.co.za/projects/urban-nest</loc></url>
  <url><loc>https://projects.conextsol.co.za/projects/lumiere-boutique</loc></url>
  <url><loc>https://projects.conextsol.co.za/projects/finvest-capital</loc></url>
  <url><loc>https://projects.conextsol.co.za/projects/bistro-booking</loc></url>
  <url><loc>https://projects.conextsol.co.za/about</loc></url>
  <url><loc>https://projects.conextsol.co.za/contact</loc></url>
</urlset>
```

---

## 10. RESPONSIVE BREAKPOINTS

Use Tailwind's default breakpoints:
- **Mobile-first default:** single column, `px-4`, hamburger nav
- **`md:` (768px+):** 2-column grids, side-by-side hero layouts
- **`lg:` (1024px+):** 3-column project grid, full nav
- **`xl:` (1280px+):** Max container `max-w-7xl mx-auto`

**Specific mobile rules:**
- Industry filter: horizontally scrollable (`overflow-x-auto`, `flex flex-nowrap`, `gap-2`, `-mx-4 px-4`)
- CaseStudyCard: full-width, aspect-[16/9] image on mobile
- Hero stats bar: 3-col grid even on mobile (condensed)
- Floating WhatsApp: always visible, `z-50`

---

## 11. ACCESSIBILITY

- All images must have descriptive `alt` attributes
- All interactive elements must have `:focus-visible` ring using `ring-2 ring-primary ring-offset-2`
- Color contrast: body text on cream background must meet AA (the color system already satisfies this)
- Hamburger menu: `aria-expanded`, `aria-label="Toggle navigation"`
- Case study back link: `aria-label="Back to all projects"`
- Skip-to-main link: `<a href="#main" className="sr-only focus:not-sr-only">Skip to main content</a>`

---

## 12. LINKING STRATEGY (SUBDOMAIN ↔ MAIN SITE)

All links back to the main site must be absolute with `target="_blank" rel="noopener noreferrer"`:

| Context | Link |
|---|---|
| Nav "Back to main site" | `https://conextsol.co.za` |
| Footer "Services" | `https://conextsol.co.za/services` |
| Footer "About" | `https://conextsol.co.za/about` |
| CTA "Get a Quote" | `https://wa.me/27661192498?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20website.` |
| "Read our full story" | `https://conextsol.co.za/about` |
| Privacy Policy | `https://conextsol.co.za/privacy-policy` |
| Terms | `https://conextsol.co.za/terms-of-service` |

Internal links (within subdomain) must use Wouter's `<Link href="...">` component — never `<a href>` for internal navigation (prevents full page reloads in the SPA).

---

## 13. FILE STRUCTURE

```
/
├── public/
│   ├── _redirects
│   ├── _headers
│   ├── robots.txt
│   ├── sitemap.xml
│   └── logo.png          (Conextsol logo, use placeholder if not available)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── portfolio/
│   │   │   └── CaseStudyCard.tsx
│   │   ├── sections/
│   │   │   ├── CTABanner.tsx
│   │   │   ├── IndustryFilter.tsx
│   │   │   └── StatsBar.tsx
│   │   └── seo/
│   │       └── SEOHead.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.ts     (if needed — Tailwind v4 uses @tailwindcss/vite plugin)
├── tsconfig.json
└── package.json
```

---

## 14. QUALITY CHECKLIST (verify before considering complete)

- [ ] `npm run build` completes with zero errors
- [ ] All 6 case study detail pages render correctly at `/projects/:id`
- [ ] Industry filter correctly filters the grid on the `/projects` page
- [ ] Mobile hamburger menu opens and closes without layout shift
- [ ] Floating WhatsApp button appears on all pages
- [ ] All internal links use Wouter `<Link>` (no full reloads)
- [ ] All external links open in `_blank` with `rel="noopener noreferrer"`
- [ ] `dist/_redirects` exists after build so Cloudflare Pages handles SPA routing
- [ ] `dist/_headers` exists after build
- [ ] No console errors in Chrome DevTools on any page
- [ ] `prefers-reduced-motion` respected (animations disabled if set)
- [ ] `alt` attributes on every `<img>` tag
- [ ] Google Analytics `G-69LSE74QT4` tag in `index.html`
- [ ] `<title>` and `<meta name="description">` set correctly on every page

---

*End of prompt. This document defines a production-ready, brand-consistent, Cloudflare-deployable portfolio subdomain for Conextsol. All design decisions are derived directly from the main site's codebase at `github.com/stoner4kt/Conextsol-website-v2`.*
