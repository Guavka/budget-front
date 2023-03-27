<template>
  <q-layout view="hHh lpR fFf" container>
    <q-header>
      <q-toolbar>
        <v-app-bar-dashboard />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <v-bot-menu-dashboard />
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss"></style>
