<template>

<v-container>
    <AdminNav />
    <v-card-text>
        
     <v-form
    ref="form"
    v-model="restaurant"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      
      label="Name"
      required
    ></v-text-field>

    
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
    </v-card-text>
    
</v-container>
</template>

<script>
// @ is an alias to /src
import AdminNav from "@/components/AdminNav.vue";

export default {
  name: "AdminHome",
  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  components: {
    AdminNav
  },
}
</script>
