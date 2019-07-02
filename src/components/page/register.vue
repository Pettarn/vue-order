<template>

    <div id="register">
        <router-link id="register-head" to="/entry" tag="div">
            登录
        </router-link>
        <!-- 用户名，电话号码，密码，收货地址 -->
        <div id="register-form">
            <input type="text" placeholder="用户名" v-model="name">
            <input type="text" placeholder="电话号码" v-model="phone">
            <input type="text" placeholder="密码" v-model="password">
            <input type="button" value="注册" @click="register">
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
            params.phone = this.phone
            setUser(params).then(res => {
                console.log('注册成功')
            })
        }
    },
}
</script>

<style scoped>
#register {
    position: relative;
    width: 100%;
}
#register-head {
    position: fixed;
    width: 100%;
    background-color: rgb(14, 101, 160);
    padding: 5px;
    font-size: 2em;
}
#register-form {
    position: relative;
    width: 100%;
    top: 55px;
}
#register-form>input {
    height: 30px;
    width: 100%;
    font-size: 2em;
    margin-bottom: 5px;

}
</style>


