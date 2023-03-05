// import api from '@/providers/api';

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    setUsers(context, payload) {
      context.commit('SET_USERS', payload);
    },
  },
};
