import Validator from 'modules/utils/validator';
import { PlanDataResponse, ScoreDataResponse, UserDataResponse } from '../dashResponse';
import { ScoreModel } from './scoreModel';
import { PlanModel } from './planModel';

export class UserModel {
  protected _id!: number;

  protected _plan!: PlanModel;

  protected _firstName!: string;

  protected _lastName!: string;

  protected _age!: number;

  protected _email!: string;

  protected _scores!: ScoreModel[];

  public get id(): number {
    return this._id;
  }

  public set id(value: string) {
    this._id = Validator.GetValidPositiveInt(value, 'ID');
  }

  public get plan(): PlanModel {
    return this._plan;
  }

  public set plan(value: PlanDataResponse) {
    this._plan = new PlanModel(value);
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = Validator.GetValidString(value, 'FirstName');
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = Validator.GetValidString(value, 'LastName');
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: string) {
    this._age = Validator.GetValidPositiveInt(value, 'Age');
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = Validator.GetValidEmailStr(value, 'Email');
  }

  public get scores(): ScoreModel[] {
    return this._scores;
  }

  public set scores(value: ScoreDataResponse[]) {
    const result: ScoreModel[] = [];
    this._scores = value.reduce((acc, el) => {
      acc.push(new ScoreModel(el));
      return acc;
    }, result);
  }

  constructor(settings: UserDataResponse) {
    try {
      this.id = settings.id;
      this.plan = settings.plan;
      this.firstName = settings.firstName;
      this.lastName = settings.lastName;
      this.age = settings.age;
      this.email = settings.email;
      this.scores = settings.scores;
    } catch (e) {
      throw new Error(`User model in ${this.id}\n${e}`);
    }
  }
}
