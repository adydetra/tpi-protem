# Architecture

Single-page application (SPA) landing page built with Vue 3 (Composition API) and Vite 7.

## Component Hierarchy

```text
src/App.vue (Root layout & split responsive background)
├── src/components/TheHeader.vue (Navigation bar, mobile toggle drawer, CTA)
├── src/components/Hero.vue (Hero headline, value proposition, action button, hero artwork)
├── src/components/About.vue (Company overview, feature bullets, about illustration)
├── src/components/Future.vue (Feature grid container)
│   └── src/components/app/FutureCard.vue (Feature card items with props & SVG icons)
└── src/components/TheFooter.vue (Copyright footer)
```

## Data and State Flow

- **Local State**: State is localized to the components that need it using Vue 3 `ref`. For example, `TheHeader.vue` manages mobile menu visibility (`showMenu`).
- **Props**: `Future.vue` passes configuration items (`title`, `icon`, `desc`) into `FutureCard.vue` instances via component props.
- **Navigation**: In-page anchor navigation (`#home`, `#about`) rather than client-side routing, keeping the bundle lean and avoiding unnecessary `vue-router` overhead.

## Asset Pipeline

- Static assets under `public/` (e.g. `future-icon-*.svg`, `favicon.ico`, `preview.jpg`) are served directly at the root path `/`.
- Component-bound artwork under `src/assets/img/` (`about.png`, `hero.png`) and vector marks under `src/assets/icon/` (`logo.svg`, `line.svg`, `icon.svg`) are bundled and hashed by Vite.
- Global styles and font definitions are imported in `src/assets/index.css` and loaded by `index.html`.
