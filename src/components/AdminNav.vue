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

    <v-navigation-drawer
      v-model="drawer"
      absolute
    temporary
    bottom
      
      height="500px"

    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="white--text"
        >
          <v-list-item>
            <router-link to="/adminHome"><v-list-item-title><v-icon>mdi-home</v-icon>Home</v-list-item-title></router-link>
          </v-list-item>

          <router-link to="/"><v-list-item>
            <v-list-item-title><v-icon>mdi-cart></v-icon> Logout</v-list-item-title>
          </v-list-item></router-link>

        
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    </v-card>
</template>

<script>

/* eslint-disable */
import NavBar from "./navbars/AdminNavBar.vue"
export default {
 components: {NavBar},
    data: () => ({
      drawer: false,
      group: null,
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
