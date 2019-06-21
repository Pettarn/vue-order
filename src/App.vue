<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
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
.router-link-exact-active {
  background-color: #000 !important;
}

#app {
  position: absolute;
  height: 800px;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #dee1e6;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active, .slide-leave-active {
  transition: all 3s ease;
}
</style>
