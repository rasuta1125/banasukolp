import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>バナスコAI｜コピー生成・最適CTA・投稿前チェックを一括</title>
        <meta name="description" content="画像をアップするだけ。AIがスコア化・最適CTA提案・投稿文生成・投稿前チェック・薬機法チェックまで30秒で一括。まずは無料で診断。" />
        
        {/* OGP メタタグ */}
        <meta property="og:title" content="バナスコAI｜コピー生成・最適CTA・投稿前チェックを一括" />
        <meta property="og:description" content="画像をアップするだけ。AIがスコア化・最適CTA提案・投稿文生成・投稿前チェック・薬機法チェックまで30秒で一括。まずは無料で診断。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://banasco.pages.dev" />
        <meta property="og:image" content="https://banasco.pages.dev/static/ogp-image.jpg" />
        <meta property="og:site_name" content="バナスコ" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="バナスコAI｜コピー生成・最適CTA・投稿前チェックを一括" />
        <meta name="twitter:description" content="画像をアップするだけ。AIがスコア化・最適CTA提案・投稿文生成・投稿前チェック・薬機法チェックまで30秒で一括。まずは無料で診断。" />
        <meta name="twitter:image" content="https://banasco.pages.dev/static/ogp-image.jpg" />
        
        {/* GA4タグ */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: 'バナスコLP',
              page_location: window.location.href
            });
          `
        }}></script>
        
        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'META_PIXEL_ID');
            fbq('track', 'PageView');
          `
        }}></script>
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* JSON-LD構造化データ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "バナスコ",
            "description": "広告バナーやSNS投稿を出稿前にAIで診断するツール",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "JPY",
              "description": "無料プラン"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "バナスコ"
            },
            "url": "https://banasco.pages.dev",
            "featureList": [
              "AIバナー診断",
              "Instagram投稿文自動生成",
              "誤字・表記ゆれチェック",
              "薬機法チェック",
              "自動レポート生成"
            ]
          })
        }}></script>
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
