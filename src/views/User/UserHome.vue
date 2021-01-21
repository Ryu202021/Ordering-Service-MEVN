<template>

<v-container>
    <UserNav />
    <v-card-text class="location text-center">
    
    <div class="">
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
              @click="locatorButtonPressed"><v-icon>mdi-crosshairs-gps</v-icon></v-btn>
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
      <br>
      <br>



      
      
    </v-card-text>
    <v-card-text>
      <h1>Cuisines</h1>

      <br>
      <br>
      <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="1000"
  >
    <v-slide-group
      
      class="pa-4"
      multiple
      show-arrows
    >
      <v-slide-item
        v-for="item in cuisines"
        :key="item.id"
        v-slot="{active, toggle}"
      >
        <v-card
          class="ma-4"
          height="200"
          width="350"
          @click="toggle"
        >
        <router-link
                    :to="{ name: 'UserDiscover', params: { filter: item.name }}"
                    class="btn btn-primary"
                    tag="v-img">
        <v-img
        :src="item.src"
        class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              >
            <v-card-title :class="active ? 'green--text' : 'white--text'" v-text="item.name"></v-card-title>  
            </v-img></router-link
                  >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
     

    
  </v-sheet>

      
    </v-card-text>
</v-container>
</template>

<script>
// @ is an alias to /src
import UserNav from "@/components/UserNav.vue";

export default {
  data: () => ({
    
    cuisines: [
      {
        name: "Fast Food",
        src: require("../../assets/fastFood.jpg"),
      },
      {
        name: "Chinese",
        src: require('../../assets/chinese.jpg'),
      },
      {
        name: "Indian",
        src: require("../../assets/indian.jpg")
      },
      {
        name: "Noodles",
        src: require("../../assets/noodles.jpg")
      }

    ],
    
  }),
  components: {
    UserNav
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
