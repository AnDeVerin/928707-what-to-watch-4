import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

export default class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: props.isPlaying,
      isMuted: props.isMuted,
    };
  }

  componentDidMount() {
    const { src, poster } = this.props;

    const video = this._videoRef.current;
    video.src = src;
    video.poster = poster;
    video.play();

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () =>
      this.setState({
        isPlaying: false,
      });
  }

  componentWillUnmount() {
    let video = this._videoRef.current;

    video.onplay = null;
    video.onpause = null;
    video.src = ``;
    video.poster = ``;
    video = null;
  }

  render() {
    const { isMuted } = this.state;

    return (
      <video
        className="player__video"
        playsInline
        muted={isMuted}
        ref={this._videoRef}
      />
    );
  }
}

Player.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
