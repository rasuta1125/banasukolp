# Cloudflare Pages デプロイガイド（修正版）

## 🚨 現在の問題
URL: https://c0d45908.banasuko555.pages.dev/ が404エラーになっている

## 🔧 修正方法

### Option 1: GitHubリポジトリ経由デプロイ（推奨）

1. **GitHubにコードをプッシュ**
2. **Cloudflare PagesでGitHub連携**
3. **ビルド設定**：
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`

### Option 2: ファイル直接アップロード修正

現在の直接アップロード方式を修正：

**アップロードするファイル**：
- `_worker.js` （メインアプリケーション）
- `_routes.json` （ルーティング設定）
- `static/` フォルダ全体

**重要**: `dist/` フォルダの**中身だけ**をアップロード（フォルダごとではない）

### Option 3: wrangler CLI使用（最も確実）

```bash
# 1. wrangler でログイン
npx wrangler login

# 2. Pages プロジェクト作成
npx wrangler pages project create banasco-lp

# 3. デプロイ実行
npx wrangler pages deploy dist --project-name banasco-lp
```

## 📋 必要なファイル確認

現在の `/home/user/webapp/dist/` 内容：
- ✅ `_worker.js` - Honoアプリケーション
- ✅ `_routes.json` - ルーティング設定
- ✅ `static/` - 静的ファイル

## 🎯 推奨アクション

**最も確実な方法**: wrangler CLI を使用
1. Cloudflare APIトークン設定完了済み
2. コマンド実行でワンクリックデプロイ
3. 正しいURL取得

どの方法で進めますか？