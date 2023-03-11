<template>
  <div>
    <lottie
      :options="defaultOptions"
      :height="600"
      :width="500"
      v-on:animCreated="handleAnimation"
      class="flex justify"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "@/assets/lotties/rabbit.json";
export default {
  name: "RabbitAnimateComponent",
  props: {
    changePlay: {},
    changePause: {},
    changeStop: {},
    changeSpeed: {
      type: Number,
      default: 1,
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
