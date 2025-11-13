// fixed.js の修正版

$(function() {
    // 画面内に入ったかチェックする対象となる要素に .profile と .img-area を追加
    const targets = $('.works, .works_design, .profile, .img-area'); // ★ 👈 この行を修正 ★

    // ※ 初期スタイルはCSSで設定済みのため、ここでは記述しません。

    function checkVisibility() {
        const windowHeight = $(window).height();
        // 要素を少し手前でアニメーションさせるため、100pxを加算
        const scrollBottom = $(window).scrollTop() + windowHeight; 

        targets.each(function() {
            const target = $(this);
            const targetTop = target.offset().top;
            
            // 要素がまだアニメーションされておらず、画面内に入ったらクラスを追加
            if (!target.hasClass('is-visible') && scrollBottom > targetTop + 100) {
                target.addClass('is-visible'); 
            }
        });
    }

    // スクロール時とリサイズ時にチェックを実行
    $(window).on('scroll resize', checkVisibility);

    // ページロード時にも一度チェックを実行（既に画面内にある要素のため）
    checkVisibility();
});

// fixed.js のアニメーションコードの外側（または最初）に追記

$(function() {
    // スクロール時のヘッダー制御
    function handleHeaderScroll() {
        // 現在のスクロール位置を取得
        const scrollTop = $(window).scrollTop();
        const nav = $('header nav');

        // スクロールが1pxでも発生したらクラスを付与
        if (scrollTop > 1) {
            nav.addClass('is-scrolled');
        } else {
            // スクロールが最上部（0px）に戻ったらクラスを削除
            nav.removeClass('is-scrolled');
        }
    }

    // スクロール時とページロード時にもチェックを実行
    $(window).on('scroll', handleHeaderScroll);
    
    // ページロード時にも一度実行 (リロード時にスクロール位置が残っている場合に対応)
    handleHeaderScroll(); 
    
    // ... 既存の作品アニメーションのロジック（checkVisibility関数など）...
});
