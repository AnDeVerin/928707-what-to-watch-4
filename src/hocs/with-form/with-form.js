import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const isTextValid = (text) => text.length >= 50 && text.length <= 400;

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isDisabled: false,
        rating: '',
        comment: '',
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTextInput = this.handleTextInput.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    handleSubmit(e) {
      const { match, onSubmit } = this.props;
      const { rating, comment } = this.state;
      const filmId = Number.parseInt(match.params.id, 10);

      e.preventDefault();

      this.setState({ isDisabled: true });

      onSubmit({
        id: filmId,
        rating: Number.parseInt(rating, 10),
        comment,
      }).catch(() => {
        this.setState({ isDisabled: false });
      });
    }

    handleTextInput(e) {
      this.setState({ comment: e.target.value });
    }

    handleRatingChange(e) {
      this.setState({ rating: e.target.value });
    }

    render() {
      const { match, getMovie } = this.props;
      const filmId = Number.parseInt(match.params.id, 10);
      const movie = getMovie(filmId);

      const { isDisabled, rating, comment } = this.state;
      const isFormValid = Boolean(rating) && isTextValid(comment);

      return (
        <Component
          {...this.props}
          isDisabled={isDisabled}
          isFormValid={isFormValid}
          rating={rating}
          comment={comment}
          onSubmit={this.handleSubmit}
          onTextInput={this.handleTextInput}
          onRatingChange={this.handleRatingChange}
          movie={movie}
        />
      );
    }
  }

  WithForm.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    getMovie: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  return WithForm;
};

export default withForm;
