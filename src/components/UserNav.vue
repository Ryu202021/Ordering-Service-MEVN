<template>
    <v-card class="mx-auto">    
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
    <v-app-bar
      color="red"
      dark
      bottom
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <NavBar />

    </v-card>
</template>

<script>
import NavBar from './NavBar.vue';
/* eslint-disable */
export default {
  components: { NavBar },
    data: () => ({
      
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
<style>
body {
  background: black;
}
.location {
    background-image: url('../assets/food.jpg')
}
</style>
