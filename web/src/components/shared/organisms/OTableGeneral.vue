<template>
  <div class="o-table-general">
    <v-data-table
      :headers="headers"
      :items="dadosDaTabela"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'OTableGeneral',
  components: {},
  props: {
    headers: {
      type: Array,
      required: true,
    },
    dadosDaTabela: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="css">
.o-table-general {
}
</style>
