<template>

<v-container>
    <AdminNav />
    <v-card-text>
     <v-simple-table>
    
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Edit
          </th>
          <th class="text-left">
              Delete
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="restaurant in restaurants"
          :key="restaurant.name"
        >
          <td>{{ restaurant.name }}</td>
          <td></td>
        <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
           <router-link to="/adminNewRestaurant" tag="v-btn"> <v-btn
          color="error"
          text
          large
          >+ Add</v-btn></router-link></td>
        </tr>
      </tbody>
    
  </v-simple-table>
          
    </v-card-text>
    
</v-container>
</template>

<script>
// @ is an alias to /src
import AdminNav from "@/components/AdminNav.vue";

export default {

  data() {
    return {
        restaurants: []
  }},
  components: {
    AdminNav
  },
  created() {
    let uri = "http://localhost:6000/restaurants/restaurants";
    this.axios.get(uri).then((response) => {
      this.restaurants = response.data;
    });
  }
  
};
</script>
