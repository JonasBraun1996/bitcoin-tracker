export default {
    state: {
        bitcoinTicker: {}
    },

    mutations: {
        setBitcoinTickerResponse(state, bitcoinTicker) {
            state.bitcoinTicker = bitcoinTicker;
        }
    },

    actions: {
        getBitcoinTickerResponse(state) {
            return state.bitcoinTicker;
        }
    }
}