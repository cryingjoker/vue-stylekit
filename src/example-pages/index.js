import Vue from "vue";
import VueRouter from "vue-router";
import VueRtStyle from "../lib/index";
import VueRtDevStyle from "../develover-lib/index";
import routes from "./router";
import RootPage from "./components/App.vue";
import VeeValidate from 'vee-validate';
import styles from "./css/index.styl";
// import Rx from 'rxjs';
// import VueRx from 'vue-rx';

// Vue.use(VueRx, Rx);
Vue.use(VueRouter);

Vue.use(VueRtDevStyle);
Vue.use(VueRtStyle);
Vue.use(VeeValidate);
const router = new VueRouter({
  mode: "history",
  routes: routes.routes
});

const App = new Vue({
  el: "#app",
  router,
  name: "App",

  render: h => h(RootPage)
});
