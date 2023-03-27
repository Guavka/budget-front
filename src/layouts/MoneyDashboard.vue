<template>
  <v-app-bar-dashboard />
  <v-main class="main">
    <router-view />
  </v-main>
  <v-bot-menu-dashboard />
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.main {
  height: 100vh;
  overflow-y: scroll;
}
</style>
