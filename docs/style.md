# Style & Design System

The application uses Tailwind CSS v4 powered by `@tailwindcss/vite` and configured directly in `src/assets/index.css`.

## Color Palette & Theme Tokens

Defined via CSS `@theme`:

| Token | Value | Description |
| :--- | :--- | :--- |
| `--color-buku-blue` | `#024D94` | Primary brand deep blue used for backgrounds, headings, and prominent buttons |
| `--color-buku-yellow` | `#F8D171` | Accent bright yellow used for CTA buttons, card icons, and decorative highlights |

## Typography

Fonts are loaded from Google Fonts in `src/assets/index.css`:

- **Headings (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)**: `Nunito Sans`, sans-serif (weights 300 to 900).
- **Body & Buttons (`p`, `button`)**: `Open Sans`, sans-serif (weights 300 to 800).

Utility classes `.nunito-sans` and `.open-sans` are available via `@layer base`.

## Layout & Split Background

The hero section features a signature split background configured in `src/App.vue`:

- **Mobile (< 1024px)**: Solid `#024d94` background.
- **Desktop (>= 1024px)**: Split linear gradient (`linear-gradient(to right, #024d94 0%, #024d94 53%, #f8d171 47%, #f8d171 100%)`).
- **Wide Screens (>= 1536px)**: Adjusted split angle (`57% / 43%`).

## Component Styling Conventions

1. Prefer Tailwind utility classes over custom scoped CSS where possible.
2. Scoped `<style scoped>` is reserved for specific container backgrounds or complex responsive gradients that Tailwind cannot cleanly express.
3. Ensure mobile responsiveness across breakpoints (`md: 768px`, `lg: 1024px`, `2xl: 1536px`).
