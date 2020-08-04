import { createSelector } from 'reselect';
import NameSpace from '../name-space.js';
import { getSelectedGenre } from '../app/selectors.js';

export const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

export const getPromo = (state) => {
  return state[NameSpace.DATA].promo;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};

export const getMyList = (state) => {
  return state[NameSpace.DATA].myList;
};

export const getMovieById = (state, id) => {
  return getMovies(state).find((item) => item.id === id);
};

export const getMoviesByGenre = createSelector(
  getMovies,
  getSelectedGenre,
  (movies, genre) =>
    genre === 'All genres'
      ? movies
      : movies.filter((movie) => movie.genre === genre)
);
