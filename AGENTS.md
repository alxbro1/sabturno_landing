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
- `./deploy.sh` — builds, zips `dist/` and publishes it as a manual deployment to Amplify
  (app `d3tlsyf8fyzqva`, branch `staging`, serves `sabturno.com` + `www`). Waits for the job result.
- Requires the AWS CLI profile `sabturno`. The Amplify app is not git-connected: pushing does not deploy.
- The SPA rewrite (`/<*>` → `/index.html`, 404-200) lives in the Amplify app's rewrite rules, not in the repo.

## Analytics

GA4 + Meta Pixel are env-gated in `src/lib/analytics.ts`, wired in `src/main.ts`.

- Vars (see `.env.example`): `VITE_GA_MEASUREMENT_ID`, `VITE_META_PIXEL_ID`,
  `VITE_ANALYTICS_DEBUG` (set to `"true"` to load analytics during `npm run dev`; otherwise
  dev is skipped entirely to avoid polluting real data).
- **No IDs → no tags.** If neither `VITE_GA_MEASUREMENT_ID` nor `VITE_META_PIXEL_ID` is set,
  `initAnalytics` is a full no-op: no script injected, no `window.gtag`/`window.fbq`/`window.dataLayer`.
- SPA page views fire once per route change via `router.afterEach` (GA `page_view`, Pixel `PageView`),
  including the initial route (no duplicate).
- Events:

  | Event | Trigger | Tool | Params |
  | --- | --- | --- | --- |
  | `pre_register_open` | Pre-register modal opened | GA | `location` (`header` / `header_mobile` / `cta`) |
  | `generate_lead` | Pre-register form submit success | GA | `method: 'pre_register'` |
  | `Lead` | Pre-register form submit success | Pixel | — |
  | `sign_up_click` | Click on a pricing plan's register CTA | GA | `plan` (plan id) |
  | `ClickRegister` | Click on a pricing plan's register CTA | Pixel (custom) | `plan` (plan id) |
  | `open_app_click` | Click on a "Probar/Ver App Web" link | GA | `location` (`header` / `header_mobile` / `cta`) |

  Name/email are never sent to GA or Pixel.
- **Build-time vars.** Vite bakes `VITE_*` vars into the bundle at build time, not at runtime.
  `./deploy.sh` builds must have the real IDs in `.env.production` or the shell environment
  before running `npm run build` / `./deploy.sh`, or the deployed bundle ships without analytics.

## Gotchas
- Build runs `vue-tsc` before `vite build`; type errors block production builds
- No `vue/multi-word-component-names` enforcement — single-word `.vue` filenames are fine
- Body background is a multi-gradient defined in `style.css`, not Tailwind config
- Router uses `createWebHistory` (HTML5 history mode, no hash)
- No consume la API hoy, pero si en el futuro se agrega algún form con
  fecha/hora, seguir `docs/time-handling.md` (raíz) como contrato.
