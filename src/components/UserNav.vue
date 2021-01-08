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
            <v-list-item-title class="active">Home</v-list-item-title>
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

    <v-card-text>
      <section class="ui two column centered grid">
    <div class="column">
      <form class="ui segment large form">
          <div class="field">
            <div class="ui right icon input large">
              <input
                type="text"
                placeholder="Enter your address"
                v-model="address"
                ref="autocomplete"
                color="white"
              />
              <i class="dot circle link icon" @click="locatorButtonPressed"></i>
            </div>
        </div>
      </form>
    </div>
  </section>
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
</style>
