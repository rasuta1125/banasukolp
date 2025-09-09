import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div>
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-orange-600">画像を読み込み</span> → <span className="text-blue-600">コピー生成</span> → <br className="hidden md:block" />
              <span className="text-green-600">誤字脱字チェック</span> → <span className="text-purple-600">AIが採点</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              広告前チェックをワンクリックで。
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              広告バナーやSNS投稿を、出稿前にAIで診断。
            </p>
            <a href="/demo" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 mb-4 no-underline">
              無料で診断を始める
            </a>
            <p className="text-lg text-orange-600 font-semibold">
              初月10回キャンペーン中！
            </p>
          </div>
        </div>
      </section>

      {/* 課題提示セクション */}
      <section id="problems" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-red-500 mb-4">😔</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">広告を出しても成果が出ない…</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-orange-500 mb-4">🤔</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">デザインは悪くないのに反応がない…</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-blue-500 mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">そんな悩みの原因は「クリエイティブの質」にあります</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解決策セクション */}
      <section id="solution" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              バナスコが解決します
            </h2>
            <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                バナスコは、広告バナーやSNS投稿を出稿前にAIで診断できるツールです。
              </h3>
              <p className="text-xl text-gray-600">
                作って出して失敗する前に、「効果の出る広告」を見極められます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 主な機能セクション */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              主な機能
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-blue-500 mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">AI診断</h3>
                <p className="text-gray-600">デザイン・コピー・訴求力をスコア化</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-green-500 mb-4">✍️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">コピー生成</h3>
                <p className="text-gray-600">キャッチコピー＋投稿文</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-orange-500 mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">誤字脱字チェック</h3>
                <p className="text-gray-600">OCRで文字を抽出し自動確認</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-red-500 mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">薬機法チェック</h3>
                <p className="text-gray-600">美容・健康・医療系バナーの法規制確認</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-purple-500 mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">投稿診断機能</h3>
                <p className="text-gray-600">Instagram専用／共感・ブランド視点で評価</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 強みセクション */}
      <section id="advantages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              バナスコの強み
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">コピー生成の一本化</h3>
                  <p className="text-gray-600">バナー＋投稿文を一度に生成</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">診断に特化</h3>
                  <p className="text-gray-600">デザイン制作は行わない</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">小規模・アフィリエイター向けの低コスト設計</h3>
                  <p className="text-gray-600">手軽に使える価格設定</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">即効性</h3>
                  <p className="text-gray-600">数秒で診断結果が出る</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 想定ユーザーセクション */}
      <section id="target-users" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              こんな方におすすめ
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-blue-500 mb-4">🏪</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">小規模事業者</h3>
                <p className="text-gray-600">飲食店、美容サロン、不動産など</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-green-500 mb-4">💻</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">アフィリエイター</h3>
                <p className="text-gray-600">成果を上げたい個人事業主</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-purple-500 mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">マーケター</h3>
                <p className="text-gray-600">SNS広告を自作している方</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プランと料金セクション */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              プランと料金
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Free</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-gray-900">0円</span>
                  <span className="text-gray-600">/月</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    月5回まで診断
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    薬機法チェック
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    投稿診断
                  </li>
                </ul>
                <a href="/demo" className="inline-block w-full text-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors no-underline">
                  無料で始める
                </a>
              </div>

              {/* Light Plan - おすすめ */}
              <div className="bg-orange-50 p-8 rounded-xl shadow-lg relative border-2 border-orange-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  おすすめ
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Light</h3>
                <div className="text-center mb-6">
                  <div className="text-lg text-gray-500 line-through">1,500円</div>
                  <span className="text-4xl font-bold text-orange-600">1,000円</span>
                  <span className="text-gray-600">/月</span>
                  <div className="text-sm text-orange-600 font-semibold">キャンペーン中（6か月間）</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    月50回まで診断
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    コピー生成あり
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    薬機法チェック
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    投稿診断
                  </li>
                </ul>
                <a href="/demo" className="inline-block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors no-underline">
                  Lightを始める
                </a>
              </div>

              {/* Pro Plan */}
              <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Pro</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">5,000円</span>
                  <span className="text-gray-600">/月</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    月200回まで診断
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    コピー生成あり
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    薬機法チェック
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    投稿診断
                  </li>
                </ul>
                <a href="/demo" className="inline-block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors no-underline">
                  Proを始める
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* キャンペーン特典セクション */}
      <section id="campaign" className="py-16 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              🎉 キャンペーン特典
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Free Plan 特典</h3>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">🎁</span>
                    初月は診断回数 10回に増量
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">🎁</span>
                    コピー生成無料体験
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Light Plan 特典</h3>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">🎁</span>
                    6か月間 1,000円/月（通常1,500円）
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 利用の流れセクション */}
      <section id="how-to-use" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              利用の流れ
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">バナーをアップロード</h3>
                <p className="text-gray-600">診断したい画像を簡単アップロード</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">AIが自動診断</h3>
                <p className="text-gray-600">数秒でAIが分析・評価</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">結果を確認して改善へ</h3>
                <p className="text-gray-600">スコアと改善点を確認</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              よくあるご質問
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q1. デザインも作れますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">いいえ、診断専用ツールです。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q2. スマホでも使えますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">はい、PC・スマホどちらからでも利用可能です。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q3. 無料プランでも薬機法チェックはできますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">はい、Freeプランでも利用可能です。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q4. コピー生成はどのプランから使えますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">Light以上で利用可能です（キャンペーン中はFreeでも体験可）。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q5. 診断結果は保存されますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">現状は不可。将来実装予定です。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q6. 契約期間の縛りはありますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">ありません。月単位で変更・解約可能です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最終CTA セクション */}
      <section id="final-cta" className="py-16 bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              今すぐバナスコで広告の成果を向上させましょう
            </h2>
            <p className="text-xl mb-8">
              初月10回キャンペーン中！無料で診断を始められます。
            </p>
            <a href="/demo" className="inline-block bg-white text-orange-500 text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 no-underline">
              今すぐ無料で診断を始める
            </a>
          </div>
        </div>
      </section>

      {/* 固定CTAボタン */}
      <div id="fixed-cta" className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white p-4 shadow-lg z-50 md:hidden">
        <div className="text-center">
          <a href="/demo" className="block w-full text-center bg-white text-orange-500 font-bold py-3 px-6 rounded-lg no-underline">
            無料で診断を始める
          </a>
        </div>
      </div>
    </div>
  )
})

// デモページルート
app.get('/demo', (c) => {
  return c.render(
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ヘッダー */}
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400 text-xl">🔹</span>
            <h1 className="text-xl font-bold">AIパターン診断</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/form" className="text-gray-400 hover:text-white transition-colors">詳細フォーム</a>
            <a href="/" className="text-gray-400 hover:text-white transition-colors">← LPに戻る</a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 左側: アップロード・診断エリア */}
          <div className="space-y-6">
            {/* 画像アップロード */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">バナー画像</h2>
              <div id="image-upload-area" className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-gray-500 transition-colors cursor-pointer">
                <div className="text-4xl mb-4">📁</div>
                <p className="text-gray-400 mb-2">クリックまたはドラッグ＆ドロップで画像をアップロード</p>
                <input type="file" id="file-input" accept="image/*" className="hidden" />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">
                  ファイルを選択
                </button>
              </div>
              
              {/* プレビューエリア（サンプル画像を初期表示） */}
              <div id="image-preview" className="mt-4">
                <div className="bg-white rounded-lg p-4 max-w-sm mx-auto">
                  <svg width="280" height="200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <defs>
                      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#FFB6C1", stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:"#FFC0CB", stopOpacity:1}} />
                      </linearGradient>
                    </defs>
                    
                    <rect width="280" height="200" fill="url(#bg)"/>
                    
                    <rect x="10" y="10" width="120" height="150" rx="8" fill="#FFE4E1" stroke="#FF69B4" strokeWidth="1"/>
                    <text x="70" y="90" textAnchor="middle" fill="#FF1493" fontSize="12" fontWeight="bold">美しい女性</text>
                    
                    <text x="140" y="30" fill="#C71585" fontSize="14" fontWeight="bold">やりたいことを全部</text>
                    <text x="140" y="45" fill="#C71585" fontSize="14" fontWeight="bold">叶える夏にする</text>
                    
                    <text x="140" y="65" fill="#8B008B" fontSize="10">DMC美容クリニックの</text>
                    
                    <text x="140" y="85" fill="#DC143C" fontSize="16" fontWeight="bold">医療脱毛</text>
                    
                    <rect x="140" y="100" width="130" height="30" rx="4" fill="#FFD700" stroke="#FF8C00" strokeWidth="1"/>
                    <text x="170" y="115" fill="#FF4500" fontSize="9" fontWeight="bold">全身脱毛5回</text>
                    <text x="200" y="125" fill="#FF4500" fontSize="14" fontWeight="bold">198,000円</text>
                    
                    <rect x="140" y="135" width="130" height="20" rx="10" fill="#FF69B4"/>
                    <text x="205" y="148" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">無料相談はこちら</text>
                    
                    <circle cx="35" cy="40" r="6" fill="#FFB6C1" opacity="0.7"/>
                    <circle cx="250" cy="170" r="8" fill="#FFC0CB" opacity="0.7"/>
                  </svg>
                </div>
                <p className="text-center text-gray-400 mt-2">Aパターン画像</p>
              </div>
            </div>

            {/* 診断ボタン */}
            <button id="analyze-btn" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-bold py-3 px-6 rounded-lg transition-all">
              Aパターンを採点
            </button>

            {/* ローディング状態 */}
            <div id="loading-state" className="hidden bg-gray-800 rounded-lg p-6 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p>AIがパターンを採点中です...</p>
            </div>
          </div>

          {/* 右側: 診断結果エリア */}
          <div id="results-area" className="hidden space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-orange-500">🎯</span>
                <h2 className="text-lg font-semibold">Aパターン診断結果</h2>
              </div>
              
              {/* スコア表示 */}
              <div className="mb-6">
                <h3 className="text-sm text-gray-400 mb-2">総合スコア</h3>
                <div className="flex items-center space-x-4">
                  <span id="score-grade" className="text-4xl font-bold text-orange-400">B</span>
                  <div className="flex-1">
                    <div className="bg-gray-700 rounded-full h-3">
                      <div id="score-bar" className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full" style="width: 75%"></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-1"><span id="score-number">75</span>/100点</p>
                  </div>
                </div>
              </div>

              {/* 改善コメント */}
              <div className="mb-6">
                <h3 className="text-sm text-gray-400 mb-2">改善コメント</h3>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p id="improvement-comment" className="text-sm leading-relaxed">
                    情報が多すぎるため、一瞬で内容が伝わりにくいです。見出しや行動喚起のコピーが目立つようにレイアウトを調整すると良いでしょう。特に「医療脱毛」に関する情報をもっと強調して、30代のターゲットに響くメッセージを追加すると効果的です。価格の「198,000円」がもう少し大きく表示されると、より注目を集められます。
                  </p>
                </div>
              </div>

              {/* 薬機法チェック */}
              <div className="bg-green-900 border border-green-700 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-400">✓</span>
                  <h3 className="text-sm font-semibold text-green-400">薬機法チェック：評価 OK</h3>
                </div>
                <p className="text-xs text-green-200 leading-relaxed">
                  理由: このバナーは医療脱毛サービスの広告として適切な表現を使用しています。「DMC美容クリニック」として医療機関であることを明示し、「医療脱毛」と正しく表記されています。価格表示も具体的で、過度な効果効能の訴求や誇大表現は見られません。「無料相談はこちら」という表現も適切な範囲内です。薬機法・医療法の観点から問題となる表現は確認されません。
                </p>
              </div>
            </div>

            {/* 診断結果保存 */}
            <div className="bg-gray-800 rounded-lg p-4">
              <button className="w-full bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded transition-colors">
                診断結果をFirestoreに記録しました！
              </button>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-center text-green-400 font-semibold">Aパターンの診断が完了しました！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

// バナー診断フォームページ
app.get('/form', (c) => {
  return c.render(
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ヘッダー */}
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400 text-xl">📋</span>
            <h1 className="text-xl font-bold">バナー診断フォーム</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/demo" className="text-gray-400 hover:text-white transition-colors">AI診断</a>
            <a href="/" className="text-gray-400 hover:text-white transition-colors">← LPに戻る</a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 左側: フォーム */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-6">基本情報</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">バナー名</label>
                  <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="例: 美容クリニック広告" />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">ターゲット年代</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500">
                    <option>30代</option>
                    <option>20代</option>
                    <option>40代</option>
                    <option>50代</option>
                    <option>60代以上</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">媒体</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500">
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>Google Ads</option>
                    <option>Yahoo広告</option>
                    <option>LINE広告</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">カテゴリ</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500">
                    <option>美容</option>
                    <option>健康</option>
                    <option>ファッション</option>
                    <option>グルメ</option>
                    <option>サービス</option>
                    <option>不動産</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">広告予算</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500">
                    <option>あり</option>
                    <option>なし</option>
                    <option>未定</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">目的</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500">
                    <option>ブランド認知向上</option>
                    <option>コンバージョン獲得</option>
                    <option>リード獲得</option>
                    <option>売上向上</option>
                  </select>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 font-bold py-3 px-6 rounded transition-colors">
                診断設定を保存
              </button>
            </div>
          </div>

          {/* 右側: 採点基準 */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">採点基準</h2>
              <p className="text-sm text-gray-400 mb-4">バナスコは以下の採点基準で広告効果を評価します。</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <h3 className="font-semibold">内容が一瞬で伝わるか</h3>
                  </div>
                  <p className="text-sm text-gray-400 ml-8">伝えたいことが素の1秒でターゲットに伝わるか。</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <h3 className="font-semibold">コピーの見やすさ</h3>
                  </div>
                  <p className="text-sm text-gray-400 ml-8">文字が読みやすいか。サイズや配色は適切かの。</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <h3 className="font-semibold">行動喚起の明確さ</h3>
                  </div>
                  <p className="text-sm text-gray-400 ml-8">「今すぐ申込」「LINE登録」などの行動喚起が明確で、ユーザーを誘導できているか。</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <h3 className="font-semibold">写真とテキストの調和性</h3>
                  </div>
                  <p className="text-sm text-gray-400 ml-8">背景画像と文字が干渉しく、全体として調和が取れているか。</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    <h3 className="font-semibold">情報のバランス</h3>
                  </div>
                  <p className="text-sm text-gray-400 ml-8">文字が多すぎず、視覚的に適当所に配慮されているか。</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 border border-blue-700 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold mb-2">診断の精度向上中</h3>
                <p className="text-sm text-blue-200">より良い診断のため、フォーム入力にご協力ください。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default app
