import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { Router } from 'react-router-dom';
import history from '../../history.js';

import SignIn from './sign-in.jsx';

configure({ adapter: new Adapter() });

describe('SignIn component', () => {
  it(`calls passed function on submit with correct values`, () => {
    const onSubmitMock = jest.fn();

    const component = mount(
      <Router history={history}>
        <SignIn onSubmit={onSubmitMock} />
      </Router>
    );

    component
      .find(`.sign-in__input[type='email']`)
      .instance().value = `user@email.com`;

    component
      .find(`.sign-in__input[type='password']`)
      .instance().value = `pass123`;

    component.find(`form`).simulate(`submit`);

    expect(onSubmitMock).toHaveBeenCalled();
    expect(onSubmitMock).toHaveBeenCalledWith({
      email: `user@email.com`,
      password: `pass123`,
    });
  });
});
