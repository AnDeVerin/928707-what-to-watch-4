import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import withDelay from '../../hocs/with-delay/with-delay.js';

const CardWithPlayDelay = withDelay(MovieCard);

const MovieList = ({ movies }) => (
  <div className="catalog__movies-list">
    {movies.map((movie) => (
      <CardWithPlayDelay key={movie.id} movie={movie} />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
