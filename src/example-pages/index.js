import Vue from "vue";
import VueRouter from "vue-router";
import VueRtStyle from "../lib/index";
// import VueRtStyle from "../../lib/vue-rt-style";
import VueRtDevStyle from "../develover-lib/index";
import routes from "./router";
import RootPage from "./components/App.vue";
import styles from "./css/index.styl";
import Global from "../lib/variables.json";
// import Rx from 'rxjs';
// import VueRx from 'vue-rx';

// Vue.use(VueRx, Rx);
Vue.use(VueRouter);
// Use validator only demo-stand for provide validation
window[Global.globalSettingsKey] = {
  useValidator: true
};
Vue.use(VueRtDevStyle);
Vue.use(VueRtStyle);
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
