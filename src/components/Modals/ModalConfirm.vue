<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>
        <v-card-text>{{ message }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="actionAccept(false)"
          >
            Não
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="actionAccept(true)"
          >
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ModalConfirmVue",
  data() {
    return {
      dialog: false,
      accept: false,
      title: "Confirm!",
      message: "Text modal confirmation!",
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "global/GLOBAL/SET_MODAL_CONFIRM") {
        this.dialog = state.global.modalConfirmConfig.dialog;
        this.title = state.global.modalConfirmConfig.title;
        this.message = state.global.modalConfirmConfig.message;
      }
    });
  },
  methods: {
    ...mapActions("global", ["ActionSetModalConfirmAccept"]),
    actionAccept(accept) {
      this.ActionSetModalConfirmAccept(accept);
      this.dialog = false;
    },
  },
};
</script>
