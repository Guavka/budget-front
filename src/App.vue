<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';

const metaData = {
  // sets document title
  title: 'Index Page',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title: any): string => `${title} - My Website`,

  // meta tags
  meta: {
    description: { name: 'description', content: 'Page 1' },
    keywords: { name: 'keywords', content: 'Quasar website' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is
    // rendered by the server
    ogTitle: {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template(ogTitle: any) {
        return `${ogTitle} - My Website`;
      },
    },
  },

  // CSS tags
  link: {
    material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
  },

  // JS tags
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: '{ "@context": "http://schema.org" }',
    },
  },

  // <html> attributes
  htmlAttr: {
    'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined, // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    'action-scope': 'xyz', // generates <body action-scope="xyz">
    empty: undefined, // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: 'This is content for browsers with no JS (or disabled JS)',
  },
};

useMeta(metaData);

const $q = useQuasar();
const { locale } = useI18n({ useScope: 'global' });

const cookieLocale = $q.cookies.get('locale');
if (cookieLocale) {
  locale.value = cookieLocale;
} else {
  $q.cookies.set('locale', String(locale.value));
}

const theme = useTheme();
const themeName = ref(theme.global.name);

const cookieTheme = $q.cookies.get('theme');
if (cookieTheme) {
  themeName.value = cookieTheme;
} else {
  $q.cookies.set('theme', String(themeName.value));
}

</script>
