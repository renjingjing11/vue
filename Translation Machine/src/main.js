import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $http from "@/plugins/$http";
import Valid from "@/plugins/validator";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use($http, { timeout: 2000 });
Vue.use(Valid, {
    triggEvent: "blur", //triggEvent:事件  value值必须是字符串，
    errorClass: "vaild-error" //errorClass：类名
})

new Vue({
    router,
    store,
    render: h => h(App)
        // created() {
        //     console.log(this)
        // },
}).$mount('#app')