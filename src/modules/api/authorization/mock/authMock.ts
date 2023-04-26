import { TokenResponse } from '../models/authResponse';
import { UserAuthData } from '../models/authSettings';

export const authMock: UserAuthData = {
  email: 'guavka@gmail.com',
  password: '123qwerty',
};

export const tokenMock: TokenResponse = {
  token: '123456',
  duration: 60,
};
