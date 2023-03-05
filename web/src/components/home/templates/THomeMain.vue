<template>
  <div class="t-home-main">
    <OSectionEmployer />
    <OSectionClient class="mt-5" />
    <OSectionProduct class="mt-5" />
    <OSectionEntregador class="mt-5" />
    <OSectionPedido class="mt-5" />
  </div>
</template>

<script>
import {
  OSectionClient,
  OSectionEmployer,
  OSectionProduct,
  OSectionEntregador,
  OSectionPedido,
} from './../organisms';

export default {
  name: 'THomeMain',

  components: {
    OSectionClient,
    OSectionEmployer,
    OSectionProduct,
    OSectionEntregador,
    OSectionPedido,
  },
};
</script>

<style lang="css">
.t-home-main {
}
</style>
