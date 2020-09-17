(function () {
  'use strict'

  window.onload = () => {
    const loading = document.getElementById('js-loading')
    const loadingIconWrap = document.getElementById('js-loading-icon-wrap')
    const loadingCompleteText = document.getElementById('js-loading-complete-text')

    // クルクルローディングアイコンを非表示にする
    loadingIconWrap.classList.add('fadeout')

    // クルクルアイコンの非表示アニメーションが終了したら
    loadingIconWrap.addEventListener('animationend', () => {
      loadingIconWrap.classList.add('d-none')
      loadingCompleteText.classList.add('show')
    })

    // completeテキストアニメーションが終了したら
    loadingCompleteText.addEventListener('animationend', () => {
      loading.classList.add('open')
    })
  };
}());
