import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MOVIE_LIST_COUNT as LIMIT } from '../../constants.js';

import MovieList from '../movie-list/movie-list.jsx';

class LimitedMovieList extends PureComponent {
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

    this.setState({
      shownMoviesCount: shownMoviesCount + LIMIT,
      isButtonVisible: movies.length > shownMoviesCount + LIMIT,
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
    const { onSelect, movies } = this.props;

    return (
      <>
        <MovieList
          onSelect={onSelect}
          movies={movies.slice(0, shownMoviesCount)}
        />

        {isButtonVisible && (
          <div className="catalog__more">
            <button
              className="catalog__button"
              type="button"
              onClick={this.handleClick}
            >
              Show more
            </button>
          </div>
        )}
      </>
    );
  }
}

LimitedMovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default LimitedMovieList;
