import Vue from 'vue'
import Router from 'vue-router'
import MessageList from '@/components/MessageList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MessageList
    }
  ]
})
