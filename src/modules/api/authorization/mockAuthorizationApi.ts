import { tokenMock } from './mock/authMock';
import { UserAuthData } from './models/authSettings';
import { TokenModel } from './models/tokenModel';

export default class MockAuthorizationApi {
  public static async postRegistration(settings: UserAuthData): Promise<TokenModel> {
    try {
      return new TokenModel(tokenMock);
    } catch (e) {
      if (e instanceof Error) { throw new Error(`Registration mock api request\n${e.message}`); }
      throw new Error();
    }
  }
}
