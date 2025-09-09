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
            <div className="mb-8">
              <div className="text-lg md:text-xl text-orange-600 font-semibold mb-2">
                AIがあなたの広告を徹底分析
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">出稿前に分かる</span><br />
                <span className="text-gray-800">広告の成果予測</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
                バナー画像をアップロードするだけで、<br className="md:hidden" />
                <span className="text-blue-600">AIが瞬時に診断・改善提案</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              広告バナーやSNS投稿を、出稿前にAIで診断。
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 mb-4 cta-button" data-action="signup">
              無料トライアルを開始
            </button>
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

      {/* AI診断デモセクション */}
      <section id="demo" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              実際のAI診断をご覧ください
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              DMC美容クリニックの広告バナーをAIが診断した結果
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左側：診断前のバナー */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">診断対象バナー</h3>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm mx-auto">
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
                  <p className="text-center text-gray-500 mt-4 font-medium">診断前のバナー</p>
                </div>

                <div className="text-center">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 cta-button" data-action="demo">
                    <span className="flex items-center justify-center space-x-2">
                      <span>🤖</span>
                      <span>実際に試してみる</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* 右側：診断結果 */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">AI診断結果</h3>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-orange-400 text-2xl">🎯</span>
                    <h4 className="text-xl font-bold">Aパターン診断結果</h4>
                  </div>
                  
                  {/* スコア表示 */}
                  <div className="mb-6">
                    <h5 className="text-sm text-gray-300 mb-3">総合スコア</h5>
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl font-bold text-orange-400">B</span>
                      <div className="flex-1">
                        <div className="bg-gray-700 rounded-full h-3">
                          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full" style={{width: "75%"}}></div>
                        </div>
                        <p className="text-sm text-gray-300 mt-1">75/100点</p>
                      </div>
                    </div>
                  </div>

                  {/* 改善コメント */}
                  <div className="mb-6">
                    <h5 className="text-sm text-gray-300 mb-3">改善コメント</h5>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-sm leading-relaxed text-gray-200">
                        情報が多すぎるため、一瞬で内容が伝わりにくいです。見出しや行動喚起のコピーが目立つようにレイアウトを調整すると良いでしょう。特に「医療脱毛」に関する情報をもっと強調して、30代のターゲットに響くメッセージを追加すると効果的です。
                      </p>
                    </div>
                  </div>

                  {/* 薬機法チェック */}
                  <div className="bg-green-900 border border-green-600 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-400 text-lg">✓</span>
                      <h5 className="text-sm font-semibold text-green-400">薬機法チェック：評価 OK</h5>
                    </div>
                    <p className="text-xs text-green-200 leading-relaxed">
                      このバナーは医療脱毛サービスの広告として適切な表現を使用しています。薬機法・医療法の観点から問題となる表現は確認されません。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 text-lg">
                このように、AIが瞬時にバナーを分析し、具体的な改善提案を行います
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 inline-block">
                <p className="text-xl font-bold text-gray-800">
                  📊 スコア評価 + 💡 改善提案 + ⚖️ 法規制チェック = 🚀 成果向上
                </p>
              </div>
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
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors cta-button" data-action="signup-free">
                  無料で始める
                </button>
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
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors cta-button" data-action="signup-light">
                  Lightを始める
                </button>
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
            <button className="bg-white text-orange-500 text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cta-button" data-action="contact">
              今すぐ無料相談・お申し込み
            </button>
          </div>
        </div>
      </section>

      {/* 固定CTAボタン */}
      <div id="fixed-cta" className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white p-4 shadow-lg z-50 md:hidden">
        <div className="text-center">
          <button className="w-full bg-white text-orange-500 font-bold py-3 px-6 rounded-lg cta-button" data-action="signup">
            無料で診断を始める
          </button>
        </div>
      </div>
    </div>
  )
})



export default app
