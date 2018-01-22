import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDoBox from '@/components/ToDoBox'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ToDoBox
    }
  ]
})
