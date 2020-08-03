import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MOVIE_LIST_COUNT as LIMIT } from '../../constants.js';

const withLimit = (Component) => {
  class WithLimit extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        shownMoviesCount: LIMIT,
        isButtonVisible: props.movies.length > LIMIT,
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const { shownMoviesCount } = this.state;
      const { movies } = this.props;

      const newCount = shownMoviesCount + LIMIT;

      this.setState({
        shownMoviesCount: newCount,
        isButtonVisible: movies.length > newCount,
      });
    }

    componentDidUpdate(prevProps) {
      const { movies } = this.props;

      if (prevProps.movies !== movies) {
        this.setState({
          shownMoviesCount: LIMIT,
          isButtonVisible: movies.length > LIMIT,
        });
      }
    }

    render() {
      const { isButtonVisible, shownMoviesCount } = this.state;
      const { movies, button } = this.props;

      return (
        <>
          <Component
            {...this.props}
            movies={movies.slice(0, shownMoviesCount)}
          />
          {isButtonVisible && button({ onClick: this.handleClick })}
        </>
      );
    }
  }

  WithLimit.propTypes = {
    movies: PropTypes.array.isRequired,
    button: PropTypes.func.isRequired,
  };

  return WithLimit;
};

export default withLimit;
