<template>
  <v-expansion-panels class="o-section-employer">
    <v-expansion-panel @click="onPegarPedidos">
      <v-expansion-panel-header> Secao Pedido </v-expansion-panel-header>
      <v-expansion-panel-content>
        <OFormPedido />
        <OTableGeneral
          :headers="cabecalho"
          :dadosDaTabela="listaPedidos"
          class="mt-10"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { OTableGeneral } from '../../shared/organisms';
import { OFormPedido } from './index';

export default {
  name: 'OSectionRegistrationAndListing',
  components: {
    OFormPedido,
    OTableGeneral,
  },
  computed: {
    ...mapState('pedidoStore', ['listaPedidos']),
    cabecalho() {
      return [
        {
          text: 'Data',
          align: 'start',
          sortable: false,
          value: 'data',
        },
        {
          text: 'Nota Fiscal',
          align: 'start',
          sortable: false,
          value: 'nota_fiscal',
        },
      ];
    },
  },
  methods: {
    ...mapActions('pedidoStore', ['pegarPedidos']),
    async onPegarPedidos() {
      try {
        await this.pegarPedidos();
      } catch (error) {
        console.log('Erro: ', error);
      }
    },
  },
};
</script>

<style lang="css">
.o-section-employer {
}
</style>
