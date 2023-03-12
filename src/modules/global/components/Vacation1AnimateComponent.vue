<template>
  <div>
    <lottie
      :options="defaultOptions"
      :height="changeHeight"
      :width="changeHeight"
      v-on:animCreated="handleAnimation"
      class="flex justify"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "@/assets/lotties/vacation1.json";
export default {
  name: "Vacation1AnimateComponent",
  props: {
    changePlay: {},
    changePause: {},
    changeStop: {},
    changeSpeed: {
      type: Number,
      default: 1,
    },
    changeHeight: {
      type: Number,
      default: 500,
      require: true,
    },
    changeWidth: {
      type: Number,
      default: 500,
      require: true,
    },
  },
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData,
      },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
  watch: {
    changePlay(newValue) {
      if (newValue) {
        this.anim.play();
      }
    },
    changePause(newValue) {
      if (newValue) {
        this.anim.pause();
      }
    },
    changeStop(newValue) {
      if (newValue) {
        this.anim.stop();
      }
    },
    changeSpeed(newValue) {
      this.anim.setSpeed(newValue);
    },
  },
};
</script>
