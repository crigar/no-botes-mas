import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from './routes';
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

const router = new VueRouter({routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
