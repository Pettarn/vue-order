import { ADD_USER, ADD_BUSINESS, ADD_ISLOGIN, SET_ADDRESS, SET_TOTALVALUE, SET_TOTALCOUNT, SET_ORDERDETAIL, SET_ORDERLIST, CLEAR_STATE,CLEAR_ORDERDETAIL } from './mutationType'

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
    // set totalCount in state
    [SET_TOTALCOUNT] (state, count) {
        state.totalCount = count
    },
    // set orderDetail in state
    [SET_ORDERDETAIL] (state, list) {
        // state.orderDetail = list.filter(item => item.count !== 0)
        state.orderDetail = list
    },
    // set orderList in state
    [SET_ORDERLIST] (state, item) {
        state.orderList.unshift(item)
    },
    // clear all the attributes in state
    [CLEAR_STATE] (state) {
        state.isLogin = 0
        state.userInfo = null
        state.totalValue = null
        state.totalCount = null
        state.businessInfo = []
        state.userAddress = ''
        state.orderDetail = []
        state.orderList = []
    },
    // clear orderDetail
    [CLEAR_ORDERDETAIL] (state) {
        state.orderDetail = []
        state.totalCount = null
        state.totalValue = null
    }
}