<template>
  <v-form class="o-form-client">
    <v-text-field v-model="form.name" label="Nome" required />
    <v-text-field v-model="form.cargo" label="Cargo" required />
    <v-text-field v-model="form.cpf" label="CPF" required />
    <v-text-field v-model="form.telefone" label="Telefone" required />

    <v-btn
      :disabled="
        form.name === null ||
        form.name === '' ||
        form.cargo === null ||
        form.cargo === '' ||
        form.cpf === null ||
        form.cpf === '' ||
        form.telefone === null ||
        form.telefone === ''
      "
      color="success"
      class="mr-4"
      @click="onCadastrarFuncionario"
    >
      Cadastrar
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'OFormClient',
  components: {},
  data() {
    return {
      form: {
        name: null,
        cargo: null,
        cpf: null,
        telefone: null,
        cd_funcionarios: 1,
      },
    };
  },
  methods: {
    ...mapActions('funcionarioStore', ['cadastrarFuncionario']),
    async onCadastrarFuncionario() {
      try {
        await this.cadastrarFuncionario(this.form);
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
