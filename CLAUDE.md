# mui-color-input

A color input designed for the React library MUI built with TinyColor, published on NPM as `mui-color-input`.

## Project structure

- `src/` — Library source code (components, hooks, helpers)
- `docs/` — Documentation site (Docusaurus), deployed on GitHub Pages
- `.storybook/` — Storybook config for local development

## Commands

- `pnpm build` — Build the library
- `pnpm lint` — TypeScript check + ESLint
- `pnpm test` — Run tests with Vitest
- `pnpm storybook` — Local Storybook dev server
- `pnpm release -- --release-as major|minor|patch` — Bump version with standard-version

## Deploy documentation

```
cd docs && GIT_USER=viclafouch npx docusaurus deploy
```

> **Important:** Never use `pnpm deploy` or `npm run deploy` — `pnpm deploy` is a pnpm workspace command, not Docusaurus. Always use `npx docusaurus deploy` directly.

This builds the Docusaurus site and pushes to the `gh-pages` branch. The site is hosted at https://viclafouch.github.io/mui-color-input/.

## Release workflow

1. Fix bugs / add features on `main`
2. Run `pnpm release -- --release-as <type>` (builds + bumps version + creates git tag)
3. `npm publish`
4. Create a GitHub Release with changelog
5. Deploy the documentation (see above)
6. Close related issues on GitHub

## Maintenance

- Monitor open issues and pull requests on GitHub
- Peer dependencies: MUI, Emotion, React — keep ranges broad for consumer compatibility
- Runtime dependency: `@ctrl/tinycolor` — bundled into the library output
