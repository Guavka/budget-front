import Validator from 'modules/utils/validator';
import { CategoryResponse, OperationResponse } from './dashResponse';
import { CategoryModel } from './categoryModel';
import { OperationType } from '.';

export class OperationModel {
  protected _scoreId!: number;

  protected _category!: CategoryModel;

  protected _type!: OperationType;

  protected _moneyValue!: number;

  protected _date!: Date;

  protected _place!: string;

  protected _comment!: string;

  public get scoreId(): number {
    return this._scoreId;
  }

  public set scoreId(value: string) {
    this._scoreId = Validator.GetValidPositiveInt(value, 'ScoreId');
  }

  public get category(): CategoryModel {
    return this._category;
  }

  public set category(value: CategoryResponse) {
    this._category = new CategoryModel(value);
  }

  public get type(): OperationType {
    return this._type;
  }

  public set type(value: string) {
    this._type = OperationType[value.toUpperCase() as keyof typeof OperationType];
  }

  public get moneyValue(): number {
    return this._moneyValue;
  }

  public set moneyValue(value: string) {
    this._moneyValue = Validator.GetValidNumber(value, 'moneyValue');
  }

  public get date(): Date {
    return this._date;
  }

  public set date(value: string) {
    this._date = Validator.GetValidDate(value, 'Date');
  }

  public get place(): string {
    return this._place;
  }

  public set place(value: string) {
    this._place = Validator.GetValidString(value, 'Place');
  }

  public get comment(): string {
    return this._comment;
  }

  public set comment(value: string) {
    this._comment = Validator.GetValidString(value, 'Comment');
  }

  constructor(settings: OperationResponse) {
    try {
      this.scoreId = settings.scoreId;
      this.category = settings.category;
      this.type = settings.type;
      this.moneyValue = settings.moneyValue;
      this.date = settings.date;
      this.place = settings.place;
      this.comment = settings.comment;
    } catch (e) {
      throw new Error(`Operation model in ${this.scoreId}\n${e}`);
    }
  }
}
