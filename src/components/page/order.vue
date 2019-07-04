<template >
    <div id="order">
        <div id="order-head">
            <router-link tag="div" :to="`../../business/businessIndex?businessId=${this.$route.query}`" id="order-head-back">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconfanhui"></use>
                </svg>
            </router-link>
            <div id="order-head-title">
                确认订单
            </div>
        </div>
        <div id="order-body">
            <div id="order-body-address"></div>
            <div id="order-body-goodslist"></div>
            <div id="order-body-count"></div>
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

        }
    },
    computed: {
        clientHeight () {
            return window.screen.height - 70 + 'px'
        }
    }
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
</style>


