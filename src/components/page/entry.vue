<template>
    <div id="entry">
        <div id="entry-head">
            <router-link id="entry-head-back" to="/indexPage/myhome">返回</router-link>
            <router-link id="entry-head-register" to="/register" tag="div">新用户注册</router-link>
        </div>
        <div id="entry-body">
            <input id="entry-body-form-account" v-model="userLoginParams.name" type="text" placeholder="账号"><br>
            <input id="entry-body-form-password" v-model="userLoginParams.password" type="text" placeholder="密码"><br>
            <input id="entry-body-form-submit" @click="login()" type="button" value="登录">
        </div>
    </div>
</template>

<script>
import {getUser} from '../../api/user'
export default {

    data () {
        return {
            userLoginParams: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        login () {
            let params = this.userLoginParams
            getUser(params).then(res => {
                console.log(res)
                // this.$store.commit('ADD_USERINFO', res)
                // console.log(this.$store.state.userInfo)
                if(res.success == true) {
                    this.$router.push({ path: '/'})
                } else {

                }
            })
        }
    },
}
</script>

<style scoped>
#entry {
    position: relative;
    width: 100%;
}
#entry-head {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: blue;
}
#entry-head-back {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
    background-color: yellow;
}
#entry-head-register {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 5px;
    top: 0%;
    height: 100%;
    font-size: 2em;
}
#entry-body-headbar {
    position: relative;
    width: 100%;
}
#entry-body-form-account {
    width: 100%;
    height: 50px;
    font-size: 30px;
}
#entry-body-form-password {
    width: 100%;
    height: 50px;
    font-size: 30px;
}
#entry-body-form-submit {
    width: 100%;
    height: 40px;
    background-color: rgb(36, 214, 36);
}
</style>


