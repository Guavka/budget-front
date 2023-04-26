import Validator from 'modules/utils/validator';
import { TokenResponse } from './authResponse';

export class TokenModel {
  protected _token!: string;

  protected _duration!: number;

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    const length = import.meta.env.VITE_TOKEN_LENGTH;
    this._token = Validator.GetValidString(value, 'Token', length, length);
  }

  public get duration(): number {
    return this._duration;
  }

  public set duration(value: number) {
    this._duration = Validator.GetValidInt(value, 'Duration');
  }

  constructor(settings: TokenResponse) {
    try {
      this.token = settings.token;
      this.duration = settings.duration;
    } catch (e) {
      throw new Error(`Token model\n${e}`);
    }
  }
}
