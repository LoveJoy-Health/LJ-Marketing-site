# LoveJoy Marketing Web (`lovejoy.health`)

Public marketing website for **LoveJoy Health** — the main brand site currently served by WordPress. This is a new React/Next.js project and is **not** the patient app, provider portal, navigators web, or org portal.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (matches sibling LJ web portals)
- Static/SSR-friendly marketing pages for SEO

Chose Next.js over CRA for SEO, routing, and deployability (Vercel or Node hosting). Chose Tailwind to stay aligned with `LJ-Provider-Web-Portal`, `LJ-Navigators-Web`, and `LJ-Orgs-Portal`.

## Brand

Colors follow product surfaces (patient app + portals), not the WordPress theme’s cream/purple palette:

| Token | Value | Source |
|-------|-------|--------|
| Navy | `#0A2C8C` / `#021A52` | Portals + patient app |
| Gold | `#FFE612` | Patient auth theme |
| Soft sky | `#EAF2FF` / `#F4F8FF` | Portal backgrounds |

Assets copied locally from the live WP site: logo + home hero image under `public/images/`.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Brand-first home |
| `/for-individuals` | Patient / individual audience |
| `/for-providers` | Provider audience |
| `/for-navigators` | Care navigator / care coordinator audience |
| `/for-organizations` | Org / health system audience |
| `/about` | Mission, vision, leadership |
| `/about/contact` | Contact details + inquiry form (mailto stub) |

## Run locally

```bash
cd LJ-Marketing-Web
npm install
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) (port **3010** to avoid colliding with portal apps on 3000/3002/3003).

```bash
npm run build
npm start
```

## SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` publish at `/sitemap.xml` and `/robots.txt` using `siteConfig.url` (`https://lovejoy.health`).
- Page metadata (canonical, Open Graph, Twitter) via `buildPageMetadata` in `src/lib/seo.ts`.
- Organization / WebSite JSON-LD in the root layout; BreadcrumbList where breadcrumbs render; Article JSON-LD on blog posts.
- Default share image is `/images/logo-icon-circle.png` until a dedicated 1200×630 OG asset exists.

## Analytics

Google Analytics 4 is enabled via `NEXT_PUBLIC_GA_MEASUREMENT_ID`. When set, `src/components/Analytics.tsx` loads gtag (`afterInteractive`) and calls `gtag('config', …)`. Scripts do not load if the var is unset.

Production builds read `.env.production` (committed with `G-FTNVVFSVH7`). For local `next dev`, copy `.env.example` to `.env.local` (gitignored) or use the committed example values.

Align with the [Cookie Policy](/cookie-policy) before relying on analytics in production.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID (`G-FTNVVFSVH7`) |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional Plausible site domain (e.g. `lovejoy.health`) |

```bash
# .env.local (gitignored) or see .env.example / .env.production
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-FTNVVFSVH7
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=lovejoy.health
```

## Deploy notes

- **Hosting TBD** — Vercel is the natural fit for Next.js App Router; Laravel Forge / Node also fine if you prefer company infra.
- **Do not** point `lovejoy.health` DNS here until content, forms, analytics, and legal pages are signed off.
- WordPress remains live until cutover; this repo does not touch WP or DNS.

## Still needed from the team

- Hosting choice + domain cutover plan
- CMS vs static copy ownership
- Production contact form backend (Formspree, HubSpot, Filament, etc.)
- Search Console verification (GA4 ID is set via env; see Analytics section)
- Dedicated 1200×630 Open Graph image
- Higher-res logo variants (light + dark) and additional photography

## Related repos (do not confuse)

- `LJ-Health-Patient-App` — Flutter patient mobile
- `LJ-Provider-Web-Portal` / `LJ-Navigators-Web` / `LJ-Orgs-Portal` — authenticated product UIs
- `LJ-New-FilamentAdmin` — API / admin system of record
