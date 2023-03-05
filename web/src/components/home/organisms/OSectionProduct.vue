<template>
  <v-expansion-panels class="o-section-employer">
    <v-expansion-panel @click="onPegarProdutos">
      <v-expansion-panel-header> Secao Produto </v-expansion-panel-header>
      <v-expansion-panel-content>
        <OFormProduct />
        <OTableGeneral
          :headers="cabecalho"
          :dadosDaTabela="listaProdutos"
          class="mt-10"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { OTableGeneral } from '../../shared/organisms';
import { OFormProduct } from './index';

export default {
  name: 'OSectionRegistrationAndListing',
  components: {
    OFormProduct,
    OTableGeneral,
  },
  computed: {
    ...mapState('produtoStore', ['listaProdutos']),
    cabecalho() {
      return [
        {
          text: 'Descricao',
          align: 'start',
          sortable: false,
          value: 'descricao',
        },
        {
          text: 'Quantidade',
          align: 'start',
          sortable: false,
          value: 'quantidade',
        },
        {
          text: 'Preco',
          align: 'start',
          sortable: false,
          value: 'preco',
        },
      ];
    },
  },
  methods: {
    ...mapActions('produtoStore', ['pegarProdutos']),
    async onPegarProdutos() {
      try {
        await this.pegarProdutos();
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
