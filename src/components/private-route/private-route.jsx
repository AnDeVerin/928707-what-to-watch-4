import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppRoute } from '../../constants.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import { getAuthStatus } from '../../reducer/user/selectors.js';

const PrivateRoute = (props) => {
  const { render, path, exact, authorizationStatus } = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={({ match, location }) => {
        switch (authorizationStatus) {
          case AuthorizationStatus.AUTH:
            return render({ match, location });
          case AuthorizationStatus.NO_AUTH:
            return (
              <Redirect
                to={{ pathname: AppRoute.LOGIN, state: { from: location } }}
              />
            );
          default:
            return `Checking authorization...`;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

export { PrivateRoute };
export default connect(mapStateToProps)(PrivateRoute);
