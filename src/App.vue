<template>
<v-app>
   <v-main>
 <router-view />
    </v-main>
 
  </v-app>
</template>

<script>
/*
import Login from "./components/Login.vue"
*/
export default {
  name: "App",

  components: {
    // Login
  },

  data: () => ({
    
  }),
};
</script>
<style>
body {
  background: black;
}
.location {
    background-image: url('./assets/food.jpg')
}
</style>
