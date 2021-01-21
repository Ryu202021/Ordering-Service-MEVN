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

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0001</td>
          <td>Jan. 12, 2021</td>
          <td>$200.65</td>
        </tr>
        <tr
          v-for="item in menu"
          :key="item.id"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.description}}</td>
          <td>{{ item.price }}</td>
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
      menu: [],
      filter: ""
    }
  },
  name: "Home",
  components: {
    UserNav
  }
};
</script>
