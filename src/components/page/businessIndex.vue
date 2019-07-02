<template>
    <div id="business-index">
        <div id="business-index-columnbar">
            <div id="business-index-columnbar-cell" v-for="item in list" :key="item.typeid" style="height: 30px">
                <a id="business-index-columnbar-cell-a" :href="`#${item.typeid}`">
                    {{ item.typeid }}
                </a>
            </div>
        </div>
        <div id="business-index-goodslist">
            <div  v-for="item in list" :key="item.typeid" :id="item.typeid">
                <div id="business-index-goodslist-cell">{{ item.name }}</div>
                <div>{{ item.Foods }}</div>
            </div>
        </div>
        <div id="business-index-bottom">
            <div id="business-index-bottom-cart">
                <div id="business-index-bottom-cart-icon"></div>
                <div id="business-index-bottom-cart-numb">1</div>
            </div>
            <div id="business-index-bottom-count">
                <div>12</div>
                <div>##</div>
                <div>$$</div>
            </div>
        </div>
    </div>
</template>

<script>
import {getMenu} from '../../api/business'
export default {
    data () {
        return {
            businessId: '',
            list: [
                {
                    id: 1,
                    name: "热销榜",
                },
                {
                    id: 2,
                    name: "单人精彩套餐",
                },
                {
                    id: 3,
                    name: "爽口凉菜",
                },
            ],
            typeList: []
        }
    },
    filters: {
        getTypeList () {

        }
    },
    mounted() {
        getMenu().then(res => {
            // console.log(this.$route.query.businessId)
            this.list = res.foods.filter(element => {
                return element.businessId == this.$route.query.businessId
            })
        })
        
    },
    created() {
        for(let i = 0; i < this.list.length; i++) {
            this.typeList[i] = this.list[i].typeid
        }
        console.log(typeList)
    }
}
</script>

<style scoped>
#business-index {
    position: relative;
    display: grid;
    width: 100%;
    grid-template: 1fr / 30% 70%;
}
#business-index-columnbar {
    position: relative;
    border: solid #000;
    margin-bottom: 60px;
}
#business-index-goodslist {
    position: relative;
    border: solid #000;
    margin-bottom: 60px;
}
#business-index-columnbar-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    overflow: hidden;
    border: solid;
}
#business-index-columnbar-cell-a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #000;
}
#business-index-goodslist-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    overflow: hidden;
    border: solid;
}
#business-index-bottom {
    position: fixed;
    display: grid;
    grid-template: 1fr / 30% 70%;
    height: 60px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: rgb(36, 148, 201);
}
#business-index-bottom-cart-icon {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: rgb(110, 97, 97);
    bottom: 0;
    left: 20px;
}
#business-index-bottom-count {
    position: relative;
    display: grid;
    grid-template: 1fr / 20% 50% 30%;
}
#business-index-bottom-count>div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid;
}
#business-index-bottom-cart-numb {
    z-index: 100;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 83px;
    bottom: 63px;
    transform: translate(-8px, 8px);
    height: 16px;
    width: 30px;
    padding: 3px;
    border-radius: 16px;
    background-color: rgb(211, 24, 24);
}
</style>


