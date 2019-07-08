<template>
  <div id="business">
    <div id="business-head">
      <router-link to="/" id="business-head-back" tag="div">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconfanhui"></use>
        </svg>
      </router-link>
    </div>
    <div id="business-introduction">
      <!-- 商家介绍的背景图片 -->
      <div id="business-introduction-backgroundimage">
        <img id="business-introduction-backgroundimage-hidden" :src="this.imgsrc">
      </div>
      <div id="business-introduction-detail">
        <div id="business-introduction-detail-headpicture">
          
          <img style="position: absolute; width: 100%; height: 100%;" :src="this.imgsrc">
        </div>
        <div id="business-introduction-detail-discount">
          <p>{{ this.$store.state.businessInfo.name }}</p>
          <p>{{ this.$store.state.businessInfo.adress }}</p>
        </div>
      </div>
    </div>
    <div id="business-headbar">
      <router-link tag="div" to="businessIndex">商品</router-link>
      <router-link tag="div" to="businessSecond">评价</router-link>
      <router-link tag="div" to="businessThird">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {getBusiness} from '../../api/business'
export default {
  name: "businessPage",
  data(){
    return {
      businessId: this.$route.query.businessId || this.$store.state.businessInfo.id,
      imgsrc: this.$store.state.businessInfo.imgsrc,
      businessInfo: null,
    }
  },
  created() {
    getBusiness().then(res => {
      res.business.forEach(item => {
        if(+item.id === +this.$route.query.businessId) {
          this.businessInfo = item
          this.imgsrc = this.businessInfo.imgsrc
        }
      })
      this.$store.commit('ADD_BUSINESS', this.businessInfo)
    })
    // // 获取到用户的历史订单
    // let params = {} 
    // console.log(this.$store.state.userInfo)
    // // params.customerId = this.$store.state.userInfo.id
    // params.customerId = 1
    // getOrderList(params).then(res => {
    //     console.log(res.success[1])
    //     this.orderList = this.$store.state.orderList || res.success[1]
    // })
    
    // console.log(this.imgsrc)
  }
};
</script>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: #ffffff;
  overflow: hidden;
}
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
  background-color: #0083fe7c; 
}
#business-head-back {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
}
#business-introduction {
  position: relative;
  width: 100%;
  height: 180px;
}
#business-introduction-backgroundimage {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
}
#business-introduction-detail {
  position: absolute;
  top: 60px;
  height: 120px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
  /* opacity: 0.5; */
}
#business-introduction-detail-headpicture {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  height: 70px;
  width: 70px;
  /* background-color: red; */
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
  color: #ffffff;
}
#business-headbar {
  position: relative;
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  height: 60px;
  width: 100%;
  background-color: #ffffff;
}
#business-headbar > div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}
/* .router-link-exact-active {
  color: red;
  background: linear-gradient(45deg, #ffffff, #ebdede);
} */
.router-link-exact-active::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 5px;
  background-color: #2295ff;
}
#business-introduction-backgroundimage-hidden {
  width: 100%;
  height: 100%;
  /* opacity: 0.3; */
}
</style>


