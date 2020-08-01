import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GenreList from '../genre-list/genre-list.jsx';
import withLimit from '../../hocs/with-limit/with-limit.js';
import MovieList from '../movie-list/movie-list.jsx';
import CatalogButton from '../catalog-button/catalog-button.jsx';
import Promo from '../promo/promo.jsx';

import { ActionCreator } from '../../reducer/app/app.js';
import { getMoviesByGenre, getPromo } from '../../reducer/data/selectors.js';

import { Operation as DataOperation } from '../../reducer/data/data.js';

const LimitedMovieList = withLimit(MovieList);

const Main = ({ movies, promoMovie, onMovieSelect, onFavouriteToggle }) => {
  return (
    <>
      <Promo promoMovie={promoMovie} onAdd={onFavouriteToggle} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />

          <LimitedMovieList
            movies={movies}
            onSelect={onMovieSelect}
            button={CatalogButton}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2020 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: getMoviesByGenre(state),
  promoMovie: getPromo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMovieSelect(movie) {
    dispatch(ActionCreator.setMovie(movie));
  },
  onFavouriteToggle({ id, isFavourite }) {
    dispatch(DataOperation.onFavouriteToggle({ id, isFavourite }));
  },
});

Main.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  onFavouriteToggle: PropTypes.func.isRequired,
};

export { Main };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
