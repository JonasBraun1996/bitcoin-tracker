import Vuex from 'vuex';
import Vue from 'vue';

import bitcoinStore from './modules/bitcoin.store';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        bitcoinStore: bitcoinStore
    },
    state: {},
    mutations: {},
    actions: {}
})
