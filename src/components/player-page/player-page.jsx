import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import formatPlayerTime from '../../utils/formatPalyerTime.js';

class PlayerPage extends PureComponent {
  render() {
    const {
      isLoading,
      isPlaying,
      progress,
      duration,
      title,
      onExit,
      onPlayButtonClick,
      onToggleFullScreen,
      children,
    } = this.props;

    return (
      <div className="player">
        {children}

        <button onClick={onExit} type="button" className="player__exit">
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={progress}
                max={duration}
              />
              <div
                className="player__toggler"
                style={{
                  left: `${(progress / duration) * 100}%`,
                }}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">
              {formatPlayerTime(duration)}
            </div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={onPlayButtonClick}
              disabled={isLoading}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={isPlaying ? `#pause` : `#play-s`} />
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{title}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={onToggleFullScreen}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PlayerPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  title: PropTypes.string,
  onExit: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onToggleFullScreen: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlayerPage;
