<template>
  <v-card :color="color">
    <v-card-title style="color: white">
      {{ tableTitle }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="titleSearch"
        single-line
        hide-details
        color="white"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :style="`background-color: ${color}`"
      dark
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "DataTableComponent",
  props: {
    changeTableTitle: {
      type: String,
      required: false,
    },
    changeHeaders: {
      type: Array,
      required: true,
    },
    changeDesserts: {
      type: Array,
      required: true,
    },
    changeColor: {
      type: String,
      required: false,
    },
    changeSearch: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      titleSearch: "Buscar...",
      color: "rgba(0, 0, 0, 0.3)",
      search: "",
      tableTitle: "Title Table",
      headers: [],
      desserts: [],
    };
  },
  created() {},
  watch: {
    changeTableTitle(newValue) {
      this.tableTitle = newValue;
    },
    changeColor(newValue) {
      this.color = newValue;
    },
    changeSearch(newValue) {
      this.search = newValue;
    },
    changeHeaders(newValue) {
      this.headers = newValue;
    },
    changeDesserts(newValue) {
      this.desserts = newValue;
    },
  },
  methods: {},
};
</script>
