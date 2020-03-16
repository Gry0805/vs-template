/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import detail from './components/index.vue';

Vue.use(Router);


const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Detail',
      component: detail
  }]
});

export default router;