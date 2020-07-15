import { createSelector } from 'reselect';
import NameSpace from '../name-space.js';
import { getSelectedGenre } from '../app/selectors.js';

export const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};

export const getPromo = (state) => {
  return state[NameSpace.DATA].promo;
};

export const getMoviesByGenre = createSelector(
  getMovies,
  getSelectedGenre,
  (movies, genre) =>
    genre === 'All genres'
      ? movies
      : movies.filter((movie) => movie.genre === genre)
);
