<template>
  <div id="home-page">
    <search-box></search-box>
    <div id="home-page-container">
      <recommend></recommend>
    </div>
  </div>
</template>

<script>
import searchBox from "../common/searchBox"
import carousel from "../common/carousel"
import doubleTable from '../common/doubleTable'
import recommend from '../common/recommend'

export default {
  name: "homePage",
  components: {
    searchBox,
    carousel,
    doubleTable,
    recommend,
  },
};
</script>

<style scoped>
#home-page-container {
    position: relative;
    top: 50px;
    width: 100%;
    background-color: #ffffff;
}
</style>


