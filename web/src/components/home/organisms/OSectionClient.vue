<template>
  <v-expansion-panels class="o-section-client">
    <v-expansion-panel @click="onPegarClientes">
      <v-expansion-panel-header> Secao Cliente </v-expansion-panel-header>
      <v-expansion-panel-content>
        <OFormClient />
        <OTableGeneral
          :headers="cabecalho"
          :dadosDaTabela="listaClientes"
          class="mt-10"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { OTableGeneral } from './../../shared/organisms';
import { OFormClient } from './index';

export default {
  name: 'OSectionRegistrationAndListing',
  components: {
    OFormClient,
    OTableGeneral,
  },
  computed: {
    ...mapState('clienteStore', ['listaClientes']),
    cabecalho() {
      return [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'nome',
        },
        {
          text: 'Endereço',
          align: 'start',
          sortable: false,
          value: 'endereco',
        },
        {
          text: 'CPF',
          align: 'start',
          sortable: false,
          value: 'cpf',
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
    ...mapActions('clienteStore', ['pegarClientes']),
    async onPegarClientes() {
      try {
        await this.pegarClientes();
        console.log('Sucesso');
      } catch (error) {
        console.log('Erro: ', error);
      }
    },
  },
};
</script>

<style lang="css">
.o-section-client {
}
</style>
