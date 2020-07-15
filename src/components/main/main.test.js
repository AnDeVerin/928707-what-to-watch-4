import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Main } from './main.jsx';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const PROMO_MOVIE = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  realeseYear: 2014,
};

const MOVIES = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://example.com/video.mp4',
  },
];

describe('Main component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: MOVIES,
      },
      [NameSpace.APP]: {
        genre: `All genres`,
      },
    });

    const component = renderer
      .create(
        <Provider store={store}>
          <Main
            promoMovie={PROMO_MOVIE}
            movies={MOVIES}
            onMovieSelect={jest.fn()}
          />
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
