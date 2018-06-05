export class URLHelper {
  static baseURL: string = '';

  static url: string = '/typicode/demo/posts';

  static setBaseUrl(baseUrl: string) {
    this.baseURL = baseUrl;
  }

  static getUrl() {
    return this.baseURL + this.url;
  }

}