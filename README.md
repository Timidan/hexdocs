# HexKit docs

Documentation for [HexKit](https://hexkit.app)'s Vara tools, published with
[Thally](https://thally.io) at **https://hexdocs.thally.app**.

| Page | Source |
| --- | --- |
| Introduction | `src/content/introduction.mdx` |
| Quickstart | `src/content/quickstart.mdx` |
| Replay a message at two blocks | `src/content/guides/replay-a-message.mdx` |

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3040.

## Check before you push

```bash
npx --yes @thallylabs/cli@latest check --drift
npm run build
```

`--drift` compares each page's `verifiedCommit` with the pinned HexKit commit
in `product/hexkit`. Dependabot is set to move that pin forward weekly; when it does,
CI flags every page that needs re-checking against the app. See `AGENTS.md`
for the verify steps.

Pushes to `main` publish through Thally Cloud. Pull requests get a preview
deployment.

The earlier, larger EVM edition of these docs is kept at the
[`synchack-final`](https://github.com/Timidan/hexdocs/tree/synchack-final) tag.

## License

[MIT](LICENSE)
