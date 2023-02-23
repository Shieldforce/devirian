<template>
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

    <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>

    <v-app-bar-title>Devirian - (DASHBOARD)</v-app-bar-title>

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
</template>

<script>
import apiTasks from "@/modules/auth/http/apiTasks/index";
export default {
  data: () => ({
    right: null,
  }),
  methods: {
    changeDrawer() {
      this.$emit("changeDrawer");
    },
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
