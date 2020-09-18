(function () {
  'use strict'

  window.onload = () => {
    const loading = document.getElementById('js-loading')
    const loadingIcon = document.getElementById('js-loading-icon')
    const loadingCompleteText = document.getElementById('js-loading-complete-text')

    // クルクルローディングアイコンを非表示にする
    loadingIcon.classList.add('fadeout')

    // クルクルアイコンの非表示アニメーションが終了したら
    loadingIcon.addEventListener('animationend', () => {
      loadingIcon.classList.add('d-none')
      loadingCompleteText.classList.add('fadein')
    })

    // completeテキストアニメーションが終了したら
    loadingCompleteText.addEventListener('animationend', () => {
      loading.classList.add('open')
    })
  };
}());
