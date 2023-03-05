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
    pegarClientes(context) {
      const response = api.clienteProvider.getAll();

      context.commit('SET_CLIENTES', response);
    },
  },
};
