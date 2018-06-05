import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './modals/index';
import { Constants, CookieStore } from './helpers/index';

@Injectable()
export class SampleService {

  constructor(public http: HttpClient) { }

  setType(type: string) {
    CookieStore.saveType(type);
  }

  getData(): Observable<any> {
    let headers = new HttpHeaders().set(Constants.CONTENT_TYPE, CookieStore.getType());
    return this.http.get<IPost[]>('https://my-json-server.typicode.com/typicode/demo/posts');
  }
}
