import Vue from 'vue'
import Router from 'vue-router'
import SpinningSquare from '@/components/SpinningSquare'
import DataBindingDemo from '@/components/DataBindingDemo'
import VueCli from '@/components/VueCli'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SpinningSquare',
      component: SpinningSquare
    },
    {
      path: '/DataBindingDemo',
      name: 'DataBindingDemo',
      component: DataBindingDemo
    },
    {
      path: '/VueCli',
      name: 'VueCli',
      component: VueCli
    }
  ]
})
