<template>
  <v-form class="o-form-client">
    <v-text-field v-model="name" label="Nome" required></v-text-field>
    <v-text-field v-model="email" label="Endereco" required></v-text-field>
    <v-text-field v-model="email" label="CPF" required></v-text-field>
    <v-text-field v-model="email" label="Telefone" required></v-text-field>

    <v-btn color="success" class="mr-4" @click="cadastrarCliente">
      Cadastrar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'OFormClient',

  components: {},
};
</script>

<style lang="css">
.o-form-client {
}
</style>
