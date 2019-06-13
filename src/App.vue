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
  height: 800px;
  width: 100%;
}
</style>
