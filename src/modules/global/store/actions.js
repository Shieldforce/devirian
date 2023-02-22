import * as types from "./mutation-types";

export const ActionSetSnackbar = ({ commit }, payload) => {
  commit(types.SET_SNACKBAR, payload);
};
