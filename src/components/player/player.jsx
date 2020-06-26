import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

export default class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;

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

  componentDidUpdate() {
    const { isPlaying } = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const { poster, isMuted, src } = this.props;

    return (
      <video
        className="player__video"
        playsInline
        poster={poster}
        muted={isMuted}
        ref={this._videoRef}
        src={src}
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
