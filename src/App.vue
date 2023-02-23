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
        <AppBarComponent @changeDrawer="changeDrawer" />
        <v-main>
          <router-view :key="$router.fullPath"></router-view>
        </v-main>
      </v-app>
    </div>
  </div>
</template>

<script>
import SnackBarComponent from "@/components/SnackBars/SnackBarComponent.vue";
import NavegationDrawerComponent from "./components/Template/Panel/NavegationDrawerComponent.vue";
import AppBarComponent from "./components/Template/Panel/AppBarComponent.vue";

export default {
  components: {
    SnackBarComponent,
    NavegationDrawerComponent,
    AppBarComponent,
  },
  data: () => ({
    drawer: true,
    accessRoute: false,
  }),
  created() {
    let fullPath = window.location.pathname;
    if (fullPath.includes("resetPassword") || fullPath === "/access") {
      this.accessRoute = true;
    }
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style lang="css">
.container {
  padding: 0 20% 0 10%;
}
</style>
