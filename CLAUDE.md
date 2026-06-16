# CLAUDE.md

このファイルは [Claude Code](https://claude.com/claude-code) がこのリポジトリで作業する際のガイダンスです。

## プロジェクト概要

「アクセシビリティカンファレンス福岡」の公式サイト（https://fukuoka.a11yconf.net ）。
SvelteKit + `@sveltejs/adapter-static` でプリレンダリングした**静的サイト**を生成し、GitHub Pages へ配信する。サーバーサイドのランタイムは持たない。

## 技術スタック

- **SvelteKit** + `@sveltejs/adapter-static`（全ページをビルド時にプリレンダリング）
- **Svelte 5** / **Vite 8** / **TypeScript 6**
- パッケージマネージャ: **Yarn 4**（corepack 経由 / `nodeLinker: node-modules`）
- ランタイム: **Node.js 24（LTS）**
- Lint/Format: **ESLint 10（フラット設定 `eslint.config.js`）** + **Prettier**
- テスト: **Vitest**（ユニット） / **Playwright**（統合）

バージョンの正は `package.json`（`packageManager` / `volta` / `devDependencies`）。

## 開発環境の構築

```sh
corepack enable   # package.json の packageManager から Yarn 4 を有効化
yarn install
```

- Node.js は `package.json` の `volta.node` に固定（24 系 LTS）。volta 利用時は自動で切り替わる。
- corepack が無い環境では `npm install -g corepack` で導入する。

## よく使うコマンド

| コマンド                | 内容                                               |
| ----------------------- | -------------------------------------------------- |
| `yarn dev`              | 開発サーバー起動（Vite）                           |
| `yarn build`            | 静的ファイルを `build/` に生成                     |
| `yarn preview`          | 本番ビルドをローカルで確認                         |
| `yarn check`            | `svelte-kit sync` + svelte-check による型チェック  |
| `yarn lint`             | Prettier 整形チェック + ESLint                     |
| `yarn format`           | Prettier で自動整形                                |
| `yarn test:unit`        | Vitest（`--run` で 1 回実行）                      |
| `yarn test:integration` | Playwright（要ブラウザ。build → preview して実行） |

変更後は最低限 `yarn build` と `yarn check` / `yarn lint` を通すこと。

## ディレクトリ構成

```
src/
  app.html              … HTML テンプレート（FONTPLUS の外部スクリプト読み込みもここ）
  routes/
    +layout.svelte      … 全ページ共通レイアウト
    +layout.ts          … `export const prerender = true`（全ページをプリレンダリング）
    +page.svelte        … 現行（2026）のトップ。開催告知のみのミニマル構成
    2025/ 2024/ 2023/   … 過去開催年のアーカイブ（年ごとに独立したページ群。各年に coc/schedule/venue 等）
  lib/
    components/         … 現行（2026）トップが使う共通コンポーネント
    2025/ 2024/ 2023/   … 過去開催年専用のコンポーネント・画像
    img/                … 画像
static/                 … そのまま配信される静的アセット
build/                  … ビルド成果物（gitignore 対象）
```

> 過去開催年（`2025` / `2024` / `2023`）は `routes` と `lib` の両方でディレクトリが分かれている。年をまたいで共通化はせず、その年のディレクトリ内で完結させる方針。各年のページ内リンク・ナビゲーションは必ず `/<year>/...` 始まりにする（ルート相対にすると翌年の改編で別の年を指してしまう）。

## コーディング規約

- **インデントはタブ**、シングルクォート、セミコロンあり、末尾カンマなし、`printWidth: 100`（`.prettierrc`）。
- Svelte コンポーネントは現状 Svelte 4 互換構文（`export let` / `$:`）で記述されており、Svelte 5 のレガシーモードで動作している。新規・改修時もこの記法に合わせてよい。
- ESLint はフラット設定（`eslint.config.js`）。静的サイトに不要な一部ルール（`svelte/no-navigation-without-resolve` など）と、日本語の全角スペースに反応する `no-irregular-whitespace` は無効化済み。

### 注意点

- `src/app.html` で FONTPLUS のウェブフォントを外部スクリプトから読み込む。`localhost` ではドメイン制限で `window.FONTPLUS` が未定義になるため、呼び出しは必ずオプショナルチェーン（`window.FONTPLUS?.reload()`）で行う。Svelte 5 では初期化中の例外が描画全体を止めるため特に注意。

## ビルド & デプロイ

- `yarn build` で `adapter-static` が全ルートをプリレンダリングし、`build/` に静的ファイルを出力する。
- デプロイは GitHub Actions（[`.github/workflows/static.yml`](.github/workflows/static.yml)）が担当:
  - トリガー: `main` への push / 平日朝の定期実行（cron）/ 手動実行（workflow_dispatch）
  - 手順: `corepack enable` → `yarn install --immutable` → `yarn build` → `actions/upload-pages-artifact`（`./build`）→ `actions/deploy-pages`
  - 公開先: GitHub Pages。独自ドメインは `CNAME`（`fukuoka.a11yconf.net`）で設定。
- `yarn install --immutable` を使うため、依存を変更したら `yarn.lock` を必ずコミットすること。

## メンテナンス

- 依存更新時は `yarn npm audit --all --recursive` で脆弱性を確認する。dev ツールの推移的依存に対しては `package.json` の `resolutions` でパッチ版へ固定している。
