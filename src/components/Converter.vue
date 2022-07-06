<template>
  <div>
    <h1 class="mb-3">Umrechnung</h1>
    <h3 class="mb-3">Verkaufspreis</h3>
    <div class="converter-container">
      <div class="item">
        <label ref="baseCurrency">Basiswährung</label><br>
        <input class="mb-1" id="baseCurrency" disabled v-model="baseCurrency"/><br>
        <label>{{baseCurrencyValue }} USD</label>
      </div>
       =
      <div class="item">
        <label ref="baseCurrency">Währung</label><br>
        <input class="mb-1" id="baseCurrency" v-model="chosenCurrency" placeholder="Währung"/><br>
        <input class="mb-1" id="baseCurrency" v-model="valueForConvert"/><br>
        <label class="mb-1">{{chosenCurrencyValue }} {{ chosenCurrency }}</label><br>
        <label>{{resultInBitcoin}} Bitcoin</label>
      </div>
    </div>
    <button class="btn btn-primary coloring-button" @click="resetInputs">Reset</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Converter',
  data() {
    return {
      bitcoinPrices: {},
      baseCurrency: "USD",
      baseCurrencyValue: 0,
      chosenCurrency: "",
      chosenCurrencyValid: false,
      chosenCurrencyValue: 0,
      valueForConvert: 0,
      resultInBitcoin: 0
    }
  },
  methods: {
    async getBitcoinPrice() {
      await axios.get("/ticker").then((response) => {
        this.bitcoinPrices = response.data;
        this.baseCurrencyValue = this.bitcoinPrices['USD']['sell'];
      });
    },
    checkIfChosenCurrencyIsValid() {
      this.chosenCurrencyValid = this.chosenCurrency.length > 2 && this.bitcoinPrices[this.chosenCurrency] !== undefined;
    },
    resetInputs() {
      this.chosenCurrency = "";
      this.valueForConvert = 0;
    },
    calculateValues() {
      if(this.chosenCurrencyValid && this.chosenCurrencyValue !== 0) {
          this.resultInBitcoin = this.valueForConvert / this.chosenCurrencyValue;
        }
    }
  },
  mounted() {
    this.getBitcoinPrice();
  },
  watch: {
    chosenCurrency() {
      this.checkIfChosenCurrencyIsValid();
    },
    chosenCurrencyValid() {
      if(this.chosenCurrencyValid === true) {
        this.chosenCurrencyValue = this.bitcoinPrices[this.chosenCurrency]['sell'];
      } else {
        this.chosenCurrencyValue = 0;
        this.resultInBitcoin = 0;
      }
    },
    valueForConvert() {
      this.calculateValues();
    }
  }
}
</script>
<style scope>

  .converter-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  input {
    text-align: center;
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