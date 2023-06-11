import { createStore } from 'vuex'

// https://github.com/vuejs/vuex/tree/main/examples/composition/counter
// https://vuex.vuejs.org/ja/guide/composition-api.html#

const state = {
  loginUser: null,
}

const mutations = {
  login( state, payload ){
    state.loginUser = payload
  },
  logout (state) {
    state.loginUser = null
  },

}

const actions = {
  loginAction ( {commit}, payload ){
    console.log('auth loginAction called')
    commit('login', payload)
  },
  logoutAction ( {commit} ) {
    console.log('auth loggoutAction called')
    commit('logout')
  },
    
}

const getters = {
  getLoginUser (state) {
    console.log('auth getLoginUser called')
    return state.loginUser 
  },
  isLogin (state) { 
    console.log('auth isLogin called')
    return (state.loginUser !== null) ? true : false 
  },

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
