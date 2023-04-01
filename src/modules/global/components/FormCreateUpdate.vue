<template>
  <div>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import FormCreateUpdateMetas from "../../panel/views/Metas/FormCreateUpdateMetas.vue";
import FormCreateUpdateTarefas from "../../panel/views/Tarefas/FormCreateUpdateTarefas.vue";
import FormCreateUpdateUsers from "../../panel/views/Users/FormCreateUpdateUsers.vue";

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
    FormCreateUpdateUsers,
  },
  data: () => ({}),
  created() {
    this.selectedComponent = this.selectionTemplate;
  },
  methods: {},
};
</script>
