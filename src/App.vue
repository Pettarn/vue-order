<template>
  <div id="app">
    <search-box></search-box>
    <foot-box></foot-box>
  </div>
</template>

<script>
import searchBox from './components/common/searchBox'
import footBox from './components/common/footBox'
export default {
  name: 'App',
  components: {
    footBox,
    searchBox,
  },
}
</script>

<style scoped>
#app {
  height: 800px;
  width: 100%;
}
</style>
