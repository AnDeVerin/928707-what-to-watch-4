import { extend } from '../../utils/extend.js';
import { createMoviesData } from '../../adapters/movies.js';

const initialState = {
  movies: [],
  promo: { title: '', genre: '', realeseYear: 0, posterUrl: '', coverUrl: '' },
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
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
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(ActionCreator.loadMovies(response.data));
    });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`).then((response) => {
      dispatch(ActionCreator.loadPromo(response.data));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, { movies: action.payload });

    case ActionType.LOAD_PROMO:
      return extend(state, { promo: action.payload });
  }

  return state;
};

export { reducer, ActionType, ActionCreator, Operation };
