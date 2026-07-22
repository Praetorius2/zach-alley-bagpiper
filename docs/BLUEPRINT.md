# Blueprint

Living project log: plans, decisions, and changes. Append; do not rewrite history away.

Agents: update this file in the same session when plans are discussed or code changes land.

---

## Current intent

Recreate the Zach Alley Highland Bagpiper marketing site (originally on Lovable) as a local Vite + React + TypeScript + Tailwind app, with Formspree inquire (no public email) and precise agent docs.

**Path:** `C:\Users\Zach\Projects\zach-alley-bagpiper`  
**Live:** https://www.zachalleybagpiper.com/  
**Reference (original):** https://bagpipe-boom-denver.lovable.app/

---

## Decisions

| Date | Decision |
|------|----------|
| 2026-07-21 | Stack: Vite + React + TypeScript + Tailwind CSS v4 |
| 2026-07-21 | Inquire via Formspree only; no public email / mailto on the site |
| 2026-07-21 | Form destination configured privately to `zwalley2@gmail.com` via Formspree (not rendered in UI) |
| 2026-07-21 | Project docs: `docs/BLUEPRINT.md` + `docs/CONSTRAINTS.md`, wired via always-on Cursor rules |
| 2026-07-21 | Low-risk polish: hero Inquire CTA, section IDs, light scroll reveal, skip link, SEO/JSON-LD, dynamic footer year, Z favicon |
| 2026-07-22 | Formspree form `xgoglkjo`; inquire uses `@formspree/react` `useForm` |
| 2026-07-22 | Canonical domain `https://www.zachalleybagpiper.com`; foundational technical SEO (robots, sitemap, redirects, WebP, JSON-LD) |

---

## Section map

1. Sticky header — brand + Inquire → `#inquire`
2. Hero — Flatirons full-bleed photo + headline
3. Intro — tradition / specialty copy
4. Services (`#services`) — Weddings, Funerals & Memorials, Special Events
5. Mid image — cathedral photo + pull quote
6. About (`#about`)
7. Expect (`#expect`) — numbered booking expectations
8. Inquire (`#inquire`) — Formspree form
9. Footer — name, service area, © year

## Design tokens

- Display: Cormorant Garamond
- Body: Manrope
- `night` / `night-deep` / `ink` / muted ink (oklch warm neutrals)

## Formspree setup

1. Form endpoint: `https://formspree.io/f/xgoglkjo` (inbox configured in Formspree; not shown on site)
2. Local `.env` sets `VITE_FORMSPREE_ID=xgoglkjo` (gitignored)
3. Inquire section uses `@formspree/react` (`useForm` + `ValidationError`)
4. Test submit from the inquire section; confirm delivery in Formspree / Gmail

---

## Changelog

### 2026-07-22 — Teaching copy

- Added studio lessons paragraph to About
- Added Lessons row under services (in-person / virtual; bagpipes, strings, piano)

### 2026-07-22 — Foundational technical SEO

- Canonical + absolute OG/Twitter for `https://www.zachalleybagpiper.com`
- `vercel.json` permanent redirects from apex and production `*.vercel.app` host to www
- Added `public/robots.txt` and `public/sitemap.xml`
- JSON-LD `@graph` with Person + ProfessionalService (no address/email)
- Section eyebrows promoted to `h2` for valid heading hierarchy
- Hero/mid images: WebP + PNG fallback, dimensions, preload WebP

### 2026-07-22 — Formspree React integration

- Installed `@formspree/react`
- Wired inquire form to form ID `xgoglkjo` via `useForm`
- Added `.env` with `VITE_FORMSPREE_ID` (kept out of git)

### 2026-07-22 — GitHub + Vercel

- Initial commit on `main`
- GitHub: https://github.com/Praetorius2/zach-alley-bagpiper
- Vercel production: https://zach-alley-bagpiper.vercel.app (GitHub repo connected for future deploys)

### 2026-07-21 — Initial one-shot recreate

- Scaffolded Vite React TS + Tailwind; seeded agent docs and Cursor rules
- Downloaded Flatirons and cathedral images from the Lovable deploy into `public/images/`
- Implemented full single-page layout matching Lovable copy and dark aesthetic
- Replaced mailto with Formspree inquire form (env-driven); no email shown in UI
- Added hero CTA, section IDs, scroll reveals, skip link, meta/OG, Person JSON-LD, favicon, dynamic year
- Verified `npm run build` and local `npm run dev` at http://127.0.0.1:5173/
