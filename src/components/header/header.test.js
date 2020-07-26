import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import history from '../../history.js';
import { Header } from './header.jsx';
import { AuthorizationStatus } from '../../reducer/user/user.js';

describe('Header component', () => {
  it('renders correctly for authenticated user', () => {
    const component = renderer
      .create(
        <Router history={history}>
          <Header authStatus={AuthorizationStatus.AUTH} />
        </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for unauthenticated user', () => {
    const component = renderer
      .create(
        <Router history={history}>
          <Header authStatus={AuthorizationStatus.NO_AUTH} />
        </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
