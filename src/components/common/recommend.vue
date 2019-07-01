<template>
    <div id="recommend">
        <div id="recommend-title">推荐商家</div>
        <div id="recommend-each-business">
            <router-link v-for="item in list" :key="item.id" :to="{ path: '/business/businessIndex', params: { businessId: item.id } }">
                <div id="recommend-each-business-per">
                    {{ item.name }}
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


