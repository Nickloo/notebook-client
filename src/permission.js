import router from './router'
import store from './store'
router.beforeEach(async (to,from,next)=>{
  if(to.path=='login'){
    next()
  }
  if(to.path.indexOf('admin')>-1){
    let username = localStorage.username
    let password = localStorage.password
    let res = await store.dispatch('login',{username,password})
    if(res==1){
      next()
    }else{
      next({path:'/login'})
    }
  }
  
  if(to.name === 'article'){
    await store.dispatch('getArticleList')
    next()
  }else{
    next()
  }
})