/* eslint-disable no-throw-literal */

import axios from 'axios';
import { Error } from './constants.js';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const { response } = err;

    if (response) {
      if (response.status === Error.UNAUTHORIZED) {
        onUnauthorized();
      }

      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw {
        status: response.status,
        errorMessage: response.data.error,
      };
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
