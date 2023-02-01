import { Cookies } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(({ app, ssrContext }) => {
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies;

  app.config.globalProperties.$cookies = cookies;
});
