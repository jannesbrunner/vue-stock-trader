import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import { routes } from './routes';
import store from './store/store';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'localhost';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

/*
<router-link class="nav-item" to="/stocks" tag="li" activeClass="active"
          ><a class="nav-link">Stocks</a></router-link */