import { getRequest } from 'boot/axios';
import { UserParams } from './types/dashApiSettings';
import { UserModel } from './types/models/userModel';

export default class MoneyDashboardApi {
  public static async getUserData(settings: UserParams): Promise<UserModel> {
    return getRequest({ params: settings })
      .then((result) => new UserModel(result))
      .catch((e) => { throw new Error(`dashboard api getUserData\n${e}`); });
  }
}
