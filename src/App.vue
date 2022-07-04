<template>
  <div id="app">
    <bitcoin-header id="header"></bitcoin-header>
    <div class="row remove-margin-right f-height">
      <div class="col-2 f-height">
        <navigation-menu></navigation-menu>
      </div>
      <div class="col-10 remove-margin-right">
        <router-view id="router"></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import BitcoinHeader from "@/components/BitcoinHeader";
import NavigationMenu from "@/components/NavigationMenu";

export default {
  name: 'App',
  components: {
    BitcoinHeader,
    NavigationMenu
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#header {
  width: 100%;
  background-color: #FF9900 !important;
  color: #ffffff;
  position: absolute;
  top: 0;
  height: 5em;
  line-height: 60px;
}

#router {
  margin-top: 6em;
  height: 100%;
}

.remove-margin-right {
  margin-right: 0 !important;
  height: 100%;
}

.f-height {
  height: 100%;
}

</style>
