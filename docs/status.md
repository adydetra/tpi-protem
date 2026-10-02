# Project Status & Roadmap

Current state, supported features, and technical notes for Protem.

## Implemented Scope

- **Responsive Landing Page**: Complete layout with split-color background for hero section, navigation drawer for mobile screens, about section, future features grid, and footer.
- **Tailwind CSS v4 Integration**: Native Vite integration using `@tailwindcss/vite` and CSS `@theme` tokens.
- **Component Test Suite**: Vitest and `@vue/test-utils` testing unit and integration behavior for components (`TheHeader`, `Future`, `FutureCard`).
- **Code Quality**: Strict ESLint rules using `@antfu/eslint-config` with automated formatting.

## Maintenance & Gaps

- **Anchor Navigation**: Navigation targets (`#home`, `#about`) are implemented; placeholder items (`Features`, `Collection`, `Contact`) can be given dedicated anchors or sections as the site expands.
- **Images & Visual Assets**: Preview and hero illustrations are currently static PNG/SVG assets in `src/assets/` and `public/`.
