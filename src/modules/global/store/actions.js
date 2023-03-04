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
