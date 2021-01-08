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
        bottom
      temporary
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
            <router-link to="/userHome"><v-list-item-title class="active"><v-icon>mdi-home</v-icon>Home</v-list-item-title></router-link>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>My Orders</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Discover</v-list-item-title>
          </v-list-item>

        
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card-text class="location">
    
    <div class=" center">
      <form >
          <div class="row">
            <div class="d-inline pa-2 white rounded accent-4 column">
              <input
                type="text"
                placeholder="Enter your address"
               
                ref="autocomplete"
                color="white"
              />
            </div>
            <div class="column">
              <v-btn 
              icon
              tile
              outlined
              x-large 
              @click="locatorButtonPressed"><v-icon>mdi-compass</v-icon></v-btn>
            </div>
          </div>
      </form>
    </div>
    

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      
    </v-card-text>
    <v-card-text>
      <h1>Cuisines</h1>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      
    </v-card-text>
  </v-card>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
/* eslint-disable */
export default {
  components: { HelloWorld },
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
        locatorButtonPressed() {
        navigator.geolocation.getCurrentPosition(position => {
       console.log(position.coords.latitude);
       console.log(position.coords.longitude);
     },
     error => {
       console.log(error.message);
     },
  )   
}
    }
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
