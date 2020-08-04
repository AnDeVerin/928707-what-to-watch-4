import React from 'react';
import PropTypes from 'prop-types';

import OverviewTab from '../overview-tab/overview-tab.jsx';
import DetailsTab from '../details-tab/details-tab.jsx';
import ReviewsTab from '../reviews-tab/reviews-tab.jsx';
import { TabName } from '../../constants.js';

const TabsContent = ({ activeTab, movie }) => {
  const { overview, id } = movie;

  switch (activeTab) {
    case TabName.OVERVIEW:
      return <OverviewTab overview={overview} />;

    case TabName.DETAILS:
      return <DetailsTab movie={movie} />;

    case TabName.REVIEWS:
      return <ReviewsTab filmId={id} />;
  }

  return null;
};

TabsContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
      runTime: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TabsContent;
