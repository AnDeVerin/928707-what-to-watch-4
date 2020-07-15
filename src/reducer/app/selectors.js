import NameSpace from '../name-space.js';

export const getSelectedGenre = (state) => {
  return state[NameSpace.APP].genre;
};

export const getSelectedMovie = (state) => {
  return state[NameSpace.APP].selectedMovie;
};

export const getModalState = (state) => {
  return state[NameSpace.APP].isModalVisible;
};

export const getErrorText = (state) => {
  return state[NameSpace.APP].errorText;
};
