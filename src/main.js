import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
router.afterEach((to, from) => {
  store.commit('SETPAGEINDEX', to.name)
  document.title = to.meta.title
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
