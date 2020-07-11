import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { ActionCreator } from '../../reducer.js';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

const App = (props) => {
  const {
    promoMovie,
    movies,
    selectedGenre,
    selectedMovie,
    onMovieSelect,
  } = props;

  const _renderApp = () => {
    if (selectedMovie.title) {
      return (
        <MoviePage
          movie={selectedMovie}
          movies={movies}
          onMovieSelect={onMovieSelect}
        />
      );
    }

    return (
      <Main
        promoMovie={promoMovie}
        movies={movies}
        onMovieSelect={onMovieSelect}
        selectedGenre={selectedGenre}
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderApp()}
        </Route>
        <Route exact path="/dev-movie">
          <MoviePage
            movie={props.movies[0]}
            movies={movies}
            onMovieSelect={onMovieSelect}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  selectedGenre: state.genre,
  selectedMovie: state.selectedMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieSelect(movie) {
    dispatch(ActionCreator.setMovie(movie));
  },
});

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  selectedMovie: PropTypes.object.isRequired,
  onMovieSelect: PropTypes.func.isRequired,
};

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
