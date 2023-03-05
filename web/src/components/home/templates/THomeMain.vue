<template>
  <div class="t-home-main">
    <OSectionEmployer />
    <OSectionClient class="mt-5" />
  </div>
</template>

<script>
import { OSectionClient, OSectionEmployer } from './../organisms';

export default {
  name: 'THomeMain',

  components: {
    OSectionClient,
    OSectionEmployer,
  },
};
</script>

<style lang="css">
.t-home-main {
}
</style>
