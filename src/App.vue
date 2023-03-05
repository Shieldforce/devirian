<template>
  <div>
    <div v-if="accessRoute">
      <v-app id="inspire">
        <router-view :key="$router.fullPath"></router-view>
      </v-app>
    </div>
    <div v-else>
      <v-app id="inspire">
        <NavegationDrawerComponent :actionDrawer="drawer" />
        <AppBarComponent @changeDrawer="changeDrawer" />
        <v-main>
          <router-view :key="$router.fullPath"></router-view>
        </v-main>
      </v-app>
    </div>
    <SnackBarComponent />
    <ModalConfirm />
    <CreateUpdateModal :form="form">
      <template v-slot:form="{ selectionTemplate }">
        <FormCreateUpdate 
          :selectionTemplate="selectionTemplate" 
        />
      </template>
    </CreateUpdateModal>
  </div>
</template>

<script>
import SnackBarComponent from "@/components/SnackBars/SnackBarComponent.vue";
import ModalConfirm from "@/components/Modals/ModalConfirm.vue";
import NavegationDrawerComponent from "./modules/panel/components/Template/NavegationDrawerComponent.vue";
import AppBarComponent from "./modules/panel/components/Template/AppBarComponent.vue";
import CreateUpdateModal from "@/components/Modals/CreateUpdateModal.vue";
import FormCreateUpdate from "@/modules/global/components/FormCreateUpdate.vue";

export default {
  components: {
    SnackBarComponent,
    ModalConfirm,
    NavegationDrawerComponent,
    AppBarComponent,
    CreateUpdateModal,
    FormCreateUpdate,
  },
  data: () => ({
    drawer: true,
    accessRoute: false,
    form: {},
  }),
  created() {
    let fullPath = window.location.pathname;
    if (fullPath.includes("resetPassword") || fullPath === "/access") {
      this.accessRoute = true;
    }
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style lang="css">
.container {
  padding: 0 20% 0 10%;
}
.container-10 {
  padding: 10px 10px 10px 10px;
}
</style>
