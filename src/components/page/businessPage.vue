<template>
    <div id="business">
        <div id="business-head">
            <router-link to="/" id="business-head-back" tag="div">back</router-link>
        </div>
        <div id="business-introduction">
            <div id="business-introduction-backgroundimage"></div>
            <div id="business-introduction-detail">
                <div id="business-introduction-detail-headpicture"></div>
                <div id="business-introduction-detail-discount">
                    <p>111111</p>
                    <p>222222</p>
                </div>
            </div>
        </div>
        <div id="business-headbar">
            <router-link tag="div" to="businessIndex" >商品</router-link>
            <router-link tag="div" to="businessSecond">评价</router-link>
            <router-link tag="div" to="businessThird">商家</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "businessPage"
}
</script>

<style scoped>
    #business {
        position: relative;
        width: 100%;
    }
    #business-head {
        z-index: 1000;
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        background-color: yellow;
        opacity: .8;
    }
    #business-head-back {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 100%;
        background-color: pink;
    }
    #business-introduction {
        position: relative;
        width: 100%;
        height: 180px;
        background-color: green;
    }
    /* #business-introduction-backgroundimage {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: blue;
    } */
    #business-introduction-detail {
        position: absolute;
        top: 60px;
        height: 120px;
        width: 100%;
    }
    #business-introduction-detail-headpicture {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        height: 70px;
        width: 70px;
        background-color: red;
    }
    #business-introduction-detail-discount {
        position: absolute;
        display: flex;
        top: 50%;
        left: 100px;
        transform: translateY(-50%);
        flex-direction: column;
        justify-content: space-around;
        height: 80px;
        background-color: blue;
    }
    #business-headbar {
        position: relative;
        display: grid;
        grid-template: 1fr / repeat(3, 1fr);
        height: 60px;
        width: 100%;
        background-color: purple;
    }
    #business-headbar>div {
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid #000;
        font-size: 2em;
    }
</style>


