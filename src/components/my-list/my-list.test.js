/* eslint-disable camelcase */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import history from '../../history.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import NameSpace from '../../reducer/name-space.js';
import { MyList } from './my-list.jsx';

const mockStore = configureStore([]);

const user = {
  avatar_url: '/wtw/static/avatar/5.jpg',
  email: 'user@mail.com',
  id: 1,
  name: 'user',
};

const movies = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://example.com/video.mp4',
  },
];

describe('MyList component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      },
      [NameSpace.DATA]: {
        MyList: movies,
      },
    });

    const component = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <MyList loadMyList={jest.fn()} movies={movies} />
          </Router>
        </Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
