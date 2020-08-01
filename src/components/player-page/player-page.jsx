import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import history from '../../history.js';

export default class PlayerPage extends PureComponent {
  constructor(props) {
    super(props);

    this.id = Number.parseInt(props.match.params.filmId, 10) || 1;
  }

  onExit() {
    const { location } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };
    history.replace(from);
  }

  render() {
    const { getMovie } = this.props;
    const movie = getMovie(this.id);
    // console.log(movie);

    if (!movie) {
      return <div className="player" />;
    } else {
      return (
        <div className="player">
          <video
            src={movie.videoUrl}
            className="player__video"
            poster={movie.coverUrl}
          />

          <button
            onClick={this.onExit.bind(this)}
            type="button"
            className="player__exit"
          >
            Exit
          </button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress
                  className="player__progress"
                  value="30"
                  max="100"
                ></progress>
                <div className="player__toggler" style={{ left: `30%` }}>
                  Toggler
                </div>
              </div>
              <div className="player__time-value">1:30:29</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">{movie.title}</div>

              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

PlayerPage.propTypes = {
  match: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};
