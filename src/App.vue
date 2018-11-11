<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/main.less'
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
