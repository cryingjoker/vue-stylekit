import Vue from 'vue';
import VueRouter from 'vue-router';

import VueRtStyle from '../lib/index';
import VueRtDevStyle from '../develover-lib/index'
import routes from './router';
import RootPage from './components/App.vue';
import styles from './css/index.less';

Vue.use(VueRouter);
Vue.use(VueRtStyle);
Vue.use(VueRtDevStyle);


const router = new VueRouter({
  mode: 'history',
  routes: routes.routes,
});


const App = new Vue({
  el: '#app',
  router,
  name: 'App',
  render: h => h(RootPage),
});
