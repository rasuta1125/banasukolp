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
            button.addEventListener('click', function(e) {
                // aタグでない場合のみアラート表示
                if (e.target.tagName !== 'A' && e.target.closest('a') === null) {
                    alert('実装予定：診断画面に遷移します');
                }
            });
        }
    });

    // デモページの機能（デモページでのみ実行）
    if (window.location.pathname === '/demo') {
        initDemoPage();
    }

    function initDemoPage() {
        const fileInput = document.getElementById('file-input');
        const uploadArea = document.getElementById('image-upload-area');
        const imagePreview = document.getElementById('image-preview');
        const previewImage = document.getElementById('preview-image');
        const analyzeBtn = document.getElementById('analyze-btn');
        const loadingState = document.getElementById('loading-state');
        const resultsArea = document.getElementById('results-area');

        // ファイルアップロード機能
        if (uploadArea && fileInput) {
            uploadArea.addEventListener('click', () => fileInput.click());
            
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.classList.add('border-blue-500');
            });

            uploadArea.addEventListener('dragleave', () => {
                uploadArea.classList.remove('border-blue-500');
            });

            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('border-blue-500');
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    handleFileUpload(files[0]);
                }
            });

            fileInput.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    handleFileUpload(e.target.files[0]);
                }
            });
        }

        function handleFileUpload(file) {
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // カスタム画像をアップロードした場合の処理
                    if (imagePreview) {
                        const svgElement = imagePreview.querySelector('svg');
                        if (svgElement) {
                            // SVGを新しいimg要素に置換
                            const newImg = document.createElement('img');
                            newImg.src = e.target.result;
                            newImg.className = 'w-full max-w-sm mx-auto rounded-lg';
                            newImg.alt = 'アップロードされた画像';
                            
                            svgElement.parentElement.innerHTML = '';
                            svgElement.parentElement.appendChild(newImg);
                        }
                        
                        // ラベルを更新
                        const label = imagePreview.querySelector('p');
                        if (label) {
                            label.textContent = 'アップロード画像';
                        }
                        
                        if (analyzeBtn) {
                            analyzeBtn.disabled = false;
                            analyzeBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
        }

        // 診断ボタンのクリック - 初期状態で有効
        if (analyzeBtn) {
            // サンプル画像があるので最初から有効
            analyzeBtn.disabled = false;
            analyzeBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            
            analyzeBtn.addEventListener('click', () => {
                if (analyzeBtn.disabled) return;
                
                startAnalysis();
            });
        }

        function startAnalysis() {
            // ローディング状態表示
            if (loadingState) {
                loadingState.classList.remove('hidden');
            }
            if (analyzeBtn) {
                analyzeBtn.disabled = true;
                analyzeBtn.classList.add('opacity-50', 'cursor-not-allowed');
            }

            // 3秒後に結果表示
            setTimeout(() => {
                showResults();
            }, 3000);
        }

        function showResults() {
            if (loadingState) {
                loadingState.classList.add('hidden');
            }
            if (resultsArea) {
                resultsArea.classList.remove('hidden');
                
                // アニメーション効果
                resultsArea.style.opacity = '0';
                resultsArea.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    resultsArea.style.transition = 'all 0.5s ease';
                    resultsArea.style.opacity = '1';
                    resultsArea.style.transform = 'translateY(0)';
                }, 100);
            }
        }
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
            }
        });
    }, observerOptions);

    // セクションにアニメーションを適用
    document.querySelectorAll('section').forEach(section => {
        animationObserver.observe(section);
    });
});