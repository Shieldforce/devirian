<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="700px"
    >
      <v-card>
        <v-form
          @submit.prevent="submitForm()"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-title style="background: #cecece">
            <span
              class="text-h5"
              style="width: 100%; text-align: center"
              >{{ title }}</span
            >
          </v-card-title>
          <slot
            name="form"
            :selectionTemplate="selectionTemplate"
          ></slot>
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
    valid: true,
  }),
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "global/GLOBAL/SET_MODAL_CREATE_UPDATE") {
        this.dialog = state.global.modalCreateUpdateConfig.dialog;
        this.title = state.global.modalCreateUpdateConfig.title;
        this.selectionTemplate =
          state.global.modalCreateUpdateConfig.selectionTemplate;
      }
    });
  },
  methods: {
    ...mapActions("global", [
      "ActionSetModalDataForm",
      "ActionSetSnackbar",
      "ActionSetDataFormSubmit",
    ]),
    submitForm() {
      this.ActionSetDataFormSubmit(this.$store.state.global.dataForm)
        .then(() => {
          this.dialog = false;
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.setValidaton(err.response.data.errors);
            this.$refs.form.validate();
            this.errosValidations(err.response.data.message);
          }
        });
    },
    errosValidations(msg = null) {
      var text = "Atenção aos erros do formulário!";
      if (msg) {
        text = msg;
      }
      this.ActionSetSnackbar({
        reset: false,
        show: true,
        color: "rgba(255,0,0,0.5)",
        text: text,
      });
    },
    setValidaton(errors = null) {
      if (errors) {
        var payload = this.$store.state.global.dataForm;
        payload.validation = errors;
        this.ActionSetModalDataForm(payload);
      }
    },
  },
  watch: {
    dialog() {
      var payload = this.$store.state.global.dataForm;

      if (this.dialog === false && payload.method === "post") {
        this.$refs.form.reset();
      }

      if (this.dialog === false) {
        this.$refs.form.resetValidation();
        this.ActionSetSnackbar({
          reset: false,
          show: false,
          color: "rgba(255,0,0,0.5)",
          text: "",
        });
      }
    },
  },
};
</script>
