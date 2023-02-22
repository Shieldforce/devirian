import * as types from "./mutation-types";

export default {
  [types.SET_SNACKBAR](state, payload) {
    state.snackBarConfig = payload;
  },
};
