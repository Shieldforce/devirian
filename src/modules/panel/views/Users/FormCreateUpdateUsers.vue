<template src="./FormCreateUpdateUsers.html"></template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FormCreateUpdateUsers",
  data: () => ({
    authUser: {},
    picture: {},
    endpoint: "/user",
    method: "post",
    form: {},
  }),
  created() {
    this.mountDataForm();
  },
  methods: {
    ...mapActions("global", ["ActionSetModalDataForm"]),
    ...mapActions("auth", ["ActionSetUser"]),
    createImage(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.authUser.picture = e.target.result;
        var file = this.picture;
        let formData = new FormData();
        formData.append('picture', file);
        formData.append('id', this.authUser.id);
        formData.append('name', this.authUser.name);
        var payload = {
          endpoint: `/user/savePicture`,
          method: "post",
          form: formData,
          validation: {},
        };
        this.ActionSetModalDataForm(payload);
      };
      reader.readAsDataURL(file);
    },
    changePicture(file) {
      if (!file) {
        return;
      }
      this.createImage(file);
    },
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
    "$store.state.auth.user": {
      immediate: true,
      handler() {
        this.authUser = this.$store.state.auth.user;
      },
    },
  },
};
</script>
