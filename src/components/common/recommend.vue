<template>
    <div id="recommend">
        <div id="recommend-title">推荐商家</div>
        <div id="recommend-each-business">
            <div v-for="item in list" :key="item">{{ item.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                {
                    name: 1,
                },
                {
                    name: 1,
                },
                {
                    name: 1,
                },
            ]
        }
    }
    
}
</script>

<style scoped>
#recommend {
    position: relative;
    width: 100%;
    background-color: blue;
}
#recommend-title {
    position: relative;
    font-size: 30px;
    color: yellow;
    margin-left: 100px;
}
#recommend-each-business {
    position: relative;
    width: 100%;
    background-color: #f00;
}
</style>


