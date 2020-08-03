import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';

import history from '../../history.js';
import { AppRoute } from '../../constants.js';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
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

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplay = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.ondurationchange = null;
      video.src = ``;
    }

    onPlayButtonClickHandler() {
      const { isPlaying } = this.state;
      this.setState({ isPlaying: !isPlaying });
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

    render() {
      const { isLoading, isPlaying, progress, duration } = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          progress={progress}
          duration={duration}
          title={this.movie && this.movie.title}
          onExit={this.onExitHandler.bind(this)}
          onPlayButtonClick={this.onPlayButtonClickHandler.bind(this)}
          onToggleFullScreen={this.onToggleFullScreenHandler.bind(this)}
        >
          <video playsInline ref={this._videoRef} className="player__video" />
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    match: PropTypes.object.isRequired,
    getMovie: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  };

  return WithVideo;
};

export default withVideo;
