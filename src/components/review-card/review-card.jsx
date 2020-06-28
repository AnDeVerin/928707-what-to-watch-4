import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/format-date.js';

const ReviewCard = ({ review }) => {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={review.date}>
            {formatDate(review.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewCard;
