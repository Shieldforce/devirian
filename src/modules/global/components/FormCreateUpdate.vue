<template>
  <div>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import FormCreateUpdateMetas from "../../panel/views/Metas/FormCreateUpdateMetas.vue";
import FormCreateUpdateTarefas from "../../panel/views/Tarefas/FormCreateUpdateTarefas.vue";

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
    FormCreateUpdateTarefas,
  },
  data: () => ({}),
  created() {
    this.selectedComponent = this.selectionTemplate;
  },
  methods: {},
};
</script>
