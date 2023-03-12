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
            Olá, meu nome é "Sr. coelho", sou um mestre jedi, estou a procura da
            minha paz interior. Mas, nas horas vagas sou uma pessoa normal, rss, e tenho que
            finalizar minhas metas, então, por favor me ajuda com isso, quanto
            mais metas acumuladas, mais difícil fica a minha concentração e
            meditação!

            <hr class="mt-2" />
            <v-progress-linear
              v-model="progressBar.knowledge"
              height="25"
              :color="progressBar.color"
            >
              <strong
                >Nível de Stress:
                {{ Math.ceil(progressBar.knowledge) }}%</strong
              >
            </v-progress-linear>
          </v-alert>
          <RabbitAnimateComponent
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
      changeSpeed: 1,
      changePlay: false,
      changePause: false,
      changeStop: false,
      mainDashImg: {
        src: "/img/paisagem3.jpg",
        height: "85vh",
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
    this.datatable.title = "Metas";
    this.getHeaderDataTable();
    this.getDataTableResults();
    this.setProgressBar();
  },
  destroyed() {
    window.location.reload(false);
  },
  methods: {
    ...mapActions("global", [
      "ActionGetMetas",
      "ActionSetModalCreateUpdate",
      "ActionSetModalDataForm",
    ]),
    ...mapGetters("global", ["getMetas", "getMetasConcluidas"]),
    getHeaderDataTable() {
      this.datatable.headers = [
        { text: "Título", value: "titulo", width: "40%" },
        { text: "Concluída", value: "concluida", width: "40%" },
        { text: "Ações", value: "actions", width: "20%" },
      ];
    },
    getDataTableResults() {
      this.ActionGetMetas();
    },
    buttonCreated() {
      var payload = {
        endpoint: "/meta",
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
        title: "Cadastro de Metas",
        selectionTemplate: "FormCreateUpdateMetas",
      });
    },
    buttonEdit(item) {
      var payload = {
        endpoint: `/meta/${item.id}`,
        method: "put",
        form: item,
        validation: {},
      };
      this.ActionSetModalDataForm(payload);
      this.ActionSetModalCreateUpdate({
        dialog: true,
        title: `Edição da Meta: ${item.titulo}`,
        selectionTemplate: "FormCreateUpdateMetas",
      });
    },
    buttonDeleted(item) {
      if (item.id) {
        ApiTasks.delete(`/meta/${item.id}`)
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
      ApiTasks.post(`/meta/checkMassive`, data)
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
      ApiTasks.post(`/meta/checkMassive`, data)
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
      ApiTasks.post(`/meta/deleteMassive`, data)
        .then((response) => {
          if (response) {
            this.getDataTableResults();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setProgressBar() {
      var getMetasConcluidas = this.getMetasConcluidas();
      this.changeSpeed = getMetasConcluidas.speed;
      this.progressBar.color = getMetasConcluidas.progressColor;
      this.progressBar.knowledge = getMetasConcluidas.progressValue;
    },
  },
  watch: {
    "$store.state.global.metasConcluidas": {
      immediate: true,
      handler() {
        this.setProgressBar();
      },
    },
    "$store.state.global.metas": {
      handler() {
        this.items = this.getMetas();
        this.setProgressBar();
      },
    },
  },
};
</script>
