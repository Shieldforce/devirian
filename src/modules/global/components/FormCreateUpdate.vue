<template>
  <div>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import FormCreateUpdateMetas from "../../panel/views/Metas/FormCreateUpdateMetas.vue";

export default {
  props: {
    selectionTemplate: {
      type: String,
      default: "",
      required: true,
    },
  },
  name: "FormCreateUpdate",
  components: {
    FormCreateUpdateMetas,
  },
  data: () => ({}),
  created() {
    this.selectedComponent = this.selectionTemplate;
  },
  methods: {},
};
</script>
