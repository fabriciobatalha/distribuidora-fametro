<template>
  <div class="o-table-general">
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
  name: 'OTableGeneral',

  components: {},
};
</script>

<style lang="css">
.o-table-general {
}
</style>
