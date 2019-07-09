<template>

    <div id="register">
        <router-link id="register-head" to="/entry" tag="div">
            <div id="register-head-login">登录</div>
        </router-link>
        <!-- 用户名，电话号码，密码，收货地址 -->
        <div id="register-form">
            <input id="register-form-name" type="text" placeholder="用户名" v-model="name">
            <input id="register-form-phone" type="text" placeholder="电话号码" v-model="phone">
            <input id="register-form-password" type="password" placeholder="输入密码" v-model="password">
            <input id="register-form-again" type="password" placeholder="再次输入密码">
            <div id="register-form-register">
                <input id="register-form-register-button" type="button" value="注册" @click="register">
            </div>
        </div>
    </div>
</template>

<script>
import {setUser} from '../../api/user'
export default {
    data() {
        return {
            name: '',
            password: '',
            phone: '',
        }
    },
    methods: {
        register () {
            let params = {}
            params.name = this.name
            params.password = this.password
            params.tell = this.phone
            setUser(params).then(res => {
                console.log('注册成功')
                this.$router.push('/entry')
            })
        }
    },
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
#register {
    position: relative;
    width: 100%;
}
#register-head {
    position: fixed;
    display: grid;
    grid-template-columns: 20% 70% 10%;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    background: linear-gradient(90deg, #00a8ff, #0085fe);
}
#register-head-login {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: #ffffff;
}
#register-form {
    position: relative;
    width: 100%;
    top: 80px;
}
#register-form-name {
    width: 100%;
    height: 50px;
    font-size: 30px;
    padding-left: 10px;
}
#register-form-password {
    width: 100%;
    height: 50px;
    font-size: 30px;
    padding-left: 10px;
}
#register-form-again {
    width: 100%;
    height: 50px;
    font-size: 30px;
    padding-left: 10px;
}
#register-form-phone {
    width: 100%;
    height: 50px;
    font-size: 30px;
    padding-left: 10px;
}
#register-form-register {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
#register-form-register-button {
    margin-top: 10px;
    width: 99%;
    height: 55px;
    border-radius: 5px;
    background-color: #4dc160;
    color: #ffffff;
    font-size: 2em;
}
</style>


