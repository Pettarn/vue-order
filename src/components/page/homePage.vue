<template>
    <div id="home-page">
        <search-box></search-box>
        <carousel></carousel>
        <double-level></double-level>
    </div>
</template>

<script>
import searchBox from '../common/searchBox'
import carousel from '../common/carousel'
import doubleLevel from '../common/doubleLevel'
export default {
    name: "homePage",
    components: {
        searchBox,
        carousel,
        doubleLevel,
    },
}
</script>

<style scoped>

</style>


