import Vue from 'vue'
import Vuex from 'vuex'

import action from './action'
import state from './state'
import mutation from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
    action,
    state,
    mutation,
})