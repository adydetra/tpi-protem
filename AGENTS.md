# Agent Guide

Vue 3 + Vite 7 responsive single-page landing page styled with Tailwind CSS v4.

Read only the document needed:
- `docs/architecture.md`: component hierarchy, state flow, and asset pipeline.
- `docs/style.md`: Tailwind CSS v4 setup, color theme tokens, typography, and responsive layout.
- `docs/testing.md`: Vitest commands, component testing conventions, and coverage.
- `docs/push.md`: branch naming, commit standards, pull request lifecycle, and pre-push validation.
- `docs/status.md`: implemented features, technical roadmap, and maintenance notes.

## Source Map

- `src/App.vue`: root layout, responsive split gradient hero background, and section order.
- `src/components/TheHeader.vue`: top navigation, brand logo, mobile hamburger drawer, and CTA.
- `src/components/Hero.vue`: hero headline, value proposition, and hero graphic.
- `src/components/About.vue`: overview copy, checklist bullets, and illustration.
- `src/components/Future.vue`: feature grid container iterating feature cards.
- `src/components/app/FutureCard.vue`: presentational feature card with prop-driven icon, title, and description.
- `src/components/TheFooter.vue`: global copyright footer.
- `src/assets/index.css`: font imports, Tailwind CSS v4 setup, `@theme` tokens, and base typography rules.
- `test/components/`: Vitest test suites for component mounting, prop rendering, and user interactions.
- `public/`: static icons (`future-icon-*.svg`), preview artwork, and favicon.

## Invariants

- Use Vue 3 Composition API with `<script setup>`.
- Keep the page lightweight and performant. Do not add routing libraries (e.g. `vue-router`) or heavy state stores unless explicitly requested by the user.
- Prefer Tailwind utility classes over ad-hoc styles. Use scoped CSS only for complex CSS gradients or canvas effects that utilities cannot cleanly express.
- Maintain brand theme variables (`--color-buku-blue` and `--color-buku-yellow`) defined in `src/assets/index.css`.
- Keep tests fast and reliable: run all tests with `bun run test` using `happy-dom` and `@vue/test-utils`.
- Code formatting and linting must adhere to `@antfu/eslint-config` (`bun run lint`).

## Change Workflow

Read `package.json` before altering dependencies or build scripts. Run `bun run test` and `bun run lint` before committing any code changes. Follow `docs/push.md` for git commit conventions, and keep `docs/` updated if architectural or invariant details change.
