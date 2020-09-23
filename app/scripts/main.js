(function() {
  'use strict'

  window.onload = function() {
    const loading = document.getElementById('js-loading');
    const loadingIcon = document.getElementById('js-loading-icon');
    const loadingCompleteText = document.getElementById('js-loading-complete-text');

    // ローディングアイコンをフェードアウトさせる
    loadingIcon.classList.add('fade-out');

    // クルクルアイコンの非表示アニメーションが終了したら
    loadingIcon.addEventListener('animationend', function() {
      loadingIcon.classList.add('d-none');
      loadingCompleteText.classList.add('fade-in');
    })

    // completeテキストアニメーションが終了したら
    loadingCompleteText.addEventListener('animationend', function() {
      loading.classList.add('open');
    })
  };
}());
