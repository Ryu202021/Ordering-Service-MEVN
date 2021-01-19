<template>

<v-container>
    <AdminNav />
    <v-card-text>
     <v-simple-table>
    <template v-slot:default>
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
        </tr>
      </tbody>
    </template>
  </v-simple-table>
          
    </v-card-text>
    
</v-container>
</template>

<script>
// @ is an alias to /src
import AdminNav from "@/components/AdminNav.vue";

export default {
  name: "AdminHome",
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
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
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
  },

};
</script>
