// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: "bg-light",
    routes: [
        {
            path: '/',
            name: 'Main',
            meta: {requiresAuth: true},
            components: require('../components/layouts/MainLayout'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: require('../views/home').default,
                },
                {
                    path: 'posts',
                    name: 'posts',
                    component: require('../views/posts').default,
                }
            ]
        },
    ]
});



export default router;