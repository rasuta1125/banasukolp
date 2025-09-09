import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>バナスコ - 広告バナーAI診断ツール | 出稿前チェックで成果向上</title>
        <meta name="description" content="広告バナーやSNS投稿を出稿前にAIで診断。コピー生成、誤字脱字チェック、薬機法チェックをワンクリックで。初月10回キャンペーン中！" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/static/style.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  animation: {
                    'fade-in-up': 'fadeInUp 0.5s ease-out',
                  }
                }
              }
            }
          `
        }}></script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
