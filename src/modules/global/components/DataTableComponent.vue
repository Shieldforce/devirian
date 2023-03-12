<template>
  <v-card :color="color">
    <v-card-title style="color: white">
      <v-btn
        class="mx-2"
        icon
        @click="created()"
        color="white"
        :title="`Criar uma nova ${tableTitle}!`"
      >
        <v-icon dark>mdi-plus-circle</v-icon>
      </v-btn>
      |
      <v-btn
        class="mx-2"
        icon
        @click="checkMassive()"
        color="white"
        :title="`Finalizar ${tableTitle} em massa!`"
      >
        <v-icon dark>mdi-check-circle</v-icon>
      </v-btn>
      |
      <v-btn
        class="mx-2"
        icon
        @click="uncheckMassive()"
        color="white"
        :title="`Reniciar ${tableTitle} em massa!`"
      >
        <v-icon dark>mdi-minus-circle</v-icon>
      </v-btn>
      |
      <v-btn
        class="mx-2"
        icon
        @click="deleteMassive()"
        color="white"
        :title="`Deletar ${tableTitle} em massa!`"
      >
        <v-icon dark>mdi-delete-circle-outline</v-icon>
      </v-btn>
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
        slot="item.concluida"
        slot-scope="props"
      >
        <v-progress-linear
          v-model="props.item.concluida"
          height="25"
          :color="setProgressColor(props.item.concluida)"
        >
          <strong>Concluída: {{ Math.ceil(props.item.concluida) }}%</strong>
        </v-progress-linear>
      </template>
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
      percentage: 50,
      progressColor: "red",
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
      this.setProgressColor();
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
    uncheckMassive() {
      this.ActionSetModalConfirm({
        dialog: true,
        title: "Reniciar itens!",
        message: "Deseja reniciar todos esses itens selecionados?",
      });
      this.$store.subscribe((mutation, state) => {
        if (
          mutation.type === "global/GLOBAL/SET_MODAL_CONFIRM_ACCEPTED" &&
          state.global.modalConfirmConfig.accept
        ) {
          this.$emit("uncheckMassive", this.selected);
          return true;
        }
      });
    },
    checkMassive() {
      this.ActionSetModalConfirm({
        dialog: true,
        title: "Concluídas!",
        message: "Deseja concluir todos esses itens selecionados?",
      });
      this.$store.subscribe((mutation, state) => {
        if (
          mutation.type === "global/GLOBAL/SET_MODAL_CONFIRM_ACCEPTED" &&
          state.global.modalConfirmConfig.accept
        ) {
          this.$emit("checkMassive", this.selected);
          return true;
        }
      });
    },
    deleteMassive() {
      this.ActionSetModalConfirm({
        dialog: true,
        title: "Concluídas!",
        message: "Deseja excluir todos esses itens selecionados?",
      });
      this.$store.subscribe((mutation, state) => {
        if (
          mutation.type === "global/GLOBAL/SET_MODAL_CONFIRM_ACCEPTED" &&
          state.global.modalConfirmConfig.accept
        ) {
          this.$emit("deleteMassive", this.selected);
          return true;
        }
      });
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
          return true;
        }
      });
    },
    setProgressColor(concluida) {
      if (concluida < 10) {
        return "rgba(255,0,0, 0.3)";
      }
      if (concluida >= 10 && concluida < 20) {
        return "rgba(255,0,0, 0.3)";
      }
      if (concluida >= 20 && concluida < 30) {
        return "rgba(255,0,0, 0.3)";
      }
      if (concluida >= 30 && concluida < 40) {
        return "rgba(255,117,24, 0.3)";
      }
      if (concluida >= 40 && concluida < 50) {
        return "rgba(255,117,24, 0.3)";
      }
      if (concluida >= 40 && concluida < 50) {
        return "rgba(255,117,24, 0.3)";
      }
      if (concluida >= 50 && concluida < 60) {
        return "rgba(255,255,0, 0.3)";
      }
      if (concluida >= 60 && concluida < 70) {
        return "rgba(255,255,0, 0.3)";
      }
      if (concluida >= 70 && concluida < 80) {
        return "rgba(255,255,0, 0.3)";
      }
      if (concluida >= 80 && concluida < 90) {
        return "rgba(50,205,50, 0.3)";
      }
      if (concluida >= 90 && concluida <= 100) {
        return "rgba(50,205,50, 0.3)";
      }
    },
  },
};
</script>
