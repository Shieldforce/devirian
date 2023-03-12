<template src="./FormCreateUpdateTarefas.html"></template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FormCreateUpdateTarefas",
  data: () => ({
    rangerImpacto: { label: "Impacto: ", val: 50, color: "red" },
    rangerConcluida: { label: "Concluída: ", val: 0, color: "green" },
    endpoint: "/tarefa",
    method: "post",
    form: {
      concluida: 0,
      titulo: "",
      descricao: "",
      aplicacao: [],
      prazo: [],
      impacto: 0,
    },
  }),
  created() {
    this.mountDataForm();
  },
  methods: {
    ...mapActions("global", ["ActionSetModalDataForm"]),
    mountDataForm() {
      var payload = {
        endpoint: this.endpoint,
        method: this.method,
        form: this.form,
        validation: {},
      };
      if (this.$store.state.global.dataForm.endpoint) {
        payload = this.$store.state.global.dataForm;
      }
      this.ActionSetModalDataForm(payload);
      this.resetValidation();
    },
    resetValidation(name = null) {
      var payload = {
        endpoint: this.$store.state.global.dataForm.endpoint,
        method: this.$store.state.global.dataForm.method,
        form: this.$store.state.global.dataForm.form,
        validation: this.$store.state.global.dataForm.validation,
      };
      if (name) {
        payload.validation[name] = [];
      }
      this.ActionSetModalDataForm(payload);
    },
  },
  watch: {
    "$store.state.global.modalCreateUpdateConfig": {
      immediate: true,
      handler() {
        //console.log(this.$store.state.global.dataForm.method);
      },
    },
  },
};
</script>
