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
  return commit(types.SET_MODAL_SUBMIT_FORM, payload);
};
