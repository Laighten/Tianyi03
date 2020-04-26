import Vue from 'vue'
import Router from 'vue-router'
import pageOne from '@/page/pageOne'
import pageTwo from '@/page/pageTwo'
import pageThree from '@/page/pageThree'
import pageFour from '@/page/pageFour'

Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/',
      name: 'pageOne',
      component: pageOne
    },
    {
      path: '/pageOne',
      name: 'pageOne',
      component: pageOne
    },
    {
      path: '/pageTwo',
      name: 'pageTwo',
      component: pageTwo
    },
    {
      path: '/pageThree',
      name: 'pageThree',
      component: pageThree
    },
    {
      path: '/pageFour',
      name: 'pageFour',
      component: pageFour
    }
  ]
})