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

## Deploy notes

- **Hosting TBD** — Vercel is the natural fit for Next.js App Router; Laravel Forge / Node also fine if you prefer company infra.
- **Do not** point `lovejoy.health` DNS here until content, forms, analytics, and legal pages are signed off.
- WordPress remains live until cutover; this repo does not touch WP or DNS.

## Still needed from the team

- Hosting choice + domain cutover plan
- CMS vs static copy ownership
- Production contact form backend (Formspree, HubSpot, Filament, etc.)
- Analytics (GA4 / Segment / Plausible)
- App Store / Play download deep links if you want badges restored
- Privacy / Terms pages
- Higher-res logo variants (light + dark) and additional photography

## Related repos (do not confuse)

- `LJ-Health-Patient-App` — Flutter patient mobile
- `LJ-Provider-Web-Portal` / `LJ-Navigators-Web` / `LJ-Orgs-Portal` — authenticated product UIs
- `LJ-New-FilamentAdmin` — API / admin system of record
