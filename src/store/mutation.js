import { ADD_USER, ADD_BUSINESS, ADD_ISLOGIN } from './mutationType'

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
    // add businessId in state
    // [ADD_BUSINESSID] (state, id) {
    //     state.businessId = id
    // }
}