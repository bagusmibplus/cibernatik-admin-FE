// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')

// import './assets/main.css'
//import pinia
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CanvasJSChart from '@canvasjs/vue-charts';
const app = createApp(App)
const pinia = createPinia()

// // Import all of Bootstrap's JS
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
// import 'bootstrap-icons/font/bootstrap-icons.css'
app.use(CanvasJSChart)
app.use(router)
app.use(pinia)

app.mount('#app')
