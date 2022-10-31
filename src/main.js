import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "../src/assets/font/stylesheet.css"
import MasonryWall from '@yeger/vue-masonry-wall'
import router from "@/router";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Toast, { POSITION }  from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
    position: POSITION.TOP_CENTER,
    timeout: 5000
};

let app = createApp(App);
app.use(Toast, options);
app.use(router);
app.use(vSelect);
app.use(MasonryWall)
app.mount('#app');
