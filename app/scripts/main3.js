(function () {
  'use strict'

  window.onload = () => {
    const loading = document.getElementById('js-loading')
    const loadingTop = document.getElementById('js-loading-top')
    const loadingBottom = document.getElementById('js-loading-bottom')
    const loadingIcon = document.getElementById('js-loading-icon')
    const loadingCompleteText = document.getElementById('js-loading-complete-text')

    // クルクルローディングアイコンを非表示にする
    loadingIcon.classList.add('fade-out')

    // クルクルアイコンの非表示アニメーションが終了したら
    loadingIcon.addEventListener('animationend', () => {
      loadingCompleteText.classList.add('fade-in-out')
    })

    // completeテキストアニメーションが終了したら
    loadingCompleteText.addEventListener('animationend', () => {
      loadingTop.classList.add('open')
      loadingBottom.classList.add('open')
      loading.classList.add('d-none')
    })
  };
}());
