import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimation from './addon/scrollreveal'


createApp(App).use(router).directive(
    'scrollanimation', ScrollAnimation
    ).mount('#app')

