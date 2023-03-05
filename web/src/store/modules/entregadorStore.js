import api from '@/providers/api';

export default {
  namespaced: true,
  state: {
    listaEntregador: [],
  },
  getters: {},
  mutations: {
    SET_ENTREGADOR(state, payload) {
      state.listaEntregador = payload;
    },
  },
  actions: {
    async pegarEntregadores(context) {
      const response = await api.entregadorProvider.getAll();

      context.commit('SET_ENTREGADOR', response);
    },
    async cadastrarEntregador({ dispatch }, payload) {
      await api.entregadorProvider.saveEntregador(payload);
      await dispatch('pegarEntregadores');
    },
  },
};
