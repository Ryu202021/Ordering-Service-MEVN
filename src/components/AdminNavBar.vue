<template>
    
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

</template>

<script>

/* eslint-disable */
export default {
  components: {},
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

</style>
