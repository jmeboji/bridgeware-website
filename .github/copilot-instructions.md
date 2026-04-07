# Copilot Instructions

- This is a Next.js 15 app-router marketing site with no database layer. The repo is mainly static pages plus two form-backed server routes.
- Main source folders: `app/` for pages and API routes, `components/ui/` for custom Radix-based UI primitives, `lib/utils.ts` for shared helpers, and `app/globals.css` for Tailwind CSS custom properties.

## Architecture

- `app/layout.tsx` is minimal and only wraps `children` with HTML metadata.
- `app/page.tsx`, `app/contact/page.tsx`, and `app/request-callback/page.tsx` are client pages. They include inline form logic and `GoogleReCaptchaProvider` usage.
- UI primitives in `components/ui/*` are wrappers around Radix UI components and use `cn()` from `lib/utils.ts` plus Tailwind/CVA styling.
- `components/theme-provider.tsx` exists, but it is not currently integrated into `app/layout.tsx`.

## Form flow and integration points

- Contact form pages POST to `/api/contact` and callback page POSTs to `/api/request-callback`.
- Both API routes are in `app/api/contact/route.ts` and `app/api/request-callback/route.ts`.
- The routes verify Google reCAPTCHA v3 with `RECAPTCHA_SECRET_KEY`, but they also accept a fallback token (`fallback-token`) when recaptcha is unavailable.
- Email delivery uses Nodemailer and SMTP settings. The recipient is hard-coded to `jmeboji@hotmail.com`.

## Environment variables

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — required by client reCAPTCHA providers.
- `RECAPTCHA_SECRET_KEY` — required by the server API routes.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` — required for Nodemailer in both API routes.

## Conventions

- Use `@/components/ui/*` imports for buttons, inputs, selects, cards, and form controls.
- `components/ui/button.tsx` uses `class-variance-authority` for variant styling. New primitives should follow this wrapper pattern.
- Page-level form logic is implemented inline in the page components, not via shared form hooks.
- `tailwind.config.ts` is configured for `app/`, `components/`, `pages/`, and `src/` paths.
- The app uses `next.config.mjs` with `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true`, so builds may succeed even when lint or type errors exist. Prefer editor/IDE validation.

## Local workflows

- Start dev server: `npm run dev`
- Build: `npm run build`
- Start production server: `npm start`
- Lint: `npm run lint`

## Notes for changes

- Avoid adding new backend behavior outside `app/api/*` unless the project needs persistence; current server logic is only email form submission.
- Static assets and icons are served from `public/`.
- If you add theming, wire `components/theme-provider.tsx` into `app/layout.tsx` instead of leaving it unused.
