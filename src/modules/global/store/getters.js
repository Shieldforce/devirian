const getters = {
  getMetas(state) {
    return state.metas;
  },
  getMetasConcluidas(state) {
    return state.metasConcluidas;
  },
  getTarefas(state) {
    return state.tarefas;
  },
  getTarefasConcluidas(state) {
    return state.tarefasConcluidas;
  },
};

export default getters;
