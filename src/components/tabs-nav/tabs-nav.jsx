import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '../../utils/capitalize.js';

const TabsNav = ({ tabs, activeTab, onClick }) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`movie-nav__item ${
              tab === activeTab ? `movie-nav__item--active` : ``
            }`}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                onClick(tab);
              }}
              href="#"
              className="movie-nav__link"
            >
              {capitalize(tab)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

TabsNav.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeTab: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabsNav;
