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
  apiTasks
    .get("/meta", payload)
    .then((response) => {
      commit(types.GET_METAS, response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
