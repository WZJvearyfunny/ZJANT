import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/vueUse',
        name: 'vueUse',
        meta: {
            title: 'vueUse',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/vueUse.vue')
    },
    {
        path: '/smart',
        name: 'SMART',
        meta: {
            title: 'SMART',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/SMART.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;