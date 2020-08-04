import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { AppRoute } from '../../constants.js';
import history from '../../history.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import { getAuthStatus } from '../../reducer/user/selectors.js';
import Footer from '../footer/footer.jsx';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { onSubmit, authorizationStatus, location } = this.props;

    e.preventDefault();

    onSubmit({
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    }).then(() => {
      if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return;
      }

      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    });
  }

  render() {
    const { authorizationStatus } = this.props;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="user-page">
          <header className="page-header user-page__head">
            <div className="logo">
              <Link to={AppRoute.MAIN} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <h1 className="page-title user-page__title">Sign in</h1>
          </header>

          <div className="sign-in user-page__content">
            <form
              action="#"
              className="sign-in__form"
              onSubmit={this.handleSubmit}
            >
              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="email"
                    placeholder="Email address"
                    name="user-email"
                    id="user-email"
                    ref={this.emailRef}
                  />
                  <label
                    className="sign-in__label visually-hidden"
                    htmlFor="user-email"
                  >
                    Email address
                  </label>
                </div>
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="password"
                    placeholder="Password"
                    name="user-password"
                    id="user-password"
                    ref={this.passwordRef}
                  />
                  <label
                    className="sign-in__label visually-hidden"
                    htmlFor="user-password"
                  >
                    Password
                  </label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <Footer />
        </div>
      );
    }
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

export { SignIn };
export default connect(mapStateToProps)(SignIn);
