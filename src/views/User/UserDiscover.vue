<template>

<v-container>
    <UserNav />
    <v-card-text class="grey">
      <h1>Restaurants </h1>
    
    

      <br>
      <br>
      <v-simple-table>
   
      <thead>
        <tr>
          <th class="text-left">
            Restaurant
          </th>
          <th class="text-left">
            Price
          </th>
          <th class="text-left">
            Rating
          </th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0001</td>
          <td>Jan. 12, 2021</td>
          <td>$200.65</td>
        </tr>
        <tr
          v-for="restaurant in restaurants"
          :key="restaurant.name"
        >
          <td>{{ restaurant.name }}</td>
          <td><router-link 
          :to="{ name: 'UserRestaurant', params: { id: restaurant._id } }" 
          tag="v-btn"><v-btn>Go</v-btn></router-link></td>
        </tr>
      </tbody>

  </v-simple-table>
      <br>

      
    </v-card-text>
    
 
</v-container>
</template>

<script>
// @ is an alias to /src
import UserNav from "@/components/UserNav.vue";

export default {
  data() {
    return {
      restaurants: [],
      filter: ""
    }
  },
  created() {
    let uri = "http://localhost:4000/restaurants/restaurants";
    this.axios.get(uri).then((response) => {
      this.restaurants = response.data;
    });
  },
  components: {
    UserNav
  }
};
</script>
