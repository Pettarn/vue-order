<template>
    <div id="businessThird">
        <div id="businessThird-head">
            <div id="businessThird-head-left">
                <div id="businessThird-head-left-name">{{ businessInfo.name }}</div>
                <div id="businessThird-head-left-fivestars"># # # # #</div>
            </div>
            <div id="businessThird-head-right">
                <div id="businessThird-head-right-icon">#</div>
                <div id="businessThird-head-right-font">收藏</div>
            </div>
        </div>
        <div id="businessThird-specific">
            <div id="businessThird-specific-minprice">
                <div>
                    <div>起送价</div>
                    <span style="font-size: 30px;">20</span>元
                </div>
            </div>
            <div id="businessThird-specific-freight">
                <div>
                    <div>运费</div>
                    <span style="font-size: 30px;">4</span>元
                </div>
            </div>
            <div id="businessThird-specific-duration">
                <div>
                    <div>平均配送时长</div>
                    <div style="display: flex;justify-content: center; align-items: center;">
                        <span style="font-size: 30px;">38</span>分钟
                    </div>
                </div>
            </div>
        </div>
        <div id="businessThird-notice">
            <div id="businessThird-notice-container">
                <div id="businessThird-notice-container-title">
                    公告与活动
                </div>
                <div id="businessThird-notice-container-text">
                    <div>
                        萨的房间里撒旦看风景ask锻炼腹肌二开六位萨的房间里撒旦
                        看风景ask锻炼腹肌二开六位萨的房间里撒旦看风景ask锻炼
                        腹肌二开六位
                    </div>
                    <div id="businessThird-notice-container-text-activity">
                        ##  在线支付满28减5
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            businessInfo: {}
        }
    },
    created () {
        this.businessInfo = this.$store.state.businessInfo
    }
}
</script>

<style scoped>
#businessThird {
    position: relative;
    width: 100%;
    margin-top: 10px;
}
#businessThird-head {
    position: relative;
    display: grid;
    grid-template: 1fr / 80% 20%;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
}
#businessThird-head-left {
    position: relative;
    padding: 10px;
}
#businessThird-head-left-name {
    font-size: 18px;
}
#businessThird-head-left-fivestars {
    margin-bottom: 5px;
}
#businessThird-head-right {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#businessThird-specific {
    position: relative;
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    width: 100%;
    height: 80px;
}
#businessThird-specific span {
    color: #ff6100;
}
#businessThird-specific>div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
#businessThird-notice {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
}
#businessThird-notice-container {
    position: relative;
    width: 100%;
    background-color: #ff6100;
    padding-left: 5px;
    padding-right: 5px;
}
#businessThird-notice-container-title {
    font-size: 25px;
    font-weight: 500;
}
#businessThird-notice-container-text {
    position: relative;
    padding: 10px;
}

#businessThird-notice-container-text-activity {
    padding: 5px;
}
</style>


