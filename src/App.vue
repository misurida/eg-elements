<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Nunito');
  * {
    font-family: Nunito, sans-serif;
  }
  h1, h2, h3 ,h4 , h5, h6 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #4e7da8;
      }
    }
  }
</style>

<template>
  <div id="app">
    <div id="nav" v-if="false">
      <router-link to="/">Inputs</router-link> |
      <router-link to="/about">Sidemenu</router-link>
    </div>
    <router-view/>
  </div>
</template>
