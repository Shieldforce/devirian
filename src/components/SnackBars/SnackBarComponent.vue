<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar"
      :color="color"
      top
      right
      app
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "SnackBarComponent",
  data() {
    return {
      snackbar: false,
      color: "rgba(0,0,0,0.5)",
      text: `Not Text`,
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "global/GLOBAL/SET_SNACKBAR") {
        this.snackbar = state.global.snackBarConfig.show;
        this.color = state.global.snackBarConfig.color;
        this.text = state.global.snackBarConfig.text;
      }
    });
  },
};
</script>
