import React from 'react';
import PropTypes from 'prop-types';

import getRating from '../../utils/get-rating-description.js';

const OverviewTab = ({ overview }) => {
  const ratingLevel = getRating(overview.rating.value);
  const starring3 = overview.stars.slice(0, 3).join(', ');

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
};

OverviewTab.propTypes = {
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
};

export default OverviewTab;
