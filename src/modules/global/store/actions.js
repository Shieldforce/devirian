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
      var progressColor = "rgba(0,0,0, 0.3)";
      var speed = 1;
      if (media < 10) {
        speed = 11;
        progressColor = "rgba(255,0,0, 0.3)";
      }
      if (media >= 10 && media < 20) {
        speed = 10;
        progressColor = "rgba(255,0,0, 0.3)";
      }
      if (media >= 20 && media < 30) {
        speed = 9;
        progressColor = "rgba(255,0,0, 0.3)";
      }
      if (media >= 30 && media < 40) {
        speed = 8;
        progressColor = "rgba(255,117,24, 0.3)";
      }
      if (media >= 40 && media < 50) {
        speed = 7;
        progressColor = "rgba(255,117,24, 0.3)";
      }
      if (media >= 40 && media < 50) {
        speed = 6;
        progressColor = "rgba(255,117,24, 0.3)";
      }
      if (media >= 50 && media < 60) {
        speed = 5;
        progressColor = "rgba(255,255,0, 0.3)";
      }
      if (media >= 60 && media < 70) {
        speed = 4;
        progressColor = "rgba(255,255,0, 0.3)";
      }
      if (media >= 70 && media < 80) {
        speed = 3;
        progressColor = "rgba(255,255,0, 0.3)";
      }
      if (media >= 80 && media < 90) {
        speed = 2;
        progressColor = "rgba(50,205,50, 0.3)";
      }
      if (media >= 90 && media <= 100) {
        speed = 1;
        progressColor = "rgba(50,205,50, 0.3)";
      }
      var progressValue = speed * 10 - 10;
      commit(types.GET_METAS, response.data.data);
      commit(types.GET_METAS_CONCLUIDAS, {
        speed: speed,
        progressValue: progressValue,
        progressColor: progressColor,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return metas;
};

export const ActionGetTarefas = ({ commit }, payload) => {
  var tarefas = apiTasks.get("/tarefa", payload);
  tarefas
    .then((response) => {
      var items = response.data.data;
      var concluida = 0;
      items.forEach((data) => {
        concluida = parseInt(concluida + data.concluida);
      });
      var media = concluida / parseInt(items.length);
      var progressColor = "rgba(0,0,0, 0.3)";
      var speed = 1;
      if (media < 10) {
        speed = 11;
        progressColor = "rgba(255,0,0, 0.3)";
      }
      if (media >= 10 && media < 20) {
        speed = 10;
        progressColor = "rgba(255,0,0, 0.3)";
      }
      if (media >= 20 && media < 30) {
        speed = 9;
        progressColor = "rgba(255,0,0, 0.3)";
      }
      if (media >= 30 && media < 40) {
        speed = 8;
        progressColor = "rgba(255,117,24, 0.3)";
      }
      if (media >= 40 && media < 50) {
        speed = 7;
        progressColor = "rgba(255,117,24, 0.3)";
      }
      if (media >= 40 && media < 50) {
        speed = 6;
        progressColor = "rgba(255,117,24, 0.3)";
      }
      if (media >= 50 && media < 60) {
        speed = 5;
        progressColor = "rgba(255,255,0, 0.3)";
      }
      if (media >= 60 && media < 70) {
        speed = 4;
        progressColor = "rgba(255,255,0, 0.3)";
      }
      if (media >= 70 && media < 80) {
        speed = 3;
        progressColor = "rgba(255,255,0, 0.3)";
      }
      if (media >= 80 && media < 90) {
        speed = 2;
        progressColor = "rgba(50,205,50, 0.3)";
      }
      if (media >= 90 && media <= 100) {
        speed = 1;
        progressColor = "rgba(50,205,50, 0.3)";
      }
      var progressValue = speed * 10 - 10;
      commit(types.GET_TAREFAS, response.data.data);
      commit(types.GET_TAREFAS_CONCLUIDAS, {
        speed: speed,
        progressValue: progressValue,
        progressColor: progressColor,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return tarefas;
};
