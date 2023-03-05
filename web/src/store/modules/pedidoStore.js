import api from '@/providers/api';

export default {
  namespaced: true,
  state: {
    listaPedido: [],
  },
  getters: {},
  mutations: {
    SET_PEDIDO(state, payload) {
      state.listaPedido = payload;
    },
  },
  actions: {
    async pegarPedidos(context) {
      const response = await api.pedidoProvider.getAll();

      context.commit('SET_PEDIDO', response);
    },
    async cadastrarEntregador({ dispatch }, payload) {
      await api.pedidoProvider.savePedido(payload);
      await dispatch('pegarPedidos');
    },
  },
};
