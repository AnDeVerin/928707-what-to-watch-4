import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from '../main/main.jsx';
// import MoviePage from '../movie-page/movie-page.jsx';
import Modal from '../modal/modal.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';

import { getSelectedMovie } from '../../reducer/app/selectors.js';
import { getAuthStatus } from '../../reducer/user/selectors.js';

import { AppRoute } from '../../constants.js';
import history from '../../history.js';
import PrivateRoute from '../private-route/private-route.jsx';

import { Operation as UserOperation } from '../../reducer/user/user.js';

const App = (props) => {
  const { login } = props;

  return (
    <>
      <Modal />

      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main />
          </Route>

          <Route exact path={AppRoute.LOGIN}>
            <SignIn onSubmit={login} />
          </Route>

          <PrivateRoute
            exact
            path={AppRoute.MYLIST}
            render={() => {
              return <MyList />;
            }}
          />
        </Switch>
      </Router>
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
