import Vue from 'vue';
import Router from 'vue-router';
import { Teste1 } from '@/components'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            component: Teste1,
            children: [
                {
                path: '/',
                name: 'home',
                meta: {
                    title: 'menu.home.title',
                    breadcrumbs: [
                    {
                        text: 'Home',
                        disabled: false,
                        href: '/home',
                    },
                    ],
                },
                props: { routeGroup: 'isHomeMenuAndSidebar' },
                component: Teste1,
                },
                {
                path: '/home',
                name: 'home',
                meta: {
                    title: 'menu.home.title',
                    breadcrumbs: [
                    {
                        text: 'Home',
                        disabled: false,
                        href: '/home',
                    },
                    ],
                },
                props: { routeGroup: 'isHomeMenuAndSidebar' },
                component: Teste1,
                },
            ],
        }
    ]
})
