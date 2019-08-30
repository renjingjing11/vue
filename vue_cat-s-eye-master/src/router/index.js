import Vue from 'vue'
import Router from 'vue-router'
// 引入cookie得到本地存储的
import { getToken } from "@/utils"
// 一级路由
import Login from "@/views/login/index"
import Home from "@/views/home/home"
import Detail from "@/views/detail/detail"
// 二级路由
import Movie from "@/views/home/movie"
import Cinema from "@/views/home/cinema"
import My from "@/views/home/my"
// 三级路由
import Hot from "@/views/home/movie/hot"
import Will from "@/views/home/movie/will"


Vue.use(Router)

let router = new Router({
        linkActiveClass: "active",
        routes: [{
            path: "/",
            redirect: "home/movie/hot"
        }, {
            path: "/login",
            component: Login
        }, {
            path: "/detail/:id",
            name: "/detail",
            component: Detail
        }, {
            path: "/home",
            component: Home,
            children: [{
                path: "/home/movie",
                component: Movie,
                children: [{
                    path: "/home/movie/hot",
                    name: "hot",
                    component: Hot
                }, {
                    path: "/home/movie/will",
                    component: Will
                }]
            }, {
                path: "/home/cinema",
                component: Cinema
            }, {
                path: "/home/my",
                component: My
            }]
        }]
    })
    // 全局导航守卫

// 组件跳转之前
router.beforeEach((to, from, next) => {
    console.log("组件跳转之前")
    console.log("to========", to, from)
    next()
    if (to.path == "/home/my") {
        if (getToken()) {
            next()
        } else {
            next("/login")
        }
    } else {
        next()
    }
})

//组件跳转之后
router.afterEach((to, from, next) => {
    console.log("组件跳转之后")
})
export default router;