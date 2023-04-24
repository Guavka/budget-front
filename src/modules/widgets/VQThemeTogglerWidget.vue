<template>
  <v-btn :icon="icon" @click="toggleTheme" :size="size">
  </v-btn>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
import { VButtonsSize } from './types';

export interface ThemeTogglerProps {
  lightThemeIcon?: string,
  darkThemeIcon?: string,
  size?: VButtonsSize
}

const props = withDefaults(defineProps<ThemeTogglerProps>(), {
  lightThemeIcon: 'mdi-weather-sunny',
  darkThemeIcon: 'mdi-weather-night',
  size: 'small',
});

const $q = useQuasar();
const theme = useTheme();

const themeName = ref(theme.global.name);
const icon = computed(() => (themeName.value === 'light' ? props.lightThemeIcon : props.darkThemeIcon));

function toggleTheme() {
  themeName.value = theme.global.current.value.dark ? 'light' : 'dark';

  $q.cookies.set('theme', String(themeName.value));
}

</script>
