<template>
    <div id="entry">
        <div id="entry-head">
            <router-link id="entry-head-back" tag="div" to="/indexPage/myhome">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconfanhui"></use>
                </svg>
            </router-link>
            <div></div>
            <router-link id="entry-head-register" to="/register" tag="div">注册</router-link>
        </div>
        <div id="entry-body">
            <input id="entry-body-form-account" v-model="userLoginParams.name" type="text" placeholder="账号"><br>
            <input id="entry-body-form-password" v-model="userLoginParams.password" type="password" placeholder="密码"><br>
            <div id="entry-body-form-login">
                <input id="entry-body-form-submit" @click="login()" type="button" value="登录">
            </div>
        </div>
    </div>
</template>

<script>
import {getUser, getOrderList} from '../../api/user'
export default {
    data () {
        return {
            userLoginParams: {
                name: '',
                password: ''
            },
            orderList: [],
        }
    },
    methods: {
        login () {
            let params = {}
            params.name = this.userLoginParams.name
            params.password = this.userLoginParams.password
            // console.log(params)
            getUser(params).then(res => {
                // console.log(res.success[1])
                if(res.success[0] == true) {
                    
                    this.$router.push({ path: '../address'})
                    this.$store.commit('ADD_ISLOGIN', true)
                    this.$store.commit('ADD_USER', res.success[1])
                    // console.log(this.$store.state.userInfo.id)

                    // 存该用户的历史订单
                    let param = {} 
                    param.customerId = this.$store.state.userInfo.id
                    getOrderList(param).then(res => {
                        this.orderList = this.$store.state.orderList || res.success[1]
                        res.success[1].forEach(item => {
                            this.$store.commit('SET_ORDERLIST', item)
                        })
                    })
                }
            })
        }
    },
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: rgb(255, 255, 255);
  overflow: hidden;
}
#entry {
    position: relative;
    width: 100%;
}
#entry-head {
    position: fixed;
    display: grid;
    grid-template-columns: 10% 70% 20%;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    background: linear-gradient(90deg, #00a8ff, #0085fe);
}
#entry-head-back {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
}
#entry-head-register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 2em;
    color: #ffffff;
}
/* #entry-body-headbar {
    position: relative;
    width: 100%;
} */
#entry-body {
    position: relative;
    top: 80px;
    background-color: #f5f5f5;
}
#entry-body-form-account {
    width: 100%;
    height: 50px;
    font-size: 30px;
    padding-left: 10px;
}
#entry-body-form-password {
    width: 100%;
    height: 50px;
    font-size: 30px;
    padding-left: 10px;
}
#entry-body-form-login {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
#entry-body-form-submit {
    margin-top: 10px;
    width: 99%;
    height: 55px;
    border-radius: 5px;
    background-color: #4dc160;
    color: #ffffff;
    font-size: 2em;
}
</style>


