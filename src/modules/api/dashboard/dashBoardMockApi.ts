import { userMock } from './mock/mock';
import { UserParams } from '../authorization/authorizationsSettings';
import { UserModel } from './types/models/userModel';

export default class MockMoneyDashboardApi {
  public static async getUserData(settings: UserParams): Promise<UserModel> {
    try {
      return new UserModel(userMock);
    } catch (e) {
      if (e instanceof Error) { throw new Error(`dashboard mock api request\n${e.message}`); }
      throw new Error();
    }
  }
}
