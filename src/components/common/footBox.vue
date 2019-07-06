<template>
  <div id="foot-box">
    <div id="foot-box-index" >
      <router-link to="./homePage" tag="svg" class="icon" aria-hidden="true">
        <use xlink:href="#iconwaimai" />
      </router-link>
      <div>外卖</div>
    </div>
    <div id="foot-box-second" >
      <router-link to="./order" tag="svg" class="icon" aria-hidden="true">
        <use xlink:href="#icondingdan" />
      </router-link>
      <div>订单</div>
    </div>
    <div id="foot-box-third" >
      <router-link to="./myhome" tag="svg" class="icon" aria-hidden="true">
        <use xlink:href="#iconwode" />
      </router-link>
      <div>我的</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: #7f7f7f;
  /* background: rgb(47, 47, 230); */
  border-radius: 50%;
  overflow: hidden;
}
.router-link-exact-active {
  fill: #007acc !important;
}
.router-link-exact-active+div {
  color: #007acc !important;
}
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  height: 100%;
  width: 33.33%;
  background-color: #f7f7f7;
}

</style>




