<template>

<v-container>
    <UserNav />
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
              @click="locatorButtonPressed"><v-icon>mdi-crosshairs-gps</v-icon></v-btn>
            </div>
          </div>
      </form>
    </div>
    

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
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="350"
          @click="toggle"
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
  name: "Home",
  data: () => ({
    model: null,
    cuisines: [
      {
        name: "Fast Food",
        image: "../assets/fastFood.jpg",
      },
      {
        name: "Chinese",
        image: "../assets/chinese.jpg",
      },
      {
        name: "Indian",
        image: "../assets/indian.jpg"
      },
      {
        name: "Noodles",
        image: "../assets/noodles.jpg"
      }

    ]
  }),
  components: {
    UserNav
  },
      

};
</script>
