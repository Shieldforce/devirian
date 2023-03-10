<template>
  <div>
    <MainDashboardImg
      :changeSrc="mainDashImg.src"
      :changeHeight="mainDashImg.height"
    >
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="4"
          xl="4"
        >
          <v-alert
            color="rgba(0, 0, 0, 0.3)"
            dark
            icon="mdi-heart-pulse"
            border="left"
            prominent
            min-height="200"
          >
            Olá, meu nome é "Sr. coelho", sou um mestre jedi, estou a procura de
            minha paz interior. Mas nas horas vagas sou programador, e tenho que
            finalizar minhas metas e tarefas, então, por favor me ajuda com
            isso, quanto mais tarefas acumuladas, mais difícil fica a minha
            concentração e meditação!
          </v-alert>
          <RabbitAnimateComponent :changeSpeed="changeSpeed"/>
        </v-col>
        <v-col
          cols="12"
          md="8"
          sm="8"
          xl="8"
          ><DataTableComponent
            :changeHeaders="datatable.headers"
            :changeDesserts="this.getMetas()"
            :changeTableTitle="datatable.title"
            :changeSearch="datatable.search"
            :changeFormTitle="datatable.formTitle"
            :changeFormTemplate="datatable.formTemplate"
            @created="buttonCreated"
            @edit="buttonEdit"
            @deleted="buttonDeleted"
        /></v-col>
      </v-row>
    </MainDashboardImg>
  </div>
</template>

<script>
import RabbitAnimateComponent from "@/modules/global/components/RabbitAnimateComponent.vue";
import DataTableComponent from "@/modules/global/components/DataTableComponent.vue";
import MainDashboardImg from "@/modules/global/components/MainDashboardImg.vue";
import ApiTasks from "@/modules/auth/http/apiTasks/index.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DashboardView",
  components: {
    RabbitAnimateComponent,
    DataTableComponent,
    MainDashboardImg,
  },
  data() {
    return {
      changeSpeed: 10,
      mainDashImg: {
        src: "",
        height: "",
      },
      datatable: {
        headers: [],
        title: "",
        search: "",
      },
    };
  },
  mounted() {
    this.datatable.title =
      "Quando você define objetivos, sua vida começa a ter sentido.";
    this.getHeaderDataTable();
    this.getDataTableResults();
  },
  methods: {
    ...mapActions("global", [
      "ActionGetMetas",
      "ActionSetModalCreateUpdate",
      "ActionSetModalDataForm",
    ]),
    ...mapGetters("global", ["getMetas"]),
    getHeaderDataTable() {
      this.datatable.headers = [
        { text: "Título", value: "titulo" },
        { text: "Descrição", value: "descricao" },
        { text: "Ações", value: "actions" },
        { text: "", value: "deleted" },
        { text: "", value: "edit" },
      ];
    },
    getDataTableResults() {
      this.ActionGetMetas();
    },
    buttonCreated() {
      this.ActionSetModalCreateUpdate({
        dialog: true,
        title: "Cadastro de Metas",
        selectionTemplate: "FormCreateUpdateMetas",
      });
    },
    buttonEdit(item) {
      var payload = {
        endpoint: `/meta/${item.id}`,
        method: "put",
        form : item,
        validation : {}
      };
      this.ActionSetModalDataForm(payload);
      this.ActionSetModalCreateUpdate({
        dialog: true,
        title: `Edição da Meta: ${item.titulo}`,
        selectionTemplate: "FormCreateUpdateMetas",
      });
    },
    buttonDeleted(item) {
      ApiTasks.delete(`/meta/${item.id}`)
        .then((response) => {
          this.getDataTableResults();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
