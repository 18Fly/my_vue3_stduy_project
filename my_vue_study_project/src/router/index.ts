// 创建一个路由器并暴露出去
import { createRouter, createWebHashHistory } from 'vue-router'
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Bus from '@/pages/03_mitt/Father.vue'
import Model from '@/pages/04_v-model/Father.vue'
import AttrsListeners from '@/pages/05_$attrs/Father.vue'
import RefChildrenParent from '@/pages/06_$refs-$parent/Father.vue'
import ProvideInject from '@/pages/07_provide-inject/Father.vue'
import Pinia from '@/pages/08_pinia/Father.vue'
import Slot from '@/pages/09_slot/Father.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ // 对于path想一想请求URL时的字符串长什么样
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      name: 'HOME', // 命名路由
      path: '/home',
      component: () => import('@/pages/Home.vue')
    },
    {
      name: 'NEWS',
      path: '/news',
      component: () => import('@/pages/News.vue'),
      children: [
        {
          name: 'DETAIL', // 对于嵌套路由的path不能加'/'不然就没嵌套的意义了
          path: 'detail', // /:id?/:title?/:content?', // 加'?'表示参数可选
          component: () => import('@/components/Detail.vue'),
          // props: true // 1、将路由收到的所有params参数作为props传给路由组件
          props(route) { // 2、props的形参是路由对象，里面有当前路由的所有信息
            return route.query // 3、props也可以分配一个自定义对象，但是一般不太用
          }
        }
      ]
    },
    // {
    //   path: '/news',
    //   // component: () => import('@/pages/News.vue'),
    //   children: [
    //     { // 如果有嵌套路由，建议把外层路由和嵌套路由写在一起，path设为空字符串即可
    //       path: '',
    //       name: 'NEWS',
    //       component: () => import('@/pages/News.vue')
    //     },
    //     {
    //       name: 'DETAIL',
    //       path: 'detail',
    //       component: () => import('@/components/Detail.vue')
    //     }
    //   ]
    // },
    {
      name: 'ABOUT',
      path: '/about',
      component: () => import('@/pages/About.vue')
    },
    {
      name: 'DOG',
      path: '/dog',
      component: () => import('@/components/Dog.vue')
    }, {
      path: '/props',
      component: Props
    },
    {
      path: '/event',
      component: Event
    },
    {
      path: '/mitt',
      component: Bus
    },
    {
      path: '/model',
      component: Model
    },
    {
      path: '/attrs',
      component: AttrsListeners
    },
    {
      path: '/ref-parent',
      component: RefChildrenParent
    },
    {
      path: '/provide-inject',
      component: ProvideInject
    },
    {
      path: '/pinia',
      component: Pinia
    },
    {
      path: '/slot',
      component: Slot
    },
  ]
})

export default router