import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/tokutei', (c) => {
  return c.render(
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">特定商取引法に基づく表記</h1>
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← トップページに戻る
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-8">
            
            {/* 販売業者 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">販売業者</h2>
              <p className="text-gray-700">合同会社Aimable（ブランド名：バナスコ / Banasuko）</p>
            </section>

            {/* 運営統括責任者 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">運営統括責任者</h2>
              <p className="text-gray-700">坂口雄斗</p>
            </section>

            {/* 所在地 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">所在地</h2>
              <p className="text-gray-700">
                〒902-0078<br />
                沖縄県那覇市寄宮2-6-10
              </p>
            </section>

            {/* 電話番号 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">電話番号</h2>
              <p className="text-gray-700">
                営業効率化・迷惑電話防止の観点から公開しておりません。<br />
                ご請求いただければ遅滞なく開示いたします（お問い合わせ窓口よりご連絡ください）。
              </p>
            </section>

            {/* メールアドレス */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">メールアドレス</h2>
              <p className="text-gray-700">
                <strong>【サポート用メールアドレス】</strong><br />
                <span className="text-sm text-gray-500">※実際のメールアドレスに置換してください</span>
              </p>
            </section>

            {/* お問い合わせ窓口 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">お問い合わせ窓口（営業時間）</h2>
              <div className="text-gray-700">
                <p className="mb-2"><strong>【平日10:00〜17:00（祝日・年末年始除く）】</strong></p>
                <p className="mb-1">お問い合わせフォーム：<strong>【お問い合わせフォームURL】</strong></p>
                <p className="text-sm text-orange-600 font-medium">※解約申請もこちらから受け付けます。</p>
              </div>
            </section>

            {/* 販売価格 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">販売価格（役務の対価）</h2>
              <p className="text-gray-700">
                料金プランはサービス内「料金ページ」に表示します。表示価格は【税込／税抜】を明記します。
              </p>
            </section>

            {/* 商品の提供時期 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">商品（サービス）の提供時期</h2>
              <p className="text-gray-700">
                決済確認後、即時にご利用開始いただけます。無料プランは登録完了後すぐに利用可能です。
              </p>
            </section>

            {/* お支払い方法 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">お支払い方法</h2>
              <div className="text-gray-700">
                <p>クレジットカード（Stripe経由）</p>
                <p className="text-sm text-gray-600 mt-1">※その他の決済手段はありません。</p>
              </div>
            </section>

            {/* お支払い時期 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">お支払い時期</h2>
              <div className="text-gray-700">
                <p><strong>初回：</strong>申込手続き時に課金。</p>
                <p><strong>以後：</strong>申込日に応じて毎月の自動更新日に課金（日本時間）。</p>
              </div>
            </section>

            {/* 追加手数料 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">追加手数料等の必要料金</h2>
              <p className="text-gray-700">
                本サービス利用に伴う通信費はお客様負担となります。その他手数料は発生しません。
              </p>
            </section>

            {/* 解約・自動更新について */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">解約・自動更新について（重要）</h2>
              <div className="text-gray-700 space-y-2">
                <p>• 解約はお問い合わせ窓口（フォーム/メール）からの申請で受け付けます。</p>
                <p>• 当社に解約申請が到達した月の末日をもって解約とし、翌月以降の自動更新・課金を停止します（日本時間）。</p>
                <p>• 料金は月締めのため、期間途中での解約でも日割り・按分での返金はありません。解約月末日までは引き続きご利用いただけます。</p>
              </div>
            </section>

            {/* 返品・キャンセル・返金の特約 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">返品・キャンセル・返金の特約（デジタル役務）</h2>
              <div className="text-gray-700 space-y-2">
                <p>• サービスの性質上、決済完了後の返金には応じられません。</p>
                <p>• ただし、当社起因の重大な障害により相当期間ご利用いただけない状態が継続し、当社が合理的期間内に復旧できなかった場合は、未提供期間相当の返金または無償延長等で個別対応します。</p>
                <p className="text-sm text-orange-600">※本取引はクーリング・オフ適用対象外です。</p>
              </div>
            </section>

            {/* 動作環境 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">動作環境</h2>
              <p className="text-gray-700">
                最新の【Google Chrome / Microsoft Edge / Safari】推奨、安定したインターネット接続、JavaScript有効化。
              </p>
            </section>

            {/* 提供地域 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">提供地域</h2>
              <p className="text-gray-700">
                日本国内を主対象とします（国外からのご利用は一部機能・決済が制限される場合があります）。
              </p>
            </section>

            {/* 表現および商品に関する注意書き */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">表現および商品に関する注意書き</h2>
              <p className="text-gray-700">
                本サービスは広告バナーの評価・コピー生成等を支援するツールであり、効果・成果を保証するものではありません。結果は業種やクリエイティブ、運用条件等により異なります。
              </p>
            </section>

            {/* 個人情報の取り扱い */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">個人情報の取り扱い</h2>
              <div className="text-gray-700">
                <p>取得した個人情報はプライバシーポリシーに基づき適切に取り扱います。</p>
                <p>プライバシーポリシー：<a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">https://【自社ドメイン】/privacy</a></p>
              </div>
            </section>

            {/* 特定商取引法に関する責任者 */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">特定商取引法に関する責任者の氏名</h2>
              <p className="text-gray-700">坂口雄斗</p>
            </section>
          </div>

          {/* 最終更新日 */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              最終更新日：2024年12月19日
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← バナスコ トップページに戻る
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
})

export default app