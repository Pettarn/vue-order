<template >
    <div id="order">
        <div id="order-head">
            <!-- <router-link tag="div" :to="`../../business/businessIndex?businessId=${this.$route.query}`" id="order-head-back"> -->
            <router-link tag="div" :to="{ path: '../../business/businessIndex', query: { businessId: this.$store.state.businessInfo.id } }" id="order-head-back">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconfanhui"></use>
                </svg>
            </router-link>
            <div id="order-head-title">
                确认订单
            </div>
        </div>
        <div id="order-body">
            <div id="order-body-address">{{ address }}</div>
            <div id="order-body-goodslist">{{ goodsList }}</div>
            <div id="order-body-totalValue">{{ totalValue }}</div>
            <div id="order-body-submit">
                <input id="order-body-submit-button" type="button" :value="orderState">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "order",
    mounted() {

    },
    data () {
        return {
            address: this.$store.state.userAddress,
            totalValue: this.$store.state.totalValue,
            orderState: [
                
            ],
        }
    },
    computed: {
        clientHeight () {
            return window.screen.height - 70 + 'px'
        }
    },
    created() {
        console.log(this.$store.state.userAddress)
        console.log(this.$store.state.orderDetail)
        console.log(this.$store.state.totalValue)
        
    },
}
</script>

<style>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#order {
    position: relative;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
}
#order-head {
    position: fixed;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    background-color: blue;
}
#order-head-back {
    position: absolute;
    height: 100%;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#order-head-title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
}
#order-body {
    position: relative;
    top: 50px;
}
#order-body>div {
    width: 100%;
    height: 50px;
    font-size: 2em;
    background-color: rgb(58, 224, 224);
}
#order-body-submit-button {
    width: 100%;
    height: 100%;
    background-color: rgb(201, 192, 192);
}
</style>


