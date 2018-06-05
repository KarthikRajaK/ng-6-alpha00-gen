export interface ICaptchaSettings {
  success: boolean;
  error: any;
  status: number;
  data: ICSData;
}

export interface ICSData {
  _id: string;
  className: string;
  client_secret: string;
  client_id: string;
  captcha_type: string;
  createdTime: string;
  updatedTime: string;
  disable: boolean;
  __v: number;
}