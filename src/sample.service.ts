import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost, ICaptchaSettings } from './modals/index';
import { Constants, CookieStore, URLHelper } from './helpers/index';

@Injectable()
export class SampleService {

  constructor(public http: HttpClient) { }

  setBaseUrl(baseUrl) {
    URLHelper.setBaseUrl(baseUrl);
  }

  setType(token: string) {
    CookieStore.saveBearerToken(token);
  }

  getData(): Observable<any> {
    let headers = new HttpHeaders().set(Constants.AUTHORIZATION, CookieStore.getBearerToken());
    return this.http.get<IPost[]>(URLHelper.getUrl(), ({ headers }));
  }

  getCaptch(): Observable<ICaptchaSettings> {
    let headers = new HttpHeaders().set(Constants.AUTHORIZATION, CookieStore.getBearerToken());
    return this.http.get<ICaptchaSettings>(URLHelper.getCaptchUrl(), ({ headers }));
  }
}
