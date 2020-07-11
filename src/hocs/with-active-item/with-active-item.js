import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.items[0],
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
      this.setState({ activeItem: item });
    }

    render() {
      const { activeItem } = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onClick={this.handleClick}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    items: PropTypes.array.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
