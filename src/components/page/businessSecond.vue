<template>
    <div id="businessSecond">
        <div id="businessSecond-score">
            <div id="businessSecond-score-overall">
                <div id="businessSecond-score-overall-count">4.2</div>
                <div id="businessSecond-score-overall-font">综合评分</div>
            </div>
            <div id="businessSecond-score-detail">
                <div>服务态度</div>
                <div id="odd">4.1</div>
                <div>商品评分</div>
                <div id="odd">4.2</div>
                <div>送达时间</div>
                <div id="odd">4.3</div>
            </div>
        </div>
        <div id="businessSecond-comment">
            <div id="businessSecond-comment-class">
                <div id="businessSecond-comment-class-all">全部</div>
                <div id="businessSecond-comment-class-good">满意</div>
                <div id="businessSecond-comment-class-bad">不满意</div>
            </div>
            <!-- <div id="businessSecond-comment-check">
                <div>
                    《》
                </div>
                <div>
                    只看有内容的评价
                </div>
            </div> -->
            <div id="businessSecond-comment-list">
                <div id="businessSecond-comment-list-cell" v-for="item in commentsList" :key="item.id">
                    <div id="left">
                        <div id="businessSecond-comment-list-cell-userimage"></div>
                    </div>
                    <div id="right">
                        <div id="right-top">
                            <div id="businessSecond-comment-list-cell-phone">{{ item.tell | capitalize }}</div>
                            <div id="businessSecond-comment-list-cell-time"></div>
                        </div>
                        <div id="right-bottom">
                            <div id="businessSecond-comment-list-cell-fivestars"></div>
                            <div id="businessSecond-comment-list-cell-comment">{{ item.content }}</div>
                            <div id="businessSecond-comment-list-cell-labels"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getComments} from '../../api/business'
export default {
    data () {
        return {
            commentsList: []
        }
    },
    created () {
        getComments().then(res => {
            this.commentsList = res.comments
        })
    },
    filters: {
        capitalize (value) {
            return value.replace(/(^\d{3})(.*?)(\d{4}$)/, "$1****$3")
        }
    }
}
</script>

<style scoped>
#odd {
    color: red;
}
#businessSecond-score {
    min-width: 371.33px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
    height: 120px;
    background-color: #ffffff;
}
#businessSecond-score-overall {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 80%;
    
    color: #ff6100;
    background-color: #ffffff;
}
#businessSecond-score-detail {
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 2.2fr;
    width: 60%;
    height: 80%;
    background-color: #ffffff;
}
#businessSecond-score-overall-count {
    font-size: 45px;
}
#businessSecond-score-overall-font {
    font-size: 20px;
}
#businessSecond-score-detail>div {
    display: flex;
    justify-content: center;
    align-items: center;
}
#businessSecond-comment {
    position: relative;
    width: 100%;
    margin-top: 15px;
}
#businessSecond-comment-class {
    position: relative;
    display: grid;
    grid-template: 1fr / repeat(6, 1fr);
    grid-gap: 10px;
    height: 60px;
    padding-left: 10px;
    background-color: #ffffff;
}
#businessSecond-comment-class>div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebf5ff;
    margin: 15px 0;
}
#businessSecond-comment-check {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
}
#businessSecond-comment-list-cell {
    position: relative;
    display: grid;
    grid-template: 1fr / 15% 85%;
    width: 100%;
    height: 120px;
}
#left {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    background-color: #fff;
}
#businessSecond-comment-list-cell-userimage {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #000;
}
#right {
    position: relative;
    display: grid;
    grid-template: 20% 80% / 1fr;
    background-color: #ffffff;
    padding: 6px;
}
#businessSecond-comment-list-cell-time {
    position: relative;
    display: flex;
    justify-content: flex-end;
}
#right-top {
    position: relative;
    display: grid;
    grid-template: 1fr / 40% 60%;
}
#businessSecond-comment-list-cell-phone {
    position: relative;
    display: flex;
    justify-content: flex-start
}
/* #businessSecond-comment-list-cell- */
</style>


