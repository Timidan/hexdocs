# Documentation project instructions

## Repository role

This repository is the HexKit documentation site, built on the Thally starter
and published by Thally Cloud at https://hexdocs.thally.app. Framework files
are a pinned snapshot listed in `starter-release.json`; update them through
Thally Cloud (**Settings → Updates**), never by hand.

## Project boundaries

- Pages are MDX files in `src/content/`.
- Navigation and portable product features are configured in `docs.json`.
- Site identity and versioned brand defaults live in `src/data/site.ts`.
- `starter-release.json` and runtime-owned paths listed in it are
  machine-managed; do not hand-edit them.
- Runtime changes belong in `thallylabs/thally` and arrive here only through
  the generated synchronization pull request.
- Starter-owned seed content and portable defaults are authored here. Paid
  service internals remain in `thallylabs/thally-cloud`.
- Never place credentials in source files. Use `.env.local` locally and secret
  storage in the deployment platform.

## Writing standards

- Address the reader as “you” and use active voice.
- Lead with the outcome, then state prerequisites and the shortest working path.
- Use sentence-case headings and concise paragraphs.
- Format commands, files, configuration keys, and code with backticks.
- Tell readers what success looks like and link the next useful task.
- Keep advanced or optional paths outside the primary workflow.

## Content model

- Every page needs `title` and `description` frontmatter.
- Keep page slugs stable once published.
- Add pages to `docs.json`; do not leave useful pages orphaned.
- Update `openapi.yaml` when API behavior changes.
- Run `npm ci --ignore-scripts --prefix .github/thally-tooling`, then
  `.github/thally-tooling/node_modules/.bin/thally check --ci .`, `npm test`,
  and `npm run build` before publishing.

## Product context

- The product is HexKit (https://hexkit.app), source at `Timidan/hexkit`. These
  docs cover its Vara tools only; the EVM tools are out of scope for now.
- Write "HexKit", "Message Inspector", "dry run", "Sails IDL" and "VARA" (the
  token) exactly as here. Name UI controls in bold as the app labels them.
- Every example must run against Vara mainnet today. Re-run it in the app
  before changing a page that contains it.
- `product/hexkit` is a submodule pinned to the HexKit commit the pages were
  verified against. When `thally check --drift` flags a page, re-check it in the
  app, then set `lastVerified` to today and `verifiedCommit` to
  `git rev-parse HEAD`. Merge with a merge commit, not a squash, so that commit
  stays in `main`'s history.
