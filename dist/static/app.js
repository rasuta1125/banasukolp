// FAQアコーディオン機能
document.addEventListener('DOMContentLoaded', function() {
    // FAQ アコーディオン
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.parentNode.querySelector('.faq-answer');
            const icon = this.querySelector('span:last-child');
            
            // 他のFAQを閉じる
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    const otherAnswer = otherQuestion.parentNode.querySelector('.faq-answer');
                    const otherIcon = otherQuestion.querySelector('span:last-child');
                    otherAnswer.classList.add('hidden');
                    otherIcon.textContent = '+';
                }
            });
            
            // 現在のFAQを切り替え
            answer.classList.toggle('hidden');
            icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
        });
    });

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 固定CTAボタンの表示制御
    const fixedCta = document.getElementById('fixed-cta');
    const heroSection = document.getElementById('hero');
    
    if (fixedCta && heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fixedCta.style.display = 'none';
                } else {
                    fixedCta.style.display = 'block';
                }
            });
        });
        
        observer.observe(heroSection);
    }

    // CTA ボタンのクリックイベント
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const action = this.getAttribute('data-action');
            
            // アナリティクス送信
            sendAnalyticsEvent('cta_click', { action: action, section: getSection(this) });
            
            switch(action) {
                case 'try-free':
                case 'signup-free':
                    sendAnalyticsEvent('cta_try_free', { section: 'hero' });
                    window.open('https://banasuko-ai-pgwxneahodpvwln3efsddu.streamlit.app/', '_blank');
                    break;
                    
                case 'view-pricing':
                    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
                    break;
                    
                case 'view-specs':
                    showModal('仕様詳細', 'バナスコの技術仕様をご確認ください。', [
                        { text: '対応形式を確認', action: 'view-formats' },
                        { text: 'API仕様を見る', action: 'view-api' }
                    ]);
                    break;
                    
                case 'signup-lite':
                    sendAnalyticsEvent('upgrade_attempt', { plan: 'lite' });
                    window.open('https://banasuko-ai-pgwxneahodpvwln3efsddu.streamlit.app/', '_blank');
                    break;
                    
                case 'signup-pro':
                    sendAnalyticsEvent('upgrade_attempt', { plan: 'pro' });
                    window.open('https://banasuko-ai-pgwxneahodpvwln3efsddu.streamlit.app/', '_blank');
                    break;
                    
                case 'generate-caption':
                    generateInstagramCaption();
                    break;
                    
                case 'try-instagram':
                    sendAnalyticsEvent('feature_interest', { feature: 'instagram' });
                    showUpsellModal('Instagram投稿文生成', 'instagram');
                    break;
                    
                case 'scroll-to-demo':
                    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
                    break;
                    
                default:
                    showModal('お問い合わせ', 'ご質問やご相談がございましたら、お気軽にお問い合わせください。', [
                        { text: 'メールで相談', action: 'email-contact' },
                        { text: '電話で相談', action: 'phone-contact' }
                    ]);
            }
        });
    });

    // Instagram投稿文生成機能
    function generateInstagramCaption() {
        sendAnalyticsEvent('caption_generated', { variants: 3 });
        
        const placeholder = document.getElementById('instagram-placeholder');
        const content = document.getElementById('instagram-content');
        
        if (placeholder && content) {
            placeholder.classList.add('hidden');
            content.classList.remove('hidden');
            
            // アニメーション効果
            content.style.opacity = '0';
            content.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                content.style.transition = 'all 0.5s ease';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    // コピー機能
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', function() {
            const contentType = this.getAttribute('data-content');
            let textToCopy = '';
            
            switch(contentType) {
                case 'caption-1':
                    textToCopy = '✨ この夏、理想の自分になりませんか？\nDMC美容クリニックの医療脱毛で、つるすべ肌を手に入れよう。全身脱毛5回コースが今だけ特別価格！\n💫 無料カウンセリングで、あなたに最適なプランをご提案します。';
                    sendAnalyticsEvent('caption_copied', { variant: 1 });
                    break;
                case 'hashtags':
                    textToCopy = '#医療脱毛 #美容クリニック #全身脱毛 #つるすべ肌 #夏準備 #DMC美容 #脱毛サロン #美容 #自分磨き #キレイになりたい';
                    sendAnalyticsEvent('hashtags_copied', { count: 10 });
                    break;
                case 'all':
                    textToCopy = '✨ この夏、理想の自分になりませんか？\nDMC美容クリニックの医療脱毛で、つるすべ肌を手に入れよう。全身脱毛5回コースが今だけ特別価格！\n💫 無料カウンセリングで、あなたに最適なプランをご提案します。\n\n#医療脱毛 #美容クリニック #全身脱毛 #つるすべ肌 #夏準備 #DMC美容 #脱毛サロン #美容 #自分磨き #キレイになりたい';
                    sendAnalyticsEvent('caption_copied', { variant: 'all' });
                    break;
            }
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast('コピーしました。Instagramに貼り付けて投稿できます。');
            });
        });
    });

    // Lite機能のロック導線
    function showUpsellModal(featureName, featureType) {
        let message = '';
        switch(featureType) {
            case 'cta-prediction':
                message = '配信前の効果最大化へ。最適CTAを自動提案。';
                break;
            case 'spelling-check':
                message = '配信前の事故ゼロへ。誤字・表記ゆれを自動検出。';
                break;
            case 'instagram':
                message = 'Instagram投稿が"めっちゃ楽"に。投稿文とハッシュタグを自動生成。';
                break;
            case 'report':
                message = '上長共有・記録を1クリック。PDFレポート自動生成。';
                break;
            default:
                message = 'この機能をご利用いただくには Lite プランが必要です。';
        }
        
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-8 m-4 max-w-md w-full">
                <div class="text-center">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">🔒</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${featureName}</h3>
                    <p class="text-gray-600 mb-6">${message}</p>
                    <div class="space-y-3">
                        <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors" onclick="handleLiteUpgrade()">
                            Lite で解放（1,000円/月）
                        </button>
                        <button class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors" onclick="closeUpsellModal()">
                            後で検討する
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeUpsellModal();
            }
        });
    }

    window.handleLiteUpgrade = function() {
        sendAnalyticsEvent('upgrade_paid', { plan: 'lite', source: 'upsell' });
        closeUpsellModal();
        window.open('https://banasuko-ai-pgwxneahodpvwln3efsddu.streamlit.app/', '_blank');
    };

    window.closeUpsellModal = function() {
        const modal = document.querySelector('.fixed.inset-0.bg-black');
        if (modal) {
            modal.remove();
        }
    };

    // グローバル関数として showUpsellModal を露出
    window.showUpsellModal = showUpsellModal;

    // モーダル表示機能
    function showModal(title, message, buttons) {
        // 既存のモーダルがあれば削除
        const existingModal = document.getElementById('cta-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // モーダル要素を作成
        const modal = document.createElement('div');
        modal.id = 'cta-modal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'bg-white rounded-lg p-6 m-4 max-w-md w-full';
        
        modalContent.innerHTML = `
            <div class="text-center">
                <h3 class="text-xl font-bold text-gray-800 mb-4">${title}</h3>
                <p class="text-gray-600 mb-6">${message}</p>
                <div class="space-y-3">
                    ${buttons.map(btn => `
                        <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors" onclick="handleModalAction('${btn.action}')">
                            ${btn.text}
                        </button>
                    `).join('')}
                    <button class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors" onclick="closeModal()">
                        閉じる
                    </button>
                </div>
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // 外側クリックでモーダルを閉じる
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // モーダル内ボタンのアクション処理
    window.handleModalAction = function(action) {
        closeModal();
        
        switch(action) {
            case 'email-signup':
            case 'google-signup':
            case 'light-plan':
            case 'pro-plan':
            case 'lite-plan':
            case 'free-plan':
                window.open('https://banasuko-ai-pgwxneahodpvwln3efsddu.streamlit.app/', '_blank');
                break;
            case 'email-contact':
                alert('メール：info@banasco.com\n（準備中）');
                break;
            case 'phone-contact':
                alert('お電話でのお問い合わせは準備中です。');
                break;
            case 'start-demo':
                alert('体験版は準備中です。\n正式リリースをお待ちください！');
                break;
            case 'download-materials':
                alert('資料ダウンロードは準備中です。');
                break;
            default:
                alert('機能は準備中です。');
        }
    };

    // モーダルを閉じる
    window.closeModal = function() {
        const modal = document.getElementById('cta-modal');
        if (modal) {
            modal.remove();
        }
    };

    // ユーティリティ関数
    
    // アナリティクスイベント送信
    function sendAnalyticsEvent(eventName, parameters = {}) {
        // GA4 イベント送信
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                ...parameters,
                timestamp: new Date().toISOString(),
                page_url: window.location.href
            });
        }
        
        // Meta Pixel イベント送信  
        if (typeof fbq !== 'undefined') {
            let fbEventName = eventName;
            
            // Meta Pixel 標準イベントにマッピング
            switch(eventName) {
                case 'cta_try_free':
                case 'upgrade_attempt':
                    fbEventName = 'Lead';
                    break;
                case 'upgrade_paid':
                    fbEventName = 'Purchase';
                    break;
                case 'cta_click':
                    fbEventName = 'ViewContent';
                    break;
                default:
                    fbEventName = 'CustomEvent';
            }
            
            fbq('track', fbEventName, parameters);
        }
        
        // コンソールログ（開発用）
        console.log('Analytics Event:', eventName, parameters);
    }
    
    // セクション特定
    function getSection(element) {
        let current = element;
        while (current && current !== document.body) {
            if (current.tagName === 'SECTION' && current.id) {
                return current.id;
            }
            if (current.classList.contains('hero')) return 'hero';
            if (current.classList.contains('pricing')) return 'pricing';
            if (current.classList.contains('features')) return 'features';
            if (current.classList.contains('instagram')) return 'instagram';
            current = current.parentNode;
        }
        return 'unknown';
    }
    
    // トースト通知表示
    function showToast(message, duration = 3000) {
        // 既存のトーストを削除
        const existingToast = document.getElementById('toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        const toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // アニメーション
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translate(-50%, 0)';
        }, 100);
        
        // 自動削除
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translate(-50%, 20px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, duration);
    }

    // アニメーション効果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                // セクション到達イベント送信
                const sectionId = entry.target.id;
                if (sectionId) {
                    sendAnalyticsEvent('section_viewed', { section: sectionId });
                }
            }
        });
    }, observerOptions);

    // セクションにアニメーションを適用
    document.querySelectorAll('section').forEach(section => {
        animationObserver.observe(section);
    });
});