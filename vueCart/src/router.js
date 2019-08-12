import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        children: [{
            path: "/home/order",
            name: "order",
            component: () =>
                import ("./views/home/order.vue")
        }, {
            path: "/home/ping",
            name: "ping",
            component: () =>
                import ("./views/home/ping.vue")
        }, {
            path: "/home/shop",
            name: "shop",
            component: () =>
                import ("./views/home/shop.vue")
        }]
    }]
})