# fukuoka.a11yconf.net

This repository is the source code for the Fukuoka A11yConf website.

[![Deploy static content to Pages](https://github.com/fukuoka-a11yconf-net/fukuoka.a11yconf.net/actions/workflows/static.yml/badge.svg)](https://github.com/fukuoka-a11yconf-net/fukuoka.a11yconf.net/actions/workflows/static.yml)

https://fukuoka.a11yconf.net

## Tech stack

- [SvelteKit](https://svelte.dev/docs/kit)
- [Svelte](https://svelte.dev/) v5
- [Vite](https://vite.dev/) v8
- [TypeScript](https://www.typescriptlang.org/) v6

## Environment

- Node.js v24（LTS / Krypton）
- Yarn v4

## Setup

```sh
corepack enable
yarn install
```

## Development

```sh
yarn dev
```

## Build & Preview

```sh
yarn build
```

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
