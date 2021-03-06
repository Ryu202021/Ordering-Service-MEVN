import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import router from "./router";
import vuetify from "./plugins/vuetify";
import { ValidationProvider } from 'vee-validate';

Vue.use(VueRouter);
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false;

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
