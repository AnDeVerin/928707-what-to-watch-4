import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../header/header.jsx';

const Review = (props) => {
  const {
    isDisabled,
    isFormValid,
    rating,
    comment,
    onSubmit,
    onTextInput,
    onRatingChange,
    movie,
  } = props;
  const { id, title, coverUrl, posterUrl } = movie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={coverUrl} alt={`${title} poster`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          renderTitle={() => (
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}`} className="breadcrumbs__link">
                    {title}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <div className="breadcrumbs__link">Add review</div>
                </li>
              </ul>
            </nav>
          )}
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={posterUrl}
            alt={`${title} poster`}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form onSubmit={onSubmit} className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input
                className="rating__input"
                id="star-1"
                type="radio"
                name="rating"
                value="1"
                disabled={isDisabled}
                checked={rating === `1`}
                onChange={onRatingChange}
              />
              <label className="rating__label" htmlFor="star-1">
                Rating 1
              </label>

              <input
                className="rating__input"
                id="star-2"
                type="radio"
                name="rating"
                value="2"
                disabled={isDisabled}
                checked={rating === `2`}
                onChange={onRatingChange}
              />
              <label className="rating__label" htmlFor="star-2">
                Rating 2
              </label>

              <input
                className="rating__input"
                id="star-3"
                type="radio"
                name="rating"
                value="3"
                disabled={isDisabled}
                checked={rating === `3`}
                onChange={onRatingChange}
              />
              <label className="rating__label" htmlFor="star-3">
                Rating 3
              </label>

              <input
                className="rating__input"
                id="star-4"
                type="radio"
                name="rating"
                value="4"
                disabled={isDisabled}
                checked={rating === `4`}
                onChange={onRatingChange}
              />
              <label className="rating__label" htmlFor="star-4">
                Rating 4
              </label>

              <input
                className="rating__input"
                id="star-5"
                type="radio"
                name="rating"
                value="5"
                disabled={isDisabled}
                checked={rating === `5`}
                onChange={onRatingChange}
              />
              <label className="rating__label" htmlFor="star-5">
                Rating 5
              </label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              disabled={isDisabled}
              value={comment}
              onChange={onTextInput}
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={isDisabled || !isFormValid}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

Review.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  rating: PropTypes.string,
  comment: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onTextInput: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
