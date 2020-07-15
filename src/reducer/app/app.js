import { extend } from '../../utils/extend.js';

const initialState = {
  genre: `All genres`,
  selectedMovie: {},
  isModalVisible: false,
  errorText: `Some error`,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_MOVIE: `SET_MOVIE`,
  SET_ERROR_TEXT: `SET_ERROR_TEXT`,
  SHOW_MODAL: `SHOW_MODAL`,
  HIDE_MODAL: `HIDE_MODAL`,
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

  setErrorText: (text) => ({
    type: ActionType.SET_ERROR_TEXT,
    payload: text,
  }),

  showModal: () => ({
    type: ActionType.SHOW_MODAL,
    payload: null,
  }),

  hideModal: () => ({
    type: ActionType.HIDE_MODAL,
    payload: null,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, { genre: action.payload });

    case ActionType.SET_MOVIE:
      return extend(state, { selectedMovie: action.payload });

    case ActionType.SET_ERROR_TEXT:
      return extend(state, { errorText: action.payload });

    case ActionType.SHOW_MODAL:
      return extend(state, { isModalVisible: true });

    case ActionType.HIDE_MODAL:
      return extend(state, { isModalVisible: false });
  }

  return state;
};

export { reducer, ActionType, ActionCreator };
