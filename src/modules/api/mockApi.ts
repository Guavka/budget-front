import { userMock } from './mock/mock';
import { UserModel } from './types/models/userModel';

export default class MockMoneyDashboardApi {
  public static async getUserData(): Promise<UserModel> {
    try {
      return new UserModel(userMock);
    } catch (e) {
      if (e instanceof Error) { throw new Error(`dashboard mock api request\n${e.message}`); }
      throw new Error();
    }
  }
}
