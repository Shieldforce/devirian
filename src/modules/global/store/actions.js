import apiTasks from "../../auth/http/apiTasks/index";
import * as types from "./mutation-types";

export const ActionSetSnackbar = ({ commit }, payload) => {
  commit(types.SET_SNACKBAR, payload);
};

export const ActionSetModalConfirm = ({ commit }, payload) => {
  return commit(types.SET_MODAL_CONFIRM, payload);
};

export const ActionSetModalConfirmAccept = ({ commit }, payload) => {
  return commit(types.SET_MODAL_CONFIRM_ACCEPTED, payload);
};

export const ActionSetModalCreateUpdate = ({ commit }, payload) => {
  return commit(types.SET_MODAL_CREATE_UPDATE, payload);
};

export const ActionSetModalDataForm = ({ commit }, payload) => {
  commit(types.SET_MODAL_DATA_FORM, payload);
};

export const ActionSetDataFormSubmit = (context, payload) => {
  return apiTasks[payload.method](payload.endpoint, payload.form);
};

export const ActionGetMetas = ({ commit }, payload) => {
  var metas = apiTasks.get("/meta", payload);
  metas
    .then((response) => {
      var items = response.data.data;
      var concluida = 0;
      items.forEach((data) => {
        concluida = parseInt(concluida + data.concluida);
      });
      var media = concluida / parseInt(items.length);
      var speed = 1;
      if (media < 10) {
        speed = 10;
      }
      if (media >= 10 && media < 20) {
        speed = 9;
      }
      if (media >= 20 && media < 30) {
        speed = 8;
      }
      if (media >= 30 && media < 40) {
        speed = 8;
      }
      if (media >= 40 && media < 50) {
        speed = 7;
      }
      if (media >= 40 && media < 50) {
        speed = 6;
      }
      if (media >= 50 && media < 60) {
        speed = 5;
      }
      if (media >= 60 && media < 70) {
        speed = 4;
      }
      if (media >= 70 && media < 80) {
        speed = 3;
      }
      if (media >= 80 && media < 90) {
        speed = 2;
      }
      if (media >= 90 && media <= 100) {
        speed = 1;
      }
      commit(types.GET_METAS, response.data.data);
      commit(types.GET_METAS_CONCLUIDAS, {speed:speed});
    })
    .catch((error) => {
      console.log(error);
    });
  return metas;
};