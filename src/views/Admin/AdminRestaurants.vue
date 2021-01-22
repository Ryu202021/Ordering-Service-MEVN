<template>
  <v-container>
    <AdminNav />
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="restaurants"
        :items-per-page="5"
        class="elevation-1"
      >
      </v-data-table>
    </v-card-text>
  </v-container>
</template>

<script>
// @ is an alias to /src
import AdminNav from "@/components/AdminNav.vue";

export default {
  data() {
    return {
      restaurants: [],
      headers: [
        {
          text: "Restaurant",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Id", value: "_id" },
        { text: "Phone Number", value: "phoneNumber" },
        { text: "Address", value: "address" },
        { text: 'Menu', value: 'menu' },
        { text: "Tags", value: "tags" },
      ],
    };
  },
  components: {
    AdminNav,
  },
  created() {
    let uri = "http://localhost:4000/restaurants/restaurants";
    this.axios.get(uri).then((response) => {
      this.restaurants = response.data;
      
    });
  },
};
</script>
