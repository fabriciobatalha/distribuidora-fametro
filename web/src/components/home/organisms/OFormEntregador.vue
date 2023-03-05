<template>
  <v-form class="o-form-client">
    <v-text-field v-model="form.nome" label="Nome" required />
    <v-text-field v-model="form.telefone" label="Telefone" required />

    <v-btn
      :disabled="
        form.nome === null ||
        form.nome === '' ||
        form.telefone === null ||
        form.telefone === ''
      "
      color="success"
      class="mr-4"
      @click="onCadastrarEntregador"
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
        cd_entregador: 1,
        nome: null,
        nr_entregador: 1,
        nr_pedido: 1,
        telefone: null,
      },
    };
  },
  methods: {
    ...mapActions('entregadorStore', ['cadastrarEntregador']),
    async onCadastrarEntregador() {
      try {
        await this.cadastrarEntregador(this.form);
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
