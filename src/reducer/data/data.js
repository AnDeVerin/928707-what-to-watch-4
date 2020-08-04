import { extend } from '../../utils/extend.js';
import { createMoviesData } from '../../adapters/movies.js';
import { ActionCreator as AppActionCreator } from '../app/app.js';
import { Error, AppRoute } from '../../constants.js';
import history from '../../history.js';

const initialState = {
  movies: [],
  promo: {
    id: 0,
    title: '',
    genre: '',
    realeseYear: 0,
    posterUrl: '',
    coverUrl: '',
    isFavorite: false,
  },
  reviews: [],
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  UPDATE_MOVIES: `UPDATE_MOVIES`,
  POST_REVIEW: `POST_REVIEW`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: createMoviesData(movies),
  }),

  loadPromo: (movie) => ({
    type: ActionType.LOAD_PROMO,
    payload: createMoviesData([movie])[0],
  }),

  updateMovies: (movie) => ({
    type: ActionType.UPDATE_MOVIES,
    payload: createMoviesData([movie])[0],
  }),

  postReview: () => ({
    type: ActionType.POST_REVIEW,
    payload: null,
  }),

  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api
      .get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data));
      })
      .catch((err) => {
        dispatch(
          AppActionCreator.setErrorText(err.errorMessage || err.toString())
        );
        dispatch(AppActionCreator.showModal());
      });
  },

  loadReviews: (filmId) => (dispatch, getState, api) => {
    return api
      .get(`/comments/${filmId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      })
      .catch((err) => {
        dispatch(
          AppActionCreator.setErrorText(err.errorMessage || err.toString())
        );
        dispatch(AppActionCreator.showModal());
      });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api
      .get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromo(response.data));
      })
      .catch((err) => {
        dispatch(
          AppActionCreator.setErrorText(err.errorMessage || err.toString())
        );
        dispatch(AppActionCreator.showModal());
      });
  },

  toggleFavorite: ({ id, isFavorite }) => (dispatch, getState, api) => {
    return api
      .post(`/favorite/${id}/${isFavorite ? 0 : 1}`)
      .then((response) => {
        dispatch(ActionCreator.updateMovies(response.data));
      })
      .catch((err) => {
        if (err.status === Error.UNAUTHORIZED) {
          history.push(AppRoute.LOGIN);
          return;
        }

        dispatch(
          AppActionCreator.setErrorText(err.errorMessage || err.toString())
        );
        dispatch(AppActionCreator.showModal());
      });
  },

  postReview: ({ id, rating, comment }) => (dispatch, getState, api) => {
    return api
      .post(`/comments/${id}`, { rating, comment })
      .then(() => {
        dispatch(ActionCreator.postReview());
        history.push(`/films/${id}`);
      })
      .catch((err) => {
        if (err.status === Error.UNAUTHORIZED) {
          history.push(AppRoute.LOGIN);
          return;
        }

        dispatch(
          AppActionCreator.setErrorText(err.errorMessage || err.toString())
        );
        dispatch(AppActionCreator.showModal());

        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, { movies: action.payload });

    case ActionType.LOAD_PROMO:
      return extend(state, { promo: action.payload });

    case ActionType.POST_REVIEW:
      return state;

    case ActionType.UPDATE_MOVIES:
      const movie = action.payload;
      const updatedPromo = state.promo.id === movie.id ? movie : state.promo;
      const movieIdx = state.movies.findIndex((item) => item.id === movie.id);
      const updatedMovies = state.movies.slice();
      updatedMovies.splice(movieIdx, 1, movie);

      return extend(state, { promo: updatedPromo, movies: updatedMovies });

    case ActionType.LOAD_REVIEWS:
      return extend(state, { reviews: action.payload });
  }

  return state;
};

export { reducer, ActionType, ActionCreator, Operation };
