<template>
  <v-app class="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log('teste')
    console.log(this.$route)
  },
};
</script>

<style scoped>
</style>
