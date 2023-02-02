<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn :icon="icon" v-bind="props" :size="size">
      </v-btn>
    </template>
    <v-list>
      <v-list-subheader>{{ $t('header.locale') }}</v-list-subheader>
      <v-list-item v-for="(item, index) in data" :key="index" :value="index" @click="() => selectLocale(item.value)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>

</template>

<script setup lang="ts">
import { LocalizationInfo } from 'boot/i18n';
import { VButtonsSize } from './types';

export interface LocaleTogglerProps {
  data: LocalizationInfo[],
  icon?: string,
  size?: VButtonsSize,
}

withDefaults(defineProps<LocaleTogglerProps>(), {
  icon: 'mdi-translate',
  size: 'large',
});

const $q = useQuasar();
const { locale } = useI18n({ useScope: 'global' });

const selectLocale = (newLocale: string) => {
  locale.value = newLocale;
  $q.cookies.set('locale', newLocale);
};

</script>

<style lang="scss" scoped>

</style>
