import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: this.props.movies[0] || {},
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(activeMovie) {
    this.setState({ activeMovie });
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
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
