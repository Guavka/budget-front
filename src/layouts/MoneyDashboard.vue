<template>
  <q-layout container view="hHh lpR fFf">
    <q-header elevated>
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
