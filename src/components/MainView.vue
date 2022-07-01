<template>
  <div>
    <b-dropdown text="Währung wählen" class="m-md-2">
      <b-dropdown-item @click="setCurrentCurrency('USD')">USD</b-dropdown-item>
      <b-dropdown-item @click="setCurrentCurrency('EUR')">EUR</b-dropdown-item>
      <b-dropdown-item @click="setCurrentCurrency('CHF')">CHF</b-dropdown-item>
    </b-dropdown>
    <div class="container">
      <p class="item">Verkaufspreis</p>
      <p class="item">Kaufpreis</p>
    </div>
    <div class="container">
      <p> {{bitcoinApiResponse['sell']}} {{ bitcoinApiResponse['symbol'] }} </p>
      <p> {{bitcoinApiResponse['buy']}} {{ bitcoinApiResponse['symbol'] }} </p>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import Diagram from "@/components/Diagram";
import BitcoinFooter from "@/components/BitcoinFooter";

export default {
  name: 'MainView',
  data() {
    return {
      bitcoinApiResponse: [],
      fullResponse: [],
      currentCurrency: "USD"
    }
  },
  components: {
    Diagram,
    BitcoinFooter
  },
  mounted() {
    this.getBitcoinPrice();
  },
  methods: {
    setCurrentCurrency(currency) {
      this.currentCurrency = currency;
    },
    async getBitcoinPrice() {
      await axios.get("/ticker").then((response) => {
        console.log(response);
        this.fullResponse = response;
        this.bitcoinApiResponse = response.data[this.currentCurrency];
      });
    }
  },
  watch: {
    currentCurrency() {
      this.getBitcoinPrice();
    }
  }
}
</script>
<style>

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-around;
  }

</style>
