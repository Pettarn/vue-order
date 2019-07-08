<template>
    <div id="business-index">
        <div id="business-index-goodslist">
            <div  v-for="item in list" :key="item.id" >
                <div id="business-index-goodslist-cell">
                    <div id="business-index-goodslist-cell-left">
                        <div><img id="business-index-goodslist-cell-left-img" :src="item.imgsrc"></div>
                        <div style="padding-left: 5px;">
                            {{ item.name }}
                            <div>月售40份  好评率99%</div>
                            <div style="margin: 20px 0;">￥{{ item.price }}</div>
                        </div>
                    </div>
                    <div id="business-index-goodslist-cell-right">
                        <div>
                            <svg @click="decrease(item.id, item.price)" id="icon" aria-hidden="true">
                                <use xlink:href="#iconjianshao" />
                            </svg>
                        </div>
                        <div>
                            <span>{{ item.count || 0 }}</span>  
                        </div>
                        <div>
                            <svg @click="add(item.id, item.price)" class="icon" aria-hidden="true">
                                <use xlink:href="#icontianjia" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="business-index-bottom">
            <div id="business-index-bottom-cart">
                <div @click="jumpToCart()"  id="business-index-bottom-cart-icon">
                    <svg id="cart" aria-hidden="true">
                        <use xlink:href="#icongouwuche" />
                    </svg>
                </div>
                <div id="business-index-bottom-cart-numb">{{ totalCount }}</div>
            </div>
            <div id="business-index-bottom-count">
                <div></div>
                <div></div>
                <div>￥{{ totalValue | capitalize }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import '../../assets/icon/iconfont'
import {getMenu} from '../../api/business'
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
            ],
            businessId: this.$route.query.businessId || this.$store.state.businessInfo.businessId,
            // 如果store里面存的值为空那么初始化为0
            totalCount: this.$store.state.totalCount || 0,
            // 如果store里面存的值为空那么初始化为0
            totalValue: parseInt(this.$store.state.totalValue) || 0,
        }
    },
    methods: {
        add (id, price) {
            this.totalValue += price
            this.totalCount++
            this.list.forEach(item => {
                if(item.id === id) {
                    item.count++
                }
            })
        },
        decrease (id, price) {
            this.totalValue -= price
            this.totalCount--
            this.list.forEach(item => {
                if(item.id === id) {
                    item.count--
                }
            })
        },
        jumpToCart () {
            this.$store.commit('SET_ORDERDETAIL', this.list)
            this.$store.commit('SET_TOTALVALUE', this.totalValue.toFixed(2))
            this.$store.commit('SET_TOTALCOUNT', this.totalCount)
            this.$router.push('/cart')
        }
    },
    filters: {
        capitalize (value) {
            return value.toFixed(2)
        }
    },
    created () {
        getMenu().then(res => {
            if(this.list && this.$store.state.orderDetail.length) {
                this.list = this.$store.state.orderDetail || this.list
            } 
            else {
                this.list = res.foods.filter(element => {
                    return element.businessId == (this.$route.query.businessId || this.$store.state.businessInfo.id)
                })
                this.list.forEach(item => {
                    item.count = item.count || 0
                })
            }
        })
        
    },
}
</script>

<style scoped>
#icon {
  width: 25px;
  height: 25px;
  vertical-align: -0.15em;
  fill: blue;
  overflow: hidden;
}
.icon {
  width: 29px;
  height: 29px;
  vertical-align: -0.15em;
  fill: blue;
  overflow: hidden;
}
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
    margin-top: 10px;
    margin-bottom: 60px;
}
#business-index-columnbar-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    overflow: hidden;
}
#business-index-goodslist-cell {
    display: grid;
    grid-template-columns: 75% 25%;
    padding: 5px;
    background-color: #fff;
}
#business-index-goodslist-cell-left {
    display: grid;
    grid-template-columns: 35% 65%;
    height: 100px;
    overflow: hidden;
}
#business-index-goodslist-cell-right {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
#business-index-goodslist-cell-right>div {
    display: flex;
    justify-content: center;
    align-items: center;
}
#business-index-bottom {
    position: fixed;
    display: grid;
    grid-template: 1fr / 30% 70%;
    height: 60px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #141c27;
    color: #8f9297;
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
    grid-template: 1fr / 10% 50% 40%;
}
#business-index-bottom-count>div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    padding-right: 10px;
    color: #fff;
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
    color: #fff;
}
#business-index-goodslist-cell-left-img {
    width: 100%;
    height: 100%;
}
</style>


