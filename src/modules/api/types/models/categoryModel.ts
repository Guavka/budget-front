import Parser from 'modules/api/parser';
import { CategoryDataResponse } from '../dashResponse';

export class CategoryModel {
  protected _name!: string;

  protected _icon!: string;

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = Parser.GetValidString(value, 'Name');
  }

  public get icon(): string {
    return this._icon;
  }

  public set icon(value: string) {
    this._icon = Parser.GetValidString(value, 'Icon', 3, 50);
  }

  constructor(settings: CategoryDataResponse) {
    try {
      this.name = settings.name;
      this.icon = settings.icon;
    } catch (e) {
      throw new Error(`Category model in ${this.name}\n${e}`);
    }
  }
}
