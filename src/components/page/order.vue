<template>
    <div id="order">
        <div id="order-head">
            历史订单
        </div>
        <hr>
        <div id="order-body" >
            <div id="order-body-item" v-for="item in orderList" :key="item.id">
                <div>
                    <span>商家一</span><span>{{ item.state }}</span>
                </div>
                <div>{{ item.time }}</div>
                <div>{{ item.totalPrice }}</div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import {getOrderList} from '../../api/user'
export default {
    data () {
        return {
            orderList: this.$store.state.orderList
        }
    },
    created () {
        let params = {} 
        console.log(this.$store.state.userInfo)
        // params.customerId = this.$store.state.userInfo.id
        params.customerId = 1
        getOrderList(params).then(res => {
            console.log(res.success[1])
            this.orderList = res.success[1]
        })
    }
}
</script>

<style scoped>
#order-head {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    width: 100%;
    height: 80px;
    background-color: #fff;
    color: #000;
    font-size: 1.7em;
    font-weight: 700;
}
#order-body {
    position: relative;
    top: 80px;
    background-color: #fff;
}
</style>


