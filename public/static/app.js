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

    // CTA ボタンのクリックイベント（デモ用）
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('診断を始める') || button.textContent.includes('始める')) {
            button.addEventListener('click', function() {
                alert('実装予定：診断画面に遷移します');
            });
        }
    });

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