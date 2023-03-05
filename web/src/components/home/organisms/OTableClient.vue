<template>
  <div class="o-table-client">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'OTableCLient',

  components: {},
};
</script>

<style lang="css">
.o-table-client {
}
</style>
