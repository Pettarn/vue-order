<template>
  <div id="app">
    <router-view></router-view>
    <foot-box></foot-box>
  </div>
</template>

<script>
import footBox from './components/common/footBox'

export default {
  name: 'App',
  components: {
    footBox,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  position: absolute;
  height: 800px;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #dee1e6;
}
</style>
