import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { messages } from '../../locales';

interface LocalizationInfo {
  title: string,
  value: string,
}

export default boot(({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});

export const locales: LocalizationInfo[] = [
  {
    title: 'English',
    value: 'en',
  },
  {
    title: 'Русский',
    value: 'ru',
  },
];
