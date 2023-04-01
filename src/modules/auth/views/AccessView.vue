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
            <span :style="`color:${colorMessageText};`">{{
              messageTitle
            }}</span>
          </h3>
          <h3
            v-show="emailSend"
            style="
              border-radius: 5px;
              background-color: rgba(0, 180, 89, 0.3);
              color: green;
              text-align: center;
            "
          >
            Email enviado!
          </h3>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              @keydown.stop="resetValidation"
              type="text"
              v-if="register && !resetPassword"
              v-model="form.name"
              :rules="[...validation.frontend.name, ...validation.backend.name]"
              label="Nome Completo"
              required
            ></v-text-field>

            <v-text-field
              @keydown.stop="resetValidation"
              type="text"
              v-model="form.email"
              :rules="[
                ...validation.frontend.email,
                ...validation.backend.email,
              ]"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              @keydown.stop="resetValidation"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              v-if="!resetPassword"
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
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              v-if="register && !resetPassword"
              v-model="form.password_confirmation"
              :rules="[
                ...validation.frontend.password_confirmation,
                ...validation.backend.password_confirmation,
              ]"
              label="Repita a Senha"
              required
            ></v-text-field>

            <v-row>
              <v-col
                cols="4"
                md="6"
                sm="4"
                xl="2"
              >
                <v-switch
                  v-model="register"
                  @change="changeAction($event)"
                  label="Registro"
                ></v-switch>
              </v-col>

              <v-col
                cols="4"
                md="6"
                sm="4"
                xl="4"
              >
                <v-switch
                  v-model="resetPassword"
                  @change="changeActionResetPassword($event)"
                  label="Resetar Senha"
                ></v-switch>
              </v-col>
            </v-row>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4 mt-2"
              @click="accessAction"
            >
              {{ textButton }}
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
  name: "AccessView",
  data: () => ({
    show1: false,
    register: false,
    resetPassword: false,
    emailSend: false,
    messageTitle: "(Acesse sua conta!)",
    colorMessageText: "green",
    textButton: "Acessar",
    valid: true,
    form: {
      action: "/login",
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      client: "front",
    },

    validation: {
      frontend: {
        name: [(v) => !!v || "Nome completo é obrigatório"],
        email: [
          (v) => !!v || "E-mail é obrigatório",
          (v) => /.+@.+\..+/.test(v) || "E-mail não tem um valor válido!",
        ],
        password: [(v) => !!v || "Senha é obrigatório"],
        password_confirmation: [
          (v) => !!v || "Confirmação de Senha é obrigatório",
        ],
      },
      backend: {
        name: [],
        email: [],
        password: [],
        password_confirmation: [],
      },
    },
  }),
  created() {
    //
  },
  methods: {
    ...mapActions("auth", ["ActionSetUser", "ActionDoLogin"]),
    accessAction() {
      if (this.$refs.form.validate()) {
        this.ActionDoLogin(this.form)
          .then((res) => {
            localStorage.setItem("token", res.data.access_token);
            this.ActionSetUser(res.data.user);
            if (this.form.action === "/resetPasswordSend") {
              this.emailSend = true;
              return;
            }
            window.location.href = "/dashboard";
          })
          .catch((err) => {
            if (err.response.status === 422) {
              Object.keys(err.response.data.errors).forEach((index) => {
                this.validation.backend[index] =
                  err.response.data.errors[index];
              });
            }
          });
      }
    },
    changeAction(e) {
      this.$refs.form.resetValidation();

      if (e) {
        this.form.action = "/register";
        this.messageTitle = "(Crie sua conta!)";
        this.colorMessageText = "blue";
        this.textButton = "Registrar";
      }

      if (!e) {
        this.form.action = "/login";
        this.messageTitle = "(Acesse sua conta!)";
        this.colorMessageText = "green";
        this.textButton = "Acessar";
      }
    },
    changeActionResetPassword(e) {
      this.$refs.form.resetValidation();

      if (e) {
        this.resetPassword = true;
        this.form.action = "/resetPasswordSend";
        this.messageTitle = "(Reset por email!)";
        this.colorMessageText = "red";
        this.textButton = "Enviar";
      }

      if (!e) {
        this.resetPassword = false;

        if (!this.register) {
          this.messageTitle = "(Acesse sua conta!)";
          this.colorMessageText = "green";
          this.textButton = "Acessar";
        }
        if (this.register) {
          this.messageTitle = "(Crie sua conta!)";
          this.colorMessageText = "blue";
          this.textButton = "Registrar";
        }
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
        email: [],
        password: [],
        password_confirmation: [],
      };
      this.validation.backend = {
        name: [],
        email: [],
        password: [],
        password_confirmation: [],
      };
    },
  },
};
</script>
