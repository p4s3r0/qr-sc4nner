import { createApp } from 'vue'
import App from './App.vue'
import '@/db/local_db';
import '@/global.css'
import * as VueRouter from 'vue-router';

import Home from '@/views/HomeView'

const routes = [{
    path: "/",
    name: "home",
    component: Home,
}];
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')

