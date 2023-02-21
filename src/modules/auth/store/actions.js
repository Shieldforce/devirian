import apiTasks from "../http/apiTasks/index"
import * as types from "./mutation-types";

export const ActionDoLogin = (context, payload) => {
  return apiTasks.post(payload.action, payload);
}

export const ActionResetPassword = (context, payload) => {
  return apiTasks.post('resetPassword', payload);
}

export const ActionLogout = (context, payload) => {
  return apiTasks.post('auth/logout', payload);
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
}