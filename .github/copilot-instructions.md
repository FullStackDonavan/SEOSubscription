# AI agent guide for SEOSubscription

Nuxt 3 + Nitro app with Tailwind, Prisma (MySQL), Stripe, and @nuxt/content. Follow these project-specific patterns and workflows.

## Stack and layout
- Nuxt 3 (SSR) with Nitro server routes; Tailwind (typography plugin) via `assets/css/tailwind.css` and `tailwind.config.js`.
- Content via `@nuxt/content` in `content/**`; navigation fields `author|subject|position` configured in `nuxt.config.ts`.
- Components are auto-registered globally from `~/components` (`pathPrefix: false`).
- Server: `server/api/**` (handlers), `server/app/services/**` (business logic), `server/app/formRequests/**` (Zod), `server/app/errors/**` (error mapping).
- Data: Prisma client `server/database/client.ts`; schema at `server/database/schema.prisma` with repositories in `server/database/repositories/**`.
  - Note: root `prisma/schema.prisma` exists but the active schema is `server/database/schema.prisma` (see `package.json`).

## Run, build, test
- Dev: `npm run dev` (http://localhost:3000, `--trace-warnings`). Build: `npm run build`; Preview: `npm run preview`.
- Tests (Vitest + @nuxt/test-utils-edge): `npm test` runs Docker + `prisma migrate deploy` then tests. CI uses `npm run ci:test` (no Docker).
- Prisma helpers: `npm run prisma:generate`, `npm run prisma:migrate` (env via `dotenv-cli`). Ensure `DATABASE_URL`.

## Server patterns
- File-based API with method suffixes, e.g., `server/api/subscribe.post.ts`, `server/api/auth/login.ts`.
- Keep handlers thin; delegate to services (e.g., `userService.ts`, `stripeService.ts`).
- Use repositories for DB access (e.g., `getUserByEmail`, `createUser`, `updateSubscription`).
- Protect sensitive API routes in `server/middleware/serverAuth.ts` by adding to `protectedRoutes`.

## Auth
- Cookie `auth_token` identifies a session; server checks via `getUserBySessionToken` (see `userService.ts`).
- Client route middleware: `middleware/auth.ts` (requires login), `middleware/guest.ts` (redirects logged-in users).
- `composables/useAuth.ts` centralizes register/login/logout; caches user in `useState('user')` and uses SSR `useRequestHeaders(['cookie'])`.

## Validation and errors
- Inputs validated via `server/app/formRequests/*` (Zod) and `server/app/services/validator.ts` (availability checks using repositories).
- API errors serialize a Map of field messages; frontend maps via `composables/useErrorMapper.ts`.
- Use shared error responders under `server/app/errors/**`.

## Stripe
- Config from `runtimeConfig`: `private.stripeSecretKey`, `public.appDomain`.
- Subscribe flow: `server/api/subscribe.post.ts` -> `stripeService.getSubscribeUrl` (creates customer if needed, returns checkout URL, may update `stripeCustomerId`).
- Webhooks/portal under `server/api/stripe/`; sync `Subscription` with `handleSubscriptionCreate/Change`.

## Content and media
- Topics/Series/Videos via `videoRepository.ts`; e.g., `server/api/topics.ts` returns chunked rows for UI.

## Conventions
- New server work: validate -> service -> repository; keep API handlers minimal.
- Extend Prisma at `server/database/schema.prisma`; generate/apply migrations before use.
- Components are global; colocate page-specific UI under `components/sections/**`.
- Required env: `DATABASE_URL`, `STRIPE_SECRET_KEY`, `APP_DOMAIN` (plus optional public keys like `GHL_API_KEY`).

Questions or gaps? Say what you’re building (e.g., a protected dashboard endpoint or a new repository), and we’ll refine the guidance.