# fukuoka.a11yconf.net

This repository is the source code for the Fukuoka A11yConf website.

[![Deploy static content to Pages](https://github.com/fukuoka-a11yconf-net/fukuoka.a11yconf.net/actions/workflows/static.yml/badge.svg)](https://github.com/fukuoka-a11yconf-net/fukuoka.a11yconf.net/actions/workflows/static.yml)

https://fukuoka.a11yconf.net

## Tech stack

- [SvelteKit](https://svelte.dev/docs/kit) + [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static)（プリレンダリングした静的サイトを生成）
- [Svelte](https://svelte.dev/) v5
- [Vite](https://vite.dev/) v8
- [TypeScript](https://www.typescriptlang.org/) v6
- ホスティング: GitHub Pages（独自ドメイン `fukuoka.a11yconf.net` / `CNAME`）

## Environment

- Node.js v24（LTS / Krypton）
- Yarn v4（`package.json` の `packageManager` で固定。corepack 経由で利用）

> [!NOTE]
> Node.js / Yarn の正確なバージョンは `package.json` の `volta` および `packageManager` を参照してください。

## Setup

Yarn は corepack で有効化します（Node.js 同梱。`package.json` の `packageManager` のバージョンが自動で使われます）。

```sh
corepack enable
yarn install
```

## Development

開発サーバーを起動します。

```sh
yarn dev
```

## Build & Preview

静的ファイルを `build/` に生成します。

```sh
yarn build
```

生成した本番ビルドをローカルで確認します。

```sh
yarn preview
```

## Lint / Format / Type check / Test

```sh
yarn lint     # Prettier の整形チェック + ESLint
yarn format   # Prettier で自動整形
yarn check    # svelte-check による型チェック
yarn test     # 統合テスト (Playwright) + ユニットテスト (Vitest)
```

## Deploy

`main` ブランチへの push（および平日朝の定期実行）で GitHub Actions が `yarn build` を実行し、`build/` を GitHub Pages へ自動デプロイします。設定は [`.github/workflows/static.yml`](.github/workflows/static.yml) を参照してください。
