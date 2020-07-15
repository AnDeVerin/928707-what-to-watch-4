import { extend } from '../../utils/extend.js';

const initialState = {
  genre: 'All genres',
  selectedMovie: {},
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_MOVIE: `SET_MOVIE`,
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),

  setMovie: (movie) => ({
    type: ActionType.SET_MOVIE,
    payload: movie,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, { genre: action.payload });

    case ActionType.SET_MOVIE:
      return extend(state, { selectedMovie: action.payload });
  }

  return state;
};

export { reducer, ActionType, ActionCreator };
