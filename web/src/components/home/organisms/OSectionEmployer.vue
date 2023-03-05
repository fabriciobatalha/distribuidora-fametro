<template>
  <v-expansion-panels class="o-section-employer">
    <v-expansion-panel @click="onPegarFuncionarios">
      <v-expansion-panel-header> Secao Funcionario </v-expansion-panel-header>
      <v-expansion-panel-content>
        <OFormEmployer />
        <OTableGeneral
          :headers="cabecalho"
          :dadosDaTabela="listaFuncionarios"
          class="mt-10"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { OTableGeneral } from '../../shared/organisms';
import { OFormEmployer } from './index';

export default {
  name: 'OSectionRegistrationAndListing',
  components: {
    OFormEmployer,
    OTableGeneral,
  },
  computed: {
    ...mapState('funcionarioStore', ['listaFuncionarios']),
    cabecalho() {
      return [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Endereço',
          align: 'start',
          sortable: false,
          value: 'endereco',
        },
        {
          text: 'Cargo',
          align: 'start',
          sortable: false,
          value: 'cargo',
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
    ...mapActions('funcionarioStore', ['pegarFuncionarios']),
    async onPegarFuncionarios() {
      try {
        await this.pegarFuncionarios();
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
