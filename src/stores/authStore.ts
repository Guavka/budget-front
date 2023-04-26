import AuthorizationApi from 'modules/api/authorization/authorizationApi';
import MockAuthorizationApi from 'modules/api/authorization/mockAuthorizationApi';
import { UserAuthData } from 'modules/api/authorization/models/authSettings';
import { TokenModel } from 'modules/api/authorization/models/tokenModel';

const api = !import.meta.env.VITE_IS_MOCK ? AuthorizationApi : MockAuthorizationApi;

export const useTokenStore = defineStore('token', {
  state: () => <TokenModel>{},
  getters: {
  },
  actions: {
    async registration(authData: UserAuthData) {
      try {
        this.$state = await api.postRegistration(authData);
      } catch (e) {
        if (e instanceof Error) { throw new Error(`registration error\n${e}`); }
      }
      return this.$state;
    },
  },
});
