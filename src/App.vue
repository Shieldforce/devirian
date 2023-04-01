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
        <FormCreateUpdate :selectionTemplate="selectionTemplate" />
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
import ApiTasks from "@/modules/auth/http/apiTasks/index.js";
import { mapActions } from "vuex";

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

    if (!this.accessRoute) {
      ApiTasks.get(`/auth/verifyToken`)
        .then((res) => {
          this.ActionSetVerifyToken(true);
          this.ActionSetUser(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  methods: {
    ...mapActions("auth", ["ActionSetUser", "ActionSetVerifyToken"]),
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

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.3) rgba(4, 91, 117, 0.5);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.3);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(4, 91, 117, 0.5);
  border-radius: 20px;
  border: 3px solid rgba(0,0,0,0.3);
}
</style>
