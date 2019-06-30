<template>
    <div id="search-box">
        <div id="search-box-core">
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconhtmal5icon25"></use>
                </svg>
            </div>
            <div>
                搜索
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: blue;
  overflow: hidden;
}
#search-box {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 54px;
    background-color: #ffffff;
    z-index: 100;
}
#search-box-core {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 97%;
    height: 80%;
    border-radius: 27px;
    background-color: #d6d6d6;
}
</style>




