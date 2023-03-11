<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Devirian </v-list-item-title>
        <v-list-item-subtitle> O mundo dos Dev's </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    actionDrawer: {
      required: true,
      default: true,
    },
  },
  data: () => ({
    drawer: true,
    items: [
      {
        title: "Dashboard/Metas",
        icon: "mdi-view-dashboard",
        to: "/dashboard",
      },
      { title: "Lista de Tarefas", icon: "mdi-list-status", to: "/tasks" },
      { title: "Sobre", icon: "mdi-information-outline", to: "/about" },
    ],
    right: null,
  }),
  watch: {
    actionDrawer(newValue) {
      this.drawer = newValue;
    },
  },
};
</script>
