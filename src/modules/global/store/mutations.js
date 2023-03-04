import * as types from "./mutation-types";

export default {
  [types.SET_SNACKBAR](state, payload) {
    state.snackBarConfig = payload;
  },
  [types.SET_MODAL_CONFIRM](state, payload) {
    state.modalConfirmConfig = payload;
  },
  [types.SET_MODAL_CONFIRM_ACCEPTED](state, payload) {
    state.modalConfirmConfig.accept = payload;
  },
};
