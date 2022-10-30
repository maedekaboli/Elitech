import {createRouter, createWebHistory} from 'vue-router'

const App = () => import('./App')
const Forms = () => import('./components/Forms.vue')
const FormContainer = () => import('./components/FormContainer.vue')
const Home = () => import('./components/Home.vue')



const routes = [
    {
        path: '/', component: App
        , children: [
            {path: '/', component: Home, name: 'Home'},
        ]
    },
    {
        path: '/form', component: Forms
        ,children: [
            {path: '/form', component: FormContainer}
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;