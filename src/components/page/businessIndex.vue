<template>
    <div id="business-index">
        <!-- <div id="business-index-columnbar">
            <div id="business-index-columnbar-cell" v-for="item in list" :key="item.typeid" style="height: 30px">
                <a id="business-index-columnbar-cell-a" :href="`#${item.typeid}`">
                    {{ item.typeid }}
                </a>
            </div>
        </div> -->
        <div id="business-index-goodslist">
            <div  v-for="item in list" :key="item.id" >
                <!-- <div :id="item.typeid">{{ item.typeid }}</div> -->
                <div id="business-index-goodslist-cell">
                    <div>
                        <div><img id="business-index-goodslist-cell-img" :src="item.imgsrc"></div>
                        <div>
                            {{ item.name }}
                            <div>月售40份  好评率99%</div>
                            <div style="margin: 20px 0;">￥{{ item.price }}</div>
                        </div>
                    </div>
                      <div id="business-index-goodslist-cell-img-addicon">
                        <svg @click="add(item.price)" class="icon" aria-hidden="true">
                            <use xlink:href="#icontianjia" />
                        </svg>
                    </div>
                    <!-- <add-icon @click="add(item.price)"></add-icon> -->
                </div>
            </div>
        </div>
        <div id="business-index-bottom">
            <div id="business-index-bottom-cart">
                <router-link tag="div" to="../indexPage/order" id="business-index-bottom-cart-icon">
                    <svg id="cart" aria-hidden="true">
                        <use xlink:href="#icongouwuche" />
                    </svg>
                </router-link>
                <div id="business-index-bottom-cart-numb">{{ count }}</div>
            </div>
            <div id="business-index-bottom-count">
                <div>{{ count }}</div>
                <div></div>
                <div>{{ totalValue }}￥</div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../assets/icon/iconfont'
// import addIcon from '../common/addIcon'
import {getMenu} from '../../api/business'
export default {
    // components: {
    //     addIcon,
    // },
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
            count: 0,
            totalValue: 0,
        }
    },
    methods: {
        add (price) {
            this.totalValue += price
            this.count++
        },
        goCart () {
            this.$router.push({ path: 'cart', query: { count: this.count, totalPrice: this.price } })
        }
    },
    mounted() {
        getMenu().then(res => {
            // console.log(this.$route.query.businessId)
            this.list = res.foods.filter(element => {
                return element.businessId == this.$route.query.businessId
            })
            console.log(this.list)
            // for(let i = 0; i < this.list.length; i++) {
            //     // console.log(this.list)
            //     this.typeList[i] = this.list[i].typeid
            // }
            // this.typeList = new Set(this.typeList)
            // console.log(this.typeList)
        })
    },
}
</script>

<style scoped>
#business-index-goodslist-cell-img-addicon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
}
#cart {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: blue;
  z-index: 100;
}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: blue;
  overflow: hidden;
}
#business-index {
    position: relative;
    /* display: grid;
    width: 100%;
    grid-template: 1fr / 30% 70%; */
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
    padding: 5px;
}
#business-index-goodslist-cell>div {
    display: grid;
    grid-template-columns: 30% 70%;
    height: 100px;
    overflow: hidden;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
#business-index-goodslist-cell-img {
    width: 100%;
    height: 100%;
}
</style>


