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
        
        <tr
          v-for="order in orders"
          :key="order._id"
        >
          <td>{{ order._id }}</td>
          <td>{{ order.dateOrdered }}</td>
          <td>{{ calculate(order.dishes) }}</td>
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
  created() {
    let uri = "http://localhost:4000/orders/orders";
    this.axios.get(uri).then((response) => {
      this.orders = response.data;
    });
  },
  components: {
    UserNav
  },
  methods: {
    calculate(dishes) {
      let total = 0;
      dishes.forEach(dish => total += (dish.price * dish.quantity));
      return total;
    }
  }
  
};
</script>
