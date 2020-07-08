import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionCreator } from '../../reducer.js';

const GenreList = ({ activeGenre, movies, onGenreSelect }) => {
  const uniqGenres = new Set(movies.map((movie) => movie.genre));

  const genres = ['All genres'].concat(Array.from(uniqGenres)).slice(0, 10);

  const handleClick = (e, genre) => {
    e.preventDefault();
    onGenreSelect(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li
          className={`catalog__genres-item ${
            activeGenre === genre ? `catalog__genres-item--active` : ``
          }`}
          key={`${genre}-${i}`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(e) => handleClick(e, genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeGenre: state.genre,
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.setGenre(genre));
  },
});

GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onGenreSelect: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export { GenreList };
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
