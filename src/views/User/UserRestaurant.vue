<template>

<v-container>
    <UserNav />
    <v-card-text class="grey">
      <h1>Menu </h1>
      <br>
      <br>
      <v-simple-table>
   
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Price
          </th>
          <th>Quantity</th>
          <th></th>

        </tr>
      </thead>
      <tbody>
        
        <tr
          v-for="item in menu"
          :key="item._id"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
          <td>{{ order }}</td>
          <td> <v-btn @click="addItem(item._id)">+ Add</v-btn></td>
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
      restaurant: {},
      menu: [],
      order: {
        dishes: []
      },
    }
  },
  components: {
    UserNav
  },
  created() {
      // get restaurant from database by ID
      
        let uri = `http://localhost:4000/restaurants/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
          this.restaurant = response.data;
          this.menu = this.restaurant.menu;
         
        });   
    
    },
    methods: {
      addOrder() {
     
        let uri = "http://localhost:4000/orders/add";
        this.axios.post(uri, this.restaurant);
        this.$router.push({name:"UserOrders"});
      }
    },
    addItem(id) {
      order.dishes.push(id);
    }
    }
;
</script>
