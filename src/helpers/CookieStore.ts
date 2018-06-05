import { Constants } from './Constants';
import * as cookies from 'browser-cookies';

export class CookieStore {
  static bearerToken: string = '';

  static saveBearerToken(token: string) {
    this.bearerToken = 'Bearer ' + token;
  }

  static getBearerToken(): string | null {
    if (this.bearerToken) {
      return this.bearerToken;
    } else {
      if (typeof (Storage) !== undefined) {
        return 'Bearer ' + localStorage.getItem('token');
      } else {
        let cooki_e = cookies.get('token');
        if (cooki_e) {
          return 'Bearer ' + cooki_e;
        }
        return null;
      }
    }
  }
}