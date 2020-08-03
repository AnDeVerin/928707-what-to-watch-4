/* eslint-disable camelcase */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import history from '../../history.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import NameSpace from '../../reducer/name-space.js';
import MyList from './my-list.jsx';

const mockStore = configureStore([]);

const user = {
  avatar_url: '/wtw/static/avatar/5.jpg',
  email: 'user@mail.com',
  id: 1,
  name: 'user',
};

describe('MyList component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      },
    });

    const component = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <MyList />
          </Router>
        </Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
