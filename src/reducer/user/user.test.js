/* eslint-disable camelcase */

import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../../api.js';
import { reducer, ActionType, Operation, AuthorizationStatus } from './user.js';

const api = createAPI(() => {});
const user = {
  avatar_url: '/wtw/static/avatar/5.jpg',
  email: 'user@mail.com',
  id: 1,
  name: 'user',
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: 'UNKNOWN',
    user: {},
  });
});

it(`Reducer should update authorizationStatus`, () => {
  expect(
    reducer(
      {
        authorizationStatus: 'NO_AUTH',
      },
      {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      }
    )
  ).toEqual({ authorizationStatus: 'AUTH' });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to GET:/login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecker = Operation.checkAuth();

    apiMock.onGet(`/login`).reply(200, user);

    return authChecker(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER,
        payload: user,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: 'AUTH',
      });
    });
  });

  it(`Should make a correct API call to POST:/login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const login = Operation.login({
      email: `user@emailcom`,
      password: `12345`,
    });

    apiMock.onPost(`/login`).reply(200, user);

    return login(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER,
        payload: user,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: 'AUTH',
      });
    });
  });
});
