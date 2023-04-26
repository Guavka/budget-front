import MoneyDashboardApi from 'modules/api/dashboard/dashboardApi';
import MockMoneyDashboardApi from 'modules/api/dashboard/dashboardMockApi';
import { UserModel } from 'modules/api/dashboard/models/userModel';

const dashboardApi = !import.meta.env.VITE_IS_MOCK ? MoneyDashboardApi : MockMoneyDashboardApi;

export const useUserStore = defineStore('user', {
  state: () => <UserModel>{},
  getters: {
  },
  actions: {
    async getUserData(email: string, password: string) {
      await dashboardApi.getUserData({ email, password });
    },
  },
});
