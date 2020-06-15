import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({ selectedMovie, movies }) => {
  const onCardClick = () => {};

  return (
    <Main
      selectedMovie={selectedMovie}
      movies={movies}
      onCardClick={onCardClick}
    />
  );
};

App.propTypes = {
  selectedMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
