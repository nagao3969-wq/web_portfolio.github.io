// loading.js

document.addEventListener('DOMContentLoaded', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    
    // ① 最低表示時間 (3000ms = 3秒)
    const MINIMUM_DISPLAY_TIME = 3000;
    
    // ② ページ全体の読み込み完了フラグ
    let isContentLoaded = false;
    
    // ③ 最低表示時間タイマー完了フラグ
    let isMinTimeElapsed = false;

    // ロード画面を非表示にする関数
    function hideLoader() {
        if (isContentLoaded && isMinTimeElapsed) {
            // 両方の条件が満たされたら非表示にする
            loaderWrapper.style.opacity = '0';
            
            // 0.5秒のフェードアウト後に要素を完全に消去
            setTimeout(() => {
                loaderWrapper.style.display = 'none';
            }, 500); // フェードアウトの時間（0.5秒）
        }
    }

    // (A) コンテンツ読み込み完了 (全ての画像やCSS等が読み込まれた時)
    window.addEventListener('load', function() {
        isContentLoaded = true;
        hideLoader();
    });

    // (B) 最低表示時間タイマー (3秒経過)
    setTimeout(function() {
        isMinTimeElapsed = true;
        hideLoader();
    }, MINIMUM_DISPLAY_TIME);
});
