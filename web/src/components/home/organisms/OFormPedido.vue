<template>
  <v-form class="o-form-client">
    <v-text-field v-model="form.data" label="Data" required />
    <v-text-field v-model="form.nota_fiscal" label="Nota Fiscal" required />

    <v-btn
      :disabled="
        form.data === null ||
        form.data === '' ||
        form.nota_fiscal === null ||
        form.nota_fiscal === ''
      "
      color="success"
      class="mr-4"
      @click="onCadastrarPedido"
    >
      Cadastrar
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'OFormProduct',
  components: {},
  data() {
    return {
      form: {
        data: null,
        nota_fiscal: null,
      },
    };
  },
  methods: {
    ...mapActions('pedidoStore', ['cadastrarPedido']),
    async onCadastrarPedido() {
      try {
        await this.cadastrarPedido(this.form);
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
