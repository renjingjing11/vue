// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入mint-ui,
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

// 挂载的地方
Vue.use(MintUI)
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})