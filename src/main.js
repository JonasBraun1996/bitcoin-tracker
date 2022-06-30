import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import MainView from '@/components/MainView';

import './assets/app.scss';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://blockchain.info';

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {
    path: "/",
    redirect: "/menu"
  },
  {
    path: "/menu",
    name: "MainView",
    component: MainView
  }
];

const router = new VueRouter ({
  mode: 'history',
  hash: false,
  path: '/',
  redirect: '/menu',
  routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
