<template>

<v-container>
    <UserNav />
    
</v-container>
</template>

<script>
// @ is an alias to /src
import UserNav from "@/components/UserNav.vue";

export default {
  name: "Home",
  components: {
    UserNav
  }
};
</script>
