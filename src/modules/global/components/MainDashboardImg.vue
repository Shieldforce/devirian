<template>
  <v-img
    :src="src"
    :height="height"
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
              color: #6495ed;
              background-color: rgba(0, 0, 0, 0.3);
            "
          >
            Quando você define objetivos, sua vida começa a ter sentido.
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
      required: true,
    },
    changeHeight: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      src: "/img/paisagem3.jpg",
      height: "85vh",
    };
  },
  watch: {
    changeSrc() {
      this.src = this.changeSrc;
    },
    changeHeight() {
      this.height = this.changeHeight;
    },
  },
};
</script>
