import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = ({ movies, onCardClick }) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((title) => (
        <MovieCard key={title} title={title} onClick={onCardClick} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
