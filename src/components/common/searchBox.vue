<template>
    <div id="search-box">
        <div id="search-box-core"></div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#search-box {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 54px;
    background-color: #ffffff;
    z-index: 100;
}
#search-box-core {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 97%;
    height: 80%;
    border-radius: 27px;
    background-color: #d6d6d6;
}
</style>




