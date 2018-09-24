import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueResource from "vue-resource";
import routes from './utils/routes';
import RootPage from './pages/App.vue';
import RtVue from './app/rtIndex';
// var VueTouch = require('vue-touch');

Vue.use(VueRouter);
Vue.use(RtVue);

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
