import { createStore } from 'vuex'

// https://vuex.vuejs.org/ja/guide/

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },


})

export default store
