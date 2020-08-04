/* eslint-disable camelcase */

import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../../api.js';
import { reducer, ActionType, Operation } from './data.js';
import { ActionType as AppActionType } from '../app/app.js';

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
    isFavorite: false,
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
    thumbUrl: 'img/the-grand-budapest-hotel.jpg',
    title: 'The Grand Budapest Hotel',
    trailer: 'https://some-link',
    videoUrl: 'https://some-link',
  },
];

const updatedMovie = {
  backgroundColor: '#ffffff',
  coverUrl: 'img/the-grand-budapest-hotel-bg.jpg',
  genre: 'Comedy',
  id: 1,
  isFavorite: true,
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
  thumbUrl: 'img/the-grand-budapest-hotel.jpg',
  title: 'The Grand Budapest Hotel',
  trailer: 'https://some-link',
  videoUrl: 'https://some-link',
};

const review = {
  id: 1,
  user: {
    id: 4,
    name: 'Kate Muir',
  },
  rating: 8.9,
  comment:
    "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.",
  date: '2019-05-08T14:13:56.569Z',
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    movies: [],
    promo: {
      title: '',
      genre: '',
      realeseYear: 0,
      coverUrl: '',
      posterUrl: '',
      id: 0,
      isFavorite: false,
    },
    reviews: [],
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

it(`Reducer should update movies by changing isFavorite field`, () => {
  expect(
    reducer(
      {
        movies,
        promo: movies[0],
      },
      {
        type: ActionType.UPDATE_MOVIES,
        payload: updatedMovie,
      }
    )
  ).toEqual({
    movies: [updatedMovie],
    promo: updatedMovie,
  });
});

it(`Reducer should update reviews by loading reviews`, () => {
  expect(
    reducer(
      {
        reviews: [],
      },
      {
        type: ActionType.LOAD_REVIEWS,
        payload: [review],
      }
    )
  ).toEqual({
    reviews: [review],
  });
});

it(`Reducer should not change state on Review post`, () => {
  expect(
    reducer(
      {
        movies: [],
        promo: {
          title: '',
          genre: '',
          realeseYear: 0,
          coverUrl: '',
          posterUrl: '',
          id: 0,
          isFavorite: false,
        },
      },
      {
        type: ActionType.POST_REVIEW,
        payload: null,
      }
    )
  ).toEqual({
    movies: [],
    promo: {
      title: '',
      genre: '',
      realeseYear: 0,
      coverUrl: '',
      posterUrl: '',
      id: 0,
      isFavorite: false,
    },
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

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = Operation.loadPromo();

    apiMock.onGet(`/films/promo`).reply(200, movieFromServer);

    return promoLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_PROMO,
        payload: movies[0],
      });
    });
  });

  it(`Should make a correct API call to /favorite/:id/:value`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const toggler = Operation.toggleFavorite({
      id: 1,
      isFavorite: true,
    });

    apiMock.onPost(`/favorite/1/0`).reply(200, movieFromServer);

    return toggler(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.UPDATE_MOVIES,
        payload: movies[0],
      });
    });
  });

  it(`Should make a correct API call to POST /comments/:id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const poster = Operation.postReview({
      id: 1,
      rating: 5,
      comment: 'comment',
    });

    apiMock.onPost(`/comments/1`).reply(200, {});

    return poster(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.POST_REVIEW,
        payload: null,
      });
    });
  });

  it(`Should make a correct API call to GET /comments/:id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loader = Operation.loadReviews(1);

    apiMock.onGet(`/comments/1`).reply(200, [review]);

    return loader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS,
        payload: [review],
      });
    });
  });

  it(`Should set error and show modal on network error to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    apiMock.onGet(`/films`).networkError();

    return moviesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: AppActionType.SET_ERROR_TEXT,
        payload: `Error: Network Error`,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: AppActionType.SHOW_MODAL,
        payload: null,
      });
    });
  });

  it(`Should set error and show modal on network error to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = Operation.loadPromo();

    apiMock.onGet(`/films/promo`).networkError();

    return promoLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: AppActionType.SET_ERROR_TEXT,
        payload: `Error: Network Error`,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: AppActionType.SHOW_MODAL,
        payload: null,
      });
    });
  });
});
