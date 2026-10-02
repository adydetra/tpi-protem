# Testing

Tests are written using Vitest with `@vue/test-utils` and `happy-dom`.

## Commands

```bash
# Run test suite once
bun run test

# Run tests in watch mode
bun run test:watch

# Run linter
bun run lint

# Auto-fix linting issues
bun run lint:fix

# Test production build
bun run build
```

## Test Structure & Conventions

Test files are located in `test/` mirroring the component hierarchy:

- `test/components/TheHeader.test.js`: Validates navbar navigation items, links, and mobile menu toggle behavior.
- `test/components/Future.test.js`: Verifies rendering of future section heading and child `FutureCard` components with accurate props.
- `test/components/FutureCard.test.js`: Verifies rendering of title, description, and SVG icon attributes.

## Guidelines

1. **Avoid Mocking When Real Mounting Works**: Mount components with `@vue/test-utils` and test real DOM output and behavior.
2. **Behavior Over Markup Details**: Test user-visible text, interactive states (e.g., clicking the mobile hamburger button toggles navigation display), and correct prop passing.
3. **Keep Tests Fast & Isolated**: Vitest is configured with `clearMocks: true` and `restoreMocks: true` in `vitest.config.js`.
