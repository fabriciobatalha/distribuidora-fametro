import Vue from 'vue';
import Vuex from 'vuex';

import clienteStore from './modules/clienteStore';
import funcionarioStore from './modules/funcionarioStore';

Vue.use(Vuex);

const useVuex = new Vuex.Store({
  modules: {
    clienteStore,
    funcionarioStore,
  },
});

export default useVuex;
