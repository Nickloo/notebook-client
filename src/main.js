import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/request'
import './element'
// import VueQuillEditor from 'vue-quill-editor'
// // require styles 引入样式
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

import './permission'
// Vue.use(VueQuillEditor)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
