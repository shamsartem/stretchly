const banner = document.querySelector('.prebreak-banner')
const messageEl = document.querySelector('.prebreak-message')
const dismissBtn = document.querySelector('#dismiss')

window.prebreak.onData(async ({ message, background, seconds, type }) => {
  if (banner && background) {
    banner.style.backgroundColor = background
  }
  if (messageEl) {
    messageEl.textContent = message
  }
  if (dismissBtn) {
    const dismissLabel = await window.i18next.t('break.dismissNotification')
    dismissBtn.textContent = dismissLabel
  }
  document.body.classList.add('ready')
})

dismissBtn.onclick = () => {
  window.prebreak.dismiss()
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    window.prebreak.dismiss()
  }
})
