<template>
    <div id="address">
        <div id="address-head">
            <router-link to="/indexPage/myhome" tag="div">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconfanhui"></use>
                </svg>
            </router-link>
            <div></div>
        </div>
        <div id="address-body">
            <!-- <div v-for="item in addressList" :key="item">{{ item }}</div> -->
            <div id="address-body-list" v-for="item in addressList" :key="item">
                <div id="address-body-list-left">{{ item }}</div>
                <div id="address-body-list-right">
                    <!-- <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icontubiao114"></use>
                    </svg> -->
                </div>
            </div>
            <!-- <input type="button" @click="changeAddress" value="更改"> -->
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
        params.customerId = this.$store.state.userInfo.id
        console.log(this.$store.state.userInfo)
        // console.log(params.customerId)
        getAddress(params).then(res => {
            console.log(res.address)    
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
#address-body {
    position: relative;
    top: 50px;
}
</style>


