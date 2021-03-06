import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MovieTabs from '../movie-tabs/movie-tabs.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

import { Operation as DataOperation } from '../../reducer/data/data.js';
import { getMovies, getMovieById } from '../../reducer/data/selectors.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import { getAuthStatus } from '../../reducer/user/selectors.js';
import { TabName } from '../../constants.js';

const MovieTabsWithActiveItem = withActiveItem(MovieTabs);

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
  const {
    match,
    location,
    movies,
    onFavoriteToggle,
    getMovie,
    authStatus,
  } = props;

  const isUser = authStatus === AuthorizationStatus.AUTH;
  const filmId = Number.parseInt(match.params.id, 10);
  const movie = getMovie(filmId);

  if (!movie) {
    return <section className="movie-card movie-card--full" />;
  }

  const {
    title,
    genre,
    realeseYear,
    posterUrl,
    coverUrl,
    id,
    isFavorite,
  } = movie;

  const similarMovies = filterMovies({ genre, movies, id });

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={coverUrl} alt={title} />
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
                  onClick={() => onFavoriteToggle({ id, isFavorite })}
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  {isFavorite ? (
                    <>
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list" />
                      </svg>
                      <span>My list</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add" />
                      </svg>
                      <span>My list</span>
                    </>
                  )}
                </button>

                {isUser && (
                  <Link
                    to={{
                      pathname: `/films/${id}/review`,
                      state: { from: location },
                    }}
                    className="btn movie-card__button"
                  >
                    Add review
                  </Link>
                )}
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

            <MovieTabsWithActiveItem
              movie={movie}
              items={Object.values(TabName)}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={similarMovies} />
        </section>

        <Footer />
      </div>
    </>
  );
};

MoviePage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  getMovie: (id) => getMovieById(state, id),
  authStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteToggle({ id, isFavorite }) {
    dispatch(DataOperation.toggleFavorite({ id, isFavorite }));
  },
});

export { MoviePage };
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
