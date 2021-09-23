import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const getters = {
  getUid: state => state.uid,
  getErrorState: state => state.errorState,
  getIsAuth: state => state.isAuth
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})