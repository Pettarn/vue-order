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
            <div id="order-body-address">地址：{{ address }}</div>
            <div id="order-body-goodslist">
                <div id="order-body-goodslist-eachfood" v-for="item in orderDetail" :key="item.id">
                    <div>{{ item.name }}</div>
                    <div>{{ item.count }}</div>
                </div>
            </div>
            <div id="order-body-totalValue">总价：￥{{ totalValue }}</div>
            <div id="order-body-submit">
                <input id="order-body-submit-button"  @click="purchase()" type="button" value="提交订单">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "order",
    methods: {
        purchase () {
            alert('已付款')
            let params = {}
            let t = new Date()
            let str = `${t.getFullYear()}/${t.getMonth()+1}/${t.getDate()}`
            params.time = str
            params.totalPrice = this.totalValue
            params.state = '未送达'
            this.$store.commit('SET_ORDERLIST', params)
            this.$store.commit('CLEAR_ORDERDETAIL')
            this.$router.push('/')
        }
    },
    data () {
        return {
            address: this.$store.state.userAddress,
            totalValue: this.$store.state.totalValue,
            orderDetail: this.$store.state.orderDetail.filter(item => {
                return item.count !== 0
            })
        }
    },
    computed: {
        clientHeight () {
            return window.screen.height - 70 + 'px'
        }
    },
    created() {
        
    },
}
</script>

<style>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: #ffffff;
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
    background-color: #008dfe;
    color: #ffffff;
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
#order-body-totalValue {
    display: flex;
    align-items: center;
    position: relative;
    height: 50px;
    color: #000;
    font-size: 1.5em;
    padding-left: 10px;
    background-color: #ffffff;
}
#order-body-submit-button {
    position: relative;
    width: 100%;
    height: 50px;
    background-color: #4dc160;
    color: #ffffff;
    font-size: 1.7em;
}
#order-body-goodslist {
    position: relative;
}
#order-body-goodslist-eachfood {
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 10px;
    font-size: 1.5em;
    background-color: #fff;
    color: red;
}
#order-body-address {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 50px;
    font-size: 1.5em;
    padding-left: 10px;
    background-color: #fff;
}
</style>


