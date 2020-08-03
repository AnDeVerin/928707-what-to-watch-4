/* eslint-disable camelcase */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import history from '../../history.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import NameSpace from '../../reducer/name-space.js';
import { Main } from './main.jsx';

const mockStore = configureStore([]);

const PROMO_MOVIE = {
  id: 1,
  coverUrl: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
  genre: `Crime`,
  posterUrl: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
  realeseYear: 1984,
  thumbUrl: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
  title: `Once Upon a Time in America`,
  isFavourite: false,
};

const MOVIES = [
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

const user = {
  avatar_url: '/wtw/static/avatar/5.jpg',
  email: 'user@mail.com',
  id: 1,
  name: 'user',
};

describe('Main component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: MOVIES,
      },
      [NameSpace.APP]: {
        genre: `All genres`,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      },
    });

    const component = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <Main
              promoMovie={PROMO_MOVIE}
              movies={MOVIES}
              onMovieSelect={jest.fn()}
              onFavouriteToggle={jest.fn()}
            />
          </Router>
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          },
        }
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
