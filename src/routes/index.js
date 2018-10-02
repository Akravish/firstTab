import Vue from 'vue'
import Router from 'vue-router'

import HomeModule from '@/components/modules/home/index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeModule
    }
  ]
})
