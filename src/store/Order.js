import Vue from 'vue'
import Vuex from 'vuex'
import data from "@/json/data.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    orders: (state) => state.data,
  },

  mutations: {
    fetch(state, {res}){
      state.data = res.data
    },
    add (state, { payload }){
      state.data.push(payload)
    }
  },
  
  actions: {
    fetchData({ commit }){
      const res = data;
      commit("fetch", { res });
    },
    addOrder({ commit }, payload){
      commit('add', { payload })
    },
  },
  modules: {
  },
})