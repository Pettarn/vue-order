<template>
    <div id="foot-box">
        <div id="foot-box-index"></div>
        <div id="foot-box-second"></div>
        <div id="foot-box-third"></div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#foot-box {
    position: fixed;
    left: 0;
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




