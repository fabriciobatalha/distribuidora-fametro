import api from '@/providers/api';

export default {
  namespaced: true,
  state: {
    listaProdutos: [],
  },
  getters: {},
  mutations: {
    SET_PRODUTOS(state, payload) {
      state.listaProdutos = payload;
    },
  },
  actions: {
    async pegarProdutos(context) {
      const response = await api.produtoProvider.getAll();

      context.commit('SET_PRODUTOS', response);
    },
    async cadastrarProduto({ dispatch }, payload) {
      await api.produtoProvider.saveProduto(payload);
      await dispatch('pegarProdutos');
    },
  },
};
