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
    isFavourite: false,
  },
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  UPDATE_MOVIES: `UPDATE_MOVIES`,
  POST_REVIEW: `POST_REVIEW`,
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

  onFavouriteToggle: ({ id, isFavourite }) => (dispatch, getState, api) => {
    return api
      .post(`/favorite/${id}/${isFavourite ? 0 : 1}`)
      .then((response) => {
        dispatch(ActionCreator.updateMovies(response.data));
      })
      .catch((err) => {
        if (err === Error.UNAUTHORIZED) {
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
        history.push(`/films/${id}`);
      })
      .catch((err) => {
        if (err === Error.UNAUTHORIZED) {
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

    case ActionType.UPDATE_MOVIES:
      const movie = action.payload;
      const updatedPromo = state.promo.id === movie.id ? movie : state.promo;
      const movieIdx = state.movies.findIndex((item) => item.id === movie.id);
      const updatedMovies = state.movies.slice();
      updatedMovies.splice(movieIdx, 1, movie);

      return extend(state, { promo: updatedPromo, movies: updatedMovies });
  }

  return state;
};

export { reducer, ActionType, ActionCreator, Operation };
