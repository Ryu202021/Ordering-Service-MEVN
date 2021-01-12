<template>

<v-container>
    <UserNav />
    <v-card-text class="">
    
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
              ><v-icon>mdi-compass</v-icon></v-btn>
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
 
</v-container>
</template>

<script>
// @ is an alias to /src
import UserNav from "@/components/UserNav.vue";

export default {
  name: "Home",
  components: {
    UserNav
  }
};
</script>
