import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovie: null,
    };

    this.handleMovieSelect = this.handleMovieSelect.bind(this);
  }

  handleMovieSelect(selectedMovie) {
    this.setState({ selectedMovie });
  }

  _renderApp() {
    const { promoMovie, movies, selectedGenre } = this.props;
    const { selectedMovie } = this.state;

    if (selectedMovie) {
      return (
        <MoviePage
          movie={selectedMovie}
          movies={movies}
          onMovieSelect={this.handleMovieSelect}
        />
      );
    }

    return (
      <Main
        promoMovie={promoMovie}
        movies={movies}
        onMovieSelect={this.handleMovieSelect}
        selectedGenre={selectedGenre}
      />
    );
  }

  render() {
    const { movies } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie">
            <MoviePage
              movie={this.props.movies[0]}
              movies={movies}
              onMovieSelect={this.handleMovieSelect}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  selectedGenre: state.genre,
});

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export { App };
export default connect(mapStateToProps)(App);
