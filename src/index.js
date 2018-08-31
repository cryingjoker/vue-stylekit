import Vue from "vue";
import VueRouter from "vue-router";
// import VueResource from "vue-resource";
import routes from "./utils/routes";
import RootPage from "./pages/App.vue";

var VueTouch = require('vue-touch')

import stylesReset from "./css/reset/index.styl";
import styles from "./css/styles.less";

Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes.routes
});

Vue.mixin({
  methods: {
    _veryUsefulMethod() {
      console.log("I am a global mixin. I should be used across the app.");
    }
  }
});
const App = new Vue({
  el: "#app",
  router,
  name: "App",
  render: h => h(RootPage),
});
