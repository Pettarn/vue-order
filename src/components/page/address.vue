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
                <div id="address-body-list-left">{{ item.adress }}</div>
                <div id="address-body-list-right">
                    <svg class="collect" @click="setMainAddress(item.id)" aria-hidden="true">
                        <use xlink:href="#icontubiao114"></use>
                    </svg>
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
            addressList: [],
            mainAddress: null,
        }
    },
    methods: {
        setMainAddress (id) {
            this.addressList.forEach(item => {
                if(item.id == id) {
                    this.mainAddress = item.adress
                }
            })
            // 设置用户当前使用的地址
            this.$store.commit('SET_ADDRESS', this.mainAddress)
            this.$router.push('/')
            console.log(this.$store.state.userAddress)
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
.collect {
  width: 1.2em;
  height: 1.2em;
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
#address-body-list {
    position: relative;
    display: grid;
    grid-template-columns: 85% 15%;
    height: 50px;
    font-size: 2em;
    background-color: #a59e9e;
}
#address-body-list>div {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>


