(function () {
  'use strict'

  window.onload = () => {
    const loading = document.getElementById('js-loading')
    const loadingIconWrap = document.getElementById('js-loading-icon-wrap')
    const loadingCompleteText = document.getElementById('js-loading-complete-text')

    loadingIconWrap.classList.add('hide')
    loadingIconWrap.addEventListener('animationend', () => {
      loadingIconWrap.classList.add('end')
      loadingCompleteText.classList.add('show')
    })
    loadingCompleteText.addEventListener('animationend', () => {
      loading.classList.add('hide')
    })
  };
}());
