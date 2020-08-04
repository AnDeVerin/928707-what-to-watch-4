import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Operation as DataOperation } from '../../reducer/data/data.js';
import { getReviews } from '../../reducer/data/selectors.js';
import ReviewCard from '../review-card/review-card.jsx';

class ReviewsTab extends PureComponent {
  componentDidMount() {
    const { filmId, loadReviews } = this.props;

    loadReviews(filmId);
  }

  componentDidUpdate(prevProps) {
    const { filmId, loadReviews } = this.props;

    if (filmId === prevProps.filmId) {
      return;
    }

    loadReviews(filmId);
  }

  render() {
    const { reviews } = this.props;
    const { length } = reviews;

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {length === 1 &&
            reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}

          {length > 1 &&
            reviews
              .slice(0, Math.ceil(length / 2))
              .map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>

        {length > 1 && (
          <div className="movie-card__reviews-col">
            {reviews.slice(Math.ceil(length / 2)).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (filmId) => dispatch(DataOperation.loadReviews(filmId)),
});

ReviewsTab.propTypes = {
  filmId: PropTypes.number.isRequired,
  loadReviews: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
};

export { ReviewsTab };
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsTab);
