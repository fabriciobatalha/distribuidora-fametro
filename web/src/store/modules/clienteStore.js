import api from '@/providers/api';

export default {
  namespaced: true,
  state: {
    listaClientes: [],
  },
  getters: {},
  mutations: {
    SET_CLIENTES(state, payload) {
      state.listaClientes = payload;
    },
  },
  actions: {
    async pegarClientes(context) {
      const response = await api.clienteProvider.getAll();

      context.commit('SET_CLIENTES', response);
    },
    async cadastrarCliente({ dispatch }, payload) {
      await api.clienteProvider.saveClient(payload);
      await dispatch('pegarClientes');
    },
  },
};
