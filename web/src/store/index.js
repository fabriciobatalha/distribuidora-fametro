import Vue from 'vue';
import Vuex from 'vuex';

import clienteStore from './modules/clienteStore';

Vue.use(Vuex);

const useVuex = new Vuex.Store({
  modules: {
    clienteStore,
  },
});

export default useVuex;
