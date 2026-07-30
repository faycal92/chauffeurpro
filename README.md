# DriveConnect

Site vitrine et blog SEO pour DriveConnect, agence de création de sites web pour chauffeurs VTC et taxi. Construit avec Next.js 14 (App Router), TypeScript et Tailwind CSS.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — serveur de développement
- `npm run build` — build de production
- `npm run start` — démarre le build de production
- `npm run lint` — vérifie le code avec ESLint

## Structure

- `src/app` — pages (App Router), sitemap, robots, métadonnées
- `src/app/blog` — page liste et pages articles du blog SEO
- `src/components` — composants de la page d'accueil
- `src/components/blog` — composants du blog (grille, article, TOC, FAQ...)
- `src/lib/constants.ts` — constantes du site (contact, WhatsApp, URL)
- `src/lib/blog-data.ts` — contenu des articles du blog
