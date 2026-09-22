# Portfolio

Personal portfolio site for Tomisin Akinfemiwa — a single-page, dark, restrained
site built with Next.js (App Router) and TypeScript.

## Stack

- Next.js 16 (App Router), TypeScript
- CSS Modules + CSS custom properties (no Tailwind)
- `next/font` (Geist, JetBrains Mono), self-hosted
- Generated icons and Open Graph image via `next/og`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Set `NEXT_PUBLIC_SITE_URL` (the site's production URL) in the hosting
environment so Open Graph / Twitter image URLs resolve correctly. On Vercel
this can be left unset — it falls back to the platform's own `VERCEL_URL`.
