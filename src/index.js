import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import routes from "./utils/routes";
import RootPage from "./pages/App.vue";


import stylesReset from "./css/reset/index.styl";
import styles from "./css/styles.less";

Vue.use(VueRouter);
// Vue.use(VueResource);
// Vue.use(Button);
// Vue.use(Ripple);
// Vue.use(ButtonWithoutRipple)
// Vue.use(RippleWihoutJs)

// Vue.http.interceptors.push((request, next) => {
//   if (request.params === undefined) {
//     request.params = {};
//   }
//   request.params.someToken = "some-token-you-might-want";
//   next();
// });

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
// console.info('Button,Ripple',Button,Ripple)
const App = new Vue({
  el: "#app",
  router,
  name: "App",
  render: h => h(RootPage),
  methods: {
    _someMethodYouWant() {
      console.log("Any method that you want to have!");
    }
  },
  created() {
    console.log("App created....");
  }
});
