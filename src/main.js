import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "../src/assets/font/stylesheet.css"
import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp()

app.use(MasonryWall)
createApp(App).mount('#app')
