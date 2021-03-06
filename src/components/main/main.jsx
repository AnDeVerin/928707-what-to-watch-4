import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GenreList from '../genre-list/genre-list.jsx';
import withLimit from '../../hocs/with-limit/with-limit.js';
import MovieList from '../movie-list/movie-list.jsx';
import CatalogButton from '../catalog-button/catalog-button.jsx';
import Promo from '../promo/promo.jsx';
import Footer from '../footer/footer.jsx';

import { getMoviesByGenre, getPromo } from '../../reducer/data/selectors.js';
import { Operation as DataOperation } from '../../reducer/data/data.js';

const LimitedMovieList = withLimit(MovieList);

const Main = ({ movies, promoMovie, onFavoriteToggle }) => {
  return (
    <>
      <Promo promoMovie={promoMovie} onFavoriteToggle={onFavoriteToggle} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />

          <LimitedMovieList movies={movies} button={CatalogButton} />
        </section>

        <Footer />
      </div>
    </>
  );
};

Main.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMoviesByGenre(state),
  promoMovie: getPromo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteToggle({ id, isFavorite }) {
    dispatch(DataOperation.toggleFavorite({ id, isFavorite }));
  },
});

export { Main };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
