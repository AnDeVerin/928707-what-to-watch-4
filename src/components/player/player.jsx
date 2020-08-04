import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentWillUnmount() {
    let video = this._videoRef.current;

    video.src = ``;
    video.poster = ``;
    video = null;
  }

  componentDidUpdate() {
    const { isPlaying } = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      // Muting the video
      video.muted = true;
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const { poster, src } = this.props;

    return (
      <video
        className="player__video"
        playsInline
        poster={poster}
        ref={this._videoRef}
        src={src}
      />
    );
  }
}

Player.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Player;
