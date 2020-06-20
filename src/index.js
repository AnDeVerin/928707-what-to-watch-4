import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import MOVIES from './mocks/films.js';

const SELECTED_MOVIE = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  realeseYear: 2014,
};

ReactDOM.render(
  <App selectedMovie={SELECTED_MOVIE} movies={MOVIES} />,
  document.querySelector(`#root`)
);
