<template>
    <div id="double-level">
        <div id="double-level-first">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div id="double-level-second">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#double-level {
    position: absolute;
    height: 200px;
    width: 100%;
    left: 0;
    top: 220px;
    background-color: #2472c8;
    overflow: hidden;
}

#double-level-first, #double-level-second {
    height: 50%;
    width: 100%;
    background-color: #8d5ca8;
    border: .5px solid;
}
#double-level-first>div, #double-level-second>div {
    float: left;
    width: 20%;
    height: 100%;
    background-color: #ff7d89;
    border: .5px solid;
}
</style>


