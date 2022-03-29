import Ax from 'axios';

interface ResponseData<T = any> {
  /**
   * status code
   * @type {number}
   * @memberof ResponseData
   */
  code: number;
  result: T;
  message: string;
}
