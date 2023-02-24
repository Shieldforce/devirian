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
          ><v-card
            height="200"
            color="rgba(0, 0, 0, 0.3)"
            style="
              text-align: center;
              color: white;
              padding: 10px 10px 10px 10px;
            "
            >Pontuação da semana!
            <SeaWalkAnimateComponent
              :changeWidth="seaWalk.width"
              :changeHeight="seaWalk.height"
            />
          </v-card>
          <RabbitAnimateComponent
        /></v-col>
        <v-col
          cols="12"
          md="8"
          sm="8"
          xl="8"
          ><DataTableComponent
            :changeHeaders="datatable.headers"
            :changeDesserts="datatable.desserts"
            :changeTableTitle="datatable.title"
            :changeSearch="datatable.search"
        /></v-col>
      </v-row>
    </MainDashboardImg>
  </div>
</template>

<script>
import RabbitAnimateComponent from "@/modules/global/components/RabbitAnimateComponent";
import SeaWalkAnimateComponent from "@/modules/global/components/SeaWalkAnimateComponent";
import DataTableComponent from "@/modules/global/components/DataTableComponent";
import MainDashboardImg from "@/modules/global/components/MainDashboardImg.vue";
import ApiTasks from "@/modules/auth/http/apiTasks/index";

export default {
  name: "DashboardView",
  components: {
    RabbitAnimateComponent,
    SeaWalkAnimateComponent,
    DataTableComponent,
    MainDashboardImg,
  },
  data() {
    return {
      mainDashImg: {
        src: "",
        height: "",
      },
      datatable: {
        headers: [],
        desserts: [],
        title: "",
        search: "",
      },
      seaWalk: {
        width: null,
        height: null,
      },
    };
  },
  mounted() {
    this.datatable.title =
      "Quando você define objetivos, sua vida começa a ter sentido.";
    this.getHeaderDataTable();
    this.getDataTableResults();
    this.seaWalk.width = "100";
    this.seaWalk.height = "100";
  },
  methods: {
    getHeaderDataTable() {
      this.datatable.headers = [
        {
          text: "#",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Título", value: "titulo" },
        { text: "Descrição", value: "descricao" },
      ];
    },
    getDataTableResults() {
      ApiTasks.get("/meta", this.search)
        .then((response) => {
          this.datatable.desserts = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
