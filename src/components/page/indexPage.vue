<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <foot-box></foot-box>
  </div>
</template>

<script>
import footBox from '../common/footBox'

export default {
  name: 'indexPage',
  components: {
    footBox,
  },
}
</script>

<style scoped>
#app {
  position: relative;
  /* width: 100%; */
  background-color: #dee1e6;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 3s ease;
}
</style>
