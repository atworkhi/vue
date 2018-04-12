import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import world from '@/components/world'
import Params from '@/components/Params'
import alias from '@/components/alias'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: hello,
        right: world
      }
    },
    {
      path: '/params/:userId(\\d+)/:username/:usersex',
      name: 'params',
      component: Params
    },
    {
      path: '/back',
      name: 'back',
      redirect: '/'
    },
    {
      path: '/params/:userId(\\d+)/:username/:usersex',
      name: 'backparams',
      redirect: '/params/:userId(\\d+)/:username/:usersex'
    },
    {
      path: '/alias',
      name: 'alias',
      component: alias,
      alias: '/othername'
    },
    {
      path: '*',
      component: error
    }
  ]
})
