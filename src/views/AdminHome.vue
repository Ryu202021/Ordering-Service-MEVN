<template>

<v-container>
    <AdminNav />
    <v-card-text>
     <v-row class="text-center">
      <v-col>
        <router-link to="/adminUsers" tag="v-btn">
        <v-btn
        color="error"
        elevation="4"
        large
        text
        dark
        outlined
        >Users</v-btn></router-link>
      </v-col>
      <v-col>
        <v-btn
        color="error"
        elevation="4"
        large
        text
>Employees</v-btn>
      </v-col>
      <v-col>
        <router-link to="/adminRestaurants" tag="v-btn"><v-btn
        color="error"
        elevation="4"
        large
        text
>Restaurants</v-btn></router-link>
      </v-col>
    </v-row>
          
    </v-card-text>
    
</v-container>
</template>

<script>
// @ is an alias to /src
import AdminNav from "@/components/AdminNav.vue";

export default {
  name: "AdminHome",
  data() {
      
  },
  components: {
    AdminNav
  },
     

};
</script>
