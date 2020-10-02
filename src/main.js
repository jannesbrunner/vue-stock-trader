import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/*
<router-link class="nav-item" to="/stocks" tag="li" activeClass="active"
          ><a class="nav-link">Stocks</a></router-link */