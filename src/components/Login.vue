<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>LOGO</h1>
        <img alt='LOGO' width="200px" height="200px">
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <router-link to="/userHome" tag="v-btn">
        <v-btn
        color="error"
        elevation="4"
        large
        text
        dark
        outlined
        >User</v-btn></router-link>
      </v-col>
      <v-col>
        <v-btn
        color="error"
        elevation="4"
        large
        text
>Delivery</v-btn>
      </v-col>
      <v-col>
        <v-btn
        color="error"
        elevation="4"
        large
        text
>Admin</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',

};
</script>
<style>
body {
  background: black;
}
</style>
