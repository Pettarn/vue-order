<template >
    <div id="order">
        <div id="order-head">
            <div></div>
            <div></div>
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


