<template>
  <q-layout>
    <v-app-bar-dashboard />
    <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
    <v-main>
      <q-page-container>
        <router-view />
      </q-page-container>
    </v-main>
  </q-layout>
</template>

<script setup lang="ts">
</script>
