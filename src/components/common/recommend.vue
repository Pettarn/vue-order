<template>
    <div id="recommend">
        <div id="recommend-title">推荐商家</div>
        <div id="recommend-each-business">
            <router-link v-for="item in list" :key="item.id" :to="{ path: '/business/businessIndex', query: { businessId: item.id } }">
                <div id="recommend-each-business-per">
                    <div id="recommend-each-business-per-left"></div>
                    <div id="recommend-each-business-per-right">
                        <div style="font-size: 2.5em;">{{ item.name }}</div>
                        <div style="font-size: 1.5em;">
                            <span style="color: red;">#4.7</span>
                            <span>月售2008</span>
                        </div>
                        <div id="recommend-each-business-per-right-sp">
                            <div>起送￥0  免配送费</div>
                            <div>40分钟 2.7km</div>
                        </div>
                    </div>
                    
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import {getBusiness} from '../../api/business'
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
    },
    mounted() {
        getBusiness().then(res => {
            this.list = res.foods
        })
    },
}
</script>

<style scoped>
* {
    text-decoration: none;
}
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
    display: grid;
    grid-template: 1fr / 25% 75%;
    width: 100%;
    height: 100px;
    background-color: grey;
}
#recommend-each-business-per>div {
    border: solid;
}
#recommend-each-business-per-right-sp {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
}
</style>


