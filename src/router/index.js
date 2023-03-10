import Vue from 'vue'
import Home from "@/views/Home.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router