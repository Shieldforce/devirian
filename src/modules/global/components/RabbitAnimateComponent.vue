<template>
  <lottie-component
    :options="defaultOptions"
    :width="config.width"
    :height="config.height"
    :class="config.class"
  />
</template>

<script>
import * as animationData from "@/assets/lotties/rabbit.json";
export default {
  name: "RabbitAnimateComponent",
  props: {
    changeWidth: {
      type: Number,
      default: 600,
    },
    changeHeight: {
      type: Number,
      default: 600,
    },
    changeClass: {
      type: String,
      default: "flex justify",
    },
    changeLoop: {
      type: Boolean,
      default: true,
    },
    changeAutoplay: {
      type: Boolean,
      default: true,
    },
    changeAnimationData: {},
    changeSpeed: {
     type: Number,
      required: false,
      default: 9,
    },
  },
  data() {
    return {
      defaultOptions: {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
      },
      config: {
        width: 600,
        height: 600,
        class: "flex justify",
      },
    };
  },
  watch: {
    changeWidth(newValue) {
      this.config.width = newValue;
    },
    changeHeight(newValue) {
      this.config.height = newValue;
    },
    changeClass(newValue) {
      this.config.class = newValue;
    },
    changeLoop(newValue) {
      this.defaultOptions.loop = newValue;
    },
    changeAutoplay(newValue) {
      this.defaultOptions.autoplay = newValue;
    },
    changeAnimationData(newValue) {
      this.defaultOptions.animationData = newValue;
    },
    changeSpeed(newValue) {
      this.defaultOptions.speed(newValue)
    }
  },
};
</script>
