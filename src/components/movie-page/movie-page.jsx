import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import history from '../../history.js';

import MovieTabs from '../movie-tabs/movie-tabs.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import Header from '../header/header.jsx';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

import { ActionCreator } from '../../reducer/app/app.js';
import { getMovies } from '../../reducer/data/selectors.js';
import { getSelectedMovie } from '../../reducer/app/selectors.js';

const MovieTabsWithActiveItem = withActiveItem(MovieTabs);

const tabItems = [`overview`, `details`, `reviews`];

const filterMovies = ({ genre = 'All genres', movies = [], limit = 4, id }) => {
  const filteredMovies =
    genre === `All genres`
      ? movies.slice(0)
      : movies.filter(
          (m) => m.genre.toLowerCase() === genre.toLowerCase() && m.id !== id
        );

  return filteredMovies.length <= limit
    ? filteredMovies
    : filteredMovies.slice(0, limit);
};

const MoviePage = (props) => {
  const { movie, movies, onMovieSelect, location } = props;
  const { title, genre, realeseYear, posterUrl, coverUrl, id } = movie;
  const similarMovies = filterMovies({ genre, movies, id });

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={coverUrl} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{realeseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <Link
                  to={{ pathname: `/player/${id}`, state: { from: location } }}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>

                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>

                <a href="add-review.html" className="btn movie-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={posterUrl}
                alt={`${title} poster`}
                width="218"
                height="327"
              />
            </div>

            <MovieTabsWithActiveItem movie={movie} items={tabItems} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={similarMovies} onSelect={onMovieSelect} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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
  movie: getSelectedMovie(state),
  movies: getMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMovieSelect(movie) {
    dispatch(ActionCreator.setMovie(movie));
  },
});

MoviePage.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
    posterUrl: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    overview: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onMovieSelect: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export { MoviePage };
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
