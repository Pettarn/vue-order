<template>
    <div id="entry">
        <div id="entry-head">
            <router-link id="entry-head-back" to="/indexPage/myhome">返回</router-link>
        </div>
        <div id="entry-body">
            <form id="entry-body-form" action="" method="">
                <input id="entry-body-form-account" type="number" placeholder="账号" name="account"><br>
                <input id="entry-body-form-password" type="password" placeholder="密码" name="password"><br>
                <input id="entry-body-form-submit" type="submit" value="登录">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
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
#entry-body-headbar {
    position: relative;
    width: 100%;
}
#entry-body-form-account {
    width: 100%;
    height: 40px;
}
#entry-body-form-password {
    width: 100%;
    height: 40px;
}
#entry-body-form-submit {
    width: 100%;
    height: 40px;
    background-color: rgb(36, 214, 36);
}
</style>


