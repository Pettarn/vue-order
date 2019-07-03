<template >
    <div id="order">
        <div id="order-head">
            <router-link tag="div" :to="`../../business/businessIndex?businessId=${this.$route.query}`" id="order-head-back">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconfanhui"></use>
                </svg>
            </router-link>
            <div>
                <!-- {{ this.$route.query. }} -->
            </div>
        </div>
        <div>

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#order-head {
    position: fixed;
    display: grid;
    grid-template-columns: 15% 85%;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    background-color: blue;
}
#order-head-back {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>


