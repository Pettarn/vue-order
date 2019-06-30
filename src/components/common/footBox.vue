<template>
  <div id="foot-box">
    <router-link id="foot-box-index" to="./homePage">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconwaimai" />
      </svg>
    </router-link>
    <router-link id="foot-box-second" to="./order">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icondingdan" />
      </svg>
    </router-link>
    <router-link id="foot-box-third" to="./myhome">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconwode" />
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: grey;
  background: rgb(47, 47, 230);
  border-radius: 50%;
  overflow: hidden;
}
/* .router-link-exact-active {
  background-color: #000 !important;
} */
#foot-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #333333;
}
#foot-box-index,
#foot-box-second,
#foot-box-third {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  height: 100%;
  width: 33.33%;
  background-color: #ef7c6d;
}
</style>




