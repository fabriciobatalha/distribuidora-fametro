<template>
  <v-form class="o-form-client">
    <v-text-field v-model="form.nome" label="Nome" required />
    <v-text-field v-model="form.endereco" label="Endereco" required />
    <v-text-field v-model="form.cpf" label="CPF" required />
    <v-text-field v-model="form.telefone" label="Telefone" required />

    <v-btn
      :disabled="
        form.nome === null ||
        form.nome === '' ||
        form.endereco === null ||
        form.endereco === '' ||
        form.cpf === null ||
        form.cpf === '' ||
        form.telefone === null ||
        form.telefone === ''
      "
      color="success"
      class="mr-4"
      @click="onCadastrarCliente"
    >
      Cadastrar
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OFormClient',
  components: {},
  data() {
    return {
      form: {
        nome: null,
        endereco: null,
        cpf: null,
        telefone: null,
      },
    };
  },
  methods: {
    ...mapState('clienteStore', ['cadastrarCliente']),
    async onCadastrarCliente() {
      try {
        await this.cadastrarCliente();
        console.log('Sucesso');
      } catch (error) {
        console.log('Erro: ', error);
      }
    },
  },
};
</script>

<style lang="css">
.o-form-client {
}
</style>
