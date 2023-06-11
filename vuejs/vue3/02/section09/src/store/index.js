import { createStore } from 'vuex'
import auth from './auth'
// Vuexについて
// https://vuex.vuejs.org/ja/guide/
// https://www.udemy.com/course/vuejs-basic/learn/lecture/23472056#overview

const store = createStore({
  state () {
    return {
      count: 0,
      users:[
        {id:1, name:'大谷', isVisible: true },
        {id:2, name:'ダルビッシュ', isVisible: false },
        {id:3, name:'錦織', isVisible: true },
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addCount( state, payload ){
      state.count += payload
    }
  },
  actions: {
    incrementAction ({commit}) {
      commit('increment')
    },
    addCountAction ( {commit}, payload ){
      commit('addCount', payload)
    }
  },

  getters: {
    allUsers( state ){
      return state.users.filter( user => user.isVisible)
    },
    visibleUsers: state => state.users.filter( user => user.isVisible),
    unVisibleUsers: state => state.users.filter( user => !user.isVisible),
    
    getUserById: state => id => {
      return state.users.find( user => user.id === id )
    }
  },

  modules: {
    auth
  }
})

export default store
