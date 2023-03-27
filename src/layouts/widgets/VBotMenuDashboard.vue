<template>
  <v-bottom-navigation elevation="4" grow absolute class="overflow-visible">
    <v-btn to="/scores">
      <v-icon>mdi-safe</v-icon>
      {{ $t('footer.scores') }}
    </v-btn>

    <v-btn to="/operations">
      <v-icon>mdi-swap-horizontal-circle</v-icon>
      {{ $t('footer.operations') }}
    </v-btn>

    <v-btn to="/stats">
      <v-icon>mdi-chart-pie</v-icon>
      {{ $t('footer.stats') }}
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
// class="overflow-visible"
</script>

<style scoped></style>
