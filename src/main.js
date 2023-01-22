import { createApp } from 'vue'
import App from './App.vue'
// router
import router from './router' // <---
// plugins
import SlideUpDown from 'vue3-slide-up-down'
// ჩავსვი .component('slide-up-down', SlideUpDown)
createApp(App).use(router).component('slide-up-down', SlideUpDown).mount('#app')


