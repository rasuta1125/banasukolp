# バナスコ - AI バナー診断ツール LP

## プロジェクト概要
- **名前**: バナスコ（Banasco）
- **目的**: 広告バナーAI診断ツールのランディングページ
- **主要機能**: Free→Lite プランアップセル導線の最適化

## 公開URL
- **開発環境**: https://3000-i8hyxfa05y2hamo2t2n2e-6532622b.e2b.dev
- **GitHub**: https://github.com/username/webapp (要設定)
- **バナスコ本サイト**: https://banasuko-ai-pgwxneahodpvwln3efsddu.streamlit.app/ (CTA導線先)

## 最新更新 (2025年9月12日)

### 📝 指示書反映内容
- **SEO最適化**: タイトル「バナスコAI｜コピー生成・最適CTA・投稿前チェックを一括」
- **メタ説明更新**: 140字以内の新しいディスクリプション
- **H1/リード文更新**: 「出稿前30秒で、作って・直して・そのまま投稿」
- **機能チップ追加**: NEW 最適CTA、Instagram投稿文自動生成、投稿前チェック、全プラン薬機法
- **機能説明文更新**: 全カードの説明文を指示書に合わせて変更
- **FAQ追加**: 自動投稿対応、薬機法チェック対象プランの質問を追加
- **CTA導線変更**: 全てのボタンをhttps://banasco.comに変更
- **免責事項更新**: 推定値（CTA/CTR等）と薬機法チェックの免責文言を修正

## 実装済み機能

### ✅ 完了した主要セクション
1. **Hero セクション**
   - 30秒デモ表示エリア
   - メインコピー「出稿前30秒で、作って・直して・そのまま投稿。」
   - 主要CTAボタン（無料診断開始）

2. **社会的証明セクション**
   - 利用実績とユーザーの声
   - 導入企業ロゴエリア

3. **機能紹介セクション**
   - ✅ AI診断（Free）- 今すぐ試すボタン
   - 🔒 最適CTA予測（NEW, Lite〜）- アップセルモーダル
   - 🔒 Instagram投稿文生成（NEW, Lite〜）- アップセルモーダル  
   - 🔒 誤字・表記ゆれチェック（Lite〜）- アップセルモーダル
   - 🔒 自動レポート（Lite〜）- アップセルモーダル
   - ✅ 薬機法チェック（全プラン）- 今すぐ試すボタン

4. **Instagram投稿支援セクション**
   - インタラクティブなキャプション生成UI
   - ハッシュタグ自動提案
   - ワンクリックコピー機能
   - 薬機法アラート表示

5. **料金プラン詳細**
   - Free / Lite（キャンペーン価格1,000円/月）/ Pro プラン
   - 機能比較表（最適CTA予測、Instagram投稿文生成等の新機能含む）
   - 各プランのCTAボタン

6. **FAQ セクション**
   - アコーディオン形式の質問回答
   - よくある質問への対応

7. **固定CTAバー**
   - モバイル用の固定下部CTA
   - Heroセクション表示時は非表示

### ✅ 実装済みインタラクティブ機能

#### Free→Lite アップセル導線
- **対象機能**: 最適CTA予測、Instagram投稿文生成、誤字チェック、自動レポート
- **導線**: 機能ボタンクリック → ロック画面モーダル → 短文訴求 → 「Liteで解放」ボタン
- **メッセージ例**:
  - 最適CTA予測: 「配信前の効果最大化へ。最適CTAを自動提案。」
  - Instagram投稿文: 「Instagram投稿が"めっちゃ楽"に。投稿文とハッシュタグを自動生成。」

#### アナリティクス実装
- **GA4対応**: gtag 関数でイベント送信
- **Meta Pixel対応**: fbq 関数でイベント送信  
- **計測イベント**:
  - `cta_click`: CTA クリック
  - `cta_try_free`: 無料診断開始
  - `upgrade_attempt`: アップグレード試行
  - `upgrade_paid`: 有料プラン登録
  - `caption_generated`: Instagram キャプション生成
  - `section_viewed`: セクション到達

#### その他のUI機能
- FAQアコーディオン（クリックで開閉）
- スムーススクロール（アンカーリンク）
- トースト通知（コピー完了時）
- Instagram キャプション生成・コピー機能
- モーダルウィンドウ（CTA、アップセル）

## データアーキテクチャ
- **ストレージ**: 現在は静的サイト（Cloudflare Pages）
- **フレームワーク**: Hono + TypeScript
- **スタイリング**: TailwindCSS（CDN）
- **デプロイ**: Cloudflare Pages + Workers

## 実装仕様

### SEO/OGP対応
- **メタタグ**: title, description, OGP, Twitter Card
- **構造化データ**: JSON-LD（SoftwareApplication）
- **Analytics**: GA4, Meta Pixel タグ実装済み

### レスポンシブ対応  
- **モバイルファースト**: TailwindCSS レスポンシブクラス
- **固定CTA**: モバイル専用の下部固定バー
- **タブレット・デスクトップ**: グリッドレイアウト最適化

## 技術スタック
- **Backend**: Hono Framework（TypeScript）
- **Frontend**: TailwindCSS + Vanilla JavaScript
- **Build**: Vite + Cloudflare Pages Plugin
- **Deploy**: Cloudflare Pages + Workers
- **Analytics**: GA4 + Meta Pixel

## 開発環境
- **Platform**: Cloudflare Pages
- **Status**: ✅ 稼働中
- **Last Updated**: 2025年9月12日（指示書反映完了）

## 未実装・今後の改善項目

### 🚧 次のステップ
1. **実際のGA4/Meta Pixel ID設定**
   - 現在は `GA_MEASUREMENT_ID`, `META_PIXEL_ID` プレースホルダー
   - 本番環境用のトラッキングID設定が必要

2. **30秒デモコンテンツ**
   - 現在はプレースホルダー画像
   - 実際の診断デモ動画/GIFの追加

3. **実際のユーザー登録機能**
   - 現在はモック（alert表示）
   - バックエンドAPI接続

4. **OGP画像作成**
   - `/static/ogp-image.jpg` の実画像作成

5. **導入企業ロゴ**
   - 実際のクライアント企業ロゴの追加

## 開発コマンド

### 開発環境起動
```bash
# ビルド
npm run build

# 開発サーバー起動（PM2）
pm2 start ecosystem.config.cjs

# ログ確認
pm2 logs --nostream

# サービス停止
pm2 delete banasco-lp
```

### Git操作
```bash
# 変更をコミット
git add . && git commit -m "メッセージ"

# GitHubプッシュ（要事前setup_github_environment）
git push origin main
```

### Cloudflare デプロイ
```bash
# 事前にsetup_cloudflare_api_keyが必要
npm run deploy
```

## ユーザーガイド

### 主要なユーザー体験フロー
1. **無料ユーザー**: Hero → 無料診断 → 基本機能体験 → Lite機能でアップセルモーダル
2. **Lite検討者**: 機能比較表 → 価格確認 → キャンペーン価格での登録
3. **Instagram使用者**: Instagram投稿支援セクション → アップセル導線

### CVR最適化ポイント
- **無料→Lite導線**: ロック画面での短文訴求
- **キャンペーン価格**: 6ヶ月間1,000円/月（通常1,500円）
- **機能的価値**: 30秒での診断完了
- **社会的証明**: 利用実績とユーザーボイス

## プロジェクト状況
現在の実装は「統合実装指示書（LP最新版）」に基づき、Free→Liteアップセル導線の核心機能をすべて実装済み。インタラクティブなUI、アナリティクス計測、レスポンシブ対応が完了し、実際の運用に近い状態です。