import React from 'react';
import PropTypes from 'prop-types';
import getRating from '../../utils/get-rating-description.js';
import formatTime from '../../utils/formatTime.js';

import ReviewsTab from '../reviews-tab/reviews-tab.jsx';

const TabsContent = ({ activeTab, movie }) => {
  const { overview, id } = movie;

  const ratingLevel = getRating(overview.rating.value);
  const starring3 = overview.stars.slice(0, 3).join(', ');

  switch (activeTab) {
    case `overview`:
      return (
        <>
          <div className="movie-rating">
            <div className="movie-rating__score">{overview.rating.value}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{ratingLevel}</span>
              <span className="movie-rating__count">
                {overview.rating.count} ratings
              </span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>{overview.description}</p>

            <p className="movie-card__director">
              <strong>Director: {overview.director}</strong>
            </p>

            <p className="movie-card__starring">
              <strong>Starring: {starring3} and other</strong>
            </p>
          </div>
        </>
      );

    case `details`:
      return (
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">
                {overview.director}
              </span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {overview.stars.map((star, i) => (
                  <span key={`${star}-${i}`}>
                    {star} <br />
                  </span>
                ))}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">
                {formatTime(overview.runTime)}
              </span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{movie.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">
                {movie.realeseYear}
              </span>
            </p>
          </div>
        </div>
      );

    case `reviews`:
      return <ReviewsTab filmId={id} />;
  }

  return null;
};

TabsContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
    posterUrl: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    overview: PropTypes.shape({
      rating: PropTypes.shape({
        value: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      stars: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      runTime: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TabsContent;
