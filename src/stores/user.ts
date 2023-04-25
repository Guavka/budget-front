import MoneyDashboardApi from 'modules/api/dashboard/dashBoardApi';
import MockMoneyDashboardApi from 'modules/api/dashboard/dashBoardMockApi';
import { UserModel } from 'modules/api/dashboard/types/models/userModel';

const stateData = {
  userData: <UserModel>{},
  isMock: import.meta.env.VITE_IS_MOCK,
};

export const useUserStore = defineStore('user', {
  state: () => stateData,
  getters: {
    getScores: (state) => state.userData.scores,
  },
  actions: {
    async getUserData(email: string, password: string) {
      if (this.isMock) {
        this.userData = await MockMoneyDashboardApi.getUserData({ email, password });
      } else {
        this.userData = await MoneyDashboardApi.getUserData({ email, password });
      }
    },
  },
});
