<template>

<v-container>
    <UserNav />
    <v-card-text class="grey">
      <h1>My Orders </h1>
    
    

      <br>
      <br>
      <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Order #
          </th>
          <th class="text-left">
            Date
          </th>
          <th class="text-left">
            Price
          </th>
          <th class="text-left">
            View
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
          v-for="order in orders"
          :key="order.name"
        >
          <td>{{ }}</td>
          <td>{{  }}</td>
        </tr>
      </tbody>
    </template>
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
      orders: []
    }
  },
  name: "Home",
  components: {
    UserNav
  },
  
};
</script>
