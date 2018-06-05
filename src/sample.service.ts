import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './modals/index';

@Injectable()
export class SampleService {

  constructor(public http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<IPost[]>('https://my-json-server.typicode.com/typicode/demo/posts');
  }
}
