/* Creating a new vue istance*/
const { createApp } = Vue

/* new vue application */
let app = createApp({

 data() {
  return {
    /* Message to display */
    message: 'Vue',
    /* Color */
    messageColor: 'rgb(55, 174, 121)',
    /* Object with image attributes */
    objectOfImgAttrs: {
        class: 'logoImg',
        src: './img/Vue.js_Logo_2.svg.png'
    }
  }
}
})

/* mount vue application */
app.mount('#app')
