import Vue from 'vue';
import Vuex from 'vuex';

import clienteStore from './modules/clienteStore';
import entregadorStore from './modules/entregadorStore';
import funcionarioStore from './modules/funcionarioStore';
import pedidoStore from './modules/pedidoStore';
import produtoStore from './modules/produtoStore';

Vue.use(Vuex);

const useVuex = new Vuex.Store({
  modules: {
    clienteStore,
    entregadorStore,
    funcionarioStore,
    pedidoStore,
    produtoStore,
  },
});

export default useVuex;
