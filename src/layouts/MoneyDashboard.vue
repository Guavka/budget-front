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
      <v-spacer></v-spacer>

      <v-theme-toggler></v-theme-toggler>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
    <v-main>
      <v-card height="200px">
      </v-card>
    </v-main>
  </v-layout>

</template>

<script setup lang="ts">

</script>
