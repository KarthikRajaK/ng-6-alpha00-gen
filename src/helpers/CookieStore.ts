import { Constants } from './Constants';
import * as cookies from 'browser-cookies';

export class CookieStore {
  static type: string = '';

  static saveType(type: string) {
    this.type = 'Check ' + type;
  }

  static getType(): string | null {
    if (this.type) {
      return this.type;
    } else {
      if (typeof (Storage) !== undefined) {
        return 'Check ' + localStorage.getItem('Check');
      } else {
        let cooki_e = cookies.get('Check');
        if (cooki_e) {
          return 'Check ' + cooki_e;
        }
        return null;
      }
    }
  }
}