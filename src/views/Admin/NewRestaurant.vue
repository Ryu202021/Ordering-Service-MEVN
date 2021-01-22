<template>

<v-container>
    <AdminNav />
    <v-card-text>
    <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="addRestaurant">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:20"
      >
        <v-text-field
          v-model="restaurant.name"
          :counter="20"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>
      

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
          
    </v-card-text>
    
</v-container>
</template>

<script>
// @ is an alias to /src
import AdminNav from "@/components/AdminNav.vue";
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

export default {

  data: () => ({
    name: '',
    restaurant: {}
  }),

  components: {
    AdminNav,
    ValidationProvider,
      ValidationObserver
  },
  computed: {
    nameIsValid() {
      return !!this.restaurant.name;
    },
  },
  methods: {
    cancel() {
      this.$router.push({ name: "AdminRestaurants" });
    },

    addRestaurant() {
      this.$refs.observer.validate();
     
        let uri = "http://localhost:4000/restaurants/add";
        this.axios.post(uri, this.restaurant);
        this.$router.push({name:"AdminRestaurants"});
      
    },
    
    clear () {
        this.name = '',
        this.$refs.observer.reset()
  },
  }
};
</script>
