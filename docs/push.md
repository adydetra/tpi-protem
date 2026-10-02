# Repository & Push Workflow

Every code change must follow consistent commit standards and branch hygiene before pushing.

## 1. Branch Naming

Create short, descriptive branches for feature work and fixes:

```text
feat/short-description
fix/short-description
docs/short-description
chore/short-description
```

## 2. Commit Standards

Use focused commits with imperative Conventional Commit messages:

- `feat(component): add testimonials section`
- `fix(header): correct anchor target for about link`
- `docs(agents): update testing guide and invariants`
- `chore(deps): bump vite to 7.3.1`

Avoid vague commits like `update`, `fix`, or `changes`.

## 3. Pre-Push Validation

Before committing or pushing code, ensure all local checks pass:

```bash
bun run lint
bun run test
bun run build
```

Do not commit generated directories (`dist/`), temporary logs, or `node_modules/`.

## 4. Pull Request & Review

1. Create a clear pull request title matching the primary commit subject.
2. Outline the problem, the solution, and verification steps in the PR description.
3. Once reviewed and approved, merge cleanly and delete the feature branch.
