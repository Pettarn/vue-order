<template>
    <div id="my-home">
        <div id="my-home-head">
            <div id="my-home-head-bell"></div>
        </div>
        <div id="my-home-body">
            <div id="my-home-body-avater">
                <router-link id="my-home-body-avater-name" to="/entry">
                    <div id="my-home-body-avater-name-font">123</div>
                    <div id="my-home-body-avater-name-message">再忙也要记得吃饭哟~</div>
                </router-link>
                <div id="my-home-body-avater-picture"></div>
            </div>
            <div id="my-home-body-finance">
                <div id="my-home-body-finance-red-bag"></div>
                <div id="my-home-body-finance-money-bag"></div>
            </div>
            <div id="my-home-body-collection"></div>
            <div id="my-home-body-setting"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myHome',
}
</script>

<style scoped>
    
    #my-home-head {
        position: fixed;
        width: 100%;
        height: 70px;
        /* left: 0; */
        top: 0;
        background-color: #0188fb;
        z-index: 1000;
    }
    #my-home-head-bell {
        position: absolute;
        right: 0;
        height: 100%;
        width: 20%;
        background-color: #444555;
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
        background-color: red;
    }
    #my-home-body-avater-name-font {
        position: absolute;
        top: .2em;
        margin-left: 10%;
        top: 0;
        font-size: 3em;
    }
    #my-home-body-avater-name-message {
        position: absolute;
        top: 2.8em;
        margin-left: 10%;
        font-size: 1.5em;
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
        margin-top: 3px;
        width: 100%;
        height: 130px;
        background-color: #888ddd;
    }
    #my-home-body-finance-red-bag {
        position: absolute;
        left: 3%;
        width: 46%;
        height: 100%;
        background-color: #fff;
        border-radius: 10%;
    }
    #my-home-body-finance-money-bag {
        position: absolute;
        right: 3%;
        width: 46%;
        height: 100%;
        background-color: #000;
        border-radius: 10%;
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
        margin-top: 3px;
        /* left: 0; */
        width: 100%;
        height: 100px;
        background-color: yellow;
    }
</style>

