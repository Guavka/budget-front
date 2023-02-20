<template>
  <q-layout>
    <v-app-bar-dashboard />
    <v-main class="page-content">
      <q-page-container>
        <router-view />
      </q-page-container>
    </v-main>
    <v-bot-menu-dashboard />
  </q-layout>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"></style>
