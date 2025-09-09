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
            
            switch(action) {
                case 'signup':
                case 'signup-free':
                    showModal('会員登録', 'バナスコの無料アカウントを作成して診断を始めましょう！', [
                        { text: 'メールで登録', action: 'email-signup' },
                        { text: 'Googleで登録', action: 'google-signup' }
                    ]);
                    break;
                    
                case 'signup-light':
                    showModal('Light プラン', 'キャンペーン価格 1,000円/月（6か月間）でLightプランを始めませんか？', [
                        { text: 'Light プランを始める', action: 'light-plan' },
                        { text: '無料プランから始める', action: 'free-plan' }
                    ]);
                    break;
                    
                case 'signup-pro':
                    showModal('Pro プラン', 'Pro プラン（5,000円/月）で本格的な診断を始めませんか？', [
                        { text: 'Pro プランを始める', action: 'pro-plan' },
                        { text: '無料プランから始める', action: 'free-plan' }
                    ]);
                    break;
                    
                case 'contact':
                    showModal('お問い合わせ', 'バナスコについてご質問やご相談がございましたら、お気軽にお問い合わせください。', [
                        { text: 'メールで相談', action: 'email-contact' },
                        { text: '電話で相談', action: 'phone-contact' }
                    ]);
                    break;
                    
                case 'demo':
                    showModal('デモ体験', 'バナスコの診断機能を実際に体験してみませんか？', [
                        { text: '無料体験を始める', action: 'start-demo' },
                        { text: '資料請求', action: 'download-materials' }
                    ]);
                    break;
                    
                default:
                    alert('お問い合わせ機能は準備中です。しばらくお待ちください。');
            }
        });
    });

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
                alert('ユーザー登録機能は準備中です。\n正式リリースまでお待ちください！');
                break;
            case 'light-plan':
            case 'pro-plan':
                alert('プラン登録機能は準備中です。\n正式リリースまでお待ちください！');
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

    // アニメーション効果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // セクションにアニメーションを適用
    document.querySelectorAll('section').forEach(section => {
        animationObserver.observe(section);
    });
});