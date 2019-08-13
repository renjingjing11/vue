import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lists: {}
    },
    mutations: {
        changeList(state, payload) {
            let lists = {...state.lists }
            lists[payload.id] = payload
            state.lists = lists
        }
    },
    actions: {

    },
    getters: {
        cost(state) {
            let cost = 0
            Object.entries(state.lists).forEach(item => {
                cost += item[1].count * item[1].price
            })
            return cost
        },
        totalPrice(state) {
            let total = 0
            Object.entries(state.lists).forEach(item => {
                total += item[1].count
            })
            return total
        }
    },
    modules: {

    }
})