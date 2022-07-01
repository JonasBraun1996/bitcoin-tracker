import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueRouter from 'vue-router';

import './assets/app.scss';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MainView from "@/components/MainView";
import Diagram from "@/components/Diagram";

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
    path: "/app",
    name: "App",
    component: App
  },
  {
    path: "/menu",
    name: "MainView",
    component: MainView
  },
  {
    path: "/diagramm",
    name: "Diagram",
    component: Diagram
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
