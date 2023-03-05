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
      // const response = api.clienteProvider.getAll();

      const response = [
        {
          id: 0,
          nome: 'Junio',
          endereco: 'Rua Tal, 33',
          cpf: '100.000.000-00',
          telefone: '(10) 00000-0000',
        },
        {
          id: 1,
          nome: 'Marcos',
          endereco: 'Rua Fulano, 44',
          cpf: '200.000.000-00',
          telefone: '(11) 00000-0000',
        },
        {
          id: 2,
          nome: 'Brenno',
          endereco: 'Rua Tal, 77',
          cpf: '300.000.000-00',
          telefone: '(22) 00000-0000',
        },
        {
          id: 3,
          nome: 'Andrew',
          endereco: 'Rua Tal, 99',
          cpf: '400.000.000-00',
          telefone: '(33) 00000-0000',
        },
      ];

      context.commit('SET_CLIENTES', response);
    },
    cadastrarCliente(_, payload) {
      api.clienteProvider.saveClient(payload);
      this.pegarClientes();
    },
  },
};
