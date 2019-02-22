import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import VueRouter from 'vue-router'
import PostDetail from './PostDetail.vue'
import Blog from './Blog.vue'
require('./assets/clean-blog.css')

Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueRouter);


const routes = [
  { path: '/', component: Blog },
  { path: '/post/:id', component: PostDetail }
];

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})