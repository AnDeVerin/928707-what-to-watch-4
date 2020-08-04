import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/player.jsx';

const MovieCard = (props) => {
  const {
    movie: { title, thumbUrl, trailer },
    onClick,
    onMouseEnter,
    onMouseLeave,
    isPlaying,
  } = props;

  return (
    <article
      key={`${title}-${thumbUrl}`}
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image" onClick={onClick}>
        <Player isPlaying={isPlaying} poster={thumbUrl} src={trailer} />
      </div>

      <h3 className="small-movie-card__title" onClick={onClick}>
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
