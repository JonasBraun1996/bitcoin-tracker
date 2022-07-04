import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueRouter from 'vue-router';

import './assets/app.scss';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MainView from "@/components/MainView";
import Detail from "@/components/Detail";
import Converter from "@/components/Converter";
import Diagram from "@/components/Diagram";
import Wallet from "@/components/Wallet";

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
    path: "/detail",
    name: "Detail",
    component: Detail
  },
  {
    path: "/converter",
    name: "Umrechnung",
    component: Converter
  },
  {
    path: "/diagramm",
    name: "Diagram",
    component: Diagram
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: Wallet
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
