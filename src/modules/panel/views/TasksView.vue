<template>
  <div>
    <MainDashboardImg
      :changeSrc="mainDashImg.src"
      :changeHeight="mainDashImg.height"
      :changeText="mainDashImg.text"
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
            Olá, meu nome é "Alfredo", sou um profissional buscando uma posição de destaque no mercado 
            de trabalho, fico muito cansado quando não tenho ajuda e preciso trabalhar muito rápido.
            É muito cansativo trabalhar sozinho. Que tal me dar uma ajuda? 
            Podemos dividir a grana que irei receber pelos jobs!

            <hr class="mt-2" />
            <v-progress-linear
              v-model="progressBar.knowledge"
              height="25"
              :color="progressBar.color"
            >
              <strong
                >Tarefas Acumuladas:
                {{ Math.ceil(progressBar.knowledge) }}%</strong
              >
            </v-progress-linear>
          </v-alert>
          <Programming2AnimateComponent
            :changeSpeed="changeSpeed"
            :changePlay="changePlay"
            :changePause="changePause"
            :changeStop="changeStop"
          />
        </v-col>
        <v-col
          cols="12"
          md="8"
          sm="8"
          xl="8"
          ><DataTableComponent
            :changeHeaders="datatable.headers"
            :changeDesserts="items"
            :changeTableTitle="datatable.title"
            :changeSearch="datatable.search"
            :changeFormTitle="datatable.formTitle"
            :changeFormTemplate="datatable.formTemplate"
            @created="buttonCreated"
            @edit="buttonEdit"
            @deleted="buttonDeleted"
            @checkMassive="checkMassive"
            @uncheckMassive="uncheckMassive"
            @deleteMassive="deleteMassive"
        /></v-col>
      </v-row>
    </MainDashboardImg>
  </div>
</template>

<script>
import Programming2AnimateComponent from "@/modules/global/components/Programming2AnimateComponent.vue";
import DataTableComponent from "@/modules/global/components/DataTableComponent.vue";
import MainDashboardImg from "@/modules/global/components/MainDashboardImg.vue";
import ApiTasks from "@/modules/auth/http/apiTasks/index.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TasksView",
  components: {
    Programming2AnimateComponent,
    DataTableComponent,
    MainDashboardImg,
  },
  data() {
    return {
      changeSpeed: 1,
      changePlay: false,
      changePause: false,
      changeStop: false,
      mainDashImg: {
        src: "/img/paisagem4.jpg",
        height: "85vh",
        text: "Sozinho não conseguimos chegar em lugar algum!",
      },
      datatable: {
        headers: [],
        title: "",
        search: "",
      },
      items: [],
      progressBar: {
        knowledge: 0,
        color: "rgba(0,0,0, 0.3)",
      },
    };
  },
  mounted() {
    this.datatable.title = "Tarefas";
    this.getHeaderDataTable();
    this.getDataTableResults();
    this.setProgressBar();
  },
  destroyed() {
    window.location.reload(false);
  },
  methods: {
    ...mapActions("global", [
      "ActionGetTarefas",
      "ActionSetModalCreateUpdate",
      "ActionSetModalDataForm",
    ]),
    ...mapGetters("global", ["getTarefas", "getTarefasConcluidas"]),
    getHeaderDataTable() {
      this.datatable.headers = [
        { text: "Título", value: "titulo", width: "40%" },
        { text: "Concluída", value: "concluida", width: "40%" },
        { text: "Ações", value: "actions", width: "20%" },
      ];
    },
    getDataTableResults() {
      this.ActionGetTarefas();
    },
    buttonCreated() {
      var payload = {
        endpoint: "/tarefa",
        method: "post",
        form: {
          concluida: 0,
          titulo: "",
          descricao: "",
          aplicacao: [],
          prazo: [],
          impacto: 0,
        },
        validation: {},
      };
      this.ActionSetModalDataForm(payload);

      this.ActionSetModalCreateUpdate({
        dialog: true,
        title: "Cadastro de Tarefas",
        selectionTemplate: "FormCreateUpdateTarefas",
      });
    },
    buttonEdit(item) {
      var payload = {
        endpoint: `/tarefa/${item.id}`,
        method: "put",
        form: item,
        validation: {},
      };
      this.ActionSetModalDataForm(payload);
      this.ActionSetModalCreateUpdate({
        dialog: true,
        title: `Edição da Meta: ${item.titulo}`,
        selectionTemplate: "FormCreateUpdateTarefas",
      });
    },
    buttonDeleted(item) {
      if (item.id) {
        ApiTasks.delete(`/tarefa/${item.id}`)
          .then((response) => {
            if (response) {
              this.getDataTableResults();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    uncheckMassive(items) {
      var data = {
        ids: items.map((item) => item.id),
        concluida: 0,
      };
      ApiTasks.post(`/tarefa/checkMassive`, data)
        .then((response) => {
          if (response) {
            this.getDataTableResults();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkMassive(items) {
      var data = {
        ids: items.map((item) => item.id),
        concluida: 100,
      };
      ApiTasks.post(`/tarefa/checkMassive`, data)
        .then((response) => {
          if (response) {
            this.getDataTableResults();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteMassive(items) {
      var data = {
        ids: items.map((item) => item.id),
        delete: true,
      };
      ApiTasks.post(`/tarefa/deleteMassive`, data)
        .then((response) => {
          if (response) {
            this.getDataTableResults();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setProgressBar(value = null) {
      var getTarefasConcluidas = this.getTarefasConcluidas();
      this.changeSpeed = value ? value : getTarefasConcluidas.speed;
      this.progressBar.color = getTarefasConcluidas.progressColor;
      this.progressBar.knowledge = getTarefasConcluidas.progressValue;
    },
  },
  watch: {
    "$store.state.global.tarefasConcluidas": {
      immediate: true,
      handler() {
        this.setProgressBar();
      },
    },
    "$store.state.global.tarefas": {
      handler() {
        this.items = this.getTarefas();
        this.setProgressBar();
      },
    },
  },
};
</script>
