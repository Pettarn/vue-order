<template>
    <div id="recommend">
        <div id="recommend-title">推荐商家</div>
        <div id="recommend-each-business">
            <router-link to="/business">
                <div id="recommend-each-business-per"  v-for="item in list" :key="item.id">
                    {{ item.name }}
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                {
                    id: 1,
                    name: 1,
                },
                {
                    id: 2,
                    name: 2,
                },
                {
                    id: 3,
                    name: 3,
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
    margin-bottom: 70px;
}
#recommend-each-business-per {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: grey;
}
</style>


