<template>
  <div id="app">
    <bitcoin-header id="header"></bitcoin-header>
    <navigation-menu></navigation-menu>
    <router-view id="router"></router-view>
    <bitcoin-footer id="footer"></bitcoin-footer>
  </div>
</template>

<script>

import BitcoinHeader from "@/components/BitcoinHeader";
import BitcoinFooter from "@/components/BitcoinFooter";
import NavigationMenu from "@/components/NavigationMenu";

export default {
  name: 'App',
  components: {
    BitcoinHeader,
    BitcoinFooter,
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
  margin-top: 60px;
}

#header {
  width: 100%;
  background-color: #FF9900;
  color: #ffffff;
  position: absolute;
  top: 0;
  height: 5em;
  line-height: 60px;
}

#router {
  margin-top: 10em;
}

#footer {
  width: 100%;
  background-color: #FF9900;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  height: 5em;
  line-height: 60px;
}


</style>
