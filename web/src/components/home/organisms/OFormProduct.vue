<template>
  <v-form class="o-form-client">
    <v-text-field v-model="form.descricao" label="Descricao" required />
    <v-text-field v-model="form.quantidade" label="Quantidade" required />
    <v-text-field v-model="form.preco" label="Preco" required />

    <v-btn
      :disabled="
        form.descricao === null ||
        form.descricao === '' ||
        form.quantidade === null ||
        form.quantidade === '' ||
        form.preco === null ||
        form.preco === ''
      "
      color="success"
      class="mr-4"
      @click="onCadastrarProduto"
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
        descricao: null,
        quantidade: null,
        preco: null,
      },
    };
  },
  methods: {
    ...mapActions('produtoStore', ['cadastrarProduto']),
    async onCadastrarProduto() {
      try {
        await this.cadastrarProduto(this.form);
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
