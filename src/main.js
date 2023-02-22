import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/scss/app.scss";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (window.location.href.includes("resetPassword")) {
    next();
    return;
  }

  if (
    localStorage.getItem("token") &&
    localStorage.getItem("token") !== "undefined" &&
    to.meta.scope === "public"
  ) {
    window.location.href = "/dashboard";
    console.log(from, next);
  }

  if (
    (to.meta.scope === "private" && !localStorage.getItem("token")) ||
    localStorage.getItem("token") === "undefined"
  ) {
    localStorage.removeItem("token");
    window.location.href = "/access";
    console.log(from, next);
  }

  next();
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
