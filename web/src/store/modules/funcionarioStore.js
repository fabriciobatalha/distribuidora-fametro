import api from '@/providers/api';

export default {
  namespaced: true,
  state: {
    listaFuncionarios: [],
  },
  getters: {},
  mutations: {
    SET_FUNCIONARIOS(state, payload) {
      state.listaFuncionarios = payload;
    },
  },
  actions: {
    async pegarFuncionarios(context) {
      const response = await api.funcionarioProvider.getAll();

      context.commit('SET_FUNCIONARIOS', response);
    },
    async cadastrarFuncionario({ dispatch }, payload) {
      await api.funcionarioProvider.saveEmployer(payload);
      await dispatch('pegarFuncionarios');
    },
  },
};
