import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.filter('truncate', function (text, stop, clamp) {
    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
