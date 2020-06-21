import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import { PROMO_MOVIE, MOVIES } from './mocks/films.js';

ReactDOM.render(
  <App promoMovie={PROMO_MOVIE} movies={MOVIES} />,
  document.querySelector(`#root`)
);
