import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import i18n from "./i18n";
import VueScrollTo from "vue-scrollto";

Vue.config.productionTip = false;

Vue.use(VueScrollTo);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
