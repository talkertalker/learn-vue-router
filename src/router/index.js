import Vue from 'vue'
import Router from 'vue-router'
import SpinningSquare from '@/components/SpinningSquare'
import DataBindingDemo from '@/components/DataBindingDemo'

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
    }
  ]
})
