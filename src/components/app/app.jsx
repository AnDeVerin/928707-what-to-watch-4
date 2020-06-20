import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({ selectedMovie, movies }) => {
  return <Main selectedMovie={selectedMovie} movies={movies} />;
};

App.propTypes = {
  selectedMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default App;
