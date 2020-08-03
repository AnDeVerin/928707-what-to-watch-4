import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import Modal from '../modal/modal.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import PlayerPage from '../player-page/player-page.jsx';
import withVideo from '../../hocs/with-video/with-video.js';
import Review from '../review/review.jsx';
import withForm from '../../hocs/with-form/with-form.js';

import { getAuthStatus } from '../../reducer/user/selectors.js';
import { getMovieById } from '../../reducer/data/selectors.js';

import { AppRoute } from '../../constants.js';
import history from '../../history.js';
import PrivateRoute from '../private-route/private-route.jsx';

import { Operation as UserOperation } from '../../reducer/user/user.js';
import { Operation as DataOperation } from '../../reducer/data/data.js';

const FullScreenPlayer = withVideo(PlayerPage);
const ReviewPage = withForm(Review);

const App = (props) => {
  const { login, getMovie, postReview } = props;

  return (
    <>
      <Modal />

      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main />
          </Route>

          <Route
            exact
            path={AppRoute.LOGIN}
            render={({ location }) => (
              <SignIn onSubmit={login} location={location} />
            )}
          />

          <PrivateRoute
            exact
            path={AppRoute.MYLIST}
            render={() => <MyList />}
          />

          <Route
            exact
            path={AppRoute.PLAYER}
            render={({ match, location }) => (
              <FullScreenPlayer
                match={match}
                location={location}
                getMovie={getMovie}
              />
            )}
          />

          <PrivateRoute
            exact
            path={AppRoute.REVIEW}
            render={({ match, location }) => (
              <ReviewPage
                match={match}
                location={location}
                getMovie={getMovie}
                onSubmit={postReview}
              />
            )}
          />

          <Route
            exact
            path={AppRoute.FILM}
            render={({ match, location }) => (
              <MoviePage match={match} location={location} />
            )}
          />

          {/* 404 */}
          <Route
            render={() => (
              <>
                <h1>
                  404.
                  <br />
                  <small>Page not found</small>
                </h1>
                <Link to="/">Go to main page</Link>
              </>
            )}
          />
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  getMovie: (id) => getMovieById(state, id),
});

const mapDispatchToProps = (dispatch) => ({
  login: (authData) => dispatch(UserOperation.login(authData)),
  postReview: (review) => dispatch(DataOperation.postReview(review)),
});

App.propTypes = {
  authStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
  postReview: PropTypes.func.isRequired,
};

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
