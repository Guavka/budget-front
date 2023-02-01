import { boot } from 'quasar/wrappers';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default boot(({ app }) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
    },
  });

  // Set i18n instance on app
  app.use(vuetify);
});
