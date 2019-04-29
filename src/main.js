// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'
import { format } from 'url';

// 应用fastclick

if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded',function(){
    FastClick.attach(document.body)
  },false)
}

Vue.use(VueRouter)
const router=new VueRouter({
  routes,
  mode:routerMode,
  scrollBehavior (to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      if(from.meta.keepAlive){
        from.meta.savedPosition=document.body.scrollTop
      }
      return {x:0,y:to.meta.savedPosition || 0}
    }
  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
})
