import Vue from "vue";
//import vuetify from '@/plugins/vuetify'
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { store } from "./store";
import router from "./router";

const mainComponent = new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
});
mainComponent.$mount("app");
