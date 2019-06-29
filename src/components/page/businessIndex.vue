<template>
    <div id="business-index">
        <div id="business-index-columnbar">
            <div id="business-index-columnbar-cell" v-for="item in list" :key="item.id" style="height: 30px">
                <a id="business-index-columnbar-cell-a" :href="`#${item.id}`">
                    {{ item.name }}
                </a>
            </div>
        </div>
        <div id="business-index-goodslist">
            <div  v-for="item in list" :key="item.id" :id="item.id">
                <div id="business-index-goodslist-cell">{{ item.name }}</div>
                <div v-for="food in item.foodlist" :key="food.id" ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
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
            ]
        }
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
</style>


