/* eslint-disable camelcase */

import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../../api.js';
import { reducer, ActionType, Operation } from './data.js';

const api = createAPI(() => {});

const movieFromServer = {
  id: 1,
  name: 'The Grand Budapest Hotel',
  poster_image: 'img/the-grand-budapest-hotel-poster.jpg',
  preview_image: 'img/the-grand-budapest-hotel.jpg',
  background_image: 'img/the-grand-budapest-hotel-bg.jpg',
  background_color: '#ffffff',
  video_link: 'https://some-link',
  preview_video_link: 'https://some-link',
  description:
    "In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.",
  rating: 8.9,
  scores_count: 240,
  director: 'Wes Andreson',
  starring: [
    'Bill Murray',
    'Edward Norton',
    'Jude Law',
    'Willem Dafoe',
    'Saoirse Ronan',
  ],
  run_time: 99,
  genre: 'Comedy',
  released: 2014,
  is_favorite: false,
};

const movies = [
  {
    backgroundColor: '#ffffff',
    coverUrl: 'img/the-grand-budapest-hotel-bg.jpg',
    genre: 'Comedy',
    id: 1,
    isFavourite: false,
    overview: {
      description:
        "In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.",
      director: 'Wes Andreson',
      rating: {
        count: 240,
        value: 8.9,
      },
      runTime: 99,
      stars: [
        'Bill Murray',
        'Edward Norton',
        'Jude Law',
        'Willem Dafoe',
        'Saoirse Ronan',
      ],
    },
    posterUrl: 'img/the-grand-budapest-hotel-poster.jpg',
    realeseYear: 2014,
    reviews: [],
    thumbUrl: 'img/the-grand-budapest-hotel.jpg',
    title: 'The Grand Budapest Hotel',
    trailer: 'https://some-link',
    videoUrl: 'https://some-link',
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    movies: [],
  });
});

it(`Reducer should update questions by load questions`, () => {
  expect(
    reducer(
      {
        movies: [],
      },
      {
        type: ActionType.LOAD_MOVIES,
        payload: movies,
      }
    )
  ).toEqual({
    movies,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    apiMock.onGet(`/films`).reply(200, [movieFromServer]);

    return moviesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_MOVIES,
        payload: movies,
      });
    });
  });
});