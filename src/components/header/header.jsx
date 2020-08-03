import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, HOST } from '../../constants.js';

import { getAuthStatus, getUser } from '../../reducer/user/selectors.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';

const isGuest = (status) => status === AuthorizationStatus.NO_AUTH;

const Header = ({ authStatus, user, renderTitle = () => {} }) => (
  <header className="page-header movie-card__head">
    <div className="logo">
      <Link to={AppRoute.MAIN} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>

    {renderTitle()}

    <div className="user-block">
      {isGuest(authStatus) ? (
        <Link to={AppRoute.LOGIN} className="user-block__link">
          Sign in
        </Link>
      ) : (
        <Link to={AppRoute.MYLIST}>
          <div className="user-block__avatar">
            <img
              src={`${HOST}${user.avatar_url}`}
              alt="User avatar"
              title={user.email}
              width="63"
              height="63"
            />
          </div>
        </Link>
      )}
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  user: getUser(state),
});

Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  renderTitle: PropTypes.func,
};

export { Header };
export default connect(mapStateToProps)(Header);
