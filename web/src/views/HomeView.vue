<template>
  <div class="home-view">
    <THomeMain />
  </div>
</template>

<script>
import { THomeMain } from './../components/home/templates';

export default {
  name: 'Home',

  components: {
    THomeMain,
  },
};
</script>

<style lang="css">
.home-view {
}
</style>
