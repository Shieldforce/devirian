<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-form @submit.prevent="submitForm()" ref="form">
          <v-card-title>
            <span class="text-h5">{{ title }}</span>
          </v-card-title>
          <slot name="form" v-bind:selectionTemplate="selectionTemplate"></slot>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="dialog = false"
            >
              Fechar
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="submitForm()"
            >
              Salvar
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateUpdateModal",
  data: () => ({
    dialog: false,
    title: "",
    selectionTemplate: "",
    dataForm: {},
    
  }),
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "global/GLOBAL/SET_MODAL_CREATE_UPDATE") {
        this.dialog = state.global.modalCreateUpdateConfig.dialog;
        this.title = state.global.modalCreateUpdateConfig.title;
        this.selectionTemplate = state.global.modalCreateUpdateConfig.selectionTemplate;
      }
    });
  },
  methods: {
    ...mapActions("global", ["ActionSetModalDataForm",]),
    submitForm() {
      console.log(this.$refs.form);
      this.ActionSetModalDataForm({
        form: this.$refs.form,
      });
    },
  },
};
</script>
