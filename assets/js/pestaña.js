
let timeOut
const missYouMessage = '😢 Tramposo'
const comeBackMessage = '❤️Tu Puedes'

window.addEventListener('blur', () => {
  timeOut = setTimeout(() => {
    document.title = missYouMessage
  }, 2000);
})

window.addEventListener('focus', () => {
  clearTimeout(timeOut)
  if (document.title === missYouMessage) {
    document.title = comeBackMessage
  }

  timeOut = setTimeout(() => {
    document.title = document.head.dataset.title
  }, 4000);
})
