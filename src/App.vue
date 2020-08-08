<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import liff from '@line/liff';
import Vue from 'vue';

export default {
  name: 'App',
  created: async () => {
    try {
      await liff.init({
        liffId: process.env.VUE_APP_LINE_LIFF_ID,
      });
    } catch (error) {
      Vue.swal({
        icon: 'error',
        title: '<h2 data-testid="errorTitle">LIFF init failed</h2>',
        html: `<span data-testid="errorMsg">${error.message}</span>`,
      });
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
