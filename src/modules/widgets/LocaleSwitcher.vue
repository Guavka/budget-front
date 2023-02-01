<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    :label="label"
    dense
    borderless
    emit-value
    map-options
    options-dense
    :style="minWidthComp" />
</template>

<script setup lang="ts">

export interface LocaleOptions {
  value: string,
  label: string
}
export interface LocaleSwitcherProps {
  localeOptions: LocaleOptions[],
  label?: string,
  minWidth?: string
}

const $q = useQuasar();

const props = withDefaults(defineProps<LocaleSwitcherProps>(), {
  minWidth: '120px',
  label: 'Select language',
  localeOptions: () => [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
  ],
});

const { locale } = useI18n({ useScope: 'global' });
const minWidthComp = computed(() => `min-width: ${props.minWidth}`);

watch(locale, () => {
  $q.cookies.set('locale', String(locale.value));
});

</script>

<style scoped>
</style>
