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
          <v-card-title style="background:#cecece;">
            <span class="text-h5" style="width:100%; text-align:center;">{{ title }}</span>
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
    ...mapActions("global", ["ActionSetModalDataForm", "ActionSetSnackbar", "ActionSetDataFormSubmit", "ActionGetMetas"]),
    submitForm() {
      this.clearValidaton();    
      if (this.$refs.form.validate()) {
        this.ActionSetDataFormSubmit(this.$store.state.global.dataForm)
        .then(() => {
          this.ActionGetMetas();
          this.dialog = false;
        })
        .catch((err) => {
          if (err.response.status === 422) {
            this.clearValidaton(err.response.data.errors);
            this.$refs.form.validate();
            this.errosValidations(err.response.data.message);
          }
        });
        return true;
      }
      this.errosValidations();
    },
    errosValidations(msg = null) {
      var text = "Atenção aos erros do formulário!";
      if(msg) { text = msg }
      this.ActionSetSnackbar({
        reset: false,
        show: true,
        color: "rgba(255,0,0,0.5)",
        text: text,
      });
    },
    clearValidaton(errors = null) {
      var form = this.$store.state.global.dataForm;
      form.validation = [];
      if(errors) {
        form.validation = errors;
      }
      form.validation.method = [(v) => !!v || "Method é obrigatório"];
      form.validation.endpoint = [(v) => !!v || "Endpoint é obrigatório"];
      this.ActionSetModalDataForm(form);
    },
  },
};
</script>
