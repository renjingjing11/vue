import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var eventBus = {
    install(Vue) {
        Vue.prototype.$bus = new Vue()
    }
};
Vue.use(eventBus);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')