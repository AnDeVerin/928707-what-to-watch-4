import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

import { getSelectedMovie } from '../../reducer/app/selectors.js';

const App = (props) => {
  const { selectedMovie } = props;

  const _renderApp = () => {
    if (selectedMovie.title) {
      return <MoviePage />;
    }

    return <Main />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderApp()}
        </Route>
        <Route exact path="/dev-movie">
          {/* <MoviePage
            movie={movies[0]}
            movies={movies}
            onMovieSelect={onMovieSelect}
          /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: getSelectedMovie(state),
});

App.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
};

export { App };
export default connect(mapStateToProps)(App);
