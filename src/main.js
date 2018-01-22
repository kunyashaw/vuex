// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import ToDoList from '@/components/ToDoList'
import ToDoItem from '@/components/ToDoItem'
import ToDoInput from '@/components/ToDoInput'
Vue.use(Vuex);
Vue.component('todolist',ToDoList);
Vue.component('todoitem',ToDoItem);
Vue.component('todoinput',ToDoInput);
const myStore = new Vuex.Store({
  state:{
    list:[]
  },
  getters:{
    list:(state)=>{
     return state.list
    }
  },
  mutations:{
    add:(state,value)=>{
      console.log(state.list,value);
      state.list.push(value)
    },
    delete:(state,index)=>{
      state.list.splice(index,1)
    }
  }
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:myStore,
  template: '<App/>',
  components: { App }
})
