<template>
  <div>
    <h1 class="mb-5">Wallet</h1>
    <div class="wallet-container">
      <label>Anzahl Bitcoin</label>
      <input v-model="btcCount" placeholder="BTC" class="mb-3"/>
      <button class="btn-primary btn coloring-button mb-3" @click="storeInCache">Speichern</button>
      <label class="mb-3">Aktueller Kurs: {{ eurBitcoinPrice }}</label>
      <label>Aktueller Depotwert: {{ currentWalletValue }}</label>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'MyWallet',
  data() {
    return {
      btcCount: 0,
      eurBitcoinPrice: 0,
      currentWalletValue: 0
    }
  },
  methods: {
    storeInCache() {
      if(this.btcCount !== 0) {
        localStorage["btcCount"] = this.btcCount;
        this.calculateWalletValue();
      }
    },
    calculateWalletValue() {
      this.currentWalletValue = localStorage["btcCount"] * this.eurBitcoinPrice;
    },
    async getBitcoinPrice() {
      await axios.get("/ticker").then((response) => {
        this.eurBitcoinPrice = response.data['EUR']['sell'];
        this.calculateWalletValue();
      });
    },
  },
  mounted() {
    this.getBitcoinPrice();
  }
}
</script>

<style>

  .wallet-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

   .coloring-button {
    background-color: #FF9900;
    color: #ffffff;
     border-color: #FFFFFF;
  }

  .coloring-button:focus, .coloring-button:hover, .coloring-button:active {
    color: #FF9900;
    background-color: #ffffff;
    border-color: #FF9900;
  }

</style>