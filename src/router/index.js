import Vue from "vue";
import VueRouter from "vue-router";
import UserHome from "../views/UserHome.vue";
import Login from "../components/Login.vue";
import UserOrders from "../views/UserOrders.vue";
import UserDiscover from "../views/UserDiscover.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/userHome",
    name: "UserHome",
    component: UserHome
  },
  {
    path: "/userOrders",
    name: "UserOrders",
    component: UserOrders
  },
  {
    path: "/userDiscover",
    name:"UserDiscover",
    component: UserDiscover
  },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
