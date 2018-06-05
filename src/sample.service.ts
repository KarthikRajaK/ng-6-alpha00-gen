import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './modals/index';
import { Constants, CookieStore, URLHelper } from './helpers/index';

@Injectable()
export class SampleService {

  constructor(public http: HttpClient) { }

  setBaseUrl(baseUrl) {
    URLHelper.setBaseUrl(baseUrl);
  }

  setType(type: string) {
    CookieStore.saveType(type);
  }

  getData(): Observable<any> {
    let headers = new HttpHeaders().set(Constants.CONTENT_TYPE, CookieStore.getType());
    return this.http.get<IPost[]>(URLHelper.getUrl(), ({ headers }));
  }
}
