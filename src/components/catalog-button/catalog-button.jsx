import React from 'react';
import PropTypes from 'prop-types';

const CatalogButton = ({ onClick }) => (
  <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={onClick}>
      Show more
    </button>
  </div>
);

CatalogButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CatalogButton;
