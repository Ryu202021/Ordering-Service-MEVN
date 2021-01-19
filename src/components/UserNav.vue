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
           <router-link to="/userHome" tag="v-list-item"><v-list-item>
           <v-icon>mdi-home</v-icon><v-list-item-title>Home</v-list-item-title>
          </v-list-item></router-link>

          <router-link to="/userOrders" tag="v-list-item"><v-list-item>
            <v-icon>mdi-cart</v-icon><v-list-item-title>Orders</v-list-item-title>
          </v-list-item></router-link>

         <router-link to="/userDiscover" tag="v-list-item"> <v-list-item>
            <v-icon>mdi-compass</v-icon><v-list-item-title>Discover</v-list-item-title>
          </v-list-item></router-link>
        <router-link to="/" tag="v-list-item"><v-list-item>
            <v-icon>mdi-logout</v-icon><v-list-item-title>Logout</v-list-item-title>
          </v-list-item></router-link>
        
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    </v-card>
</template>

<script>

/* eslint-disable */
export default {
   components: {  },
    data: () => ({
       drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    }
};
</script>
<style>

</style>
