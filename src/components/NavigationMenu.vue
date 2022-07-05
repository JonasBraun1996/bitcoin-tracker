<template>
    <nav role="navigation menu-container" class="full-height">
      <ul class="nav navbar-nav full-height nav-color">
        <li class="item">
          <button @click="goToRoute('/')">Dashboard</button>
          </li>
        <li class="item">
          <button @click="goToRoute('/detail')">Bitcoin Details</button>
          </li>
        <li class="item">
          <button @click="goToRoute('/converter')">Umrechnung</button>
        </li>
             <li class="item">
          <button @click="goToRoute('/diagramm')">Diagramm</button>
        </li>
        <li class="item">
          <button @click="goToRoute('/wallet')">Meine Bitcoin</button>
        </li>
      </ul>
    </nav>  
</template>

<script>
export default {
  name: "NavigationMenu",
  methods: {
    goToRoute(route) {
      if(this.$router.history.current.fullPath !== route) {
        this.$router.push(route);
      }
    }
  }
}
</script>

<style scoped>
  .menu-container {
    display: flex;    
    left: 0;
    bottom: 0;
    flex-direction: column;
    width: 15em;
    background-color: #FF9900;
    height: 95%;

  }

  .full-height {
    height: 95%;
  }

  .item {
    height: 5em;
    border-color: #000000 !important;
    border-style: solid;
    border-width: 0 0 2px 0;
    display: flex;
    justify-content: center;
  }

  .nav-color {
    margin-top: 5em;
    height: calc(100%);
    background-color: grey;
  }

  button {
    border: none;
    outline: none;
    background: none;
    color: #ffffff;
    width: 100%;
    height: 100%;
  }

  button:hover {
    background-color: white;
    color: #FF9900;
       border-color: #000000 !important;
    border-style: solid;
    border-width: 0 2px 0 2px;
  }
</style>
