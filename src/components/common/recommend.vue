<template>
    <div id="recommend">
        <div id="recommend-title">推荐商家</div>
        <div id="recommend-each-business">
            <router-link id="sp" tag="div" v-for="item in list" :key="item.id" :to="{ path: '/business/', query: { businessId: item.id }}">
                <div id="recommend-each-business-per">
                    <div id="recommend-each-business-per-left">
                        <img style="{position: absolute; width: 100%; height: 100%;}" :src="item.imgsrc">
                    </div>
                    <div id="recommend-each-business-per-right">
                        <div style="font-size: 2.5em;">{{ item.name }}</div>
                        <div style="font-size: 1.5em;">
                            <span style="color: #ff6300;">#4.7</span>
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
    // methods: {
    //     setCurrentBusinessId(id) {
    //         this.$store.commit('ADD_BUSINESSID', id)
    //         console.log(this.$store.state.businessId)
    //     }
    // },
    mounted() {
        getBusiness().then(res => {
            this.list = res.business
        })
        // console.log(this.$store.state.businessId)
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
    background-color: #ffffff;
}
#recommend-title {
    font-weight: bold;
    position: relative;
    font-size: 30px;
    color: #333333;
    padding-left: 20px;
}
#recommend-each-business {
    position: relative;
    width: 100%;
    /* background-color: #ff6300; */
    margin-bottom: 70px;
}
#recommend-each-business-per {
    position: relative;
    display: grid;
    grid-template: 1fr / 25% 75%;
    width: 100%;
    height: 100px;
    background-color: #ffffff;
}
/* #recommend-each-business-per>div {
    border: solid;
} */
#recommend-each-business-per-right-sp {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
}
#sp {
    margin: 10px 0;
    box-shadow:  3px 2px 10px rgb(165, 165, 165);
}
</style>


