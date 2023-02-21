<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "SnackBarComponent",
  props: {
    showBar: {
      require: true,
    },
  },
  data() {
    return {
      snackbar: true,
      text: `Not Text`,
    };
  },
  watch: {
    showBar(value) {
      this.snackbar = value;
    },
  },
};
</script>