import { ADD_USER, ADD_BUSINESS, ADD_ISLOGIN, SET_ADDRESS, SET_TOTALVALUE, SET_ORDERDETAIL } from './mutationType'

export default {
    // add userInfo in state
    [ADD_USER] (state, userInfo) {
        state.userInfo = userInfo
    },
    // add loginInfo in state
    [ADD_ISLOGIN] (state, isLogin) {
        state.isLogin = isLogin
    },
    // add businessInfo in state
    [ADD_BUSINESS] (state, businessInfo) {
        state.businessInfo = businessInfo
    },
    // set userAddress in state
    [SET_ADDRESS] (state, address) {
        state.userAddress = address
    },
    // set totalValue in state
    [SET_TOTALVALUE] (state, value) {
        state.totalValue = value
    },
    // set orderDetail in state
    [SET_ORDERDETAIL] (state, list) {
        state.orderDetail = list.filter(item => item.count !== 0)
    }
}