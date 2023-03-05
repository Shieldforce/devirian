<template src="./FormCreateUpdateMetas.html"></template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FormCreateUpdateMetas",
  data: () => ({
    rangerImpacto: { label: 'Impacto: ', val: 50, color: 'red' },
    rangerConcluida: { label: 'Concluída: ', val: 0, color: 'green' },
    form: {
      endpoint: "/meta",
      method: "post",
      concluida: 0,
      titulo: "",
      descricao: "",
      aplicacao: [],
      prazo: [],
      impacto: 0,
      validation: {
        endpoint: [(v) => !!v || "Endpoint é obrigatório"],
        method: [(v) => !!v || "Method é obrigatório"],
        titulo: "",
        descricao: "",
        aplicacao: "",
        prazo: "",
        impacto: "",
        concluida: "",
      },
    },
  }),
  created() {
    this.mountDataForm();
  },
  methods: {
    ...mapActions("global", ["ActionSetModalDataForm"]),
    mountDataForm() {
      var form = this.form;
      if(this.$store.state.global.dataForm.endpoint) {
        form = this.$store.state.global.dataForm
      }
      this.ActionSetModalDataForm(form);
      this.resetValidation();
    },
    resetValidation(name = null) {
      var form = this.$store.state.global.dataForm;
      if(name) {
        form.validation[name] = "";
      }
      this.ActionSetModalDataForm(form);
    },
  },
};
</script>
