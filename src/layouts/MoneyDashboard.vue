<template>
  <v-layout>
    <v-app-bar :elevation="3" rounded>
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>{{ $t('header.title') }}</v-app-bar-title>

      <v-q-theme-toggler-widget class="me-auto"></v-q-theme-toggler-widget>
      <v-q-locale-toggler-widget :data="locales"></v-q-locale-toggler-widget>
      <v-account-widget :user-data="userData"></v-account-widget>

    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
    <v-main>
      <v-card height="200px">
      </v-card>
    </v-main>
  </v-layout>

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
