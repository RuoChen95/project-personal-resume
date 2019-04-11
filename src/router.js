import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Edition from "./views/Edition.vue";
import View from "./views/View.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/edition",
      name: "edition",
      component: Edition
    },
    {
      path: "/view",
      name: "view",
      component: View
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
  ]
});
