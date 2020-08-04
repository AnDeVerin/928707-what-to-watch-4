/* eslint-disable camelcase */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import history from '../../history.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import NameSpace from '../../reducer/name-space.js';

import { MyList } from './my-list.jsx';

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

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

describe('MyList component', () => {
  it(`calls passed in function on mount and props update`, () => {
    const loadMyListMock = jest.fn();

    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {},
      },
    });

    mount(
      <Provider store={store}>
        <Router history={history}>
          <MyList loadMyList={loadMyListMock} movies={movies} />
        </Router>
      </Provider>
    );

    expect(loadMyListMock).toHaveBeenCalledTimes(1);
  });
});
