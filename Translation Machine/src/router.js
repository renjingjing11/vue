import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/translatePage',
        name: "translatePage",
        component: () =>
            import ('./views/translatePage.vue'),
        children: [{
            path: "/translatePage/city",
            name: "city",
            component: () =>
                import ("./views/translatePage/city.vue")
        }, {
            path: "/translatePage/my",
            name: "my",
            component: () =>
                import ("./views/translatePage/my.vue")
        }, {
            path: "/",
            redirect: "/translatePage/city"
        }]
    }, {
        path: "/order",
        name: "order",
        component: () =>
            import ("./views/translatePage/order")
    }, {
        path: '/translateList',
        name: "translateList",
        component: () =>
            import ('./views/translateList.vue')
    }, {
        path: '/productDetail',
        name: "productDetail",
        component: () =>
            import ('./views/productDetail.vue')
    }, {
        path: "/login",
        name: "login",
        component: () =>
            import ("./views/login.vue")
    }, {
        path: "/register",
        component: () =>
            import ("./views/register.vue")

    }, {
        path: "/pay",
        name: "pay",
        component: () =>
            import ("./views/pay.vue")
    }, {
        path: "/myOrder",
        name: "myOrder",
        component: () =>
            import ("./views/myOrder.vue")
    }, {
        path: "*",
        redirect: "/translatePage"
    }]
})


// 导航守卫：全局守卫 局部守卫 组件内守卫
// 全局守卫：beforeEach  afterEach   beforeResolve  =>router
// 局部守卫：beforeEnter  =>route
// 组件内守卫：beforeRouteEnter  beforeRouteUpdate(2.2新增),beforeRouteLeave  =>component

// 定义白名单  除了这些白名单里的组件其他组件都需要登录
let whiteList = ["login", "city", "translatePage", "register"]
    // 全局导航守卫
router.beforeEach((to, from, next) => {
    console.log(to)
        // 如果白名单里找不到就跳转登陆页
    if (whiteList.findIndex(item => to.name == item) !== -1) {
        next()
    } else {
        if (window.sessionStorage.getItem("token")) {
            next()
        } else {
            next("/login")
        }
    }
    next()
})

export default router;