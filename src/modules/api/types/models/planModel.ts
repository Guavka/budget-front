import Parser from 'modules/api/parser';
import { PlanDataResponse } from '../dashResponse';

export class PlanModel {
  protected _name!: string;

  protected _duration!: number;

  protected _cost!: number;

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = Parser.GetValidString(value, 'Name');
  }

  public get duration(): number {
    return this._duration;
  }

  public set duration(value: string) {
    this._duration = Parser.GetValidPositiveInt(value, 'Duration');
  }

  public get cost(): number {
    return this._cost;
  }

  public set cost(value: string) {
    this._cost = Parser.GetValidPositiveFloat(value, 'Cost');
  }

  constructor(settings: PlanDataResponse) {
    try {
      this.name = settings.name;
      this.duration = settings.duration;
      this.cost = settings.cost;
    } catch (e) {
      throw new Error(`Plan model in ${this.name}\n${e}`);
    }
  }
}
