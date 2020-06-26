import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Player from '../player/player.jsx';

export default class MovieCard extends PureComponent {
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
    const { onHover, movie } = this.props;
    onHover(movie);

    this.resetTimer();

    this._timer = setTimeout(() => {
      this.setState({ isPlaying: true });
    }, 1000);
  }

  handleMouseLeave() {
    this.resetTimer();
    this.setState({ isPlaying: false });
  }

  resetTimer() {
    return this._timer && clearTimeout(this._timer);
  }

  render() {
    const {
      movie: { title, thumbUrl, trailer },
    } = this.props;

    const { isPlaying } = this.state;

    return (
      <article
        key={`${title}-${thumbUrl}`}
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="small-movie-card__image" onClick={this.handleClick}>
          <Player
            isPlaying={isPlaying}
            poster={thumbUrl}
            src={trailer}
            isMuted={true}
          />
        </div>

        <h3 className="small-movie-card__title" onClick={this.handleClick}>
          <a className="small-movie-card__link" href="movie-page.html">
            {title}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
  }).isRequired,
  onHover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
