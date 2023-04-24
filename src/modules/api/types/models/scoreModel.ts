import Parser from 'modules/api/parser';
import { OperationDataResponse, ScoreDataResponse } from '../dashResponse';
import { CurrencyType, ScoreType } from '.';
import { OperationModel } from './operationModel';

export class ScoreModel {
  protected _name!: string;

  protected _type!: ScoreType;

  protected _currency!: CurrencyType;

  protected _moneyValue!: number;

  protected _operations!: OperationModel[];

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = Parser.GetValidString(value, 'Name');
  }

  public get type(): ScoreType {
    return this._type;
  }

  public set type(value: string) {
    this._type = ScoreType[value.toUpperCase() as keyof typeof ScoreType];
  }

  public get currency(): CurrencyType {
    return this._currency;
  }

  public set currency(value: string) {
    this._currency = CurrencyType[value.toUpperCase() as keyof typeof CurrencyType];
  }

  public get moneyValue(): number {
    return this._moneyValue;
  }

  public set moneyValue(value: string) {
    this._moneyValue = Parser.GetValidNumber(value, 'moneyValue');
  }

  public get operations(): OperationModel[] {
    return this._operations;
  }

  public set operations(value: OperationDataResponse[]) {
    const result: OperationModel[] = [];
    this._operations = value.reduce((acc, el) => {
      acc.push(new OperationModel(el));
      return acc;
    }, result);
  }

  constructor(settings: ScoreDataResponse) {
    try {
      this.name = settings.name;
      this.type = settings.type;
      this.currency = settings.currency;
      this.moneyValue = settings.moneyValue;
      this.operations = settings.operations;
    } catch (e) {
      throw new Error(`Score model in ${this.name}\n${e}`);
    }
  }
}
