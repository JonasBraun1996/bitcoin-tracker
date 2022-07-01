<template>
  <div class="timealignment">
    <div>{{ date }}</div>
    <div>{{ hours }}:{{ minutes }}:{{ seconds }}</div>
  </div>
</template>

<script>

import moment from 'moment';

export default {
  name: "BitcoinFooter",
  data() {
    return {
      moment: moment,
      date: moment(moment.now()).format('DD.MM.YYYY'),
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    setTime () {
      setInterval(() => {
        const date = new Date();
        this.hours = date.getHours();
        this.minutes = this.checkSingleDigit(date.getMinutes());
        this.seconds = this.checkSingleDigit(date.getSeconds());
        if(this.hours.toString() === "0" && this.minutes.toString() === "00" && this.seconds.toString() === "01") {
          this.setDate();
        }
      }, 1000)
    },
    checkSingleDigit (digit) {
      return ('0' + digit).slice(-2)
    },
    setDate() {
      this.date = moment(moment.now()).format('DD.MM.YYYY');
    }
  },
  beforeMount() {
    this.setTime();
    this.setDate();
  }
}
</script>

<style scoped>

.timealignment {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

</style>
