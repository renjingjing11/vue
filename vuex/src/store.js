import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        saveList(state, payload) {
            console.log(state, payload)
            state.list = [...state.list, payload] //创建新的数组覆盖原来的数组,不会修改原来数组
        },
        delList(state, payload) {
            console.log(state, payload)

            // 不可以直接修改state.list,有bug  解决办法是：先把state.list复制给新的变量，在新的做逻辑处理，再把修改后的赋给state.list
            let list = state.list
            list.splice(payload, 1)
            state.list = list
        },
        changeList(state, payload) {
            console.log(payload)
            let list = [...state.list]
            list.splice(payload.id, 1, { TabelName: payload.TabelName, TabelLeval: payload.TabelLeval })
            state.list = list
        }
    },
    actions: {

    }
})