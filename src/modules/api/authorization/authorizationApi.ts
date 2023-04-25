import { postRequest } from 'boot/axios';
import { UserParams } from './authorizationsSettings';

export default class AuthorizationApi {
  public static async getUserData(settings: UserParams): Promise<string> {
    return postRequest({ params: settings })
      .catch((e) => { throw new Error(`authorization api getUserData\n${e}`); });
  }
}
