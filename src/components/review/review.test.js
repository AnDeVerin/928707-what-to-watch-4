/* eslint-disable camelcase */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import history from '../../history.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import NameSpace from '../../reducer/name-space.js';

import Review from './review.jsx';

const mockStore = configureStore([]);

const movie = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  posterUrl: `https://example.com/poster.jpg`,
  coverUrl: `https://example.com/cover.jpg`,
};

const user = {
  avatar_url: '/wtw/static/avatar/5.jpg',
  email: 'user@mail.com',
  id: 1,
  name: 'user',
};

it(`Review component render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      user,
    },
  });

  const tree = renderer
    .create(
      <Provider store={store}>
        <Router history={history}>
          <Review
            isDisabled={false}
            isFormValid={false}
            rating="4"
            comment="Some comment"
            onSubmit={jest.fn()}
            onTextInput={jest.fn()}
            onRatingChange={jest.fn()}
            movie={movie}
          />
        </Router>
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
