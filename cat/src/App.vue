<template>
<div id="app">
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./assets/css/reset');
html {
  width: 100%;
  height: 100%;
}
#app {
   width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.fontWeight {
  font-weight: bolder;
}
</style>
