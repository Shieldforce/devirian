<template>
  <div>
    <SnackBarComponent />
    <div v-if="accessRoute">
      <v-app id="inspire">
        <router-view :key="$router.fullPath"></router-view>
      </v-app>
    </div>
    <div v-else>
      <v-app id="inspire">
        <NavegationDrawerComponent :actionDrawer="drawer" />

        <v-app-bar
          app
          color="#fcb69f"
          dark
          shrink-on-scroll
          src="/img/slider.jpg"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-app-bar-title>Title</v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon
              color="red"
              @click="logout"
              >mdi-power</v-icon
            >
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>

        <v-main>
          <router-view :key="$router.fullPath"></router-view>
        </v-main>
      </v-app>
    </div>
  </div>
</template>

<script>
import apiTasks from "@/modules/auth/http/apiTasks/index";
import SnackBarComponent from "@/components/SnackBars/SnackBarComponent.vue";
import NavegationDrawerComponent from "./components/Template/Panel/NavegationDrawerComponent.vue";

export default {
  components: {
    SnackBarComponent,
    NavegationDrawerComponent,
  },
  data: () => ({
    drawer: null,
    accessRoute: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
  }),
  created() {
    let fullPath = window.location.pathname;
    if (fullPath.includes("resetPassword") || fullPath === "/access") {
      this.accessRoute = true;
    }
  },
  methods: {
    logout() {
      apiTasks
        .post("auth/logout", {})
        .then((res) => {
          localStorage.removeItem("token");
          console.log(res);
          window.location.href = "/access";
        })
        .catch((err) => {
          localStorage.removeItem("token");
          console.log(err);
          window.location.href = "/access";
        });
    },
  },
};
</script>

<style lang="css">
.container {
  padding: 0 20% 0 10%;
}
</style>
