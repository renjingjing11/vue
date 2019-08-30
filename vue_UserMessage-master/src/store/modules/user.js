import axios from "axios"

const state = {
    list: []
}


const mutations = {
    upDataList(state, payload) {
        state.list = payload
    }
}
const actions = {
    getList({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.get("/api/list").then(res => {
                console.log(res, "get========初始化")
                commit('upDataList', res.data.data)
                resolve()
            })
        })
    },
    addList({ commit }, payload) {
        return new Promise((resolve, reject) => {
            console.log(payload)
            axios.post("/api/add", { payload }).then(res => {
                console.log(res, "push=========添加的")
            })
        })
    },
    deleteList({ commit }, payload) {
        console.log(payload)
        return new Promise((resolve, reject) => {
            axios.post("/api/delete", { payload }).then(res => {
                console.log(payload)
                console.log(res.data, "delete=============删除")
                commit('upDataList', res.data.data)
            })
        })
    },
    amend({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.post("/api/updata", { payload }).then(res => {
                console.log(payload)
                console.log(res, "amend==================编辑")
                commit('upDataList', res.data.data)
            })
        })
    }
}

export default {
    state,
    actions,
    mutations
}