<template>
    <div id="address">
        <div id="address-head">
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconfanhui"></use>
                </svg>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import {getAddress} from '../../api/user'
export default {
    data() {
        return {
            userId: '',
            addressList: []
        }
    },
    created () {
        // this.userId = this.$store.state.
        let params = {}
        params.userId = this.userId
        getAddress(params).then(res => {
            this.addressList = res.address
        })
    }
}
</script>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#address-head {
    position: fixed;
    display: grid;
    grid-template-columns: 15% 85%;
    height: 50px;
    width: 100%;
    background-color: blue;
}
#address-head>div {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>


