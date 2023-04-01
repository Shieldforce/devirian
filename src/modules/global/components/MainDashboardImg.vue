<template>
  <v-img
    :src="changeSrc"
    :height="changeHeight"
  >
    <div class="container-10 flex justify">
      <v-row>
        <v-col
          cols="12"
          md="12"
          sm="12"
          xl="12"
          ><h1
            style="
              border-radius: 5px;
              text-align: center;
              color: #cecece;
              background-color: rgba(0, 0, 0, 0.3);
            "
          >
            {{ changeText }}
          </h1></v-col
        >
      </v-row>
      <slot></slot>
    </div>
  </v-img>
</template>

<script>
export default {
  name: "MainDashboardImg",
  props: {
    changeSrc: {
      type: String,
      require: true,
      default: "/img/paisagem3.jpg",
    },
    changeHeight: {
      type: String,
      require: true,
      default: "85vh",
    },
    changeText: {
      type: String,
      require: true,
      default: "No text",
    },
  },
  data() {
    return {};
  },
};
</script>
