<template>
  <q-layout>
    <v-layout>
      <v-app-bar-dashboard />
      <v-main>
        <q-page-container>
          <router-view />
        </q-page-container>
      </v-main>
      <v-bot-menu-dashboard />
    </v-layout>
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss"></style>
