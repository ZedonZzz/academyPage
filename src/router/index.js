import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import home from '../views/menuPage/home.vue'
import results from '../views/menuPage/results.vue'
import about from '../views/menuPage/about.vue'
import resources from '../views/menuPage/resources.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: index,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: home,
        meta: { title: '首页' }
      },
      {
        path: 'results',
        name: 'results',
        component: results,
        meta: { title: '科研成果' }
      },
      {
        path: 'about',
        name: 'about',
        component: about,
        meta: { title: '联系我们' }
      },
      {
        path: 'resources',
        name: 'resources',
        component: resources,
        meta: { title: '资源' }
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
