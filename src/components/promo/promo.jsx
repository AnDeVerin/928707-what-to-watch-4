import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import { Link } from 'react-router-dom';

const Promo = ({ promoMovie, onFavouriteToggle }) => {
  const {
    id,
    title,
    genre,
    realeseYear,
    posterUrl,
    coverUrl,
    isFavourite,
  } = promoMovie;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={coverUrl} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW </h1>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={posterUrl}
              alt={`${title} poster`}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{realeseYear}</span>
            </p>

            <div className="movie-card__buttons">
              <Link
                to={`/player/${id}`}
                className="btn btn--play movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Link>

              <button
                onClick={() => onFavouriteToggle({ id, isFavourite })}
                className="btn btn--list movie-card__button"
                type="button"
              >
                {isFavourite ? (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Promo.propTypes = {
  promoMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
    posterUrl: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
  }).isRequired,
  onFavouriteToggle: PropTypes.func.isRequired,
};

export default Promo;
