<template>
  <div v-if="accessRoute">
    <v-app id="inspire">
      <router-view :key="$router.fullPath"></router-view>
    </v-app>
  </div>
  <div v-else>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Application </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

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
          <v-icon color="red" @click="logout">mdi-power</v-icon>
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
</template>

<script>
import apiTasks from "@/modules/auth/http/apiTasks/index";

export default {
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
  errorCaptured(err, vm, info) {
    console.log(err, vm, info);

    this.err = err;
    this.vm = vm;
    this.info = info;
    return !this.stopPropagation;
  },
  created() {
    let fullPath = window.location.pathname;
    if (fullPath.includes("resetPassword") || fullPath === "/access") {
      this.accessRoute = true;
    }
  },
  methods: {
    logout() {
      apiTasks.post("auth/logout", {}).then((res) => {
        localStorage.removeItem('token');
        console.log(res);
        window.location.href = "/access";
      }).catch((err) => {
        localStorage.removeItem('token');
        console.log(err);
        window.location.href = "/access";
      });
    },
  },
};
</script>