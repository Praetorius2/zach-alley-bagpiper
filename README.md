# Zach Alley — Highland Bagpiper

Single-page marketing site for Highland bagpipe performances in the Denver–Boulder area.

## Docs for agents

- [`docs/BLUEPRINT.md`](docs/BLUEPRINT.md) — plans, decisions, changelog
- [`docs/CONSTRAINTS.md`](docs/CONSTRAINTS.md) — scope rules for AI agents

## Develop

```bash
npm install
cp .env.example .env   # then set VITE_FORMSPREE_ID
npm run dev
```

## Formspree

Inquiries use [`@formspree/react`](https://github.com/formspree/formspree-js/tree/master/packages/formspree-react) against form `xgoglkjo`. The public site does not show an email address. Set `VITE_FORMSPREE_ID` in `.env` (see `.env.example`).

## Build

```bash
npm run build
npm run preview
```
