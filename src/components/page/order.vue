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
                <div>订单时间：{{ item.time }}</div>
                <div>订单总价：{{ item.totalPrice }}</div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            orderList: this.$store.state.orderList
        }
    },
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
    margin-bottom: 70px;
}
</style>


