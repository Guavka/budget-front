import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL, params: {} });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export interface RequestSettings {
  url?: string,
  params: any
}

export async function getRequest(settings: RequestSettings) {
  try {
    const { url = '', params } = settings;
    const response = await axios.get(url, { params });
    return response.data;
  } catch (e) {
    if (e instanceof Error) { throw new Error(`get request\n${e.message}`); }
    return null;
  }
}

export async function postRequest(settings: RequestSettings) {
  try {
    const { url = '', params } = settings;
    const response = await axios.post(url, { params });
    return response.data;
  } catch (e) {
    if (e instanceof Error) { throw new Error(`post request\n${e.message}`); }
    return null;
  }
}
