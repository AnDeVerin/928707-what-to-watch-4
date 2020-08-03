/* eslint-disable camelcase */
import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import history from '../../history.js';
import { Header } from './header.jsx';
import { AuthorizationStatus } from '../../reducer/user/user.js';

const user = {
  avatar_url: '/wtw/static/avatar/5.jpg',
  email: 'user@mail.com',
  id: 1,
  name: 'user',
};

describe('Header component', () => {
  it('renders correctly for authenticated user', () => {
    const component = renderer
      .create(
        <Router history={history}>
          <Header authStatus={AuthorizationStatus.AUTH} user={user} />
        </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for unauthenticated user', () => {
    const component = renderer
      .create(
        <Router history={history}>
          <Header authStatus={AuthorizationStatus.NO_AUTH} user={user} />
        </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
