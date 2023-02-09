
const { createApp } = Vue

createApp({
 data() {
  return {
    message: 'Hello Vue!',
    messageColor: 'rgb(55, 174, 121)',
    imgClass: 'logoImg',
    imgPath: './img/Vue.js_Logo_2.svg.png'
  }
}
}).mount('#app')
