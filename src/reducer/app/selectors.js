import NameSpace from '../name-space.js';

export const getSelectedGenre = (state) => {
  return state[NameSpace.APP].genre;
};

export const getSelectedMovie = (state) => {
  return state[NameSpace.APP].selectedMovie;
};
