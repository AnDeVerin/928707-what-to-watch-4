import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DELAY } from '../../constants.js';

const withDelay = (Component) => {
  class WithDelay extends PureComponent {
    constructor(props) {
      super(props);

      this._timer = null;

      this.state = {
        isPlaying: false,
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleClick(e) {
      const { onClick, movie } = this.props;

      e.preventDefault();
      onClick(movie);
    }

    handleMouseEnter() {
      this.resetTimer();

      this._timer = setTimeout(() => {
        this.setState({ isPlaying: true });
      }, DELAY);
    }

    handleMouseLeave() {
      this.resetTimer();
      this.setState({ isPlaying: false });
    }

    resetTimer() {
      return this._timer && clearTimeout(this._timer);
    }

    componentWillUnmount() {
      this.resetTimer();
    }

    render() {
      const { isPlaying } = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      );
    }
  }

  WithDelay.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbUrl: PropTypes.string.isRequired,
      trailer: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  return WithDelay;
};

export default withDelay;
