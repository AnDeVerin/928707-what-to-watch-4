import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

import history from '../../history.js';
import { AppRoute } from '../../constants.js';
import formatPlayerTime from '../../utils/formatPalyerTime.js';

export default class PlayerPage extends PureComponent {
  constructor(props) {
    super(props);

    this.movie = null;
    this._videoRef = createRef();
    this.id = Number.parseInt(props.match.params.filmId, 10) || 1;

    this.state = {
      progress: 0,
      duration: 1,
      isPlaying: false,
      isLoading: true,
    };
  }

  onExitHandler() {
    const {
      location: { state },
    } = this.props;

    if (state && state.from) {
      // came from some page -> return to that page
      history.goBack();
    } else {
      // came from direct link -> go to main
      history.replace(AppRoute.MAIN);
    }
  }

  onToggleFullScreenHandler() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  componentDidMount() {
    const { getMovie } = this.props;
    const movie = getMovie(this.id);

    const video = this._videoRef.current;

    video.oncanplay = () => {
      this.setState({
        isPlaying: true,
        isLoading: false,
      });
    };

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () =>
      this.setState({
        isPlaying: false,
      });

    video.ontimeupdate = () =>
      this.setState({
        progress: Math.floor(video.currentTime),
      });

    video.ondurationchange = () =>
      this.setState({
        duration: Math.floor(video.duration),
      });

    // case for autoplay on redirect
    if (movie && !this.movie) {
      this.movie = movie;
      video.src = movie.videoUrl;
      video.poster = movie.coverUrl;
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplay = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.ondurationchange = null;
    video.src = ``;
  }

  componentDidUpdate() {
    const { isPlaying } = this.state;
    const video = this._videoRef.current;

    const { getMovie } = this.props;
    const movie = getMovie(this.id);

    // case for autoplay on direct link
    if (movie && !this.movie) {
      this.movie = movie;
      video.src = movie.videoUrl;
      video.poster = movie.coverUrl;
    }

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    const { movie } = this;
    const { isPlaying, duration, progress } = this.state;

    return (
      <div className="player">
        <video playsInline ref={this._videoRef} className="player__video" />

        <button
          onClick={this.onExitHandler.bind(this)}
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
              onClick={() => {
                this.setState({ isPlaying: !isPlaying });
              }}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={isPlaying ? `#pause` : `#play-s`} />
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{movie && movie.title}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={this.onToggleFullScreenHandler}
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
  match: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};
