export class URLHelper {
  static baseURL: string = '';

  static url: string = '/typicode/demo/posts';
  static captchUrl: string = '/captcha-srv/captcha';

  static setBaseUrl(baseUrl: string) {
    this.baseURL = baseUrl;
  }

  static getUrl() {
    return this.baseURL + this.url;
  }

  static getCaptchUrl() {
    return this.baseURL + this.captchUrl;
  }

}