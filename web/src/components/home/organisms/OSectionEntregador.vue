<template>
  <v-expansion-panels class="o-section-employer">
    <v-expansion-panel @click="onPegarEntregadores">
      <v-expansion-panel-header> Secao Entregador </v-expansion-panel-header>
      <v-expansion-panel-content>
        <OFormEntregador />
        <OTableGeneral
          :headers="cabecalho"
          :dadosDaTabela="listaEntregadores"
          class="mt-10"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { OTableGeneral } from '../../shared/organisms';
import { OFormEntregador } from './index';

export default {
  name: 'OSectionRegistrationAndListing',
  components: {
    OFormEntregador,
    OTableGeneral,
  },
  computed: {
    ...mapState('entregadorStore', ['listaEntregadores']),
    cabecalho() {
      return [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'nome',
        },
        {
          text: 'Telefone',
          align: 'start',
          sortable: false,
          value: 'telefone',
        },
      ];
    },
  },
  methods: {
    ...mapActions('entregadorStore', ['pegarEntregadores']),
    async onPegarEntregadores() {
      try {
        await this.pegarEntregadores();
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
