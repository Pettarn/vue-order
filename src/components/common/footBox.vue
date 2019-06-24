<template>
    <div id="foot-box">
        <router-link id="foot-box-index" to="/"></router-link>
        <router-link id="foot-box-second" to="/order"></router-link>
        <router-link id="foot-box-third" to="/myhome"></router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#foot-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #333333;
}
#foot-box-index, #foot-box-second, #foot-box-third {
    float: left;
    height: 100%;
    width: 33.33%;
    background-color: #ef7c6d;
}

</style>




