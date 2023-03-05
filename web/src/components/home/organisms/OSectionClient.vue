<template>
  <v-expansion-panels class="o-section-client">
    <v-expansion-panel>
      <v-expansion-panel-header> Item </v-expansion-panel-header>
      <v-expansion-panel-content>
        <OFormClient />
        <OTableClient />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { OFormClient, OTableClient } from './index';

export default {
  name: 'OSectionRegistrationAndListing',

  components: {
    OFormClient,
    OTableClient,
  },
};
</script>

<style lang="css">
.o-section-client {
}
</style>
