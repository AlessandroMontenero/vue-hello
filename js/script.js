
const { createApp } = Vue

createApp({
 data() {
  return {
    message: 'Hello Vue!',
    messageColor: 'rgb(55, 174, 121)',
    objectOfImgAttrs: {
        class: 'logoImg',
        src: './img/Vue.js_Logo_2.svg.png'
    }
  }
}
}).mount('#app')
