<template >
    <div id="order" :style="{height: clientHeight, backgroundColor: 'yellow'}">
        <div id="order-1">近三个月无外卖订单记录</div>
        <div id="order-2">
            <input type="button" value="查看更早订单">
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
#order {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#order-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    margin-bottom: 10px;
}
#order-2 {
    height: 30px;
}
</style>


