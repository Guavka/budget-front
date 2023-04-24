<template>
  <v-app-bar-dashboard />
  <v-main class="main">
    <router-view />
  </v-main>
  <v-bot-menu-dashboard />
</template>

<script setup lang="ts">
import { useUserStore } from 'stores/user';

const store = useUserStore();
console.log(store.getUserData('123', '123'));

</script>

<style scoped lang="scss">
.main {
  height: 100svh;
  overflow-y: scroll;
}
</style>
