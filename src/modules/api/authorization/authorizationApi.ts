import { postRequest } from 'boot/axios';
import { UserAuthData } from './models/authSettings';
import { TokenModel } from './models/tokenModel';

export default class AuthorizationApi {
  public static async postRegistration(settings: UserAuthData): Promise<TokenModel> {
    return postRequest({ params: settings })
      .then((result) => new TokenModel(result))
      .catch((e) => { throw new Error(`Registration api request\n${e}`); });
  }
}
