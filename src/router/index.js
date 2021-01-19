import Vue from "vue";
import VueRouter from "vue-router";
import UserHome from "../views/UserHome.vue";
import Login from "../components/Login.vue";
import UserOrders from "../views/UserOrders.vue";
import UserDiscover from "../views/UserDiscover.vue";
import AdminHome from "../views/AdminHome.vue";
import AdminUsers from "../views/AdminUsers.vue";

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
    path:"/adminUsers",
    name:"AdminUsers",
    component: AdminUsers
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/adminHome",
    name: "AdminHome",
    component: AdminHome
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
