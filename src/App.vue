<template>
  <div id="app">
    <search-box></search-box>
    <carousel></carousel>
    <double-level></double-level>
    <!-- <router-view></router-view> -->
    <foot-box></foot-box>
  </div>
</template>

<script>
import searchBox from './components/common/searchBox'
import footBox from './components/common/footBox'
import carousel from './components/common/carousel'
import doubleLevel from './components/common/doubleLevel'

export default {
  name: 'App',
  components: {
    footBox,
    searchBox,
    carousel,
    doubleLevel,
  },
}
</script>

<style scoped>
#app {
  height: 800px;
  width: 100%;
}
</style>
