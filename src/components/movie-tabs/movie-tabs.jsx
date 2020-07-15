import React from 'react';
import PropTypes from 'prop-types';
import TabsNav from '../tabs-nav/tabs-nav.jsx';
import TabsContent from '../tabs-content/tabs-content.jsx';

const MovieTabs = (props) => {
  const { movie, items, activeItem, onClick } = props;

  return (
    <div className="movie-card__desc">
      <TabsNav tabs={items} activeTab={activeItem} onClick={onClick} />

      <TabsContent activeTab={activeItem} movie={movie} />
    </div>
  );
};

MovieTabs.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeseYear: PropTypes.number.isRequired,
    posterUrl: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    overview: PropTypes.shape({
      rating: PropTypes.shape({
        value: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      stars: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieTabs;
