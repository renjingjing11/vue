import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/views/login"
import User from "@/views/user"

import Add from "@/views/user/add"
import List from "@/views/user/list"

Vue.use(VueRouter)


export default new VueRouter({

    routes: [{
        path: "/login",
        component: Login
    }, {
        path: "/user",
        component: User,
        children: [{
            path: "/user/list",
            component: List
        }, {
            path: "/user/add",
            component: Add
        }]
    }, {
        path: "*",
        redirect: "/user/list"
    }]
})