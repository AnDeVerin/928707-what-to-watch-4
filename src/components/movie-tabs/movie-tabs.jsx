import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TabsNav from '../tabs-nav/tabs-nav.jsx';
import TabsContent from '../tabs-content/tabs-content.jsx';

class MovieTabs extends PureComponent {
  constructor(props) {
    super(props);

    this._tabs = [`overview`, `details`, `reviews`];

    this.state = {
      activeTab: this._tabs[0],
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(activeTab) {
    this.setState({ activeTab });
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card__desc">
        <TabsNav
          tabs={this._tabs}
          activeTab={this.state.activeTab}
          onClick={this.handleTabClick}
        />

        <TabsContent activeTab={this.state.activeTab} movie={movie} />
      </div>
    );
  }
}

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
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      director: PropTypes.string.isRequired,
      stars: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieTabs;
