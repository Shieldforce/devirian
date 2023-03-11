<template>
  <div
    style="background-image: url('/img/background.jpg'); padding: 0; margin: 0"
  >
    <v-container style="padding: 0; margin: 0">
      <v-row
        justify="center"
        align="center"
        style="height: 100vh; padding: 0; margin: 0"
      >
        <v-col
          cols="10"
          md="6"
          xs="4"
          style="
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 10px;
            padding: 50px;
            box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
          "
        >
          <h3 class="text-center">
            Bem vindo a Devirian
            <span :style="`color:green;`">(Escolha sua nova senha!)</span>
          </h3>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              @keydown.stop="resetValidation"
              type="password"
              v-model="form.password"
              :rules="[
                ...validation.frontend.password,
                ...validation.backend.password,
              ]"
              label="Senha"
              required
            ></v-text-field>

            <v-text-field
              @keydown.stop="resetValidation"
              type="password"
              v-model="form.password_confirmation"
              :rules="[
                ...validation.frontend.password_confirmation,
                ...validation.backend.password_confirmation,
              ]"
              label="Repita a Senha"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4 mt-2"
              @click="accessAction"
            >
              Resetar
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ResetPasswordView",
  data: () => ({
    resetPassword: false,
    valid: true,
    form: {
      token: null,
      password: null,
      password_confirmation: null,
    },
    validation: {
      frontend: {
        password: [(v) => !!v || "Senha é obrigatório"],
        password_confirmation: [
          (v) => !!v || "Confirmação de Senha é obrigatório",
        ],
      },
      backend: {
        password: [],
        password_confirmation: [],
      },
    },
  }),
  created() {
    //
  },
  methods: {
    ...mapActions("auth", ["ActionSetUser", "ActionResetPassword"]),
    ...mapActions("global", ["ActionSetSnackbar"]),
    accessAction() {
      if (this.$refs.form.validate()) {
        this.form.token = this.$router.currentRoute.params.token;
        this.ActionResetPassword(this.form)
          .then((res) => {
            localStorage.setItem("token", res.data.access_token);
            this.ActionSetUser(res.data.user);
            window.location.href = "/dashboard";
          })
          .catch((err) => {
            this.ActionSetSnackbar({
              reset: false,
              show: true,
              color: "rgba(255,0,0,0.5)",
              text: err.response.data.message,
            });
            if (err.response.status === 422) {
              Object.keys(err.response.data.errors).forEach((index) => {
                this.validation.backend[index] =
                  err.response.data.errors[index];
              });
            }
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
      this.clearValidations();
    },
    clearValidations() {
      this.validation.frontend = {
        name: [],
        password: [],
        password_confirmation: [],
      };
      this.validation.backend = {
        name: [],
        password: [],
        password_confirmation: [],
      };
    },
  },
};
</script>
