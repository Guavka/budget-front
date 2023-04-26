import { getRequest } from 'boot/axios';
import { UserAuthData } from '../authorization/models/authSettings';
import { UserModel } from './models/userModel';

export default class MoneyDashboardApi {
  public static async getUserData(settings: UserAuthData): Promise<UserModel> {
    return getRequest({ params: settings })
      .then((result) => new UserModel(result))
      .catch((e) => { throw new Error(`dashboard api getUserData\n${e}`); });
  }
}
