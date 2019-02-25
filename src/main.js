import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import VueRouter from 'vue-router'
import PostDetail from './PostDetail.vue'
import Blog from './Blog.vue'
require('./assets/clean-blog.css')
import { VueSpinners } from '@saeris/vue-spinners'
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })


import { routerHistory, writeHistory } from 'vue-router-back-button'

Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueRouter);
Vue.use(routerHistory);
Vue.use(VueSpinners)


const routes = [
  { path: '/', component: Blog },
  { path: '/post/:id', component: PostDetail }
];

const router = new VueRouter({
  mode:'history',
  routes
})

router.afterEach(writeHistory)
new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})