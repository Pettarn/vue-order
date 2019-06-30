<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('./assets/style/_normalize.css');
* {
  padding: 0;
  margin: 0;
}
/* .router-link-exact-active {
  background-color: #000 !important;
} */

#app {
  position: relative;
  /* width: 100%; */
  background-color: #dee1e6;
}
/* .slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active, .slide-leave-active {
  transition: all 3s ease;
} */
</style>
