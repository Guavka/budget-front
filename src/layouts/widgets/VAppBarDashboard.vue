<template>
  <v-app-bar app density="compact">
    <v-app-bar-title>{{ $t('header.title') }}</v-app-bar-title>

    <v-q-theme-toggler-widget class="me-1"></v-q-theme-toggler-widget>
    <v-q-locale-toggler-widget :data="locales"></v-q-locale-toggler-widget>
    <v-account-widget :user-data="userData"></v-account-widget>
  </v-app-bar>
</template>

<script setup lang="ts">
import { locales } from 'boot/i18n';
import { AccountMenuData } from 'modules/widgets/types';

const userData: AccountMenuData = {
  initials: 'JD',
  fullName: 'Dmitryy Vasiliev-Petrov',
  email: 'john.doe@doe.com',
};
</script>
