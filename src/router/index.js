import Vue from "vue";
import VueRouter from "vue-router";
import UserHome from "../views/User/UserHome.vue";
import Login from "../components/Login.vue";
import UserOrders from "../views/User/UserOrders.vue";
import UserDiscover from "../views/User/UserDiscover.vue";
import UserRestaurant from "../views/User/UserRestaurant.vue";
import AdminHome from "../views/Admin/AdminHome.vue";
import AdminUsers from "../views/Admin/AdminUsers.vue";
import AdminRestaurants from "../views/Admin/AdminRestaurants";
import AdminEditUsers from "../views/Admin/AdminEditUsers.vue";
import AdminEditRestaurants from "../views/Admin/AdminEditRestaurants";


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
    path: "/userRestaurant/:id",
    name: "UserRestaurant",
    compoent: UserRestaurant
  },
  {
    path:"/adminUsers",
    name:"AdminUsers",
    component: AdminUsers
  },
  {
    path:"/adminRestaurants",
    name:"AdminRestaurants",
    component: AdminRestaurants
  },
  {
    path:"/editRestaurants:id",
    name:"EditRestaurants",
    component: AdminEditRestaurants
  },
  {
    path:"/editUser:id",
    name:"EditUser",
    component: AdminEditUsers
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
