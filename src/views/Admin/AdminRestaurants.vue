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
          <td><v-btn>+ Add</v-btn></td>
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
        restaurants: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          
          
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
  },
  components: {
    AdminNav
  }

};
</script>
