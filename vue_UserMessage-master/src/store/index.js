import Vue from "vue";
import Vuex from "vuex";
import Logger from "vuex/dist/logger";

Vue.use(Vuex);

import user from "@/store/modules/user.js"

export default new Vuex.Store({
    modules: {
        user
    },
    pugins: [Logger()]
})