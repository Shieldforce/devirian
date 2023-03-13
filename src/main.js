import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/scss/app.scss";
import api from "@/modules/auth/http/apiTasks/index.js";

Vue.config.productionTip = false;

// Force HTTPS redirection
router.use(function(req, res, next) {
  if (
    req.secure ||
    req.headers["x-forwarded-proto"] === "https"
  ) {
    return next();
  } else {
    return res.redirect("https://" + req.headers.host + req.url);
  }
});

router.beforeEach((to, from, next) => {
  if (
    localStorage.getItem("token") &&
    localStorage.getItem("token") !== "undefined" &&
    to.meta.scope === "private"
  ) {
    api
      .get("/auth/verifyToken")
      .then(() => {
        next();
        return;
      })
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/access";
      });
  }

  if (window.location.href.includes("resetPassword")) {
    next();
    return;
  }

  if (to.path === "/") {
    window.location.href = "/dashboard";
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
