import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import Modal from '../modal/modal.jsx';
import SignIn from '../sign-in/sign-in.jsx';

import { getSelectedMovie } from '../../reducer/app/selectors.js';
import { getAuthStatus } from '../../reducer/user/selectors.js';

import {
  Operation as UserOperation,
  AuthorizationStatus,
} from '../../reducer/user/user.js';

const isGuest = (status) => status === AuthorizationStatus.NO_AUTH;

const App = (props) => {
  const { selectedMovie, authStatus, login } = props;

  const _renderApp = () => {
    if (isGuest(authStatus)) {
      return <SignIn onSubmit={login} />;
    } else {
      if (selectedMovie.title) {
        return <MoviePage />;
      }

      return <Main />;
    }
  };

  return (
    <>
      <Modal />

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
          <Route exact path="/dev-signin">
            <SignIn onSubmit={() => {}} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: getSelectedMovie(state),
  authStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

App.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  authStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
