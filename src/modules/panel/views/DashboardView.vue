<template>
  <div>
    <v-img
      src="/img/paisagem3.jpg"
      height="85vh"
    >
      <div class="container-10 flex justify">
        <v-row>
          <v-col
            cols="12"
            md="12"
            sm="12"
            xl="12"
            ><h1
              style="
                border-radius: 5px;
                text-align: center;
                color: #6495ed;
                background-color: rgba(0, 0, 0, 0.3);
              "
            >
              Seja bem vindo ao mundo "DEVIRIAN"
            </h1></v-col
          >
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="4"
            sm="4"
            xl="4"
            style="padding-top: 150px"
            ><lottie-component
              :options="defaultOptions"
              :width="700"
              :height="700"
              class="flex justify"
          /></v-col>
          <v-col
            cols="12"
            md="8"
            sm="8"
            xl="8"
            ><v-card style="background-color: rgba(0, 0, 0, 0.3)">
              <v-card-title>
                Nutrition
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                style="background-color: rgba(0, 0, 0, 0.3)"
                dark
                :headers="headers"
                :items="desserts"
                :search="search"
              ></v-data-table> </v-card
          ></v-col>
        </v-row>
      </div>
    </v-img>
  </div>
</template>

<script>
import * as animationData from "@/assets/lotties/rabbit.json";

export default {
  name: "DashboardView",
  data() {
    return {
      defaultOptions: {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
      },
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
    };
  },
  methods: {},
};
</script>
