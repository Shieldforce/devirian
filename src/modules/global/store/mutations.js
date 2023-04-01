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
  [types.SET_MODAL_CREATE_UPDATE](state, payload) {
    state.modalCreateUpdateConfig = payload;
  },
  [types.SET_MODAL_DATA_FORM](state, payload) {
    state.dataForm = payload;
  },
  [types.GET_METAS](state, payload) {
    state.metas = payload;
  },
  [types.GET_METAS_CONCLUIDAS](state, payload) {
    state.metasConcluidas = payload;
  },
  [types.GET_TAREFAS](state, payload) {
    state.tarefas = payload;
  },
  [types.GET_TAREFAS_CONCLUIDAS](state, payload) {
    state.tarefasConcluidas = payload;
  },

  [types.GET_CHAT](state, payload) {
    state.chat = payload;
  }
};
