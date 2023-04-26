import Validator from 'modules/utils/validator';
import { UserAuthData } from './authSettings';

export class TokenModel {
  protected _email!: string;

  protected _password!: string;

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = Validator.GetValidEmail(value, 'Token');
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    const minLength = import.meta.env.VITE_MIN_PASS_LEN;
    const maxLength = import.meta.env.VITE_MAX_PASS_LEN;
    this._password = Validator.GetValidPassword(value, 'Password', minLength, maxLength);
  }

  constructor(settings: UserAuthData) {
    try {
      this.email = settings.email;
      this.password = settings.password;
    } catch (e) {
      throw new Error(`Token model\n${e}`);
    }
  }
}
