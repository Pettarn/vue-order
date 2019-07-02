import { ADD_USER, ADD_BUSINESS, ADD_BUSINESSID } from './mutationType'

export default {
    // add loginInfo and userInfo in state
    [ADD_USER] (state, userInfo) {
        state.userInfo = userInfo
        state.loginState = userInfo.success
    },
    // add businessInfo in state
    [ADD_BUSINESS] (state, businessInfo) {
        state.businessInfo = businessInfo
    },
    // add businessId in state
    [ADD_BUSINESSID] (state, id) {
        state.businessId = id
    }
}