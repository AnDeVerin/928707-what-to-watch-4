import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, onHover }) => {
  const { title, thumbUrl } = movie;

  return (
    <article
      key={`${title}-${thumbUrl}`}
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onHover(movie)}
    >
      <div className="small-movie-card__image">
        <img src={thumbUrl} alt={title} width="280" height="175" />
      </div>

      <h3 className="small-movie-card__title">
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
  }).isRequired,
  onHover: PropTypes.func.isRequired,
};

export default MovieCard;
