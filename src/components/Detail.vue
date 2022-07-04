<template>
  <div>
    <h1 class="mb-5">Bitcoin Details</h1>
    <div class="detail-container">
      <div>
          <p>Anzahl Bitcoin:</p>
          {{ totalbc }} Stück
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
      totalbc: "0"
    }
  },
  methods: {
    async getBitcoinDetails() {
      await axios.get("/q/totalbc").then((response) => {
        this.totalbc = this.numberWithCommas(response.data);
        console.log(this.numberWithCommas(response.data));
      })
    },
    numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
  },
  mounted() {
    this.getBitcoinDetails();
  }
}
</script>
<style>

  .detail-container {
    display: flex;
    flex-direction: column;
  }

</style>