import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: this.props.movies[0] || {},
    };

    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardHover(activeMovie) {
    this.setState({ activeMovie });
  }

  handleCardClick(movie) {
    this.props.onSelect(movie);
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => (
          <MovieCard
            key={`${movie.thumbUrl}-${i}`}
            movie={movie}
            onHover={this.handleCardHover}
            onClick={this.handleCardClick}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MovieList;
