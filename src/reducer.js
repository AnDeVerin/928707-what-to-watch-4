import { extend } from './utils/extend.js';
import { MOVIES } from './mocks/films.js';

const initialState = {
  genre: 'All genres',
  movies: MOVIES,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, { genre: action.payload });
  }

  return state;
};

export { reducer, ActionType, ActionCreator };
