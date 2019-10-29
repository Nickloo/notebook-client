import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/client'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/admin/login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/admin/admin.vue'),
      children:[
        {
          path: 'article',
          name: 'article',
          component: () => import('./views/admin/article.vue')
        },
        {
          path: 'password',
          name: 'password',
          component: () => import('./views/admin/password.vue')
        }
      ]
    },
    {
      path: '/client',
      name: 'client',
      redirect: '/client/catalog',
      component: () => import('./views/client/client.vue'),
      children: [
        {
          path: 'catalog',
          name: 'catalog',
          component: () => import('./views/client/catalog.vue')
        },
        {
          path: 'article/:index',
          name: 'article',
          component: () => import('./views/client/article.vue')
        }
      ]
    }
  ]
})
