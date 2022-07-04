<template>
  <div>
    <h1 class="mb-5">Bitcoin Details</h1>
    <div class="detail-container">
      <div class="detail-item">
        <p>Anzahl Bitcoin</p>
        {{ totalbc }}
      </div>
      <div class="detail-item">
        <p>Marktkapitalisierung</p>
        {{ marketCap }} USD
      </div>
      <div class="detail-item">
        <p>Hashrate</p>
        {{ hashRate }}
      </div>
      <div class="detail-item">
        <p>Transaktionen 24h</p>
        {{ transactionCount }}
      </div>
      <div class="detail-item">
        <p>Gesendete Bitcoin 24h</p>
        {{ btcSent }}
      </div>
      <div class="detail-item">
        <p>Schwierigkeit</p>
        {{ difficulty }}
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Details',
  data() {
    return {
      totalbc: 0,
      marketCap: 0,
      hashRate: 0,
      transactionCount: 0,
      btcSent: 0,
      difficulty: 0
    }
  },
  methods: {
    async getBitcoinDetails() {
      await axios.get("/q/totalbc").then((response) => {
        this.totalbc = this.numberWithCommas(response.data);
      })
    },
    numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async getMarketCap() {
      await axios.get("/q/marketcap").then((response) => {
        this.marketCap = this.numberWithCommas(response.data);
      })
    },
    async getHashRate() {
      await axios.get("/q/hashrate").then((response) => {
        this.hashRate = response.data;
      })
    },
    async getTransactionCount() {
      await axios.get("/q/24hrtransactioncount").then((response) => {
        this.transactionCount = response.data;
      })
    },
    async getBtcSent() {
      await axios.get("/q/24hrbtcsent").then((response) => {
        this.btcSent = response.data;
      })
    },
    async getDifficulty() {
      await axios.get("/q/getdifficulty").then((response) => {
        this.difficulty = response.data;
      })
    }
  },
  mounted() {
    this.getBitcoinDetails();
    this.getMarketCap();
    this.getHashRate();
    this.getTransactionCount();
    this.getBtcSent();
    this.getDifficulty();
  }
}
</script>
<style>

  .detail-container {
    display: flex;
    flex-direction: column;
  }

  .detail-item{
    margin-bottom: 3em;
  }

</style>