<template>
    <div id="my-home">
        <div id="my-home-head">
            <div id="my-home-head-bell">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconxiaoxi"></use>
                </svg>
            </div>
        </div>
        <div id="my-home-body">
            <div id="my-home-body-avater">
                <router-link tag="div" id="my-home-body-avater-name" to="/entry">
                    <div id="my-home-body-avater-name-font">{{ username }}</div>
                    <div id="my-home-body-avater-name-message">再忙也要记得吃饭哟~</div>
                </router-link>
                <div id="my-home-body-avater-picture">
                    <img style="width: 100%; height: 100%;" src="https://p1.ssl.qhimgs1.com/sdr/400__/t017533ac031cd682c1.jpg">
                </div>
            </div>
            <div id="my-home-body-finance">
                <div id="my-home-body-finance-red-bag">
                    <div style="font-size: 2em;">红包</div>
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconhongbao"></use>
                        </svg>
                    </div>
                    <div><span style="font-size: 2em; color: red;">2</span>个未使用</div>
                </div>
                <div id="my-home-body-finance-money-bag">
                    <div style="font-size: 2em;">钱包</div>
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconicon-test"></use>
                        </svg>
                    </div>
                    <div>金币、福利、借钱</div>
                </div>
            </div>
            <div id="my-home-body-setting">
                <div></div>
                <div id="my-home-body-setting-sp">地址管理</div>
                <router-link to="../../address" tag="div" id="my-home-body-setting-icon">
                    <svg id="icon" aria-hidden="true">
                        <use xlink:href="#iconqianjin"></use>
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myHome',
    data () {
        return {
            username: '' || '未登录',
        }
    },
    created () {
        this.username = this.$store.state.userInfo.name
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
    #icon {
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }   
    #my-home-head {
        position: fixed;
        width: 100%;
        height: 70px;
        /* left: 0; */
        top: 0;
        background-color: #ffffff;
        z-index: 1000;
    }
    #my-home-head-bell {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        height: 100%;
        width: 20%;
    }
    #my-home-body {
        position: relative;
        /* left: 0; */
        top: 70px;
        width: 100%;
        background-color: #000;
    }
    #my-home-body-avater {
        position: relative;
        /* left: 0; */
        width: 100%;
        height: 120px;
        background-color: #ddd888;
    }
    #my-home-body-avater-name {
        position: absolute;
        /* left: 0; */
        width: 70%;
        height: 100%;
        background-color: #ffffff;
        /* font-weight: bolder; */
    }
    #my-home-body-avater-name-font {
        position: absolute;
        top: .2em;
        margin-left: 10%;
        top: 0;
        font-size: 3em;
        font-weight: 900;
    }
    #my-home-body-avater-name-message {
        position: absolute;
        top: 2.8em;
        margin-left: 10%;
        font-size: 1.5em;
        font-weight: 100;
    }
    #my-home-body-avater-picture {
        position: absolute;
        right: 0;
        height: 100%;
        width: 30%;
        background-color: aqua;
    }
    #my-home-body-finance {
        position: relative;
        /* left: 0; */
        width: 100%;
        height: 120px;
        padding-top: 20px;
        background-color: #ffffff;
    }
    #my-home-body-finance>div {
        box-shadow: 3px 2px 10px rgb(223, 216, 216);
    }
    #my-home-body-finance-red-bag {
        position: absolute;
        display: grid;
        grid-template: repeat(2, 1fr) / 70% 30%;
        left: 3%;
        width: 46%;
        height: 100px;
        background-color: #fff;
        border-radius: 5px;
    }
    #my-home-body-finance-red-bag>div {
        display: flex;
        align-items: center;
        padding: 7px;
    }
    #my-home-body-finance-money-bag {
        position: absolute;
        display: grid;
        grid-template: repeat(2, 1fr) / 70% 30%;
        right: 3%;
        width: 46%;
        height: 100px;
        background-color: #fff;
        border-radius: 5px;
    }
    #my-home-body-finance-money-bag>div {
        display: flex;
        align-items: center;
        padding: 5px;
    }
    #my-home-body-collection {
        position: relative;
        margin-top: 5px;
        /* left: 0; */
        width: 100%;
        height: 100px;
        background-color: yellow;
    }
    #my-home-body-setting {
        position: relative;
        display: grid;
        grid-template-columns: 10% 70% 20%;
        font-size: 2.5em;
        /* left: 0; */
        height: 100px;
        background-color: #ffffff;
        box-shadow:  3px 2px 10px rgb(223, 216, 216);
    }
    #my-home-body-setting-icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #my-home-body-setting-sp {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
</style>

