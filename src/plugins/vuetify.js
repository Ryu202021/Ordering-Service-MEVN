import Vue from "vue";
import VuetifyFramework from "vuetify/lib/framework";
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);
Vue.use(VuetifyFramework);

export default new Vuetify({
    theme: {
        themes: {
            dark: true
        }
    }
});
