import Vue from 'vue'
import Vuex from 'vuex'
import request from './utils/request'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleList:[]
  },
  mutations: {
    SET_ARTICLE_LIST(state,data){
      state.articleList = data
    }
  },
  actions: {
    async getArticleList({commit}){
     let res = await request.get('/articles')
     commit('SET_ARTICLE_LIST',res.data)
    },
    async login(ctx,param){
      let res = await request.post('/login',param)
      return res.data
    }
  }
})
