# Sabturno Landing — Agent Guide

## Stack
- Vue 3 + Vite + TypeScript + Tailwind CSS
- Dark theme with neon green (`#00f068`) accents
- Fonts: Space Grotesk (headings), Manrope (body)
- No tests configured

## Commands
- `npm run dev` — dev server
- `npm run build` — typecheck (`vue-tsc`) then Vite build; must pass before deploy
- `npm run lint` — ESLint with `--max-warnings 0` (zero warnings tolerance)
- `npm run format` — Prettier on `src/**/*.{vue,ts,js,css,md}`
- `npm run preview` — preview production build locally

## Style Rules
- Prettier: single quotes, no semicolons, trailing commas `es5`, print width 100
- ESLint: `no-console` warns except `console.warn`/`console.error`
- Vue component names can be single-word (rule disabled)

## Structure
- `src/main.ts` — app entry, mounts with router
- `src/router/index.ts` — routes with Spanish slugs (`/terminos-y-condiciones`, `/politica-de-privacidad`, `/eliminar-cuenta`)
- `src/pages/` — page-level components (Home, TermsAndConditions, PrivacyPolicy, DeleteAccount)
- `src/components/home/` — section components for the landing page
- `src/style.css` — Tailwind directives, fonts, body background gradient
- `tailwind.config.js` — custom `brand` colors, `glow`/`card` shadows, `float` animation

## Deploy
- `./deploy.sh` — builds then `scp`s `dist/` to EC2 (`ubuntu@54.210.182.128:/home/ubuntu/web`)
- Requires local PEM key at `~/Desktop/Credentials/PEM/styleup-key.pem`

## Gotchas
- Build runs `vue-tsc` before `vite build`; type errors block production builds
- No `vue/multi-word-component-names` enforcement — single-word `.vue` filenames are fine
- Body background is a multi-gradient defined in `style.css`, not Tailwind config
- Router uses `createWebHistory` (HTML5 history mode, no hash)
