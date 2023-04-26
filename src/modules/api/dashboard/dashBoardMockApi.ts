import { userMock } from './mock/mock';
import { UserAuthData } from '../authorization/models/authSettings';
import { UserModel } from './models/userModel';

export default class MockMoneyDashboardApi {
  public static async getUserData(settings: UserAuthData): Promise<UserModel> {
    try {
      return new UserModel(userMock);
    } catch (e) {
      if (e instanceof Error) { throw new Error(`dashboard mock api request\n${e.message}`); }
      throw new Error();
    }
  }
}
