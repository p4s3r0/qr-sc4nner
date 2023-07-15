import { createApp } from 'vue'
import App from './App.vue'

import QrReader from 'vue3-qr-reader';
import * as VueRouter from 'vue-router';

import '@/db/local_db';
import '@/global.css'

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

createApp(App).use(router).use(QrReader).mount('#app')

