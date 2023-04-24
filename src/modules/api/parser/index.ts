export default class Parser {
  public static validate<T>(value: string, message: string, action: () => T) {
    try {
      return action();
    } catch (e) {
      throw new Error(`Parse error\n ${message}\nValue = ${value}\n${e}`);
    }
  }

  public static GetValidUrl(value: string, message: string): URL {
    return Parser.validate<URL>(value, message, () => new URL(value));
  }

  public static GetValidString(value: string, message: string, minLenght = 1, maxLenght = 128): string {
    return Parser.validate<string>(value, message, () => {
      if (value === undefined || value === '') {
        throw new Error('Value is empty');
      }
      if (value.length > maxLenght || value.length < minLenght) {
        throw new Error(`Value lenght must be in range [${minLenght},${maxLenght}]`);
      }
      return value;
    });
  }

  public static GetValidNumber(value: string, message: string): number {
    return Parser.validate<number>(value, message, () => Number.parseInt(value, 10));
  }

  public static GetValidDate(value: string, message: string): Date {
    return Parser.validate<Date>(value, message, () => new Date(value));
  }

  public static GetValidStringArray(value: string, message: string, separator = ',', minLenght = 1, maxLenght = 128): string[] {
    return Parser.validate<string[]>(value, message, () => {
      const array = value.split(separator).map((item) => item.trim());
      if (array.length === 0) {
        throw new Error('array is empty');
      }
      array.forEach((el) => Parser.GetValidString(el, `${message}.${el}`, minLenght, maxLenght));
      return array;
    });
  }

  public static GetValidPositiveInt(value: string, message: string): number {
    return Parser.validate<number>(value, message, () => {
      const clearValue = value.replace(/[&\\/\\#,+()$~%.'":*?<>{}^A-Za-z]/g, '');
      return Number.parseInt(clearValue, 10);
    });
  }

  public static GetValidPositiveFloat(value: string, message: string): number {
    return Parser.validate<number>(value, message, () => {
      const clearValue = value.replace(/[&\\/\\#,+()$~%'":*?<>{}^A-Za-z]/g, '');
      return Number.parseFloat(clearValue);
    });
  }

  public static GetValidEmailStr(value: string, message: string): string {
    return Parser.validate<string>(value, message, () => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) { return value; }
      throw new Error('Email incorrect');
    });
  }
}
