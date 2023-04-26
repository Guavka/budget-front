<template>
  <v-app-bar-dashboard />
  <v-main class="main">
    <router-view />
  </v-main>
  <v-bot-menu-dashboard />
</template>

<script setup lang="ts">
import { authMock } from 'modules/api/authorization/mock/authMock';
import { UserAuthData } from 'modules/api/authorization/models/authSettings';
import { useTokenStore } from 'stores/authStore';

const store = useTokenStore();
const isMock = import.meta.env.VITE_IS_MOCK;
let userInput: UserAuthData = authMock;

if (!isMock) {
  userInput = { email: 'sdfsdf@sfdsfsdf.com', password: '12345' };
}
store.registration(userInput)
  .then((result) => console.log(result))
  .catch((e) => console.error(e));
</script>

<style scoped lang="scss">
.main {
  .main {
    height: 100svh;
    overflow-y: scroll;
  }
}
</style>
