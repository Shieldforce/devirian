<template>
  <v-card :color="color">
    <v-card-title style="color: white">
      <v-btn
        class="mx-2"
        icon
        @click="created()"
        color="white"
      >
        <v-icon dark>mdi-plus-circle</v-icon>
      </v-btn>
      | {{ tableTitle }} |
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
      v-model="selected"
      :single-select="singleSelect"
      item-key="id"
      show-select
    >
      <template
        slot="item.actions"
        slot-scope="props"
      >
        <v-btn
          class="mx-2"
          icon
          @click="($event) => edit(props.item)"
        >
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          icon
          @click="($event) => deleted(props.item)"
        >
          <v-icon dark>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

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
    changeFormTitle: {
      type: String,
      required: false,
    },
    changeFormTemplate: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      selectedTasks: true,
      singleSelect: false,
      selected: [],
      titleSearch: "Buscar...",
      color: "rgba(0, 0, 0, 0.3)",
      search: "",
      tableTitle: "Title Table",
      headers: [],
      desserts: [],
      formTitle: "",
      formTemplate: "",
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
    changeFormTitle(newValue) {
      this.formTitle = newValue;
    },
    changeFormTemplate(newValue) {
      this.formTemplate = newValue;
    },
  },
  methods: {
    ...mapActions("global", ["ActionSetModalConfirm"]),
    created() {
      this.$emit("created");
    },
    deleted(item) {
      this.modalDeleteConfirm(item);
    },
    edit(item) {
      this.$emit("edit", item);
    },
    modalDeleteConfirm(item) {
      this.ActionSetModalConfirm({
        dialog: true,
        title: "Confirmação!",
        message:
          "Deseja realmente excluir este item, esta ação fará com que todos os dados desse item seja perdido!?",
      });
      this.$store.subscribe((mutation, state) => {
        if (
          mutation.type === "global/GLOBAL/SET_MODAL_CONFIRM_ACCEPTED" &&
          state.global.modalConfirmConfig.accept
        ) {
          this.$emit("deleted", item);
        }
        if (
          mutation.type === "global/GLOBAL/SET_MODAL_CONFIRM_ACCEPTED" &&
          !state.global.modalConfirmConfig.accept
        ) {
          console.log("não");
        }
      });
    },
  },
};
</script>
