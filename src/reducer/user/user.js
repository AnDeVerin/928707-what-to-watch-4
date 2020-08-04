import { extend } from '../../utils/extend.js';
import { Error } from '../../constants.js';
import { ActionCreator as AppActionCreator } from '../app/app.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  UNKNOWN: `UNKNOWN`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {},
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER: `SET_USER`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_USER:
      return extend(state, {
        user: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api
      .get(`/login`)
      .then(({ data }) => {
        dispatch(ActionCreator.setUser(data));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        if (err.status === Error.UNAUTHORIZED) {
          // eslint-disable-next-line no-console
          console.log(err.errorMessage);
          return;
        }

        dispatch(
          AppActionCreator.setErrorText(err.errorMessage || err.toString())
        );
        dispatch(AppActionCreator.showModal());
      });
  },

  login: ({ email, password }) => (dispatch, getState, api) => {
    return api
      .post(`/login`, { email, password })
      .then(({ data }) => {
        dispatch(ActionCreator.setUser(data));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        dispatch(
          AppActionCreator.setErrorText(err.errorMessage || err.toString())
        );
        dispatch(AppActionCreator.showModal());
      });
  },
};

export { ActionCreator, ActionType, AuthorizationStatus, Operation, reducer };
