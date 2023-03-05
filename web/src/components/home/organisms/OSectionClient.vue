<template>
  <v-expansion-panels class="o-section-client">
    <v-expansion-panel>
      <v-expansion-panel-header> Secao Cliente </v-expansion-panel-header>
      <v-expansion-panel-content>
        <OFormClient />
        <OTableGeneral class="mt-10" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { OTableGeneral } from './../../shared/organisms';
import { OFormClient } from './index';

export default {
  name: 'OSectionRegistrationAndListing',

  components: {
    OFormClient,
    OTableGeneral,
  },
};
</script>

<style lang="css">
.o-section-client {
}
</style>
