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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左側：メインコピー */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  出稿前30秒で、<br />
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">作って・直して・</span><br />
                  <span className="text-gray-800">そのまま投稿。</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  画像をアップするだけ。AIがスコア化／最適CTA提案／投稿文・ハッシュタグ生成を自動実行。<br />
                  投稿前チェックと<strong>薬機法チェック（全プラン）</strong>まで一括対応。
                </p>
                
                {/* 機能チップ */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">NEW 最適CTA</span>
                  <span className="bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full">Instagram投稿文 自動生成</span>
                  <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">投稿前チェック</span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">全プラン 薬機法</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 cta-button" data-action="try-free">
                    無料で診断する（カード不要）
                  </button>
                  <div className="flex gap-2">
                    <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-full border-2 border-gray-300 transition-all cta-button" data-action="view-pricing">
                      料金を見る
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-full border-2 border-gray-300 transition-all cta-button" data-action="view-specs">
                      仕様を見る
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  対応形式：PNG/JPG、最大10MB、推奨1200×630px<br />
                  対応媒体：Instagram / Facebook / GDN / YDA
                </p>
              </div>

              {/* 右側：実際の診断結果 */}
              <div className="bg-white rounded-xl shadow-2xl p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm mr-2">LIVE</span>
                    実際の診断結果
                  </h3>
                </div>
                
                {/* アップロードされたバナーイメージ */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-4 mb-4">
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <div className="text-2xl font-bold text-purple-800 mb-2">夏限定！全身脱毛</div>
                    <div className="text-lg text-purple-600 mb-2">5回コース 特別価格</div>
                    <div className="text-3xl font-bold text-red-500 mb-2">¥89,800</div>
                    <div className="text-sm text-gray-500 line-through mb-2">通常価格 ¥150,000</div>
                    <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full text-sm">
                      今すぐ予約する
                    </div>
                    <div className="text-xs text-gray-400 mt-2">※DMC美容クリニック</div>
                  </div>
                </div>

                {/* AI診断スコア */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-800">📊 AI診断結果</h4>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold">B+ 82点</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>デザイン・可読性</span>
                      <span className="font-semibold text-green-600">85点</span>
                    </div>
                    <div className="flex justify-between">
                      <span>訴求力・インパクト</span>
                      <span className="font-semibold text-orange-600">78点</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CTA効果予測</span>
                      <span className="font-semibold text-blue-600">83点</span>
                    </div>
                  </div>
                </div>

                {/* 生成されたコピー */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-3">✍️ 生成コピー案</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3 border-l-4 border-green-500">
                      <div className="font-semibold text-green-700 text-sm mb-1">推奨CTA（+15%効果予測）</div>
                      <div className="text-gray-800">"限定価格で予約する"</div>
                    </div>
                    <div className="bg-white rounded p-3 border-l-4 border-purple-500">
                      <div className="font-semibold text-purple-700 text-sm mb-1">Instagram投稿文</div>
                      <div className="text-gray-800 text-sm">「✨この夏、理想の自分に✨ DMC美容クリニックの医療脱毛で、つるすべ肌を手に入れよう🌟」</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 社会的証明セクション */}
      <section id="social-proof" className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10,000+</div>
              <p className="text-gray-600">累計診断バナー数（2024年12月時点）</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">平均+23%</div>
              <p className="text-gray-600">改善提案適用後のCTR向上率</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">94%</div>
              <p className="text-gray-600">薬機法チェック精度（対象カテゴリ）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 機能グリッドセクション */}
      <section id="features-grid" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              バナスコの主要機能
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 最適CTA予測 */}
              <div className="bg-white rounded-xl shadow-lg p-6 relative">
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">最適CTA予測</h3>
                <p className="text-gray-600 mb-4">
                  想定クリックを高めるCTA文を自動提案。例：「今週限定で◯◯」は推定＋9〜14%。
                </p>
              </div>

              {/* Instagram投稿文自動生成 */}
              <div className="bg-white rounded-xl shadow-lg p-6 relative">
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Instagram投稿文 自動生成</h3>
                <p className="text-gray-600 mb-4">
                  キャプション3案＋ハッシュタグ自動提案。コピー1クリックで投稿準備が完了。
                </p>
              </div>

              {/* 投稿前チェック */}
              <div className="bg-white rounded-xl shadow-lg p-6 relative">
                <div className="flex gap-1 absolute -top-3 -right-3">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                  <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">Lite〜</span>
                </div>
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">投稿前チェック</h3>
                <p className="text-gray-600 mb-4">
                  テキスト比・可読性・余白・比率を自動点検。誤字・表記ゆれと併せて提示（Lite〜）。
                </p>
              </div>

              {/* バナー診断 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">バナー診断（スコア／改善提案）</h3>
                <p className="text-gray-600 mb-4">
                  配色・文字量・余白・視線導線から総合スコア化。優先ToDoを自動抽出。
                </p>
              </div>

              {/* 薬機法チェック */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">薬機法チェック（全プラン）</h3>
                <p className="text-gray-600 mb-4">
                  美容・健康・医療カテゴリ選択時に自動ON。リスク表現を指摘（最終判断は利用者）。
                </p>
              </div>

              {/* レポート自動生成 */}
              <div className="bg-white rounded-xl shadow-lg p-6 relative">
                <span className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">Lite〜</span>
                <div className="text-3xl mb-4">📄</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">レポート自動生成</h3>
                <p className="text-gray-600 mb-4">
                  スコア／改善Top3／CTA候補／誤字一覧をPDF/共有リンクで出力。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram投稿支援セクション */}
      <section id="instagram-support" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Instagram投稿が"めっちゃ楽"になる理由。
              </h2>
              <p className="text-xl text-gray-600">
                バナー診断から投稿まで、すべてが一括で完了
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* 左側：機能説明 */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">投稿文・ハッシュタグを自動生成</h3>
                    <p className="text-gray-600">キャプション3案とハッシュタグを一括生成。</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">最適CTAを同時提案</h3>
                    <p className="text-gray-600">推定インパクト記載で効果的なCTAを提案。</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">投稿前チェックで事故を予防</h3>
                    <p className="text-gray-600">誤字・比率・文字量を一括点検（Lite〜）。</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">薬機法チェックは全プラン標準</h3>
                    <p className="text-gray-600">美容・健康・医療カテゴリで自動適用。</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">薬機法チェック（全プラン）</h3>
                    <p className="text-gray-600">美容・健康・医療カテゴリで自動ON。</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">PDFレポ（Lite〜）</h3>
                    <p className="text-gray-600">上長共有・記録を1クリック。</p>
                  </div>
                </div>
              </div>

              {/* 右側：Instagram投稿支援UI */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Instagram投稿文生成</h3>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all cta-button" data-action="generate-caption">
                      投稿文を作成
                    </button>
                  </div>

                  {/* 生成された投稿文例 */}
                  <div id="instagram-content" className="hidden space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">キャプション候補</h4>
                      <div className="space-y-2">
                        <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-pink-500">
                          <p className="text-sm text-gray-800 mb-2">
                            ✨ この夏、理想の自分になりませんか？<br />
                            DMC美容クリニックの医療脱毛で、つるすべ肌を手に入れよう。全身脱毛5回コースが今だけ特別価格！<br />
                            💫 無料カウンセリングで、あなたに最適なプランをご提案します。
                          </p>
                          <button className="bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs px-2 py-1 rounded transition-all copy-button" data-content="caption-1">
                            📋 コピー
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">ハッシュタグ</h4>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-600 mb-2">
                          #医療脱毛 #美容クリニック #全身脱毛 #つるすべ肌 #夏準備 #DMC美容 #脱毛サロン #美容 #自分磨き #キレイになりたい
                        </p>
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded transition-all copy-button" data-content="hashtags">
                          📋 ハッシュタグコピー
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all copy-button" data-content="all">
                        📋 一括コピー
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all" onclick="window.open('https://www.instagram.com', '_blank')">
                        📱 Instagramを開く
                      </button>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                      <p className="text-xs text-yellow-800">
                        💡 薬機法注意：医療脱毛の効果表現は適切ですが、「完全に毛がなくなる」などの過度な表現は避けてください。
                      </p>
                    </div>
                  </div>

                  <div id="instagram-placeholder" className="text-center py-8">
                    <div className="text-4xl mb-4">📱</div>
                    <p className="text-gray-500 mb-4">
                      まずはバナーを診断して、<br />投稿文生成を体験してみましょう
                    </p>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-4 py-2 rounded transition-all cta-button" data-action="scroll-to-demo">
                      診断を試す
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                現時点では自動投稿は未対応です。コピー1クリックでInstagramへ貼り付け、すぐ投稿できます。
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 cta-button" data-action="try-instagram">
                Instagram投稿支援を試す
              </button>
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
              {/* AI診断（Free） */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl text-blue-500">📊</div>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">FREE</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">バナー診断</h3>
                <p className="text-gray-600 mb-4">配色・文字量・余白・視線導線から総合スコア化。</p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors cta-button" data-action="try-free">
                  今すぐ試す
                </button>
              </div>

              {/* 最適CTA予測（NEW） */}
              <div className="bg-white p-6 rounded-xl shadow-lg relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl text-orange-500">🎯</div>
                  <div className="flex gap-1">
                    <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">Lite〜</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">最適CTA予測</h3>
                <p className="text-gray-600 mb-4">反応が出やすいCTAを自動提案。推定インパクトも表示。</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors" onclick="showUpsellModal('最適CTA予測', 'cta-prediction')">
                  🔒 Liteで解放
                </button>
              </div>

              {/* Instagram投稿文自動生成（NEW） */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl text-pink-500">📱</div>
                  <div className="flex gap-1">
                    <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">Lite〜</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram投稿文自動生成</h3>
                <p className="text-gray-600 mb-4">ブランドトーンに合わせたキャプション3案＋ハッシュタグ。</p>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors" onclick="showUpsellModal('Instagram投稿文生成', 'instagram')">
                  🔒 Liteで解放
                </button>
              </div>

              {/* 誤字・表記ゆれチェック（Lite〜） */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl text-orange-500">🔍</div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">Lite〜</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">投稿前チェック</h3>
                <p className="text-gray-600 mb-4">誤字・表記ゆれ、テキスト比、可読性を一括点検。</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors" onclick="showUpsellModal('誤字・表記ゆれチェック', 'spelling-check')">
                  🔒 Liteで解放
                </button>
              </div>

              {/* 自動レポート（Lite〜） */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl text-blue-600">📋</div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">Lite〜</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">レポート自動生成</h3>
                <p className="text-gray-600 mb-4">スコア／改善Top3／CTA候補／誤字一覧をPDF/共有リンクで出力。</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors" onclick="showUpsellModal('自動レポート', 'report')">
                  🔒 Liteで解放
                </button>
              </div>

              {/* 薬機法チェック（全プラン） */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl text-red-500">⚖️</div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">全プラン</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">薬機法チェック</h3>
                <p className="text-gray-600 mb-4">美容・健康・医療カテゴリで自動ON。リスク表現を指摘。</p>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors cta-button" data-action="try-free">
                  今すぐ試す
                </button>
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
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              プランと料金
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Freeで体験、Liteで投稿前チェック・レポを解放。Proでチーム運用・高速上限。
            </p>
            
            {/* 機能比較表 */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-800">機能</th>
                    <th className="text-center p-4 font-semibold text-gray-600">Free</th>
                    <th className="text-center p-4 font-semibold text-orange-600 relative">
                      Lite
                      <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">おすすめ</span>
                    </th>
                    <th className="text-center p-4 font-semibold text-blue-600">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 font-medium text-gray-800">診断スコア/改善提案</td>
                    <td className="text-center p-4 text-gray-600">○（回数制限あり）</td>
                    <td className="text-center p-4 text-orange-600">○（優先実行）</td>
                    <td className="text-center p-4 text-blue-600">○（高速/上限拡大）</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="p-4 font-medium text-gray-800">
                      最適CTA予測 <span className="bg-red-500 text-white text-xs px-1 rounded">NEW</span>
                    </td>
                    <td className="text-center p-4 text-gray-400">–</td>
                    <td className="text-center p-4 text-orange-600">○</td>
                    <td className="text-center p-4 text-blue-600">○（業種ベンチマーク付き）</td>
                  </tr>
                  <tr className="bg-pink-50">
                    <td className="p-4 font-medium text-gray-800">
                      Instagram投稿文生成 <span className="bg-red-500 text-white text-xs px-1 rounded">NEW</span>
                    </td>
                    <td className="text-center p-4 text-gray-600">○（回数制限あり）</td>
                    <td className="text-center p-4 text-orange-600">○（優先実行）</td>
                    <td className="text-center p-4 text-blue-600">○（業種テンプレ拡張）</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-800">ハッシュタグ自動提案</td>
                    <td className="text-center p-4 text-gray-600">○（上位10件）</td>
                    <td className="text-center p-4 text-orange-600">○（上位30件・競合度表示）</td>
                    <td className="text-center p-4 text-blue-600">○（業種辞書＋保存機能）</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="p-4 font-medium text-gray-800">
                      最適CTA予測 <span className="bg-red-500 text-white text-xs px-1 rounded">NEW</span>
                    </td>
                    <td className="text-center p-4 text-gray-400">–</td>
                    <td className="text-center p-4 text-orange-600">○（CTA5つ／効果予測）</td>
                    <td className="text-center p-4 text-blue-600">○（CTA15つ／A/B推奨）</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="p-4 font-medium text-gray-800">
                      誤字・表記ゆれチェック <span className="bg-orange-500 text-white text-xs px-1 rounded">Lite〜</span>
                    </td>
                    <td className="text-center p-4 text-gray-400">–</td>
                    <td className="text-center p-4 text-orange-600">○（誤字/比率/テキスト比）</td>
                    <td className="text-center p-4 text-blue-600">○（ワークフロー保存・チーム）</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-800">月間利用回数</td>
                    <td className="text-center p-4 text-gray-600">10回</td>
                    <td className="text-center p-4 text-orange-600">50回</td>
                    <td className="text-center p-4 text-blue-600">200回</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-800">薬機法チェック</td>
                    <td className="text-center p-4 text-gray-600">○（カテゴリ一致時）</td>
                    <td className="text-center p-4 text-orange-600">○（カテゴリ一致時）</td>
                    <td className="text-center p-4 text-blue-600">○（カテゴリ一致時）</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-800">自動レポート</td>
                    <td className="text-center p-4 text-gray-400">–</td>
                    <td className="text-center p-4 text-orange-600">○（PDF/リンク共有）</td>
                    <td className="text-center p-4 text-blue-600">○（ホワイトラベル/週次メール）</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-800">チーム/メンバー</td>
                    <td className="text-center p-4 text-gray-600">1</td>
                    <td className="text-center p-4 text-orange-600">3</td>
                    <td className="text-center p-4 text-blue-600">10</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-800">サポート</td>
                    <td className="text-center p-4 text-gray-600">メール</td>
                    <td className="text-center p-4 text-orange-600">優先メール</td>
                    <td className="text-center p-4 text-blue-600">チャット優先</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 価格カード */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Free</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-gray-900">0円</span>
                  <span className="text-gray-600">/月</span>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 text-center">
                    機能制限あり・回数制限あり<br />
                    まずはお試しで
                  </p>
                </div>
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors cta-button" data-action="signup-free">
                  無料で始める
                </button>
              </div>

              {/* Lite Plan - おすすめ */}
              <div className="bg-orange-50 p-8 rounded-xl shadow-lg relative border-2 border-orange-500 transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  おすすめ
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Lite</h3>
                <div className="text-center mb-6">
                  <div className="text-lg text-gray-500 line-through">1,500円</div>
                  <span className="text-4xl font-bold text-orange-600">1,000円</span>
                  <span className="text-gray-600">/月</span>
                  <div className="text-sm text-orange-600 font-semibold">【3ヶ月間の期間限定価格！】</div>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-orange-700 text-center font-medium">
                    広告主や小規模店舗での日常的な運用に最適なプランです。<br />
                    <strong>月間利用回数：50回</strong>
                  </p>
                  <ul className="text-xs text-orange-700 mt-3 space-y-1">
                    <li>• ABテスト診断</li>
                    <li>• CTR予測 & 改善提案</li>
                    <li>• コピー生成機能</li>
                  </ul>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors cta-button" data-action="signup-lite">
                  Liteを始める
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Pro</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">2,980円</span>
                  <span className="text-gray-600">/月</span>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-blue-700 text-center font-medium">
                    広告代理店や制作会社など、本格的に利用したい方向けのプランです。<br />
                    <strong>月間利用回数：200回</strong>
                  </p>
                  <ul className="text-xs text-blue-700 mt-3 space-y-1">
                    <li>• Lightプランの全機能</li>
                    <li>• Instagram投稿文生成</li>
                    <li>• 実績記録の保存・編集</li>
                  </ul>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors cta-button" data-action="signup-pro">
                  Proを始める
                </button>
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
                  <span className="text-lg font-semibold text-gray-800">Q1. Instagramに自動投稿されますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">現時点では自動投稿は未対応です。コピー1クリックでInstagramへ貼り付け、すぐ投稿できます。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q2. 予測CTAは何をしますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">バナー内容と訴求軸から、反応が出やすいCTA文を自動提案し、推定インパクトを表示します。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q3. レポートの形式は？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">PDFまたは共有リンクで出力できます（Lite〜）。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q4. 薬機法チェックはどのプランで使えますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">全プランで利用可能です（対象カテゴリ選択時に自動ON）。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q5. 対応している画像形式は？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">PNG/JPG、最大10MB、推奨1200×630px。対応媒体：Instagram / Facebook / GDN / YDA</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q6. 自動投稿はできますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">現時点では未対応です。コピー1クリックでInstagramへ貼り付けて投稿できます。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q7. 薬機法チェックはどのプランで使えますか？</span>
                  <span className="text-2xl text-gray-500">+</span>
                </button>
                <div className="faq-answer hidden mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">全プランで利用できます（対象カテゴリ選択時に自動ON）。</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <button className="faq-question w-full text-left flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Q8. 契約期間の縛りはありますか？</span>
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

      {/* データ取扱い・法務セクション */}
      <section id="legal" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              データ取扱い・利用規約
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4">🔒 データ保護</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 画像の保存：診断完了後24時間で自動削除</li>
                  <li>• 通信：HTTPS暗号化で安全に送信</li>
                  <li>• サーバー：AWS/GCPでデータ暗号化保存</li>
                  <li>• 学習用途：明示的同意取得後のみ利用</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4">⚠️ 免責事項</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 推定値（CTA/CTR等）は参考値です。結果は配信条件により変動します</li>
                  <li>• 薬機法チェックは支援機能であり、最終判断はご利用者様にてお願いします</li>
                  <li>• 診断結果の正確性について当社は責任を負いません</li>
                  <li>• 商用利用時は必ず法的確認を行ってください</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <div className="flex justify-center space-x-6 text-sm">
                <a href="#terms" className="text-blue-600 hover:text-blue-800 underline">利用規約</a>
                <a href="#privacy" className="text-blue-600 hover:text-blue-800 underline">プライバシーポリシー</a>
                <a href="#commerce" className="text-blue-600 hover:text-blue-800 underline">特商法表記</a>
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
              出稿前30秒で、広告の成果を向上させましょう
            </h2>
            <p className="text-xl mb-8">
              画像アップロード → AI診断 → 投稿文生成 → そのまま投稿
            </p>
            <button className="bg-white text-orange-500 text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cta-button" data-action="try-free">
              無料で診断する（カード不要）
            </button>
            <p className="text-lg mt-4 opacity-90">
              ※ 対応形式：PNG/JPG、最大10MB
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">バナスコ</h3>
              <p className="text-gray-400">
                AI powered banner optimization platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">サービス</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>AI診断</li>
                  <li>投稿文生成</li>
                  <li>薬機法チェック</li>
                  <li>レポート機能</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">サポート</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>よくある質問</li>
                  <li>お問い合わせ</li>
                  <li>チュートリアル</li>
                  <li>API仕様</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">法的事項</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>利用規約</li>
                  <li>プライバシーポリシー</li>
                  <li>特商法表記</li>
                  <li>お問い合わせ</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-gray-400 text-sm">
              <p>&copy; 2024 バナスコ. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* 固定CTAバー（モバイル） */}
      <div id="fixed-cta" className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white p-4 shadow-lg z-50 md:hidden">
        <div className="text-center">
          <button className="w-full bg-white text-orange-500 font-bold py-3 px-6 rounded-lg cta-button" data-action="try-free">
            無料で診断する
          </button>
        </div>
      </div>
    </div>
  )
})



export default app
