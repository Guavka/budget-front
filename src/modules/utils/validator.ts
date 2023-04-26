export default class Validator {
  public static validate<T>(value: string, message: string, action: () => T) {
    try {
      return action();
    } catch (e) {
      throw new Error(`Parse error\n ${message}\nValue = "${value}"\n${e}`);
    }
  }

  public static GetValidUrl(value: string, message: string): URL {
    return Validator.validate<URL>(value, message, () => new URL(value));
  }

  public static GetValidString(value: string, message: string, minLength = 1, maxLength = 128): string {
    return Validator.validate<string>(value, message, () => {
      if (value === undefined || value === null) {
        throw new Error('Value is undefined');
      }
      if (value.length > maxLength || value.length < minLength) {
        throw new Error(`Value length must be in range [${minLength},${maxLength}]`);
      }
      return value;
    });
  }

  public static GetValidNumber(value: string, message: string): number {
    return Validator.validate<number>(value, message, () => Number.parseFloat(value));
  }

  public static GetValidDate(value: string, message: string): Date {
    return Validator.validate<Date>(value, message, () => new Date(value));
  }

  public static GetValidStringArray(value: string, message: string, separator = ',', minLenght = 1, maxLenght = 128): string[] {
    return Validator.validate<string[]>(value, message, () => {
      const array = value.split(separator).map((item) => item.trim());
      if (array.length === 0) {
        throw new Error('array is empty');
      }
      array.forEach((el) => Validator.GetValidString(el, `${message}.${el}`, minLenght, maxLenght));
      return array;
    });
  }

  public static GetValidInt(value: number, message: string): number {
    return Validator.validate<number>(value.toString(), message, () => {
      if (!Number.isInteger(value)) throw new Error('value not is integer');
      return value;
    });
  }

  public static GetValidPositiveInt(value: number, message: string): number {
    return Validator.validate<number>(value.toString(), message, () => {
      if (value < 0) throw new Error('value < 0');
      if (!Number.isInteger(value)) throw new Error('value not is integer');
      return value;
    });
  }

  public static GetValidPositiveFloat(value: string, message: string): number {
    return Validator.validate<number>(value, message, () => {
      const clearValue = value.replace(/[&\\/\\#,+()$~%'":*?<>{}^A-Za-z]/g, '');
      return Number.parseFloat(clearValue);
    });
  }

  public static GetValidEmail(value: string, message: string): string {
    return Validator.validate<string>(value, message, () => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) { return value; }
      throw new Error('Email incorrect');
    });
  }

  public static GetValidPassword(value: string, message: string, minLength: number, maxLength: number, isNumbers = true, isRegisterSens = true, isLetters = true): string {
    return Validator.validate<string>(value, message, () => {
      let rule = '^';
      if (isNumbers) { rule += '(?=.*[0-9])'; }

      if (isLetters) {
        if (isRegisterSens) {
          rule += '(?=.*[a-z])(?=.*[A-Z])';
        } else {
          rule += '?=.*[a-zA-Z]';
        }
      }
      rule += `(?=.*_)(?!.* ).+{${minLength},${maxLength}}$`;

      if (new RegExp(rule).test(value)) { return value; }
      throw new Error('Password not valid');
    });
  }
}
