import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './header.jsx';
import { AuthorizationStatus } from '../../reducer/user/user.js';

describe('Header component', () => {
  it('renders correctly for authenticated user', () => {
    const component = renderer
      .create(<Header authStatus={AuthorizationStatus.AUTH} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for unauthenticated user', () => {
    const component = renderer
      .create(<Header authStatus={AuthorizationStatus.NO_AUTH} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
